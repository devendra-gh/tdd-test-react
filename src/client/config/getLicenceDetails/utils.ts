import Analytics from '@tamm/analytics';
import { ANALYTICS_INFO } from './constants';

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
