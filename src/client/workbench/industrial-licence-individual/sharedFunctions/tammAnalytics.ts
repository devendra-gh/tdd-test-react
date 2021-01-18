

export const addAnalyticsEvent = (
  props: any,
  eventKeyValue: string,
  serviceStatusValue?: string,
  amount?: number,
  applicationStatusValue?: string,
) => {
  props.analytics.addEvent({
    eventKey: eventKeyValue || '',
    ...(amount ? { sum: amount } : {}),
    additionalData: {
      adgeName: props.adgeName,
      serviceName: props.serviceCode,
      productName: props.productName,
      serviceStatus: serviceStatusValue || '',
      ...(applicationStatusValue
        ? { applicationStatus: applicationStatusValue }
        : {}),
    },
  });
};