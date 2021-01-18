import steps from './steps';

jest.mock('./templates');
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/config', () => {
  it('should be a instance of object', () => {
    expect(steps).toBeInstanceOf(Object);
  });
});
