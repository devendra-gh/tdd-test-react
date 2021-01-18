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
  // it('form is funciton', () => expect(templates.form).toBeInstanceOf(Function));
  // it('notice is funciton', () =>
  //   expect(templates.notice).toBeInstanceOf(Function));
  it('home is funciton', () => expect(templates.home).toBeInstanceOf(Function));
  it('login is funciton', () =>
    expect(templates.login).toBeInstanceOf(Function));
  it('profile is funciton', () =>
    expect(templates.profile).toBeInstanceOf(Function));
  it('notice is funciton', () =>
    expect(templates.notice).toBeInstanceOf(Function));
  it('summary is funciton', () =>
    expect(templates.summary).toBeInstanceOf(Function));
  it('permitForm is funciton', () =>
    expect(templates.permitForm).toBeInstanceOf(Function));
});
