import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/index', () => {
  it('should export InstanceLicence', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
