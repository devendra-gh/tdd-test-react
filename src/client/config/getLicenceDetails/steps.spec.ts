import { getLicenceDetailsSteps } from './steps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getLicenceDetailsSteps/steps', () => {
  it('should export config for the service', () => {
    expect(getLicenceDetailsSteps).toBeInstanceOf(Array);
  });
});
