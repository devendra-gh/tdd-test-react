import RenewLicencetemplates from './index';

jest.mock('client/templates/Header', () => () => 'Header');
jest.mock('client/templates/Footer', () => () => 'Footer');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('templates', () => {
  it('instance check', () => {
    expect(RenewLicencetemplates).toBeInstanceOf(Object);
  });

  it('home', () => {
    expect(RenewLicencetemplates.home).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.home()).toBeInstanceOf(Object);
  });

  it('form', () => {
    expect(RenewLicencetemplates.form).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.form()).toBeInstanceOf(Object);
  });

  it('summary', () => {
    expect(RenewLicencetemplates.summary).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.summary()).toBeInstanceOf(Object);
  });

  it('fileUploads', () => {
    expect(RenewLicencetemplates.fileUploads).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.fileUploads()).toBeInstanceOf(Object);
  });

  it('uploadDocuments', () => {
    expect(RenewLicencetemplates.uploadDocuments).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.uploadDocuments()).toBeInstanceOf(Object);
  });

  it('returnDocuments', () => {
    expect(RenewLicencetemplates.returnDocuments).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.returnDocuments()).toBeInstanceOf(Object);
  });

  it('accountUpgrade', () => {
    expect(RenewLicencetemplates.accountUpgrade).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.accountUpgrade()).toBeInstanceOf(Object);
  });

  it('notice', () => {
    expect(RenewLicencetemplates.notice).toBeInstanceOf(Function);
    expect(RenewLicencetemplates.notice()).toBeInstanceOf(Object);
  });
});
