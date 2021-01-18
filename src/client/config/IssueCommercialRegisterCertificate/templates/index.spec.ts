import templates from './index';

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
    expect(templates).toBeInstanceOf(Object);
  });

  it('notice is function', () =>
    expect(templates.notice).toBeInstanceOf(Function));
  it('login is function', () =>
    expect(templates.login).toBeInstanceOf(Function));

  it('page404 is function', () =>
    expect(templates.page404).toBeInstanceOf(Function));

  it('home is function', () => expect(templates.home).toBeInstanceOf(Function));

  it('selectLicence is function', () =>
    expect(templates.selectLicence).toBeInstanceOf(Function));

  it('notice is function', () =>
    expect(templates.notice).toBeInstanceOf(Function));

  it('paymentSummary is function', () =>
    expect(templates.paymentSummary).toBeInstanceOf(Function));
});
