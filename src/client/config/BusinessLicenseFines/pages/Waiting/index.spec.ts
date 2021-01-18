import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/waiting', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check onPageInit', () => {
    const props = {
      paymentLink: '/',
    };
    index[0].onPageInit(props);
  });
});
