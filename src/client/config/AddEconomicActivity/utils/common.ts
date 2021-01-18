import { IVariables } from '@tamm/app-composer';
import Analytics from '@tamm/analytics';
import moment from 'moment';
import { initialState } from '../config';
import { BASE_PATH } from '../routes';
import { ANALYTICS_INFO } from '../constants';

export const reset = (props: IVariables) => {
  props.actions.formData.update({ ...initialState.formData });
  props.actions.newActivityApiData.update({
    ...initialState.newActivityApiData,
  });
  props.actions.helperData.update({
    ...initialState.helperData,
  });
  props.actions.instanceId.update('');
  props.actions.businessKey.update('');
  props.actions.stepsStatus.update({});
};

export const REQUIRE_SOP3 = {
  test: ({ user: { Type } }: IVariables) => Type === 'SOP3',
  redirectURL: BASE_PATH,
};

export const getAnalyticsData = (
  eventType: string,
  serviceStatus: object = {},
) => {
  const { eventKey, adgeName, serviceName, productName } = ANALYTICS_INFO;
  Analytics.addEvent({
    eventKey: eventKey[eventType],
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
