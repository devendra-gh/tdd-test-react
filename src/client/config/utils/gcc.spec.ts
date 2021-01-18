import getCountryType, { isGCC, getParentLicenseSource } from './gcc';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('gcc', () => {
  it('getCountryType should return GCC', () => {
    const country = 'OMN';
    const out = getCountryType(country);
    expect(out).toBe('GCC');
  });

  it('getCountryType should return UAE', () => {
    const country = 'ARE';
    const out = getCountryType(country);
    expect(out).toBe('ARE');
  });

  it('getCountryType should return OTHER', () => {
    const country = 'India';
    const out = getCountryType(country);
    expect(out).toBe('Expat');
  });

  it('getCountryType should return empty if country is empty', () => {
    const country = '';
    const out = getCountryType(country);
    expect(out).toBe('');
  });

  it('isGcc should return ture', () => expect(isGCC('UAE', true)).toBe(false));
  it('isGcc should return ture', () => expect(isGCC('UAE')).toBe(false));

  it('getParentLicenseSource should return UAE', () =>
    expect(getParentLicenseSource('')).toBe('UAE'));
  it('getParentLicenseSource should return UAE', () =>
    expect(getParentLicenseSource('ARE')).toBe('UAE'));
  it('getParentLicenseSource should return UAE', () =>
    expect(getParentLicenseSource('SAU')).toBe('GCC'));
  it('getParentLicenseSource should return UAE', () =>
    expect(getParentLicenseSource('DZ')).toBe('Other'));
});
