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

  it('notice is function', () =>
    expect(templates.notice).toBeInstanceOf(Function));

  // it('home is function', () => expect(templates.home).toBeInstanceOf(Function));

  it('login is function', () =>
    expect(templates.login).toBeInstanceOf(Function));

  // it('licenceForm is function', () =>
  //   expect(templates.licenceForm).toBeInstanceOf(Function));
});
