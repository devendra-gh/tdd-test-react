import { IVariables } from '@tamm/app-composer';

export const manipulatePhone = (phone: string) => {
  const valueInit = phone;
  let validMobile = valueInit.replace(/\s/g, '');
  if (valueInit.startsWith('+')) {
    const temp = valueInit.substring(1, valueInit.length);
    validMobile = temp.replace(/\s/g, '');
  } else {
    validMobile = valueInit;
  }
  return validMobile;
};

// Returns contact based on companyType
export const getContact = (props: IVariables) => {
  const { companyType, companyDetails } = props;
  switch (companyType) {
    case 'FC': {
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        arabicName,
        englishName,
        nationality,
        allGcc,
        emailAddress,
        mobileNo,
      } = companyDetails;
      return [
        {
          type: '12',
          licenseNo: contactLicenseNo,
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          arabicName,
          englishName,
          nationality,
          allGcc: allGcc ? 'Y' : 'N',
          emailAddress,
          mobileNo,
        },
      ];
    }
    case 'FZ': {
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        arabicName,
        englishName,
        nationality,
        emailAddress,
        mobileNo,
      } = companyDetails;
      return [
        {
          type: '104',
          licenseNo: contactLicenseNo,
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          arabicName,
          englishName,
          nationality,
          emailAddress,
          mobileNo,
        },
      ];
    }
    case 'ADGE': {
      const {
        representativeType,
        partnerSharePercentage,
        nationality,
      } = companyDetails;
      return [
        {
          type: '13',
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          nationality,
        },
      ];
    }
    case 'NL': {
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        legalForm,
        emirate,
        nationality,
      } = companyDetails;
      return [
        {
          type: '100',
          licenseNo: contactLicenseNo,
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          nationality,
          legalForm,
          emirate,
        },
      ];
    }
    default:
      return '';
  }
};
