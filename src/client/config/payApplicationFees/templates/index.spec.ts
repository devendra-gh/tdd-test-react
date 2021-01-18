import payApplicationFees from './index';

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
    expect(payApplicationFees).toBeInstanceOf(Object);
  });

  it('home', () => {
    expect(payApplicationFees.home).toBeInstanceOf(Function);
    expect(payApplicationFees.home()).toBeInstanceOf(Object);
  });

  it('form', () => {
    expect(payApplicationFees.form).toBeInstanceOf(Function);
    expect(payApplicationFees.form()).toBeInstanceOf(Object);
  });

  it('summary', () => {
    expect(payApplicationFees.summary).toBeInstanceOf(Function);
    expect(payApplicationFees.summary()).toBeInstanceOf(Object);
  });
  it('notice', () => {
    expect(payApplicationFees.notice).toBeInstanceOf(Function);
    expect(payApplicationFees.notice()).toBeInstanceOf(Object);
  });
});
