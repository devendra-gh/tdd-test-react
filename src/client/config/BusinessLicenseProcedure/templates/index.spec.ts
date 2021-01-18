import templates from './index';

jest.mock('client/templates/Footer', () => () => '');
jest.mock('client/templates/Header', () => () => '');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('templates', () => {
  it('instance check', () => {
    expect(templates).toBeInstanceOf(Object);
  });

  it('login', () => {
    expect(templates.login).toBeInstanceOf(Function);
    expect(templates.login()).toBeInstanceOf(Object);
  });

  it('page404', () => {
    expect(templates.page404).toBeInstanceOf(Function);
    expect(templates.page404()).toBeInstanceOf(Object);
  });

  it('businessLicenseProcedureHome', () => {
    expect(templates.businessLicenseProcedureHome).toBeInstanceOf(Function);
    expect(templates.businessLicenseProcedureHome()).toBeInstanceOf(Object);
  });

  it('businessLicenseProcedureSelectCompanyDetails', () => {
    expect(
      templates.businessLicenseProcedureSelectCompanyDetails,
    ).toBeInstanceOf(Function);
    expect(
      templates.businessLicenseProcedureSelectCompanyDetails(),
    ).toBeInstanceOf(Object);
  });

  it('businessLicenseProcedureSelectActivityDetails', () => {
    expect(
      templates.businessLicenseProcedureSelectActivityDetails,
    ).toBeInstanceOf(Function);
    expect(
      templates.businessLicenseProcedureSelectActivityDetails(),
    ).toBeInstanceOf(Object);
  });

  it('businessLicenseProcedureResult', () => {
    expect(templates.businessLicenseProcedureResult).toBeInstanceOf(Function);
    expect(templates.businessLicenseProcedureResult()).toBeInstanceOf(Object);
  });

  it('notice', () => {
    expect(templates.notice).toBeInstanceOf(Function);
    expect(templates.notice()).toBeInstanceOf(Object);
  });
});
