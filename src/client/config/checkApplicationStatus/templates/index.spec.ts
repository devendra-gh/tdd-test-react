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
  it('login is function', () =>
    expect(templates.login).toBeInstanceOf(Function));

  it('statusLanding is function', () =>
    expect(templates.statusLanding).toBeInstanceOf(Function));

  it('statusForm is function', () =>
    expect(templates.statusForm).toBeInstanceOf(Function));

  it('statusInfo is function', () =>
    expect(templates.statusInfo).toBeInstanceOf(Function));
});
