import fetch from 'client/services/fetch';

const getLicenceDetails = async (licenseNo: string) => {
  return fetch('/pub/proxy/getLicenceDetailsV3', 'POST', {
    licenseNo,
  })
    .then(response => response.data)
    .catch(err => err);
};

export default getLicenceDetails;
