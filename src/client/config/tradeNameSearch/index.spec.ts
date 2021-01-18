import { config, templates, translations } from './index';

jest.mock('client/templates/Header', () => '');
jest.mock('client/templates/Footer', () => '');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('TradeNameSearch/index', () => {
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
