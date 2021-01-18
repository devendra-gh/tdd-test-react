import investorProtection from './index';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [{ text: 'text', url: 'http://url' }],
        ar: [{ text: 'text', url: 'http://url' }],
      },
    };
  }),
}));
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('templates', () => {
  it('instance check', () => {
    expect(investorProtection).toBeInstanceOf(Object);
  });

  it('form', () => {
    expect(investorProtection.form).toBeInstanceOf(Function);
    expect(investorProtection.form()).toBeInstanceOf(Object);
  });

  it('serviceType', () => {
    expect(investorProtection.serviceType).toBeInstanceOf(Function);
    expect(investorProtection.serviceType()).toBeInstanceOf(Object);
  });

  it('landing', () => {
    expect(investorProtection.landing).toBeInstanceOf(Function);
    expect(investorProtection.landing()).toBeInstanceOf(Object);
  });

  it('login', () => {
    expect(investorProtection.login).toBeInstanceOf(Function);
    expect(investorProtection.login()).toBeInstanceOf(Object);
  });

  it('notice', () => {
    expect(investorProtection.notice).toBeInstanceOf(Function);
    expect(investorProtection.notice()).toBeInstanceOf(Object);
  });
});
