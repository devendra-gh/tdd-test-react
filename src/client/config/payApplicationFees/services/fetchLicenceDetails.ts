import fetch from 'client/services/fetch';

const fetchLicenceDetails = (licenseNo: string | undefined) => {
  return fetch('/pub/proxy/getTradeLicenseDetails', 'POST', {
    licenseNo: licenseNo || '',
  });
};

export default fetchLicenceDetails;
