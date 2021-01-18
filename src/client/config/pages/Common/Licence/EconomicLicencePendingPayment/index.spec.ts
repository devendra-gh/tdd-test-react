import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicLicencePendingPayment/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    const props = {
      locale: 'en',
      licenceFees: '[{"FeeAmount":"FeeAmount"}]',
    };

    expect(index[0].onPageInit(props).list()).toBeInstanceOf(Array);
  });

  it('should properly call onPageInit', () => {
    const props = {
      locale: 'ar',
      licenceFees: '[{"FeeAmount":"FeeAmount"}]',
    };

    expect(index[0].onPageInit(props).list()).toBeInstanceOf(Array);
  });
  it('should properly call onPageInit', () => {
    const props = {
      locale: 'ar',
    };

    expect(index[0].onPageInit(props).list()).toBeInstanceOf(Array);
  });

  it('should properly call onPageInit', () => {
    const props = {
      locale: 'en',
    };

    expect(index[0].onPageInit(props).list()).toBeInstanceOf(Array);
  });
});
