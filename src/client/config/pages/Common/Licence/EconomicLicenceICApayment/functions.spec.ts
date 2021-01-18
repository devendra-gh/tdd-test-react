import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicLicenceICApayment', () => {
  it('should properly call getStep', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { legalForm: 'soleProprietorshipLLC' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Array);
  });

  it('should properly call getStep false', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: '123' },
        legalForm: { legalForm: '123' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Array);
  });

  it('should properly call getStepStatus', () => {
    expect(functions.getStepStatus({})).toMatchObject({
      moa_approval: 'finish',
      ded_approval: 'finish',
    });
  });
});
