import { config, templates, translations } from './index';

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

describe('payApplicationFees/index', () => {
  it('should export config object', () => {
    expect(config).toBeInstanceOf(Object);
  });
  it('should export templates object', () => {
    expect(templates).toBeInstanceOf(Object);
  });
  it('should export translations object', () => {
    expect(translations).toBeInstanceOf(Object);
  });
});
