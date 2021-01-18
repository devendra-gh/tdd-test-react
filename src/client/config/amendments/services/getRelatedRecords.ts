import fetch from 'client/services/fetch';

const getRelatedRecords = async (licenseNo: string) => {
  return fetch('/pub/proxy/relatedRecords', 'POST', {
    licenseNo,
  })
    .then(response => response.data)
    .catch(err => err);
};

export default getRelatedRecords;
