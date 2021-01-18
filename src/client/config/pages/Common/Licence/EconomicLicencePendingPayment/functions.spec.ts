import fetch from 'client/services/fetch';
import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');

describe('pages/EconomicLicencePendingPayment/functions', () => {
  let props: any;
  let mockFetch: any;
  beforeEach(() => {
    props = {
      locale: { locale: 'en' },
      economicName: { reservationPeriod: 3, isSpecial: true },
    };
    mockFetch = fetch;
  });
  it('should handle findPaymentSummary function', () =>
    expect(functions.findPaymentSummary(props)).toBeInstanceOf(Array));
  it('should handle findPaymentSummary function with arabic', () => {
    props.locale.locale = 'ar';
    expect(functions.findPaymentSummary(props)).toBeInstanceOf(Array);
  });
  it('should handle findPaymentSummaryTotal function', () =>
    expect(functions.findPaymentSummaryTotal(props)).toBe(3000));
  it('should findPaymentSummaryTotal it is not Special', () => {
    const props = {
      locale: { locale: 'en' },
      economicName: { reservationPeriod: 3, isSpecial: false },
    };
    expect(functions.findPaymentSummaryTotal(props)).toBe(3000);
  });

  it('should properly call onClick', async () => {
    window.open = jest.fn();
    await functions.onClick({});
    expect(window.open).toBeCalled();
  });

  it('should properly call getStep with otherLicence', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicence' },
        legalForm: { legalForm: 'otherLicence' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      {
        name: 'economic_name',
        subSteps: [
          'ded_approval',
          'payment',
          'initial_approval',
          'download_certificate',
        ],
      },
      {
        name: 'economic_licence',
        subSteps: ['ded_approval', 'payment', 'download_certificate'],
      },
    ]);
  });

  it('should properly call getStep with branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
        legalForm: { legalForm: 'branchForeign' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      {
        name: 'economic_name',
        subSteps: ['ded_approval', 'payment', 'initial_approval'],
      },
      { name: 'initial_registration' },
      {
        name: 'economic_licence',
        subSteps: ['submit_licence', 'ded_approval', 'payment'],
      },
      { name: 'final_registration' },
    ]);
  });

  it('should properly call getStep with branchGCC', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchGCC' },
        legalForm: { legalForm: 'branchGCC' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      {
        name: 'economic_name',
        subSteps: ['ded_approval', 'payment', 'initial_approval'],
      },
      { name: 'initial_registration' },
      {
        name: 'economic_licence',
        subSteps: ['submit_licence', 'ded_approval', 'payment'],
      },
      { name: 'final_registration' },
    ]);
  });

  it('should properly call getStep with other Licences', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { legalForm: 'instant' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      { name: 'ded_approval' },
      { name: 'ica_payment' },
      { name: 'initial_approval' },
      { name: 'payment' },
      { name: 'download_certificate' },
    ]);
  });

  it('should properly call formatValue with number', () => {
    expect(functions.formatValue(1254)).toBe('1,254.00');
  });
  it('should properly call formatValue with string', () => {
    // @ts-ignore
    expect(functions.formatValue('1254')).toBe('1254');
  });

  it('should properly call getCurrentStep others', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'others' },
        legalForm: { legalForm: 'others' },
      },
      icaApproved: 'Approved',
    };
    expect(functions.getCurrentStep(state)).toBe('economic_licence');
  });

  it('should properly call getCurrentStep with instant and approved ica', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { legalForm: 'instant' },
      },
      icaApproved: 'Approved',
    };
    expect(functions.getCurrentStep(state)).toBe(false);
  });

  it('should properly call getCurrentStep tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { legalForm: 'tajer' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('payment');
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
});
