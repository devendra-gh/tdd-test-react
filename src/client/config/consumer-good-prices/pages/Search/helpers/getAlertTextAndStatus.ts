export const getAlertTextAndStatus = (error: Error) => {
  if (error.message === 'errorMessage.noData') {
    return {
      alertText: 'errorMessage.noData',
      alertStatus: 'info',
    };
  }
  return {
    alertText: 'errorMessage.network',
    alertStatus: 'error',
  };
};
