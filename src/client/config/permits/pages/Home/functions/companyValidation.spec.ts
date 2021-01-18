import {
  validateDEDFields,
  validateFCFZFields,
  validateADGEFields,
  validateNLFields,
} from './companyValidation';

jest.mock('client/config/utils/scrollToElement', () => jest.fn());

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('test validate functions for different companies', () => {
  let props: any;
  let valid: boolean;
  let scrolled: boolean;

  beforeEach(() => {
    window.scrollTo = jest.fn();

    props = {
      companyDetails: {
        licenseNo: 'CN-1024976',
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
      i18n: jest.fn(value => value),
    };
  });

  it('valid DED fields', () => {
    [valid, scrolled] = validateDEDFields(props);
    expect(valid).toBe(true);
    expect(scrolled).toBe(false);
  });

  it('invalid DED fields', () => {
    props.companyDetails = {};
    [valid, scrolled] = validateDEDFields(props);
    expect(valid).toBe(false);
    expect(scrolled).toBe(true);
  });

  it('valid FC/FZ fields', () => {
    [valid, scrolled] = validateFCFZFields(props);
    expect(valid).toBe(true);
    expect(scrolled).toBe(false);
  });

  it('invalid FC/FZ fields', () => {
    props.companyDetails = {};
    [valid, scrolled] = validateFCFZFields(props);
    expect(valid).toBe(false);
    expect(scrolled).toBe(true);
  });

  it('valid ADGE fields', () => {
    [valid, scrolled] = validateADGEFields(props);
    expect(valid).toBe(true);
    expect(scrolled).toBe(false);
  });

  it('invalid ADGE fields', () => {
    props.companyDetails = {};
    [valid, scrolled] = validateADGEFields(props);
    expect(valid).toBe(false);
    expect(scrolled).toBe(true);
  });

  it('valid NL fields', () => {
    [valid, scrolled] = validateNLFields(props);
    expect(valid).toBe(true);
    expect(scrolled).toBe(false);
  });

  it('invalid NL fields', () => {
    props.companyDetails = {};
    [valid, scrolled] = validateNLFields(props);
    expect(valid).toBe(false);
    expect(scrolled).toBe(true);
  });
});
