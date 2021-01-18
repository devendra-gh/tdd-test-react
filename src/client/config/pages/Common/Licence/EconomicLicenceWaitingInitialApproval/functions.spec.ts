import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicLicenceWaitingInitialApproval', () => {
  it('should properly call getStep', () => {
    expect(
      functions.getStep({
        economicLicense: {
          licenceType: { licenceType: 'tajer' },
          legalForm: { legalForm: 'soleProprietorshipLLC' },
        },
      }),
    ).toBeInstanceOf(Array);
  });

  it('should properly call getStep', () => {
    expect(
      functions.getStep({
        economicLicense: {
          licenceType: { licenceType: '123' },
          legalForm: { legalForm: '123' },
        },
      }),
    ).toBeInstanceOf(Array);
  });
});
