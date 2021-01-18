import React, { useState } from 'react';
import Form from '@tamm/ui-lib-v2-form';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Sidebar from 'client/templates/Sidebar';
import Input from '@tamm/ui-lib-v2-input';
import InputTelephone from '@tamm/ui-lib-v2-input-telephone';
import TextArea from '@tamm/ui-lib-v2-text-area';
import { isEmail, isMobile } from 'client/config/utils/validations';
import { PATH_HOME } from 'client/config/AddEconomicActivity/routes';
import Loading from '../../../../templates/Loading';

/**
 * Status template
 * @param       {Object} props
 * @returns     {JSX}
 */
function UserFormTemplate(props: IVariables) {
  const {
    i18n,
    formData,
    onChange,
    validation,
    onSubmit,
    helperData,
    locale,
  } = props;
  const [validate, setValidate] = useState(false);

  const onSubmitHandler = () => {
    setValidate(true);

    const isValid = validation(formData);

    if (!isValid) {
      return;
    }

    onSubmit(props);
    setValidate(false);
  };

  const validateStatusHandler = (value: any) => {
    return validate && value === '' ? 'error' : undefined;
  };

  const helpErrorHandler = (value: any) => {
    return validate && value === ''
      ? i18n('addEconomicActivity.required_field')
      : '';
  };

  if (helperData.isSubmitted) {
    return <Loading />;
  }

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={props.steps}
          stepsStatus={props.stepsStatus}
        />
      }
    >
      <div>
        <h3
          className="syb-title"
          style={{ marginBottom: '2rem', color: '#161038' }}
        >
          {i18n(props.title)}
        </h3>
        <div className="">
          <span style={{ color: '#3f3e45', fontSize: '16px' }}>
            {i18n(props.description)}
          </span>
        </div>
      </div>
      <div style={{ margin: '40px' }} />
      <div className="user-form">
        <Form
          name="applicationStatusForm"
          submitButton={{
            label: i18n('addEconomicActivity.button.submit'),
            withArrow: true,
            onClick: onSubmitHandler,
          }}
          backButton={{
            label: props.i18n('addEconomicActivity.button.back'),
            withArrow: true,
            alignIcon: 'start',
            uiType: 'secondary',
            onClick: () => props.history.push(PATH_HOME),
          }}
        >
          <Form.Fieldset
            title={i18n(
              'addEconomicActivity.user_form.enter_activity_information',
            )}
            twoColumns
          >
            <Input
              label={i18n('addEconomicActivity.user_form.activity_name_en')}
              placeholder=""
              aria-label="activity_name_en"
              value={formData.englishActivityName}
              textDirection={locale === 'ar' ? 'rtl' : 'ltr'}
              onChange={value => {
                onChange(props, value, 'englishActivityName');
              }}
              validateStatus={(() => {
                return validate && formData.englishActivityName === ''
                  ? 'error'
                  : null;
              })()}
              help={(() => {
                return validate && formData.englishActivityName === ''
                  ? i18n('addEconomicActivity.required_field')
                  : '';
              })()}
            />
            <Input
              label={i18n('addEconomicActivity.user_form.activity_name_ar')}
              placeholder=""
              aria-label="activity_name_ar"
              value={formData.arabicActivityName}
              textDirection="rtl"
              onChange={value => {
                onChange(props, value, 'arabicActivityName');
              }}
              validateStatus={(() => {
                return validate &&
                  (formData.arabicActivityName === '' ||
                    /[a-zA-Z]/.test(formData.arabicActivityName))
                  ? 'error'
                  : null;
              })()}
              help={(() => {
                if (validate) {
                  if (formData.arabicActivityName === '') {
                    return i18n('addEconomicActivity.required_field');
                  }
                  if (/[a-zA-Z]/.test(formData.arabicActivityName)) {
                    return i18n('addEconomicActivity.arabic_field');
                  }
                }
                return '';
              })()}
            />
            <div style={{ fontSize: '1.6rem' }}>
              <TextArea
                aria-label="activity_name_en_description"
                // dataKey=""
                disabled={false}
                label={i18n(
                  'addEconomicActivity.user_form.activity_name_en.description',
                )}
                limit={undefined}
                name="text area"
                placeholder=""
                size="default"
                // textDirection={locale === 'ar' ? 'rtl' : 'ltr'}
                value={formData.englishActivityDescription}
                onChange={e => {
                  onChange(props, e.target.value, 'englishActivityDescription');
                }}
                validateStatus={validateStatusHandler(
                  formData.englishActivityDescription,
                )}
                help={helpErrorHandler(formData.englishActivityDescription)}
              />
            </div>
            <div style={{ fontSize: '1.6rem' }}>
              <TextArea
                aria-label="activity_name_ar_description"
                // dataKey=""
                disabled={false}
                label={i18n(
                  'addEconomicActivity.user_form.activity_name_ar.description',
                )}
                limit={undefined}
                name="text area"
                placeholder=""
                size="default"
                // textDirection="rtl"
                value={formData.arabicActivityDescription}
                onChange={e => {
                  onChange(props, e.target.value, 'arabicActivityDescription');
                }}
                validateStatus={(() => {
                  return validate &&
                    (formData.arabicActivityDescription === '' ||
                      /[a-zA-Z]/.test(formData.arabicActivityDescription))
                    ? 'error'
                    : null;
                })()}
                help={(() => {
                  if (validate) {
                    if (formData.arabicActivityDescription === '') {
                      return i18n('addEconomicActivity.required_field');
                    }
                    if (/[a-zA-Z]/.test(formData.arabicActivityDescription)) {
                      return i18n('addEconomicActivity.arabic_field');
                    }
                  }
                  return '';
                })()}
              />
            </div>
          </Form.Fieldset>
          <Form.Fieldset
            title={i18n(
              'addEconomicActivity.user_form.verify_contact_applicant_information',
            )}
            twoColumns
          >
            <div
              style={{
                margin: '-2rem 0px 4rem',
                width: '100%',
                color: '#3f3e45',
                fontSize: '1.6rem',
              }}
            >
              {i18n(
                'addEconomicActivity.user_form.verify_contact_applicant_information.description',
              )}
            </div>
            <Input
              label={i18n('addEconomicActivity.user_form.contact_name')}
              placeholder=""
              aria-label="contact_name"
              value={formData.name}
              textDirection={locale === 'ar' ? 'rtl' : 'ltr'}
              onChange={value => {
                onChange(props, value, 'name');
              }}
              validateStatus={(() => {
                return validate && formData.name === '' ? 'error' : null;
              })()}
              help={(() => {
                return validate && formData.name === ''
                  ? i18n('addEconomicActivity.required_field')
                  : '';
              })()}
            />
            <InputTelephone
              code={971}
              countries={[
                {
                  code: 971,
                  name: 'UAE',
                  pattern: '99 99 99999',
                },
              ]}
              i18n={i18n}
              aria-label="contact_mobile"
              label={i18n('addEconomicActivity.user_form.contact_mobile')}
              value={formData.mobileNumber}
              onSelect={value => {
                onChange(props, value, 'mobileNumber');
              }}
              validateStatus={(() => {
                return validate && !isMobile(formData.mobileNumber)
                  ? 'error'
                  : '';
              })()}
              help={(() => {
                if (validate) {
                  if (formData.mobileNumber === '') {
                    return i18n('addEconomicActivity.required_field');
                  }
                  if (!isMobile(formData.mobileNumber)) {
                    return i18n('addEconomicActivity.invalid_mobile');
                  }
                }
                return '';
              })()}
            />

            <Input
              label={i18n('addEconomicActivity.user_form.contact_email')}
              placeholder=""
              aria-label="contact_email"
              value={formData.email}
              textDirection={locale === 'ar' ? 'rtl' : 'ltr'}
              onChange={value => {
                onChange(props, value, 'email');
              }}
              help={(() => {
                if (validate) {
                  if (formData.email === '') {
                    return i18n('addEconomicActivity.required_field');
                  }
                  if (!isEmail(formData.email)) {
                    return i18n('addEconomicActivity.invalid_email');
                  }
                }
                return '';
              })()}
              validateStatus={(() => {
                return validate && !isEmail(formData.email) ? 'error' : null;
              })()}
            />
          </Form.Fieldset>
        </Form>
      </div>
      <div style={{ height: '10rem' }} />
    </Container>
  );
}

UserFormTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(UserFormTemplate);
