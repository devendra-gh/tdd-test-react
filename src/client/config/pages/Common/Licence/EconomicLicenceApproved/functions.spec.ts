import fetch from 'client/services/fetch';
import functions from './functions';
import { categoriesAr, categoriesEn } from '../../../../data';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Common/Licence/economicLicenceApproved', () => {
  let mockFetch: any;
  beforeEach(() => {
    window.open = jest.fn();
    mockFetch = fetch;
  });

  it('should properly call onClick', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
      businessKey: 'businessKey',
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({});
    });
    functions.onClick(props);
  });

  it('should properly call getStep instant', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { licenceType: 'instant' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep allInOne', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'allInOne' },
        legalForm: { licenceType: 'allInOne' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { licenceType: 'tajer' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStep others', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'others' },
        legalForm: { licenceType: 'others' },
      },
    };
    expect(functions.getStep(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStepStatus others', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'others' },
        legalForm: { licenceType: 'others' },
      },
    };
    expect(functions.getStepStatus(state)).toBeInstanceOf(Object);
  });

  it('should properly call getStepStatus tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { licenceType: 'tajer' },
      },
    };
    expect(functions.getStepStatus(state)).toBeInstanceOf(Object);
  });

  it('should properly call getCurrentStep others', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'others' },
        legalForm: { licenceType: 'others' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('economic_licence');
  });

  it('should properly call getCurrentStep tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { licenceType: 'tajer' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('download_certificate');
  });

  it('should properly call documentDownload', () => {
    const props = {
      capId: 'Cap-Id',
      cnNumber: 'CN-Number',
    };
    window.open = jest.fn();
    functions.documentDownload(props);
    expect(window.open).toBeCalledTimes(1);
  });

  it('should properly call documentDownload without capId and CnNumber', () => {
    const props = {
      capId: null,
      cnNumber: null,
    };
    window.open = jest.fn();
    functions.documentDownload(props);
    expect(window.open).toBeCalledTimes(1);
  });

  it('should properly call getCategories with instant licence type', () => {
    const props = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { licenceType: 'instant' },
      },
    };
    expect(functions.getCategories(props)).toMatchObject({
      categoriesAr,
      categoriesEn,
    });
  });

  it('should properly call getCategories with different  licence type than instant', () => {
    const props = {
      economicLicense: {
        licenceType: { licenceType: 'tadjer' },
        legalForm: { legalForm: 'tadjer' },
      },
    };
    expect(functions.getCategories(props)).toBe(null);
  });
});
