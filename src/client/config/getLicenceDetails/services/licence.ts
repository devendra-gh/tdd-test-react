import fetch from 'client/services/fetch';

const fetchLicenceDetails = (licenseNo: string | undefined) => {
  return fetch('/pub/proxy/getLicenceDetailsV3', 'POST', {
    licenseNo: licenseNo || '',
  })
    .then(response => {
      const error = { code: 500 };
      if (response.success && response.data && response.data.result) {
        return response.data.result;
      }
      if (response.message === 'Failed to get trade licence details from DED') {
        error.code = 204;
        throw error;
      }
      throw error;
    })
    .catch(err => {
      throw err;
    });
};

export default fetchLicenceDetails;
