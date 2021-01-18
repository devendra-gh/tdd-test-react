import templates from './index';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [],
        ar: [],
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
  it('summary is function', () =>
    expect(templates.summary).toBeInstanceOf(Function));
  it('login is function', () =>
    expect(templates.login).toBeInstanceOf(Function));
  it('payment is function', () =>
    expect(templates.payment).toBeInstanceOf(Function));
  it('serviceForm is function', () =>
    expect(templates.serviceForm).toBeInstanceOf(Function));
  it('landing is function', () =>
    expect(templates.landing).toBeInstanceOf(Function));
});
