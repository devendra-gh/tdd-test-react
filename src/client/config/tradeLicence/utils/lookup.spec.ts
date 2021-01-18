import {
  getBusinessLegalFormCode,
  getCountry,
  partnersValidation,
  getLicenseType,
  getLegalFormFromCode,
} from './lookup';

jest.mock('client/utils/appData', () => {
  return {
    getSmartpassData: () => {
      return {
        IDN: 1234,
      };
    },
  };
});
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/lookup', () => {
  it('should properly call getLicenseType branchGCC', () => {
    const out = getLicenseType('branch', 'branchGCC');
    expect(out).toBe('branchGCC');
  });
  it('should properly call getLicenseType tech', () => {
    const out = getLicenseType('tech', 'branchGCC');
    expect(out).toBe('tech');
  });
  it('should properly call getLicenseType branchAD', () => {
    const out = getLicenseType('branch', '');
    expect(out).toBe('branchAD');
  });
  it('should properly call getBusinessLegalFormCode branchGCC', () => {
    const licenseType = 'branchGCC';
    const legalFormId = 'establishment';
    const out = getBusinessLegalFormCode(licenseType, legalFormId);
    expect(out).toBe('10');
  });
  it('should properly call getBusinessLegalFormCode branchAD', () => {
    const licenseType = 'branchAD';
    const legalFormId = 'establishment';
    const out = getBusinessLegalFormCode(licenseType, legalFormId);
    expect(out).toBe('11');
  });

  it('should properly call getBusinessLegalFormCode mubdia', () => {
    const licenseType = 'mubdia';
    const legalFormId = 'establishment';
    const out = getBusinessLegalFormCode(licenseType, legalFormId);
    expect(out).toBe('12');
  });

  it('should properly call getBusinessLegalFormCode', () => {
    const licenseType = 'branchUAE';
    const legalFormId = 'establishment';
    const out = getBusinessLegalFormCode(licenseType, legalFormId);
    expect(out).toBe('14');
  });
  it('should properly call getBusinessLegalFormCode without legalForm', () => {
    const licenseType = 'branchUAE';
    const legalFormId = '';
    const out = getBusinessLegalFormCode(licenseType, legalFormId);
    expect(out).toBe('1');
  });
  it('should properly call getBusinessLegalFormCode default', () => {
    const licenseType = 'other';
    const legalFormId = 'establishment';
    const out = getBusinessLegalFormCode(licenseType, legalFormId);
    expect(out).toBe('1');
  });

  it('should properly call getLegalFormFromCode', () => {
    const code = '500';
    const out = getLegalFormFromCode(code);
    expect(out).toBe('');
  });

  it('should properly call getLegalFormFromCode', () => {
    const code = '1';
    const out = getLegalFormFromCode(code);
    expect(out).toBe('establishment');
  });

  it('getCountry', () => {
    const nationality = 'ARE';
    const countries: any = [
      {
        code: 'ARE',
        name: 'Al Ain',
      },
    ];
    const out = getCountry(nationality, countries);
    expect(out).toBe('Al Ain');
  });

  it('getCountry no country found ', () => {
    const nationality = 'ARE';
    const countries: any = [
      {
        code: 'DZ',
        name: 'Guelma',
      },
    ];
    const out = getCountry(nationality, countries);
    expect(out).toBe('');
  });

  it('partnersValidation', () => {
    const items: any = [
      {
        sharePercentage: '100',
        nationality: 'ARE',
        emiratesId: 1234,
      },
    ];
    const out = partnersValidation(
      items,
      1,
      'limitedLiabilityCompanyLLC',
      'allInOne',
    );
    expect(out).toStrictEqual({
      isValid: true,
      localSharePass: true,
      moaPass: true,
      requiredPass: true,
      totalSharePass: true,
      minPartnersPass: true,
    });
  });

  it('partnersValidation 1', () => {
    const items: any = [
      {
        sharePercentage: '100',
        nationality: 'TEST',
        emiratesId: 'test',
      },
    ];
    const out = partnersValidation(
      items,
      1,
      'limitedLiabilityCompanyLLC',
      'allInOne',
    );
    expect(out).toStrictEqual({
      isValid: false,
      localSharePass: false,
      moaPass: false,
      requiredPass: true,
      totalSharePass: true,
      minPartnersPass: true,
    });
  });

  it('partnersValidation 2', () => {
    const items: any = [
      {
        sharePercentage: '100',
        nationality: 'ARE',
        emiratesId: 1234,
      },
    ];
    const out = partnersValidation(
      items,
      1,
      'limitedLiabilityCompanyLLC',
      'test',
    );
    expect(out).toStrictEqual({
      isValid: true,
      localSharePass: true,
      moaPass: true,
      requiredPass: true,
      totalSharePass: true,
      minPartnersPass: true,
    });
  });
});
