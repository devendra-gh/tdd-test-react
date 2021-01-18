import fetch from 'client/services/fetch';

const checkApplicationStatus = (applicationNumber: string | undefined) => {
  return fetch('/pub/proxy/checkApplicationStatus', 'POST', {
    applicationNumber: applicationNumber || '',
  });
};

export default checkApplicationStatus;
