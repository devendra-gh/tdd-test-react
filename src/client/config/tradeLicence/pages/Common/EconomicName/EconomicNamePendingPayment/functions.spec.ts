import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('instantLicence/PendingPayment/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      locale: { locale: 'en' },
      economicName: { reservationPeriod: 3, isSpecial: true },
    };
  });

  it('should handle findPaymentSummary to return a function', () =>
    expect(functions.findPaymentSummary(props)('04')).toBeInstanceOf(Array));

  it('should handle findPaymentSummary function with arabic', () => {
    props.locale.locale = 'ar';
    expect(functions.findPaymentSummary(props)()).toBeInstanceOf(Array);
  });

  it('should handle findPaymentSummaryTotal function', () =>
    expect(functions.findPaymentSummaryTotal(props)('04')).toBe(1615));

  it('should handle findPaymentSummaryTotal function without parans', () =>
    expect(functions.findPaymentSummaryTotal(props)()).toBe(1215));

  it('should findPaymentSummaryTotal it is not Special', () => {
    const props1 = {
      locale: { locale: 'en' },
      economicName: { reservationPeriod: 3, isSpecial: false },
    };
    expect(functions.findPaymentSummaryTotal(props1)).toBeInstanceOf(Function);
  });

  it('should properly call onClick', async () => {
    window.open = jest.fn();
    await functions.onClick({});
    expect(window.open).not.toBeCalled();
  });

  it('should properly call getStep with branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
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

  it('should properly get result from  formatValue ', () =>
    expect(functions.formatValue(500)).toBe('500.00'));

  it('should properly get result from  formatValue when force passing string ', () =>
    // @ts-ignore
    expect(functions.formatValue('500')).toBe('500'));
});
