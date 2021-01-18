import templates from './index';

jest.mock('client/templates/Header', () => () => '');
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
  it('licenceSummaryTemplate is function', () =>
    expect(templates.licenceSummaryTemplate).toBeInstanceOf(Function));
  it('login is funciton', () =>
    expect(templates.login).toBeInstanceOf(Function));
  it('licenceFormTemplate is funciton', () =>
    expect(templates.licenceFormTemplate).toBeInstanceOf(Function));
  it('landingTemplate is funciton', () =>
    expect(templates.landingTemplate).toBeInstanceOf(Function));
});
