import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/success', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
