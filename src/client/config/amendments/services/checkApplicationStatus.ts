import fetch from 'client/services/fetch';

const checkApplicationStatus = async (applicationNumber: string) => {
  return fetch('/pub/proxy/checkApplicationStatus', 'POST', {
    applicationNumber,
    applicationType: 'Licence',
  })
    .then(response => response.data)
    .catch(err => err);
};

export default checkApplicationStatus;
