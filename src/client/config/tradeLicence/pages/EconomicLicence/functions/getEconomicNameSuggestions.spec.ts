import { getLegalFormType } from './getEconomicNameSuggestions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functiuons/getEconomicNameSuggestions', () => {
  it('should properly call getLegalFormType with limitedLiabilityCompanyLLC', () => {
    expect(getLegalFormType('limitedLiabilityCompanyLLC')).toBe(
      'Limited Liability Company',
    );
  });
  it('should properly call getLegalFormType with soleProprietorshipLLC', () => {
    expect(getLegalFormType('soleProprietorshipLLC')).toBe(
      'Sole Proprietorship L.L.C.',
    );
  });
  it('should properly call getLegalFormType with PJSCSoleProp', () => {
    expect(getLegalFormType('PJSCSoleProp')).toBe('Establishment');
  });
  it('should properly call getLegalFormType with sPJSCPublic', () => {
    expect(getLegalFormType('PJSCPublic')).toBe('Establishment');
  });
  it('should properly call getLegalFormType with PJSCPrivate', () => {
    expect(getLegalFormType('PJSCPrivate')).toBe('Establishment');
  });
});
