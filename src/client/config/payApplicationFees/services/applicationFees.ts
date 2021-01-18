import fetch from 'client/services/fetch';

const applicationFees = (applicationNumber: string | undefined) => {
  return fetch('/pub/proxy/businessLicenseFees', 'POST', {
    licenseNo: applicationNumber || '',
  });
};

export default applicationFees;
