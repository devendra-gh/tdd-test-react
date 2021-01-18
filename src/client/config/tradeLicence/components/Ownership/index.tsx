/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/no-unused-prop-types */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { IVariables } from '@tamm/app-composer';
import { has, isArray, isFunction } from 'lodash';
import Grid from '@tamm/ui-lib-v2-grid';
import Button from '@tamm/ui-lib-v2-button';
import Modal from '@tamm/ui-lib-v2-modal';
import Form from '@tamm/ui-lib-v2-form';
import Select from '@tamm/ui-lib-v2-select';
import Input from '@tamm/ui-lib-v2-input';
import InputNumber from '@tamm/ui-lib-v2-input-number';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import InputTelephone from '@tamm/ui-lib-v2-input-telephone';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import Table from 'client/config/tradeLicence/components/OwnershipTable';
import SelectDropdown from 'client/config/tradeLicence/components/Ownership/SelectDropdown';
import DatePicker from '@tamm/ui-lib-v2-date-picker';

import './Ownership.less';
import moment from 'moment';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';

/* istanbul ignore file */

const { Row, Col } = Grid;

const getDateValue = (currentValue: any) => {
  if (currentValue) {
    if (typeof currentValue === 'string') {
      return moment(currentValue);
    }
    return currentValue;
  }
  return moment();
};

