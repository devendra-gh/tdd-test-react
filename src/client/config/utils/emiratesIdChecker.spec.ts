import emiratesIdChecker from './emiratesIdChecker';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Client/config/utilis/emiratesIdCHecker', () => {
  it('should properly call emiratesIdChecker', () => {
    expect(emiratesIdChecker('7815465325487')).toBe(false);
  });

  it('should properly call emiratesIdChecker', () => {
    expect(emiratesIdChecker('784123456789012')).toBe(false);
  });
});
