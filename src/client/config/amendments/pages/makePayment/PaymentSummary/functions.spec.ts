import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/makePayment/PaymentSummary', () => {
  const mockBpm: any = bpm.message;
  let props: any;
  window.open = jest.fn();

  props = {
    actions: {
      amendmentServerError: {
        reset: jest.fn(),
        update: jest.fn(),
      },
    },
  };
  beforeEach(() => {
    mockBpm.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
      });
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('pay functions', () => {
    it('should be instance of function pay', () =>
      expect(functions.pay).toBeInstanceOf(Function));

    it('should call function pay with bpm success', async () => {
      props = {
        ...props,
        businessKey: '123',
        paymentLink: 'test',
      };
      await functions.pay(props)();
    });

    it('should call function payment link else condition', async () => {
      props = {
        ...props,
        businessKey: '123',
        paymentLink: '',
      };
      await functions.pay(props)();
    });
    it('shoudl call formatValue', () => {
      functions.formatValue(100);
      functions.formatValue('100');
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      props = {
        ...props,
        apTransactionNumber: 'submit-date',
        submitDate: '13-10-2019',
        locale: 'en',
        licenceFees:
          '[{"authorityEn":"Department of Economic Development","authorityAr":"دائرة التنمية الاقتصادية","feeDescEn":"Capital Amendment Fee","feeDescAr":" رسم تعديل راس المال","FeeAmount":100,"TrackingNumber":"null"}]',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
      props = {
        ...props,
        apTransactionNumber: '',
        submitDate: '',
        licenceFees: undefined,
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
      props = {
        ...props,
        apTransactionNumber: 'submit-date',
        submitDate: '13-10-2019',
        locale: 'ar',
        licenceFees:
          '[{"authorityEn":"Department of Economic Development","authorityAr":"دائرة التنمية الاقتصادية","feeDescEn":"Capital Amendment Fee","feeDescAr":" رسم تعديل راس المال","FeeAmount":100,"TrackingNumber":"null"}]',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
    });
  });
});
