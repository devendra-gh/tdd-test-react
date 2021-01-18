import { config, templates, translations } from './index';

jest.mock('./templates', () => ({}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('commercialPromotions/index', () => {
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
