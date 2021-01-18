import React, { useEffect, useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Form from '@tamm/ui-lib-v2-form';
import Sidebar from 'client/templates/Sidebar';
import Loading from 'client/templates/Loading';
import Input from '@tamm/ui-lib-v2-input';
import Select from '@tamm/ui-lib-v2-select';
import InputTelephone from '@tamm/ui-lib-v2-input-telephone';
import TextArea from '@tamm/ui-lib-v2-text-area';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import { isEmail, isMobile } from 'client/config/utils/validations';

import FileUploads from './components/FileUploads';
import './template.less';

import {
  caseTypeDropDownItems,
  locationDropDownItems,
} from '../../pages/InvestorForm/utils/constants';

/**
 * Form template
 * @param       {Object} props
 * @returns     {JSX}
 */
function InvestorProtectionForm(props: IVariables) {
  const { i18n, form } = props;
  const [startShowingError, setStartShowingError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showDefendentDetails, setShowDefendentDetails] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    props.actions.validation.reset();
    return () => props.actions.validation.reset();
  }, [props.form.caseType]);

  return (
    <>
      {showLoader && <Loading />}

      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <div className="">
          {props.subTitle && (
            <h3
              className="syb-title"
              style={{ marginBottom: '2rem', color: '#161038' }}
            >
              {`${i18n(props.subTitle)} - ${
                props.form.userType === '1'
                  ? i18n('consumer')
                  : i18n('investor')
              }`}
            </h3>
          )}
          {props.description && (
            <p style={{ color: '#3f3e45' }}>{i18n(props.description)}</p>
          )}
        </div>
        <div style={{ height: '20px' }} />

        <Form
          name="applicationStatusForm"
          submitButton={{
            label: i18n('button.submit'),
            withArrow: true,
            onClick: () => {
              if (!props.validate(props)) {
                setStartShowingError(true);
              } else {
                props.onSubmit(props, setShowLoader);
              }
            },
          }}
          backButton={{
            label: i18n('button.back'),
            withArrow: true,
            alignIcon: 'start',
            uiType: 'secondary',
            onClick: () => {
              props.onBack(props);
            },
          }}
        >
          <Form.Fieldset
            title={i18n('title.contactDetails')}
            twoColumns
            setStartShowingError
            setShowLoader
            startShowingError
          >
            <Input
              label={i18n('field.name')}
              placeholder=""
              aria-label="input"
              value={form.name}
              textDirection="ltr"
              onChange={(value: string) => {
                props.onChange('name', value, props);
              }}
              validateStatus={(() => {
                return startShowingError && !form.name ? 'error' : undefined;
              })()}
              help={(() => {
                if (startShowingError && !form.name)
                  return i18n('validationMessage.required');
                return null;
              })()}
            />
            <Input
              label={i18n('field.secondName')}
              placeholder=""
              aria-label="input"
              value={form.secondName}
              textDirection="ltr"
              onChange={(value: string) => {
                props.onChange('secondName', value, props);
              }}
            />
            <Input
              label={i18n('field.middleName')}
              placeholder=""
              aria-label="input"
              value={form.middleName}
              textDirection="ltr"
              onChange={(value: string) => {
                props.onChange('middleName', value, props);
              }}
            />
            <Input
              label={i18n('field.lastName')}
              placeholder=""
              aria-label="input"
              value={form.lastName}
              textDirection="ltr"
              onChange={(value: string) => {
                props.onChange('lastName', value, props);
              }}
              validateStatus={(() => {
                return startShowingError && !form.lastName
                  ? 'error'
                  : undefined;
              })()}
              help={(() => {
                if (startShowingError && !form.lastName)
                  return i18n('validationMessage.required');
                return null;
              })()}
            />
            <Input
              label={i18n('field.email')}
              placeholder=""
              aria-label="input"
              value={form.email}
              textDirection="ltr"
              onChange={(value: string) => {
                props.onChange('email', value, props);
              }}
              validateStatus={(() => {
                return startShowingError &&
                  (!form.email || !isEmail(form.email))
                  ? 'error'
                  : undefined;
              })()}
              help={(() => {
                if (startShowingError && !form.email) {
                  return i18n('validationMessage.required');
                }
                if (startShowingError && form.email && !isEmail(form.email)) {
                  return i18n('validationMessage.email');
                }

                return '';
              })()}
            />
            <InputTelephone
              i18n={i18n}
              code={971}
              countries={[
                {
                  code: 971,
                  name: 'UAE',
                },
              ]}
              label={i18n('field.mobilePhone')}
              aria-label="Telephone input"
              value={form.mobilePhone}
              onSelect={(value: string) => {
                props.onChange('mobilePhone', value, props);
              }}
              validateStatus={(() => {
                return startShowingError &&
                  (!form.mobilePhone || !isMobile(form.mobilePhone))
                  ? 'error'
                  : undefined;
              })()}
              help={(() => {
                if (startShowingError && !form.mobilePhone) {
                  return i18n('validationMessage.required');
                }
                if (
                  startShowingError &&
                  form.mobilePhone &&
                  !isMobile(form.mobilePhone)
                ) {
                  return i18n('validationMessage.mobile');
                }

                return '';
              })()}
            />
            <InputTelephone
              i18n={i18n}
              code={971}
              countries={[
                {
                  code: 971,
                  name: 'UAE',
                },
              ]}
              label={i18n('field.landline')}
              aria-label="Telephone input"
              value={form.phoneNumber}
              validateStatus={(() => {
                return startShowingError &&
                  form.phoneNumber &&
                  !isMobile(form.phoneNumber)
                  ? 'error'
                  : undefined;
              })()}
              help={(() => {
                if (
                  startShowingError &&
                  form.phoneNumber &&
                  !isMobile(form.phoneNumber)
                ) {
                  return i18n('validationMessage.mobile');
                }

                return '';
              })()}
              onSelect={(value: string) => {
                props.onChange('phoneNumber', value, props);
              }}
            />
          </Form.Fieldset>
          <div>
            <Form.Fieldset title={i18n('title.caseDetails')} twoColumns>
              <Select
                i18n={i18n}
                label={i18n('field.caseType')}
                items={caseTypeDropDownItems.map((item: IVariables) => {
                  return {
                    label: i18n(item.label),
                    id: item.id,
                  };
                })}
                validateStatus={(() => {
                  return startShowingError && !form.caseType
                    ? 'error'
                    : undefined;
                })()}
                help={(() => {
                  if (startShowingError && !form.caseType) {
                    return i18n('validationMessage.required');
                  }

                  return '';
                })()}
                value={form.caseType}
                onChange={(value: string) => {
                  props.onChange('caseType', value, props);

                  if (value.toString() === '1') {
                    setNote(
                      i18n(
                        'investorProtection.form.contactDetails.note.complaint',
                      ),
                    );
                    setShowDefendentDetails(true);
                  }
                  if (value.toString() === '2') {
                    setNote(
                      i18n(
                        'investorProtection.form.contactDetails.note.enquiry',
                      ),
                    );
                    setShowDefendentDetails(false);
                  }
                  if (value.toString() === '3') {
                    setNote(
                      i18n('investorProtection.form.contactDetails.note.notes'),
                    );
                    setShowDefendentDetails(false);
                  }
                  if (value.toString() === '4') {
                    setNote(
                      i18n(
                        'investorProtection.form.contactDetails.note.suggestion',
                      ),
                    );
                    setShowDefendentDetails(false);
                  }

                  return false;
                }}
              />
            </Form.Fieldset>

            {note !== '' ? (
              <p>
                <p
                  style={{
                    color: '#3f3e45',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    height: '0px',
                  }}
                >
                  {i18n('investorProtection.form.caseDropdown.notes')}
                </p>
                <p style={{ color: '#3f3e45', height: '60px' }}>
                  <br />
                  {note}
                </p>
              </p>
            ) : (
              ''
            )}

            <Form.Fieldset twoColumns>
              <Input
                label={i18n('field.inRelationToEstablishment')}
                placeholder=""
                aria-label="input"
                value={form.inRelationToEstablishment}
                textDirection="ltr"
                onChange={(value: string) => {
                  props.onChange('inRelationToEstablishment', value, props);
                }}
                validateStatus={(() => {
                  return startShowingError && !form.inRelationToEstablishment
                    ? 'error'
                    : undefined;
                })()}
                help={(() => {
                  if (startShowingError && !form.inRelationToEstablishment) {
                    return i18n('validationMessage.required');
                  }

                  return null;
                })()}
              />
              <Select
                i18n={i18n}
                label={i18n('field.location')}
                items={locationDropDownItems.map((item: IVariables) => {
                  return {
                    label: i18n(item.label),
                    id: item.id,
                  };
                })}
                validateStatus={(() => {
                  return startShowingError && !form.location
                    ? 'error'
                    : undefined;
                })()}
                help={(() => {
                  if (startShowingError && !form.location)
                    return i18n('validationMessage.required');
                  return null;
                })()}
                value={form.location}
                onChange={(value: string) => {
                  props.onChange('location', value, props);
                }}
              />
            </Form.Fieldset>
          </div>
          <div style={{ margin: '40px' }} />
          {props.form.userType === '2' ? (
            <Form.Fieldset title={i18n('title.establishmentDetails')}>
              <p style={{ color: '#3f3e45', height: '45px' }}>
                {i18n('title.establishmentDetails.description')}
              </p>

              <Form.Fieldset twoColumns>
                <Input
                  label={i18n('field.establishment.name')}
                  placeholder=""
                  aria-label="input"
                  value={form['establishment.name']}
                  textDirection="ltr"
                  onChange={(value: string) => {
                    props.onChange('establishment.name', value, props);
                  }}
                  validateStatus={(() => {
                    return startShowingError && !form['establishment.name']
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    if (startShowingError && !form['establishment.name'])
                      return i18n('validationMessage.required');
                    return null;
                  })()}
                />
                <Input
                  label={i18n('field.establishment.licenceNumber')}
                  placeholder=""
                  aria-label="input"
                  value={form['establishment.licenceNumber']}
                  textDirection="ltr"
                  onChange={(value: string) => {
                    props.onChange('establishment.licenceNumber', value, props);
                  }}
                />
                <InputTelephone
                  i18n={i18n}
                  code={971}
                  countries={[
                    {
                      code: 971,
                      name: 'UAE',
                    },
                  ]}
                  label={i18n('field.establishment.phoneNumber')}
                  aria-label="Telephone input"
                  value={form['establishment.phoneNumber']}
                  onSelect={(value: string) => {
                    props.onChange('establishment.phoneNumber', value, props);
                  }}
                  validateStatus={(() => {
                    return startShowingError &&
                      (!form['establishment.phoneNumber'] ||
                        !isMobile(
                          form['establishment.phoneNumber'].replace(/ /g, ''),
                        ))
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    if (startShowingError && !form['establishment.phoneNumber'])
                      return i18n('validationMessage.required');
                    if (
                      startShowingError &&
                      !isMobile(
                        form['establishment.phoneNumber'].replace(/ /g, ''),
                      )
                    )
                      return i18n('validationMessage.mobile');
                    return null;
                  })()}
                />
                <Select
                  i18n={i18n}
                  label={i18n('field.establishment.location')}
                  items={locationDropDownItems.map((item: IVariables) => {
                    return {
                      label: i18n(item.label),
                      id: item.id,
                    };
                  })}
                  value={form['establishment.location']}
                  onChange={(value: string) => {
                    props.onChange('establishment.location', value, props);
                  }}
                />
              </Form.Fieldset>
            </Form.Fieldset>
          ) : (
            ''
          )}

          {!showDefendentDetails ? (
            <Form.Fieldset title={i18n('title.caseDescription')}>
              <TextArea
                aria-label="Text area"
                label={i18n('field.defendant.caseDescription')}
                onChange={(event: IVariables) => {
                  props.onChange(
                    'defendant.caseDescription',
                    event.target.value,
                    props,
                  );
                }}
                placeholder=""
                // textDirection="ltr"
                validateStatus={(() => {
                  return startShowingError && !form['defendant.caseDescription']
                    ? 'error'
                    : undefined;
                })()}
                help={(() => {
                  if (startShowingError && !form['defendant.caseDescription'])
                    return i18n('validationMessage.required');
                  return null;
                })()}
                value={form['defendant.caseDescription']}
              />
            </Form.Fieldset>
          ) : (
            ''
          )}
          {showDefendentDetails ? (
            <div>
              <Form.Fieldset
                title={i18n('title.defendantDetails')}
                gapSize="small"
              >
                <p style={{ color: '#3f3e45', height: '45px' }}>
                  {i18n('title.defendantDetails.description')}
                </p>
              </Form.Fieldset>
              <Form.Fieldset twoColumns>
                <Input
                  label={i18n('field.defendant.name')}
                  placeholder=""
                  aria-label="input"
                  value={form['defendant.name']}
                  textDirection="ltr"
                  onChange={(value: IVariables) => {
                    props.onChange('defendant.name', value, props);
                  }}
                  validateStatus={(() => {
                    return startShowingError && !form['defendant.name']
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    if (startShowingError && !form['defendant.name'])
                      return i18n('validationMessage.required');
                    return null;
                  })()}
                />
                <InputTelephone
                  i18n={i18n}
                  code={971}
                  countries={[
                    {
                      code: 971,
                      name: 'UAE',
                    },
                  ]}
                  label={i18n('field.defendant.phone')}
                  aria-label="Telephone input"
                  value={form['defendant.phoneNumber']}
                  validateStatus={(() => {
                    return startShowingError &&
                      form['defendant.phoneNumber'] &&
                      !isMobile(form['defendant.phoneNumber'])
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    if (
                      startShowingError &&
                      form['defendant.phoneNumber'] &&
                      !isMobile(form['defendant.phoneNumber'])
                    ) {
                      return i18n('validationMessage.mobile');
                    }

                    return '';
                  })()}
                  onSelect={(value: IVariables) => {
                    props.onChange('defendant.phoneNumber', value, props);
                  }}
                />
                <Select
                  i18n={i18n}
                  label={i18n('field.defendant.location')}
                  items={locationDropDownItems.map((item: IVariables) => {
                    return {
                      label: i18n(item.label),
                      id: item.id,
                    };
                  })}
                  validateStatus={(() => {
                    return startShowingError && !form['defendant.location']
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    if (startShowingError && !form.location)
                      return i18n('validationMessage.required');
                    return null;
                  })()}
                  value={form['defendant.location']}
                  onChange={(value: IVariables) => {
                    props.onChange('defendant.location', value, props);
                  }}
                />
              </Form.Fieldset>
              <Form.Fieldset>
                <TextArea
                  aria-label="Text area"
                  label={i18n('field.defendant.caseDescription')}
                  onChange={(event: IVariables) => {
                    props.onChange(
                      'defendant.caseDescription',
                      event.target.value,
                      props,
                    );
                  }}
                  placeholder=""
                  // textDirection="ltr"
                  validateStatus={(() => {
                    return startShowingError &&
                      !form['defendant.caseDescription']
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    if (startShowingError && !form['defendant.caseDescription'])
                      return i18n('validationMessage.required');
                    return null;
                  })()}
                  value={form['defendant.caseDescription']}
                />
              </Form.Fieldset>
            </div>
          ) : (
            ''
          )}
          <div style={{ margin: '40px' }} />
          {showDefendentDetails ? (
            <FileUploads
              inputGroups={props.getFileGroups(props)}
              handleChange={(value: any) =>
                props.actions.documents.update({
                  ...value.documents,
                })
              }
              values={{
                documents: props.documents,
              }}
              name="documents"
              i18n={i18n}
              startShowingError={startShowingError}
            />
          ) : (
            <FileUploads
              inputGroups={props.getOthersFileGroups(props)}
              handleChange={(value: any) =>
                props.actions.documents.update({
                  ...value.documents,
                })
              }
              values={{
                documents: props.documents,
              }}
              name="documents"
              i18n={i18n}
              startShowingErrors={false}
              colSpan={12}
              startShowingError={startShowingError}
            />
          )}
          <Form.Fieldset title={i18n('title.tnc')}></Form.Fieldset>
          <div className="checkbox-div">
            <Checkbox
              checked={!!props.form.tnc}
              id="terms"
              label={i18n('investorProtection.form.tnc.description')}
              name="checkbox"
              onChange={e => {
                props.onChange('tnc', e.target.checked, props);
              }}
              validateStatus={(() => {
                return startShowingError && !props.form.tnc
                  ? 'error'
                  : undefined;
              })()}
            />
          </div>
          <div style={{ margin: '40px' }} />
        </Form>
        <div style={{ height: '10rem' }} />
      </Container>
    </>
  );
}

InvestorProtectionForm.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(InvestorProtectionForm);
