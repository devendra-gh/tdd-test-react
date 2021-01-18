/* eslint-disable valid-jsdoc */
import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import { isCnNumber, isEmail, isMobile, isChassisNumber } from './validations';

export const validationTypes = {
  REQUIRED: 'REQUIRED',
  REQUIRED_DATE: 'REQUIRES DATE',
  REQUIRED_FILE: 'REQUIRES FILE',
  MIN_CHARACTERS: 'MIN_CHARACTERS',
  CN_NUMBER: 'CN_NUMBER',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  CHASSIS_NUMBER: 'CHASSIS_NUMBER',
};

/**
 * Will check if the value is valid according to validationConfig for permits.
 * If valid returns undefined
 * If Invalid returns the validation message
 * It also update the redux using the updateValidationState function (inside)
 * @returns {undefined|string} .
 */
// eslint-disable-next-line complexity
export const checkValidationField = (
  validationConfig: IVariables,
  value: any,
  startShowingErrors: boolean,
  // validationStateAction: Function,
  i18n: Function,
) => {
  if (!startShowingErrors || !validationConfig) {
    return undefined;
  }

  switch (validationConfig.type) {
    // case validationTypes.REQUIRED_DATE:
    //   if (value || '') {
    //     return i18n('validationMessage.required');
    //   }
    //   break;
    case validationTypes.REQUIRED:
      // const stringCheck = typeof value === 'string' ? value.trim() : value;
      if (!(typeof value === 'string' ? value.trim() : value)) {
        return i18n('validationMessage.required');
      }
      break;
    case validationTypes.MIN_CHARACTERS:
      if (!value || value.length < validationConfig.value) {
        return i18n('validationMessage.minChar', {
          count: validationConfig.value,
        });
      }
      break;
    case validationTypes.CN_NUMBER:
      if (!value || !isCnNumber(value)) {
        return i18n('validationMessage.cn');
      }
      break;
    case validationTypes.EMAIL:
      if (!value || !isEmail(value)) {
        return i18n('validationMessage.email');
      }
      break;
    case validationTypes.PHONE:
      if (!value || !isMobile(value.replace(/ /g, ''))) {
        return i18n('validationMessage.mobile');
      }
      break;
    case validationTypes.REQUIRED_FILE:
      if (!value) {
        return i18n('validationMessage.file');
      }
      if (value.length >= 1) {
        value.forEach((documents: any) => {
          if (documents.documentPath) {
            return i18n('validationMessage.filePath');
          }
          return null;
        });
      }
      if (value.length === 0) {
        return i18n('validationMessage.file');
      }

      break;
    case validationTypes.CHASSIS_NUMBER:
      if (!value || !isChassisNumber(value)) {
        return i18n('validationMessage.chassisNumber');
      }
      break;
    default:
      break;
  }
  return undefined;
};

/**
 * validate start date for permits.
 * Will return true if invalid
 * Will return false if valid
 * @returns {boolean} .
 */
export const validateStartDate = (
  currentDate: Moment,
  endDate?: Moment,
): boolean => {
  if (endDate) {
    const diff = moment(endDate).diff(currentDate, 'day');
    if (diff <= 0) return true;
  }
  const today = moment();
  const diff = today.diff(moment(currentDate), 'day');
  return diff > 0;
};

/**
 * validate end date for permits.
 * Will return true if invalid
 * Will return false if valid
 * @returns {boolean} .
 */
export const validateEndDate = (
  currentDate: Moment,
  startDate: Moment | undefined | null,
  numberOfDays?: number,
): boolean => {
  if (!startDate) return true;
  const diff = moment(currentDate).diff(moment(startDate), 'day');
  if (numberOfDays) return !(diff <= numberOfDays && diff > 0);
  return !(diff > 0);
};

export const validateShowDate = (
  currentDate: Moment, // This is not todays date is HoverDate
  startDate: Moment,
  endDate: Moment,
): boolean => {
  if (!startDate) return true;
  const showDates = moment(currentDate).isBetween(
    moment(startDate),
    moment(endDate),
    'days',
    '[]',
  );
  if (showDates) return false;
  return true;
};

export const validateSharePercentage = (
  values: Record<string, any>,
  i18n: Function,
) => {
  const { representativeType, partnerSharePercentage } = values;
  const partnerSharePercentageRegex = /^(100(?:\.00?)?|\d?\d(?:\.\d\d?)?)$/;
  if (
    !(typeof partnerSharePercentage === 'string'
      ? partnerSharePercentage.trim()
      : partnerSharePercentage)
  ) {
    return i18n('validationMessage.required');
  }
  if (representativeType === '2' && partnerSharePercentage === '0') {
    return i18n('validationMessage.sharePercentage');
  }
  if (!partnerSharePercentage.match(partnerSharePercentageRegex)) {
    return i18n('validationMessage.sharePercentage');
  }
  return undefined;
};
