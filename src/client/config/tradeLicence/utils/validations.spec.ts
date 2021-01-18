import {
  isURL,
  isEmail,
  isMobile,
  isEmiratesId,
  capitalize,
} from './validations';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isURL', () => {
  it('should properly call isURL and return false', () => {
    expect(isURL('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isURL('https://test.ae')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isEmail', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmail('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmail('test@email.com')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isMobile', () => {
  it('should properly call isURL and return false', () => {
    expect(isMobile('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isMobile('+971504578796')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isEmiratesId', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmiratesId('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmiratesId('784198505249585')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/capitalize', () => {
  it('should properly call capitalize', () => {
    // @ts-ignore
    expect(capitalize(12345)).toBe('');
    expect(capitalize('test')).toBe('Test');
  });
});
