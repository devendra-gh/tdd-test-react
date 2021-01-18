import fetch from 'client/services/fetch';

// TODO: get the details about the licence
const industrialLicenceDetails = (licenseNo: string) => {
  return fetch('/pub/proxy/getLicenceDetailsV3', 'POST', {
    licenseNo: licenseNo || '',
  })
    .then(response => {
      const details = {
        code: response.success ? '204' : '500',
        message: response.data.message,
        traceId: response.data.traceId,
      };
      if (response.success && response.data && response.data.result) {
        if (response.data.result.constructor === Array) {
          const data = response.data.result[0];
          Object.assign(details, {
            code: response.data.code,
            licenceNumber: data.licenseNo,
            licenceTypeEn: data.clasification_en,
            licenceTypeAr: data.clasification_ar,
            tradeNameEn: data.businessNameEng,
            tradeNameAr: data.businessNameArb,
          });
        }
        return details;
      }
      throw details;
    })
    .catch(err => {
      throw err;
    });
};

// TODO: get link licence status
const linkUserLicence = async (
  licenseNo: string,
  spuuid: string,
  userEmail: string,
  userMobile: string,
) => {
  try {
    return await fetch('/pub/proxy/linkLicense', 'POST', {
      licenseNumber: licenseNo || '',
      SPUUID: spuuid || '',
      userEmail,
      userMobile,
    });
  } catch (error) {
    throw error;
  }
};

export const services: { [key: string]: Function } = {
  industrialLicenceDetails,
  linkUserLicence,
};
