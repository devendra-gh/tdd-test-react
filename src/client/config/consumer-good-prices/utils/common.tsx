import React from 'react';
import Analytics from '@tamm/analytics';
import { ANALYTICS_INFO } from '../constants';

export const spacer = (space: string) => {
  return <div style={{ height: space }} />;
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
