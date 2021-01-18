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

describe('templates', () => {
  it('instance check', () => {
    expect(templates).toBeInstanceOf(Object);
  });

  // it('home is function', () => expect(templates.home).toBeInstanceOf(Function));

  it('login is function', () =>
    expect(templates.login).toBeInstanceOf(Function));

  // it('licenceForm is function', () =>
  //   expect(templates.licenceForm).toBeInstanceOf(Function));
});
