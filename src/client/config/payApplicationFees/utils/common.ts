import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import moment from 'moment';
import Analytics from '@tamm/analytics';
import { ANALYTICS_INFO } from '../constants';

const reset = (props: IVariables, redirectUrl: string = '') => {
  // props.actions.form.update({ ...initialState });
  // props.actions.instanceId.update('');
  // props.actions.businessKey.update('');
  // props.actions.stepsStatus.update({});
  // props.actions.showLoader.update(false);
  props.actions.form.reset();
  props.actions.instanceId.reset();
  props.actions.businessKey.reset();
  props.actions.stepsStatus.reset();
  props.actions.showLoader.reset();
  // props.history.push(`${baseUrl}`);
  if (redirectUrl) {
    // for check application status
    window.location.href = `${baseUrl}${redirectUrl}`;
  }
};

export const getAnalyticsData = (
  eventType: string,
  serviceStatus: object = {},
  paymentDetails: object = {},
) => {
  const { eventKey, adgeName, serviceName, productName } = ANALYTICS_INFO;
  Analytics.addEvent({
    eventKey: eventKey[eventType],
    ...paymentDetails,
    additionalData: {
      ...serviceStatus,
      adgeName,
      serviceName,
      productName,
    },
  });
};

// format the date based on the format
export const getDateFromTimeStamp = (
  dateString?: string,
  dateOutputFormat: string = 'DD MMM YYYY', // date format 2 Aug 2018 =>other options Do MM YYYY
  dateInputFormat: string[] = ['DD MM YYYY'], // ["MM-DD-YYYY", "YYYY-MM-DD", "DD/MM/YYYY"]
) => {
  const dateInstance = moment(dateString, dateInputFormat);
  const dateObject =
    dateString && Date.parse(dateString) ? new Date(dateString) : new Date();
  const newDate = dateInstance.isValid() ? dateInstance : moment(dateObject);
  return newDate.format(dateOutputFormat);
};

export default { reset };
