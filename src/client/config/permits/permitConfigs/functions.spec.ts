import { manipulatePhone, getContact } from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Phone number Validation', () => {
  it('should validate phone number with valid number', () => {
    manipulatePhone('+9711234567897');
    expect(manipulatePhone).toBeInstanceOf(Object);
  });
  it('should validate phone number with invalid number', () => {
    manipulatePhone('9711234567897');
    expect(manipulatePhone).toBeInstanceOf(Object);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getContact should return contact array', () => {
  let props: any;
  beforeEach(() => {
    props = {
      companyDetails: {
        englishName: 'test',
        arabicName: 'test',
        contactLicenseNo: 'test',
        representativeType: '1',
        partnerSharePercentage: '100',
        allGcc: true,
        nationality: 'ARE',
        emailAddress: 'test@gmail.com',
        mobileNo: '+971 56 56 56565',
        legalForm: 'Establishment',
        emirate: '1',
      },
      companyType: 'DED',
    };
  });

  it('should return empty string for companyType DED', () => {
    const contact = getContact(props);
    expect(contact).toBe('');
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('FC', () => {
    beforeEach(() => {
      props = {
        ...props,
        companyType: 'FC',
      };
    });
    it('should return contact array', () => {
      const contact = getContact(props);
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
      } = props.companyDetails;

      expect(contact).toStrictEqual([
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
      ]);
    });
    it('should return contact array for partnerSharePercentage null and allGcc false', () => {
      props.companyDetails = {
        ...props.companyDetails,
        partnerSharePercentage: null,
        allGcc: false,
      };
      const contact = getContact(props);
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
      } = props.companyDetails;

      expect(contact).toStrictEqual([
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
      ]);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('FZ', () => {
    beforeEach(() => {
      props = {
        ...props,
        companyType: 'FZ',
      };
    });
    it('should return contact array', () => {
      const contact = getContact(props);
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        arabicName,
        englishName,
        nationality,
        emailAddress,
        mobileNo,
      } = props.companyDetails;

      expect(contact).toStrictEqual([
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
      ]);
    });
    it('should return contact array for partnerSharePercentage null', () => {
      props.companyDetails = {
        ...props.companyDetails,
        partnerSharePercentage: null,
      };
      const contact = getContact(props);
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        arabicName,
        englishName,
        nationality,
        emailAddress,
        mobileNo,
      } = props.companyDetails;

      expect(contact).toStrictEqual([
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
      ]);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('ADGE', () => {
    beforeEach(() => {
      props = {
        ...props,
        companyType: 'ADGE',
      };
    });
    it('should return contact array', () => {
      const contact = getContact(props);
      const {
        representativeType,
        partnerSharePercentage,
        nationality,
      } = props.companyDetails;

      expect(contact).toStrictEqual([
        {
          type: '13',
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          nationality,
        },
      ]);
    });
    it('should return contact array for partnerSharePercentage null', () => {
      props.companyDetails = {
        ...props.companyDetails,
        partnerSharePercentage: null,
      };
      const contact = getContact(props);
      const {
        representativeType,
        partnerSharePercentage,
        nationality,
      } = props.companyDetails;

      expect(contact).toStrictEqual([
        {
          type: '13',
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          nationality,
        },
      ]);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('NL', () => {
    beforeEach(() => {
      props = {
        ...props,
        companyType: 'NL',
      };
    });
    it('should return contact array', () => {
      const contact = getContact(props);
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        legalForm,
        emirate,
        nationality,
      } = props.companyDetails;

      expect(contact).toStrictEqual([
        {
          type: '100',
          licenseNo: contactLicenseNo,
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          nationality,
          legalForm,
          emirate,
        },
      ]);
    });
    it('should return contact array for partnerSharePercentage null', () => {
      props.companyDetails = {
        ...props.companyDetails,
        partnerSharePercentage: null,
      };
      const contact = getContact(props);
      const {
        contactLicenseNo,
        representativeType,
        partnerSharePercentage,
        legalForm,
        emirate,
        nationality,
      } = props.companyDetails;

      expect(contact).toStrictEqual([
        {
          type: '100',
          licenseNo: contactLicenseNo,
          representativeType,
          partnerSharePercentage: partnerSharePercentage || '0',
          nationality,
          legalForm,
          emirate,
        },
      ]);
    });
  });
});
