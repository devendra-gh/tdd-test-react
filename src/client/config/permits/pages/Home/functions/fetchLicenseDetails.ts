import { get } from 'lodash';
import fetch from 'client/services/fetch';

const fetchLicenseDetails = async (licenseNo: string) => {
  const accurateLicenseNumber =
    licenseNo.indexOf('CN-') !== 0 ? `CN-${licenseNo}` : licenseNo;
  const payload = await fetch('/pub/proxy/getLicenceDetailsV3', 'POST', {
    licenseNo: accurateLicenseNumber,
  });

  return get(payload, 'data.result.0', null);
};

export default fetchLicenseDetails;
