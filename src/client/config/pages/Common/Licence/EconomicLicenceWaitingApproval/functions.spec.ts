import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

describe('pages/economicLicenceWaitingApproval/functions', () => {
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
  });

  it('should properly call getStep instant', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { legalForm: 'instant' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep allInOne', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'allInOne' },
        legalForm: { legalForm: 'allInOne' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { legalForm: 'tajer' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
        legalForm: { legalForm: 'branchForeign' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep otherLicence', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicence' },
        legalForm: { legalForm: 'otherLicence' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStepStatus others', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'others' },
        legalForm: { legalForm: 'others' },
      },
    };
    expect(functions.getStepStatus(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStepStatus branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
        legalForm: { legalForm: 'branchForeign' },
      },
    };
    expect(functions.getStepStatus(state)).toBeInstanceOf(Object);
  });
  it('should properly call getStepStatus tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { legalForm: 'tajer' },
      },
    };
    expect(functions.getStepStatus(state)).toBeInstanceOf(Object);
  });

  it('should properly call getCurrentStep others', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'others' },
        legalForm: { legalForm: 'others' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('economic_licence');
  });

  it('should properly call getCurrentStep tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { legalForm: 'tajer' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('ded_approval');
  });
});
