import { isEmail, isMobile } from './validation';

describe('utils/validations/isEmail', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmail('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmail('test@email.com')).toBe(true);
  });
});

describe('utils/validations/isMobile', () => {
  it('should properly call isURL and return false', () => {
    expect(isMobile('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isMobile('+971504578796')).toBe(true);
  });
});
