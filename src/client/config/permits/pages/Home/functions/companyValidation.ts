import {
  validationTypes,
  checkValidationField,
  validateSharePercentage,
} from 'client/config/utils/checkValidation';
import scrollToElement from 'client/config/utils/permitsScrollToElement';
import { IVariables } from '@tamm/app-composer';

// Check if companyDetails are valid for DED companyType
export const validateDEDFields = (props: IVariables) => {
  const { companyDetails } = props;
  let valid = true;
  let scrolled = false;

  const licenseNoValidation = checkValidationField(
    { type: validationTypes.CN_NUMBER },
    companyDetails.licenseNo,
    true,
    props.i18n,
  );

  if (licenseNoValidation) {
    valid = false;
    scrollToElement('companyDetails', 'name');
    scrolled = true;
  }

  return [valid, scrolled];
};

// Check if companyDetails are valid for NL companyType
export const validateNLFields = (props: IVariables) => {
  const { companyDetails } = props;
  let valid = true;
  let scrolled = false;

  const contactLicenseNoValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.contactLicenseNo,
    true,
    props.i18n,
  );
  const repTypeValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.representativeType,
    true,
    props.i18n,
  );

  let sharePercentageValidation;
  if (
    companyDetails.representativeType === '1' ||
    companyDetails.representativeType === '2'
  ) {
    sharePercentageValidation = validateSharePercentage(
      companyDetails,
      props.i18n,
    );
  }

  const nationalityValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.nationality,
    true,
    props.i18n,
  );

  const legalFormValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.legalForm,
    true,
    props.i18n,
  );

  const emirateValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.legalForm,
    true,
    props.i18n,
  );

  if (
    contactLicenseNoValidation ||
    repTypeValidation ||
    sharePercentageValidation ||
    nationalityValidation ||
    legalFormValidation ||
    emirateValidation
  ) {
    valid = false;
    scrollToElement('companyDetails', 'name');
    scrolled = true;
  }

  return [valid, scrolled];
};

// Check if company details are valid for Foriegn Comapany or Freezone Company
// eslint-disable-next-line complexity
export const validateFCFZFields = (props: IVariables) => {
  const { companyDetails } = props;
  let valid = true;
  let scrolled = false;

  const contactLicenseNoValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.contactLicenseNo,
    true,
    props.i18n,
  );

  const englishNameValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.englishName,
    true,
    props.i18n,
  );

  const arabicNameValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.arabicName,
    true,
    props.i18n,
  );

  const repTypeValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.representativeType,
    true,
    props.i18n,
  );

  let sharePercentageValidation;
  if (
    companyDetails.representativeType === '1' ||
    companyDetails.representativeType === '2'
  ) {
    sharePercentageValidation = validateSharePercentage(
      companyDetails,
      props.i18n,
    );
  }

  const nationalityValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.nationality,
    true,
    props.i18n,
  );

  const mobileNoValidation = checkValidationField(
    { type: validationTypes.PHONE },
    companyDetails.mobileNo,
    true,
    props.i18n,
  );

  const emailValidation = checkValidationField(
    { type: validationTypes.EMAIL },
    companyDetails.emailAddress,
    true,
    props.i18n,
  );

  if (
    contactLicenseNoValidation ||
    englishNameValidation ||
    arabicNameValidation ||
    repTypeValidation ||
    sharePercentageValidation ||
    nationalityValidation ||
    mobileNoValidation ||
    emailValidation
  ) {
    valid = false;
    scrollToElement('companyDetails', 'name');
    scrolled = true;
  }

  return [valid, scrolled];
};

// Check if companyDetails are valid for ADGE companyType
export const validateADGEFields = (props: IVariables) => {
  const { companyDetails } = props;
  let valid = true;
  let scrolled = false;

  const nationalityValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.nationality,
    true,
    props.i18n,
  );

  const repTypeValidation = checkValidationField(
    { type: validationTypes.REQUIRED },
    companyDetails.representativeType,
    true,
    props.i18n,
  );

  let sharePercentageValidation;
  if (
    companyDetails.representativeType === '1' ||
    companyDetails.representativeType === '2'
  ) {
    sharePercentageValidation = validateSharePercentage(
      companyDetails,
      props.i18n,
    );
  }

  if (nationalityValidation || repTypeValidation || sharePercentageValidation) {
    valid = false;
    scrollToElement('companyDetails', 'name');
    scrolled = true;
  }

  return [valid, scrolled];
};
