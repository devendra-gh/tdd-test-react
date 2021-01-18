/* eslint-disable valid-jsdoc */
import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  isCnNumber,
  isTnNumber,
  isEmail,
  isMobile,
  isEmiratesId,
} from './validations';

export const validationTypes = {
  REQUIRED: 'REQUIRED',
  REQUIRED_DATE: 'REQUIRES DATE',
  REQUIRED_FILE: 'REQUIRES FILE',
  MIN_CHARACTERS: 'MIN_CHARACTERS',
  CN_NUMBER: 'CN_NUMBER',
  TN_NUMBER: 'TN_NUMBER',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  CHASSIS_NUMBER: 'CHASSIS_NUMBER',
  EMIRATESID: 'EMIRATESID',
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
  i18n: Function,
) => {
  if (!startShowingErrors || !validationConfig) {
    return false;
  }

  switch (validationConfig.type) {
    case validationTypes.REQUIRED:
      if (!(typeof value === 'string' ? value.trim() : value)) {
        return i18n('validationMessage.required');
      }
      break;
    case validationTypes.CN_NUMBER:
      if (!value || !isCnNumber(value)) {
        return i18n('validationMessage.cn');
      }
      break;
    case validationTypes.TN_NUMBER:
      if (!value || !isTnNumber(value)) {
        return i18n('validationMessage.tn');
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
        return i18n('validationMessage.fileRequired');
      }
      if (!value.documentPath) {
        return i18n('validationMessage.fileInvalid');
      }
      break;
    case validationTypes.EMIRATESID:
      if (!value || !isEmiratesId(value)) {
        return i18n('validationMessage.emiratesId');
      }
      break;
    default:
      break;
  }
  return false;
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
    const diff = endDate.diff(currentDate, 'day');
    if (diff <= 0) return true;
  }
  const today = moment();
  const diff = today.diff(currentDate, 'hour');
  // console.log('diff', diff, 'currentDate', currentDate.format('LLLL'));
  return diff >= 1;
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
  const diff = moment(currentDate).diff(startDate, 'day');
  if (numberOfDays) return !(diff <= numberOfDays && diff > 0);
  return !(diff > 0);
};

export const validateFutureDate = (
  hoverDate: Moment, // This is not todays date is HoverDate
): boolean => {
  const startDate = '1900-01-01';
  const today = new Date();
  const curyear = today.getFullYear();
  const curyearMonth = today.getMonth() + 1;
  let curyearDay = today.getDate();
  const lastYear = curyear - 21;
  if (curyearMonth === 2 && curyearDay === 29) {
    curyearDay = 28;
  }

  const prevYearDisplay = `${`0000${lastYear.toString()}`.slice(
    -4,
  )}-${`00${curyearMonth.toString()}`.slice(
    -2,
  )}-${`00${curyearDay.toString()}`.slice(-2)}`;

  const showDates = moment(hoverDate).isBetween(
    startDate,
    prevYearDisplay,
    'days',
    '[]',
  );
  if (showDates) return false;
  return true;
};
