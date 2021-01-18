import {
  startPayment,
  init,
  handleTermsConditions,
  onPageInit,
} from './functions';
import { proceedToPayment } from '../../utils';
// import { PATH_SELECT_LICENCE } from '../../routes';

jest.mock('../../services', () => ({
  errorBoundary: jest.fn(),
}));

jest.mock('../../utils', () => ({
  proceedToPayment: jest.fn(),
  addAnalytics: jest.fn(),
  getFeeDetails: jest.fn().mockResolvedValue([
    {
      FeeAmount: 200,
      feeDescEn: 'English fee description',
      feeDescAr: 'Arabic fee description',
    },
  ]),
  getPaymentLink: jest
    .fn()
    .mockResolvedValueOnce('http://payment-link-test.co')
    .mockResolvedValueOnce('http://payment-link-test.co')
    .mockRejectedValue('Failed to get payment link'),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Payment Summary', () => {
  let props: any;
  window.open = jest.fn();

  beforeEach(() => {
    props = {
      locale: 'en',
      totalSection: '100',
      i18n: jest.fn(),
      history: { push: jest.fn() },
      actions: {
        showErrors: { update: jest.fn() },
        paymentLink: { update: jest.fn() },
        totalSection: { update: jest.fn() },
        startingPayment: { update: jest.fn() },
        termsAndConditionsValues: { update: jest.fn() },
        list: { update: jest.fn() },
        tags: { update: jest.fn() },
      },
    };
  });

  it('should get payment link on page initialization', async () => {
    await init(props);
    expect(props.actions.paymentLink.update).toHaveBeenCalledWith(
      'http://payment-link-test.co',
    );
    expect(props.actions.totalSection.update).toHaveBeenCalledWith(200);
  });

  it('should get fees on page initialization', async () => {
    props.locale = 'ar';
    await init(props);
    expect(props.actions.totalSection.update).toHaveBeenCalledWith(200);
  });

  it('should catch error fetching fee || paymenlink data', async () => {
    await init(props);
    expect(props.actions.paymentLink.update).toHaveBeenCalledWith(undefined);
  });

  it('should successfully run on page init', () => {
    const initProps = onPageInit(props);
    expect(initProps).toBeInstanceOf(Object);
  });

  it('should start payment if should start and terms and conditions are checked', async () => {
    const shouldStart = true;
    props.termsAndConditionsValues = [true];
    await startPayment(props, shouldStart);
    expect(proceedToPayment).toHaveBeenCalledWith(props, shouldStart);
  });

  it('should not start payment if should start but terms and conditions not checked', async () => {
    const shouldStart = true;
    props.termsAndConditionsValues = [false];
    await startPayment(props, shouldStart);
    expect(proceedToPayment).not.toHaveBeenCalled();
  });

  it('should not proceed with payment and redirect if should not start', async () => {
    const shouldStart = false;
    await startPayment(props, shouldStart);
    expect(proceedToPayment).toHaveBeenCalledWith(props, shouldStart);
    expect(props.history.push).toHaveBeenCalledWith(
      '/list-economic-licences-certificate',
    );
  });

  it('should update terms and conditions for each item', () => {
    props.termsAndConditionsValues = [true, true];
    handleTermsConditions(props, 0);
    expect(props.actions.termsAndConditionsValues.update).toHaveBeenCalledWith([
      false,
      true,
    ]);
  });
});
