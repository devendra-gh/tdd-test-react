import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/economicLicencePendingICApayment/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      locale: { locale: 'en' },
      economicName: { reservationPeriod: 3, isSpecial: true },
    };
  });
  it('should handle findPaymentSummary function', () =>
    expect(functions.findPaymentSummary(props)).toBeInstanceOf(Array));
  it('should handle findPaymentSummary function with arabic', () => {
    props.locale.locale = 'ar';
    expect(functions.findPaymentSummary(props)).toBeInstanceOf(Array);
  });
  it('should handle findPaymentSummaryTotal function', () =>
    expect(functions.findPaymentSummaryTotal(props)).toBe(15));
  it('should findPaymentSummaryTotal it is not Special', () => {
    const props1 = {
      locale: { locale: 'en' },
      economicName: { reservationPeriod: 3, isSpecial: false },
    };
    expect(functions.findPaymentSummaryTotal(props1)).toBe(15);
  });

  it('should properly call onClick', async () => {
    window.open = jest.fn();
    await functions.onClick({});
    expect(window.open).toBeCalled();
  });

  it('should properly call getStep ', () => {
    expect(
      functions.getStep({
        economicLicense: {
          licenceType: { licenceType: '123' },
          legalForm: { legalForm: '123' },
        },
      }),
    ).toBeInstanceOf(Array);
  });

  it('should properly call getStepStatus', () => {
    expect(functions.getStepStatus({})).toMatchObject({
      moa_approval: 'finish',
      ded_approval: 'finish',
    });
  });
});
