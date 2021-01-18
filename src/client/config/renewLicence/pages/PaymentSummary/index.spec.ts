import index from './index';

jest.mock('client/config/renewLicence/utils/common.ts');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Economiclicence/index', () => {
  const props = {
    i18n: () => '',
    locale: 'en',
    renewalFees:
      '[{"FeeAmount":100.111,"feeDescEn":"test","feeDescAr":"test"}]',
    actions: {
      reachedPayment: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
      paymentAmount: {
        update: jest.fn(),
      },
    },
  };
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should call onPageInit', () => {
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should call onPageInit with ar', () => {
    props.locale = 'ar';
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
