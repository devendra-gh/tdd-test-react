import getCountryType, { isGCC, getParentLicenseSource } from './nationality';
import { UAE } from '../constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('gcc', () => {
  it('getCountryType should return GCC', () => {
    const out = getCountryType('OMAN');
    expect(out).toBe('GCC');
  });

  it('getCountryType should return UAE', () => {
    const out = getCountryType('UNITED ARAB EMIRATES');
    expect(out).toBe('United Arab Emirates');
  });

  it('getCountryType should return OTHER', () => {
    const out = getCountryType('India');
    expect(out).toBe('Expat');
  });

  it('getCountryType should return empty if country is empty', () => {
    const out = getCountryType('');
    expect(out).toBe('');
  });

  it('isGcc should return false', () => expect(isGCC(UAE, true)).toBe(false));
  it('isGcc should return false', () =>
    expect(isGCC('United Kingdom')).toBe(false));

  it('getParentLicenseSource should return UAE for empty country', () =>
    expect(getParentLicenseSource('')).toBe('UAE'));
  it('getParentLicenseSource should return UAE', () =>
    expect(getParentLicenseSource(UAE)).toBe('UAE'));
  it('getParentLicenseSource should return GCC', () =>
    expect(getParentLicenseSource('SAUDI ARABIA')).toBe('GCC'));
  it('getParentLicenseSource should return Other', () =>
    expect(getParentLicenseSource('India')).toBe('Other'));
});
