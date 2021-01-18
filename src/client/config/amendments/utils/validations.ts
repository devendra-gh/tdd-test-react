import { IVariables } from '@tamm/app-composer';
import validator from 'validator';
import { includes } from 'lodash';
import { checkValidationField } from 'client/config/amendments/utils/checkValidation';
import representativeForms from 'client/config/amendments/configs/representativeForms';
import ContactInfoTemplate from 'client/config/amendments/templates/ContactInfo/ContactInfoTemplate';
import scrollToElement from './scrollToElement';

const isURL = (value: string) => {
  if (!value) {
    return false;
  }
  return validator.isURL(value) && includes(value, '.ae');
};

const isCnNumber = (value: string) => {
  if (!value) {
    return false;
  }
  const pattern = /^CN-/i;
  return pattern.test(value);
};
const isTnNumber = (value: string) => {
  if (!value) {
    return false;
  }
  const pattern = /^TN-\d{7}$/i;
  return pattern.test(value);
};

const isEmail = (value: string): boolean => {
  if (!value) {
    return false;
  }
  return !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

const isMobile = (value: string): boolean => {
  if (!value) {
    return false;
  }

  const withOutSpace = value.split(' ').join('');
  const PHONE_REGEX = /^(\+|0+)?9715\d{8}$/i;

  return !!withOutSpace.match(PHONE_REGEX);
};

const isEmiratesId = (value: string) => {
  if (!value) {
    return false;
  }

  const validEmiratesId = value.includes('-');
  if (validEmiratesId && value.length === 18) {
    // accept only digits or dashes with length [15,18], start with 784
    if (!/^784-*[12]{1}[0-9]{3}-*[0-9]{7}-*[0-9]{1}$/.test(value)) return false;
  } else if (!/^784[12]{1}[0-9]{3}[0-9]{7}[0-9]{1}$/.test(value)) return false;

  // The Luhn Algorithm
  let nCheck = 0;
  let bEven = false;
  const newValue = value.replace(/\D/g, '');
  for (let n = newValue.length - 1; n >= 0; n -= 1) {
    const cDigit = newValue.charAt(n);
    let nDigit = parseInt(cDigit, 10);
    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 === 0;
};

const validateField = (field: IVariables, fieldValue: any, i18n: any) => {
  const validation = () =>
    checkValidationField(field.validationConfig, fieldValue, true, i18n);

  return validation();
};

const validation = (props: IVariables, currentValue: any, pageName: string) => {
  let valid = true;
  let scrolled = false;

  let formFields: any;
  if (pageName === 'proInfo') {
    formFields = ContactInfoTemplate;
  } else {
    const {
      profile: { representativeType, profileType },
    } = props;
    formFields = representativeForms[representativeType][profileType];
  }

  if (formFields) {
    Object.values(formFields).forEach((key: any) => {
      key.fields.forEach((fields: IVariables) => {
        const errorCallback = (hasErrorField: boolean) => {
          if (hasErrorField && !scrolled) {
            scrollToElement('profile-form', 'id');
            valid = false;
            scrolled = true;
          }
        };
        const { conditionalBehaviour } = fields;
        if (!conditionalBehaviour || conditionalBehaviour(currentValue)) {
          const hasError = validateField(
            fields,
            currentValue[fields.name],
            props.i18n,
          );
          errorCallback(hasError);
        }
      });
    });
  }

  return valid;
};

export {
  isURL,
  isEmail,
  isMobile,
  isEmiratesId,
  isCnNumber,
  isTnNumber,
  validation,
};
