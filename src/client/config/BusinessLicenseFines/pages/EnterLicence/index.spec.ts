import index from './index';
// import { steps } from 'client/config/steps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/enter-licence/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
