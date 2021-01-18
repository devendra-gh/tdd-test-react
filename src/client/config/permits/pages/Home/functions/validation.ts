import { IVariables } from '@tamm/app-composer';
import permitConfigs from 'client/config/permits/permitConfigs';
import { checkValidationField } from 'client/config/utils/checkValidation';
import scrollToElement from 'client/config/utils/permitsScrollToElement';
import {
  validateDEDFields,
  validateFCFZFields,
  validateNLFields,
  validateADGEFields,
} from './companyValidation';

const validateField = (field: IVariables, fieldValue: any, i18n: any) => {
  const { subFields } = field;
  let validation = () =>
    checkValidationField(field.validationConfig, fieldValue, true, i18n);

  if (subFields) {
    validation = () => {
      const hasValidationError = subFields.find((subField: any) => {
        if (fieldValue) {
          const subFieldValue = fieldValue[subField.name];
          const subFieldError = checkValidationField(
            subField.validationConfig,
            subFieldValue,
            true,
            i18n,
          );
          return subFieldError;
        }
        return true;
      });
      return !!hasValidationError;
    };
  }
  return validation();
};

const validation = (props: IVariables) => {
  const { serviceType, permitInfo, companyType } = props;
  const permitDetails = permitInfo[serviceType];

  const PermitConfigs: IVariables = permitConfigs;
  const { formFields } = PermitConfigs[serviceType];

  let valid = true;
  let scrolled = false;

  if (companyType === 'DED') {
    [valid, scrolled] = validateDEDFields(props);
  }

  if (companyType === 'FC') {
    [valid, scrolled] = validateFCFZFields(props);
  }

  if (companyType === 'FZ') {
    [valid, scrolled] = validateFCFZFields(props);
  }

  if (companyType === 'NL') {
    [valid, scrolled] = validateNLFields(props);
  }

  if (companyType === 'ADGE') {
    [valid, scrolled] = validateADGEFields(props);
  }

  // check incrementable
  if (formFields) {
    const formGroupArray: IVariables[] = Object.values(formFields);
    formGroupArray.forEach((group: IVariables) => {
      const {
        hasIncrementButton: isIncrementableField,
        stateKey,
        fields,
      } = group;
      const fieldValues = permitDetails[stateKey];
      const errorCallback = (hasErrorField: boolean) => {
        if (hasErrorField && !scrolled) {
          scrollToElement(stateKey, 'name');
          valid = false;
          scrolled = true;
        }
      };

      let validationDriver = () =>
        fields.forEach((field: any) => {
          const { conditionalBehaviour } = field;
          if (!conditionalBehaviour || conditionalBehaviour(permitDetails)) {
            const hasError = validateField(
              field,
              fieldValues[field.name],
              props.i18n,
            );
            errorCallback(hasError);
          }
        });

      if (isIncrementableField) {
        const configFieldsLength = fields.length;
        const fieldValuesLength = fieldValues.length;

        const iterator =
          fieldValuesLength > configFieldsLength ? fieldValues : fields;

        validationDriver = () =>
          iterator.forEach((_: any, index: number) => {
            const hasError = validateField(
              fields[0],
              fieldValues[index],
              props.i18n,
            );
            errorCallback(hasError);
          });
      }
      validationDriver();
    });
  }

  return valid;
};

export default validation;
