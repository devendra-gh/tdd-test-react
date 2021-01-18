import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/services', () => {
  it('should exist checkApplicationStatus', () => {
    expect(index.checkApplicationStatus).toBeInstanceOf(Object);
  });
});
