import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNamePayment/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    const tradenameFeesData = [
      { feeDescEn: 'feeDescEn', FeeAmount: 'FeeAmount' },
    ];
    const props = {
      locale: 'en',
      tradenameFees: JSON.stringify(tradenameFeesData),
      tnNumber: 'tnNumber',
      submitDate: Date.now,
    };
    expect(index[0].props.onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit without tradenameFees', () => {
    const props = {
      locale: 'en',
      tnNumber: 'tnNumber',
      submitDate: Date.now,
    };
    expect(index[0].props.onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call list with en locale', () => {
    const tradenameFeesData = [
      { feeDescEn: 'feeDescEn', FeeAmount: 'FeeAmount' },
    ];
    const props = {
      locale: 'en',
      tnNumber: 'tnNumber',
      tradenameFees: JSON.stringify(tradenameFeesData),
      submitDate: Date.now,
    };
    expect(index[0].props.onPageInit(props).list()).toBeInstanceOf(Object);
  });

  it('should properly call list with ar locale', () => {
    const tradenameFeesData = [
      { feeDescEn: 'feeDescEn', FeeAmount: 'FeeAmount' },
    ];
    const props = {
      locale: 'ar',
      tradenameFees: JSON.stringify(tradenameFeesData),
      tnNumber: 'tnNumber',
      submitDate: Date.now,
    };
    expect(index[0].props.onPageInit(props).list()).toBeInstanceOf(Object);
  });

  it('should properly call list without tradenameFees', () => {
    const props = {
      locale: 'en',
      tnNumber: 'tnNumber',
      submitDate: Date.now,
    };
    expect(index[0].props.onPageInit(props).list()).toBeInstanceOf(Object);
  });
});
