import fetch from 'client/services/fetch';

const fetchApplicationStatus = async (
  applicationNumber: string | undefined,
) => {
  try {
    const response = await fetch('/pub/proxy/checkApplicationStatus', 'POST', {
      applicationNumber: applicationNumber || '',
      applicationType: 'Trade Name',
    });
    if (response.success && response.data) {
      return response;
    }
    throw Error('Insufficient Data');
  } catch (e) {
    throw e;
  }
};

export default fetchApplicationStatus;
