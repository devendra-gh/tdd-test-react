import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Form from '@tamm/ui-lib-v2-form';
import { checkValidationField } from 'client/config/utils/checkValidation';
import CustomFormGroup from '../CustomGroup';
import '../../PermitForm.less';

const PermitTypeForm = (props: IVariables) => {
  const {
    values,
    handleChange,
    getFormFields,
    i18n,
    startShowingErrors,
    serviceType,
    onSubmit,
  } = props;

  if (!serviceType) {
    return null;
  }

  const formFields: IVariables = getFormFields() || {};
  const FormFields = Object.values(formFields).map((field: IVariables) => {
    return (
      <CustomFormGroup
        inputGroups={[field]}
        handleChange={handleChange}
        values={values}
        i18n={i18n}
        key={`${serviceType}.${field.stateKey}`}
        groupKey={`${serviceType}.${field.stateKey}`}
        startShowingErrors={startShowingErrors}
        validate={(fieldConfig: IVariables, stateKey: string) => {
          return fieldConfig.validationConfig
            ? checkValidationField(
                fieldConfig.validationConfig,
                values[stateKey][fieldConfig.name] || null,
                startShowingErrors,
                i18n,
              )
            : undefined;
        }}
        customDisabledDate={(currentDate: string, fieldDate: IVariables) =>
          typeof fieldDate.customDisabledDate === 'function' &&
          fieldDate.customDisabledDate(currentDate, values)
        }
      />
    );
  });

  return (
    <React.Fragment>
      {FormFields}
      <Form
        id="form-buttons"
        submitButton={{
          label: i18n('submit'),
          // withArrow: true,
          onClick: onSubmit,
        }}
        cancelLink={{
          label: i18n('cancel'),
          href: '#',
          onClick: () => {
            window.location.href = `${
              window.location.href.indexOf('stage.tamm') !== -1
                ? 'https://stage.tamm.abudhabi/'
                : 'https://www.tamm.abudhabi/'
            }tamm-centers-services/department-of-economic-development`;
          },
        }}
      />
    </React.Fragment>
  );
};

export default PermitTypeForm;
