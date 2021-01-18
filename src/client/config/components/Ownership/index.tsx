/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable complexity */
import React, { useCallback, useState } from 'react';
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
import Table from 'client/config/components/OwnershipTable';
import SelectDropdown from 'client/config/components/Ownership/SelectDropdown';
import DatePicker from '@tamm/ui-lib-v2-date-picker';

import './Ownership.less';
import moment from 'moment';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';
import { checkSOP3, isEmiratesId } from 'client/config/utils/validations';
import CheckboxGroup from '@tamm/ui-lib-v2-checkbox-group';

/* istanbul ignore file */

const { Row, Col } = Grid;

export const getDateValue = (currentValue: any) => {
  if (currentValue) {
    if (typeof currentValue === 'string') {
      return moment(currentValue);
    }
    return currentValue;
  }
  return moment();
};

// eslint-disable-next-line complexity
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
        // @ts-ignore
        ...representative,
      };
    });
  // setRepresentativeTypes(rTypes);

  const representativeTypesDropdown = representativeTypes
    .filter((item: any) => {
      // eslint-disable-next-line no-unused-vars
      // const { min } = group.representatives[item.type];
      const { max } = group.representatives[item.type];
      const total = ownership[item.type].length;

      return total < max;
    })
    .map((item: any) => {
      return {
        id: item.type,
        label: i18n(item.label),
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

      if (
        (name === 'type' && values[name] === 'citizen') ||
        legalForm === 'PJSCSoleProp'
      ) {
        values.nationality = 'ARE';
      }

      if (name === 'type' && values[name] === 'visitor') {
        values.nationality = '';
      }

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

  const onSubmit = async (checkValidUser = false) => {
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

    if (
      formData.emiratesId &&
      checkValidUser &&
      ['partner', 'owner'].includes(formData.representativeType)
    ) {
      const isSOP3 = await checkSOP3(formData.emiratesId);
      if (!isSOP3) {
        validation.emiratesId = {
          status: 'error',
          message: 'not_sop3_user',
        };
      }
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
    // eslint-disable-next-line react/prop-types
    const filteredFiles = files.filter(
      (i: IVariables) => i.fieldName === field.name,
    );

    return (
      <>
        <Col xl={4} lg={4} md={6} sm={12} key={field.name}>
          <div className="ui-lib-margin-t_md">
            {field.type === 'input' && (
              <Input
                aria-label={field.label}
                label={
                  field.label &&
                  `${i18n(field.label)}${field.required ? '*' : ''}`
                }
                placeholder=""
                disabled={
                  typeof field.disabled === 'function'
                    ? field.disabled({
                        type: formData.type,
                        autoFillFromOwner: formData.autoFillFromOwner,
                      })
                    : field.disabled
                }
                onChange={onChange(field.name)}
                value={formData[field.name] || field.defaultValue}
                help={(() => {
                  if (field.name === 'emiratesId' && formData[field.name]) {
                    if (!isEmiratesId(formData[field.name]))
                      return i18n('invalid_emirates_id');
                    if (isEmiratesId(formData[field.name]))
                      return validateStatus[field.name]
                        ? i18n(validateStatus[field.name].message)
                        : '';
                  } else if (validateStatus[field.name])
                    return i18n(validateStatus[field.name].message);
                  return '';
                })()}
                // help={
                //   validateStatus[field.name]
                //     ? i18n(validateStatus[field.name].message)
                //     : ''
                // }
                validateStatus={(() => {
                  if (field.name === 'emiratesId' && formData[field.name]) {
                    if (!isEmiratesId(formData[field.name])) return 'error';
                    if (isEmiratesId(formData[field.name]))
                      return validateStatus[field.name]
                        ? validateStatus[field.name].status
                        : '';
                  } else if (validateStatus[field.name])
                    return validateStatus[field.name].status;
                  return '';
                })()}
                // validateStatus={
                //   validateStatus[field.name]
                //     ? validateStatus[field.name].status
                //     : ''
                // }
              />
            )}
            {field.type === 'date' && (
              // @ts-ignore
              <DatePicker
                aria-label={field.label}
                label={
                  field.label &&
                  `${i18n(field.label)}${field.required ? '*' : ''}`
                }
                placeholder=""
                disabled={
                  typeof field.disabled === 'function'
                    ? field.disabled({
                        type: formData.type,
                        autoFillFromOwner: formData.autoFillFromOwner,
                      })
                    : field.disabled
                }
                disabledDate={
                  typeof field.disabledDate === 'function'
                    ? field.disabledDate
                    : () => {
                        return false;
                      }
                }
                onChange={onChange(field.name)}
                value={getDateValue(formData[field.name] || field.defaultValue)}
                help={
                  validateStatus[field.name]
                    ? i18n(validateStatus[field.name].message)
                    : ''
                }
                validateStatus={
                  validateStatus[field.name]
                    ? validateStatus[field.name].status
                    : ''
                }
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
                label={
                  field.label &&
                  `${i18n(field.label)}${field.required ? '*' : ''}`
                }
                disabled={
                  typeof field.disabled === 'function'
                    ? field.disabled({
                        type: formData.type,
                        autoFillFromOwner: formData.autoFillFromOwner,
                      })
                    : field.disabled
                }
                onSelect={onChange(field.name)}
                value={formData[field.name] || field.defaultValue}
                help={
                  validateStatus[field.name]
                    ? i18n(validateStatus[field.name].message)
                    : ''
                }
                validateStatus={
                  validateStatus[field.name]
                    ? validateStatus[field.name].status
                    : ''
                }
              />
            )}
            {field.type === 'select' && (
              <SelectDropdown
                onChange={onChange}
                i18n={i18n}
                type={formData.type}
                autoFillFromOwner={formData.autoFillFromOwner}
                field={field}
                help={
                  validateStatus[field.name]
                    ? i18n(validateStatus[field.name].message)
                    : ''
                }
                validateStatus={
                  validateStatus[field.name]
                    ? validateStatus[field.name].status
                    : ''
                }
                value={formData[field.name] || field.defaultValue}
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
                disabled={
                  typeof field.disabled === 'function'
                    ? field.disabled({
                        type: formData.type,
                        autoFillFromOwner: formData.autoFillFromOwner,
                      })
                    : field.disabled
                }
                defaultValue={formData[field.name] || field.defaultValue}
                uiType="default"
              />
            )}
            {field.type === 'file' && (
              <FileUpload
                i18n={i18n}
                accept={['application/pdf']}
                multiple={field.multiple}
                label={`${i18n(field.label)}${field.required ? '*' : ''}`}
                files={
                  isArray(filteredFiles)
                    ? filteredFiles.map((i: IVariables) => ({
                        file: i,
                        status: 'success',
                        uploaded: i.size,
                      }))
                    : []
                }
                onChange={props.onFileUpload(field.name)}
                onRemove={props.onRemoveFile(field.name)}
                help={i18n(field.help || 'uploadHelp')}
                validateStatus={
                  validateStatus[field.name]
                    ? validateStatus[field.name].status
                    : ''
                }
              />
            )}
          </div>
        </Col>
        {field.name === 'type' && !additionalFields.length && (
          <Col md={6}>&nbsp;</Col>
        )}
        {field.name === 'title' && <Col md={3}>&nbsp;</Col>}
      </>
    );
  };

  // Checkbox fields configured in src/client/config/pages/EconomicLicence/functions/getRepresentatives.ts
  const renderAutoFillCheckboxGroup = (field: IVariables) => {
    if (field) {
      if (field.visible) {
        if (field.visible(formData)) {
          return (
            <Row gutter={20} className="flex-row">
              <Col xl={4} lg={4} md={6} sm={12} key={field.name}>
                <CheckboxGroup
                  i18n={i18n}
                  items={field.items.map((item: Record<string, any>) => {
                    return {
                      name: item.key,
                      label: i18n(item.label),
                      checked: formData[item.key],
                      disabled:
                        typeof item.disabled === 'function'
                          ? item.disabled()
                          : item.disabled,
                      onChange: (e: any) =>
                        item.onChange(e, formData, setFormData),
                    };
                  })}
                />
              </Col>
            </Row>
          );
        }
      }
    }
    return <></>;
  };

  const autoFillCheckboxField = currentRepresentative
    ? currentRepresentative.autoFillCheckboxField
    : {
        items: [],
      };

  const autoFillCheckboxGroup = renderAutoFillCheckboxGroup(
    autoFillCheckboxField,
  );

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

  const additionalInfo = (representatives: IVariables) => {
    const content = (type: string) => {
      return (
        <li>
          <span>
            <strong>{i18n(`global.${type}`)}</strong>
            {' - '}
            {i18n(`${type}.desc`)}
          </span>
        </li>
      );
    };
    return (
      <div className="Ownership__header-info">
        <ul>
          {Object.keys(representatives).map((repType: string) => {
            const visible = isFunction(representatives[repType].visible)
              ? representatives[repType].visible()
              : representatives[repType].visible;
            return visible ? content(repType) : '';
          })}
        </ul>
      </div>
    );
  };

  const selectedRepresentativeType =
    typeof formData.representativeType === 'string'
      ? formData.representativeType
      : null;
  let extraArrtoAppend: any = [];
  if (selectedRepresentativeType && formData.isEdit) {
    const selectedItem = representativeTypes.find(
      (item: any) => item.type === selectedRepresentativeType,
    );
    if (selectedItem.type) {
      extraArrtoAppend = [
        {
          id: selectedItem.type,
          label: i18n(selectedItem.label),
        },
      ];
    }
  }
  return (
    <div className="Ownership">
      <div className="Ownership__header">
        <div>
          <p className="Ownership__header-description">
            {i18n('ownership.description')}
          </p>
          {additionalInfo(group.representatives)}
        </div>
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
        {isModalOpen && (
          <Modal
            containerId="modal-container"
            header={
              <div>
                <Row gutter={20}>
                  <Col xs={11}>
                    <h3>{i18n('ownershipModal.title')}</h3>
                    <p className="Ownership__text">
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
              </div>
            }
            body={
              <>
                <Form
                  submitButton={{
                    label: i18n('button.save'),
                    onClick: () => onSubmit(isMoaFieldsRequired),
                  }}
                >
                  <Row gutter={20} flex>
                    <Col xl={4} lg={4} md={6} sm={12}>
                      <div className="ui-lib-margin-t_md">
                        <Select
                          i18n={i18n}
                          showSearch={false}
                          placeholder={i18n('select')}
                          items={[
                            ...representativeTypesDropdown,
                            ...extraArrtoAppend,
                          ]}
                          label={i18n('ownershipModal.repType')}
                          onChange={onChange('representativeType')}
                          value={formData.representativeType}
                          disabled={selectedRepresentativeType}
                        />
                      </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12}>
                      <div className="ui-lib-margin-t_md">
                        {currentRepresentative && (
                          <InputNumber
                            disabled={
                              currentRepresentative.sharePercentage.disabled
                            }
                            defaultValue={
                              // eslint-disable-next-line no-prototype-builtins
                              Object(formData).hasOwnProperty(
                                'sharePercentage',
                              ) && formData.representativeType === 'partner'
                                ? String(formData.sharePercentage)
                                : String(
                                    currentRepresentative.sharePercentage
                                      .defaultValue,
                                  )
                            }
                            label={i18n('ownershipModal.share')}
                            onChange={onChange('sharePercentage')}
                          />
                        )}
                      </div>
                    </Col>
                  </Row>
                  {currentRepresentative &&
                    currentRepresentative.company &&
                    currentRepresentative.individual !== false && (
                      <Row>
                        <Col
                          lg={4}
                          md={6}
                          sm={12}
                          style={{ marginTop: 10, marginBottom: 10 }}
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
                    )}

                  {selectedRepresentativeType ? (
                    <Row gutter={20} flex>
                      <Col
                        lg={12}
                        md={12}
                        sm={12}
                        style={{ marginTop: 10, marginBottom: 20 }}
                      >
                        <div>
                          {i18n(`form.${selectedRepresentativeType}.desc`)}
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <div />
                  )}
                  {autoFillCheckboxGroup ? (
                    <Row gutter={20} flex>
                      <Col lg={12} md={12} sm={12}>
                        {autoFillCheckboxGroup}
                      </Col>
                    </Row>
                  ) : (
                    <div />
                  )}
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
                  {/* {currentRepresentative && !currentRepresentative.company && (
                      <>
                        <div style={{ height: "4rem" }} />
                        {fields}
                      </>
                    )} */}
                </Form>
                <div className="btnTextClose" onClick={onToggleModal}>
                  {i18n('cancel')}
                </div>
              </>
            }
            shouldCloseOnEsc
            shouldCloseOnOverlayClick={false}
            onClose={onToggleModal}
          />
        )}
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
                  onToggleModal(type, { ...item, isEdit: true });
                }}
                items={ownership[representativeType.type]}
              />
            </Col>
          </Row>
        ))}
    </div>
  );
}

export default Ownership;
