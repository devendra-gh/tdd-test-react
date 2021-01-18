import Analytics from '@tamm/analytics';
import { ANALYTICS_INFO } from './constants';

const { adgeName, serviceName, productName } = ANALYTICS_INFO;

export const addAnalytics = (
  key: string,
  additionalData: object = {},
  paymentDetails: object = {},
) => {
  Analytics.addEvent({
    eventKey: key,
    additionalData: {
      adgeName,
      serviceName,
      productName,
      ...additionalData,
    },
    ...paymentDetails, // to add the payment amount to the analytics
  });
};