function Ownership(props: IVariables) {
  const {
    ownership,
    group,
    i18n,
    locale,
    legalForm,
    licenceType,
    validate,
    files,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [validateStatus, setValidateStatus] = useState<any>({});

  const currentRepresentative =
    group.representatives[formData.representativeType];

  const visibleFields = currentRepresentative
    ? currentRepresentative.fields.filter((field: IVariables) => {
        if (has(field, 'visible')) {
          return field.visible({
            type: formData.type,
            contactType: formData.contactType, // TODO : Check
          });
        }
        return true;
      })
    : [];

  const additionalFields =
    currentRepresentative && currentRepresentative.additionals
      ? currentRepresentative.additionals.filter((field: IVariables) => {
          if (has(field, 'visible')) {
            return field.visible({
              type: formData.type,
              contactType: formData.contactType, // TODO : Check
            });
          }
          return true;
        })
      : [];

  // const [representativeTypes, setRepresentativeTypes] = useState([]);
  // const [
  //   representativeTypesDropdown,
  //   setRepresentativeTypesDropdown,
  // ] = useState([]);

  // useEffect(() => {
  const representativeTypes: any = Object.entries(group.representatives)
    .filter(([, representative]: [string, any]) => {
      return isFunction(representative.visible)
        ? representative.visible()
        : representative.visible;
    })
    .map(([key, representative]) => {
      return {
        type: key,
        representative, // ...representative,
      };
    });

  // setRepresentativeTypes(rTypes);

  const representativeTypesDropdown = representativeTypes
    .filter((item: any) => {
      // const { min } = group.representatives[item.type];
      const { max } = group.representatives[item.type];
      const total = ownership[item.type].length;

      return total < max;
    })
    .map((item: any) => {
      return {
        id: item.type,
        label: i18n(item.representative.label),
      };
    });

  // setRepresentativeTypesDropdown(rDropdown);
  // }, [legalForm]);

  const onToggleModal = useCallback(
    (representativeType, data = {}) => {
      if (representativeType) {
        setFormData({ ...formData, representativeType, ...data });
      }

      if (isModalOpen) {
        setFormData({});
        setValidateStatus({});
      }

      setIsModalOpen(!isModalOpen);
    },
    [isModalOpen],
  );

  const onChange = (name: string) => {
    return (event: any) => {
      const values: IVariables = {
        [name]: event && event.target ? event.target.name : event,
      };

      const checkRepresentativeType = () => {
        if (name === 'representativeType') {
          group.representatives[event].fields
            .filter((field: IVariables) => has(field, 'defaultValue'))
            .forEach((field: IVariables) => {
              values[field.name] = field.defaultValue;
            });

          if (
            values[name] === 'manager' ||
            values[name] === 'localAgent' ||
            values[name] === 'representative'
          ) {
            values.sharePercentage = 0;
          }
        }
      };
      checkRepresentativeType();

      const checkNationalityType = () => {
        if (
          (name === 'type' && values[name] === 'citizen') ||
          legalForm === 'PJSCSoleProp'
        ) {
          values.nationality = 'ARE';
        }

        if (name === 'type' && values[name] === 'visitor') {
          values.nationality = '';
        }
      };
      checkNationalityType();

      setFormData({
        ...formData,
        ...values,
      });
      setValidateStatus({
        ...validateStatus,
        [name]: '',
      });
    };
  };

  const onSubmit = () => {
    // console.log('ONSUBMIT', legalForm);
    const defaultValues = visibleFields.reduce(
      (acc: IVariables, cur: IVariables) => {
        return {
          ...acc,
          [cur.name]: cur.defaultValue || '',
        };
      },
      {},
    );
    const submitData = {
      ...defaultValues,
      ...formData,
    };

    if (
      legalForm === 'PJSCSoleProp' &&
      formData.representativeType === 'owner'
    ) {
      submitData.contactType = 'company';
    }

    if (!has(formData, 'sharePercentage')) {
      submitData.sharePercentage =
        currentRepresentative.sharePercentage.defaultValue;
    }

    if (!has(formData, 'nationality')) {
      submitData.nationality = 'ARE';
    }

    const validation: IVariables = {};
    visibleFields
      .filter((field: IVariables) => field.required)
      .forEach((field: IVariables) => {
        if (field.type === 'file') {
          const filteredFiles = files.filter(
            (i: IVariables) => i.fieldName === field.name,
          );
          validation[field.name] = {
            status: filteredFiles.length === 0 ? 'error' : 'success',
            message: filteredFiles.length === 0 ? 'required_field' : '',
          };
          return;
        }

        if (field.validate) {
          validation[field.name] = field.validate(submitData[field.name]);
        } else if (!submitData[field.name]) {
          validation[field.name] = {
            status: 'error',
            message: 'required_field',
          };
        } else {
          validation[field.name] = {
            status: 'success',
          };
        }
      });

    if (additionalFields.length) {
      additionalFields
        .filter((field: IVariables) => field.required)
        .forEach((field: IVariables) => {
          if (field.type === 'file') {
            const filteredFiles = files.filter(
              (i: IVariables) => i.fieldName === field.name,
            );
            validation[field.name] = {
              status: filteredFiles.length === 0 ? 'error' : 'success',
              message: filteredFiles.length === 0 ? 'required_field' : '',
            };
            return;
          }

          if (field.validate) {
            validation[field.name] = field.validate(submitData[field.name]);
          } else if (!submitData[field.name]) {
            validation[field.name] = {
              status: 'error',
              message: 'required_field',
            };
          } else {
            validation[field.name] = {
              status: 'success',
            };
          }
        });
    }

    setValidateStatus(validation);

    const isValid =
      Object.entries(validation).filter(([, item]) => item.status === 'error')
        .length === 0;

    if (isValid) {
      props.onSubmit(submitData);
      setFormData({});
      setIsModalOpen(false);
      setValidateStatus({});
    }
  };

  const renderField = (field: IVariables) => {
    const filteredFiles = files.filter(
      (i: IVariables) => i.fieldName === field.name,
    );

    return (
      <>
        {field.type === 'file' ? (
          <div style={{ padding: '1rem' }}>
            <FileUpload
              accept={['application/pdf']}
              multiple={field.multiple}
              label={(() =>
                `${i18n(field.label)}${field.required ? '*' : ''}`)()}
              i18n={i18n}
              files={(() => {
                return isArray(filteredFiles)
                  ? filteredFiles.map((i: IVariables) => ({
                      file: i,
                      status: 'success',
                      uploaded: i.size,
                    }))
                  : [];
              })()}
              onChange={props.onFileUpload(field.name)}
              onRemove={props.onRemoveFile(field.name)}
              help={(() => i18n(field.help || 'uploadHelp'))()}
              validateStatus={(() => {
                return validateStatus[field.name]
                  ? validateStatus[field.name].status
                  : '';
              })()}
            />
          </div>
        ) : (
          <Col xl={4} lg={4} md={6} sm={12} key={field.name}>
            <div className="ui-lib-margin-t_md">
              {field.type === 'input' && (
                <Input
                  aria-label={field.label}
                  label={(() =>
                    field.label &&
                    `${i18n(field.label)}${field.required ? '*' : ''}`)()}
                  placeholder=""
                  disabled={(() =>
                    typeof field.disabled === 'function'
                      ? field.disabled({ type: formData.type })
                      : field.disabled)()}
                  onChange={onChange(field.name)}
                  value={(() => formData[field.name] || field.defaultValue)()}
                  help={(() =>
                    validateStatus[field.name]
                      ? i18n(validateStatus[field.name].message)
                      : '')()}
                  validateStatus={(() =>
                    validateStatus[field.name]
                      ? validateStatus[field.name].status
                      : '')()}
                />
              )}
              {field.type === 'date' && (
                // @ts-ignore
                <DatePicker
                  aria-label={field.label}
                  label={(() =>
                    field.label &&
                    `${i18n(field.label)}${field.required ? '*' : ''}`)()}
                  placeholder=""
                  disabled={(() => {
                    return typeof field.disabled === 'function'
                      ? field.disabled({ type: formData.type })
                      : field.disabled;
                  })()}
                  disabledDate={(() => {
                    return typeof field.disabledDate === 'function'
                      ? field.disabledDate
                      : () => {
                          return false;
                        };
                  })()}
                  onChange={onChange(field.name)}
                  value={(() =>
                    getDateValue(formData[field.name] || field.defaultValue))()}
                  help={(() => {
                    return validateStatus[field.name]
                      ? i18n(validateStatus[field.name].message)
                      : '';
                  })()}
                  validateStatus={(() => {
                    return validateStatus[field.name]
                      ? validateStatus[field.name].status
                      : '';
                  })()}
                />
              )}
              {field.type === 'input-phone' && (
                <InputTelephone
                  code={971}
                  countries={[
                    {
                      code: 971,
                      name: 'UAE',
                    },
                  ]}
                  i18n={i18n}
                  aria-label={field.label}
                  label={(() =>
                    field.label &&
                    `${i18n(field.label)}${field.required ? '*' : ''}`)()}
                  disabled={(() => {
                    return typeof field.disabled === 'function'
                      ? field.disabled({ type: formData.type })
                      : field.disabled;
                  })()}
                  onSelect={onChange(field.name)}
                  value={(() => formData[field.name] || field.defaultValue)()}
                  help={(() => {
                    return validateStatus[field.name]
                      ? i18n(validateStatus[field.name].message)
                      : '';
                  })()}
                  validateStatus={(() => {
                    return validateStatus[field.name]
                      ? validateStatus[field.name].status
                      : '';
                  })()}
                />
              )}

              {field.type === 'select' && (
                <SelectDropdown
                  onChange={onChange}
                  i18n={i18n}
                  type={formData.type}
                  field={field}
                  help={(() => {
                    return validateStatus[field.name]
                      ? i18n(validateStatus[field.name].message)
                      : '';
                  })()}
                  validateStatus={(() => {
                    return validateStatus[field.name]
                      ? validateStatus[field.name].status
                      : '';
                  })()}
                  value={(() => formData[field.name] || field.defaultValue)()}
                />
              )}
              {field.type === 'radio' && (
                <RadioGroup
                  i18n={i18n}
                  align="horizontal"
                  items={field.items.map((i: IVariables) => ({
                    ...i,
                    checked:
                      formData[field.name] === i.name ||
                      field.defaultValue === i.name,
                  }))}
                  onChange={onChange(field.name)}
                  disabled={(() => {
                    return typeof field.disabled === 'function'
                      ? field.disabled({ type: formData.type })
                      : field.disabled;
                  })()}
                  defaultValue={(() =>
                    formData[field.name] || field.defaultValue)()}
                  uiType="default"
                />
              )}
            </div>
          </Col>
        )}
        {field.name === 'type' && !additionalFields.length && (
          <Col md={6}>&nbsp;</Col>
        )}
        {field.name === 'title' && <Col md={3}>&nbsp;</Col>}
      </>
    );
  };

  const fields = (
    <Row gutter={20} className="flex-row">
      {visibleFields.map(renderField)}
    </Row>
  );

  const extraFields = additionalFields.length ? (
    <Row gutter={20} className="flex-row">
      {additionalFields.map(renderField)}
    </Row>
  ) : (
    ''
  );

  const isMoaFieldsRequired = isMoaRequired(licenceType, legalForm);

  const renderModelFormFields = () => {
    return (
      <Row gutter={20} flex>
        <Col xl={4} lg={4} md={6} sm={12}>
          <div className="ui-lib-margin-t_md">
            <Select
              i18n={i18n}
              showSearch={false}
              placeholder={i18n('select')}
              items={representativeTypesDropdown}
              label={i18n('ownershipModal.repType')}
              onChange={onChange('representativeType')}
              value={formData.representativeType}
            />
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={12}>
          <div className="ui-lib-margin-t_md">
            {currentRepresentative && (
              <InputNumber
                disabled={currentRepresentative.sharePercentage.disabled}
                defaultValue={
                  Object(formData).hasOwnProperty('sharePercentage') &&
                  formData.representativeType === 'partner'
                    ? String(formData.sharePercentage)
                    : String(currentRepresentative.sharePercentage.defaultValue)
                }
                label={i18n('ownershipModal.share')}
                onChange={onChange('sharePercentage')}
              />
            )}
          </div>
        </Col>
      </Row>
    );
  };

  const renderModelRadioGroup = () => {
    return (
      currentRepresentative &&
      currentRepresentative.company &&
      currentRepresentative.individual !== false && (
        <Row>
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <RadioGroup
              i18n={i18n}
              align="horizontal"
              items={[
                {
                  name: 'individual',
                  label: i18n('ownershipModal.individual'),
                  checked:
                    formData.contactType === 'individual' ||
                    !formData.contactType,
                },
                {
                  name: 'company',
                  label: i18n('ownershipModal.company'),
                  checked: formData.contactType === 'company',
                  disabled: isMoaFieldsRequired,
                },
              ]}
              onChange={onChange('contactType')}
              uiType="default"
              defaultValue={currentRepresentative.contactType}
            />
          </Col>
        </Row>
      )
    );
  };

  const renderModalOpen = () => {
    return (
      <Modal
        containerId="modal-container"
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onClose={onToggleModal}
        isOpen
        buttonCombination={[]}
        title={i18n('ownershipModal.title')}
      >
        <>
          <Row gutter={20}>
            <Col xs={11}>
              <p style={{ marginBottom: 0 }}>
                {i18n('ownershipModal.description')}
              </p>
            </Col>
            <Col xs={1}>
              <div
                tabIndex={-1}
                role="button"
                onKeyUp={onToggleModal}
                onClick={onToggleModal}
              >
                <i className="all-icon-close" />
              </div>
            </Col>
          </Row>
          <Form
            submitButton={{
              label: i18n('button.save'),
              onClick: onSubmit,
            }}
            cancelLink={{
              label: i18n('cancel'),
              onClick: onToggleModal,
              href: '',
            }}
          >
            {renderModelFormFields()}

            {renderModelRadioGroup()}

            {currentRepresentative && (
              <>
                {(!currentRepresentative.company ||
                  currentRepresentative.individual === false) && (
                  <div style={{ height: 40 }} />
                )}
                <Form.Fieldset
                  key="details"
                  title={
                    (!formData.contactType ||
                      formData.contactType === 'individual') &&
                    currentRepresentative.individual !== false
                      ? i18n('ownership.personTitle')
                      : i18n('ownership.companyTitle')
                  }
                >
                  {fields}
                </Form.Fieldset>
              </>
            )}

            {extraFields && (
              <Form.Fieldset
                key="details-extra"
                title={i18n('ownership.additionalDetails')}
              >
                {extraFields}
              </Form.Fieldset>
            )}
          </Form>
        </>
      </Modal>
    );
  };

  return (
    <div className="Ownership">
      <div className="Ownership__header">
        <p className="Ownership__header-description">
          {i18n('ownership.description')}
        </p>
        <p
          className="ui-lib-margin-b_xl LicenceForm__form-description"
          style={{ paddingTop: 8 }}
        >
          {i18n(group.description)}
        </p>
        <Button
          aria-label="button-primary"
          label={i18n('button.addProfile')}
          onClick={onToggleModal}
          size="medium"
          type="button"
          uiType="secondary"
        />
        {isModalOpen && renderModalOpen()}
      </div>
      <div style={{ height: 40 }} />
      {representativeTypes &&
        representativeTypes.map((representativeType: any) => (
          <Row gutter={20}>
            <Col xs={12}>
              <Table
                i18n={i18n}
                validate={validate}
                ownership={ownership}
                legalForm={legalForm}
                licenceType={props.licenceType}
                branchDetails={props.branchDetails}
                onToggleModal={onToggleModal}
                optional={representativeType.optional}
                type={representativeType.type}
                locale={locale}
                countries={props.countries}
                disableActions={representativeType.disableActions}
                onDelete={props.onDelete}
                onEdit={(type: string, item: any) => {
                  onToggleModal(type, item);
                }}
                items={ownership[representativeType.type]}
              />
            </Col>
          </Row>
        ))}
    </div>
  );
}

Ownership.propTypes = {
  onFileUpload: PropTypes.func,
  onRemoveFile: PropTypes.func,
};

Ownership.defaultProps = {
  onFileUpload: () => {},
  onRemoveFile: () => {},
};

export default Ownership;
