import { goldenServicesSteps } from './steps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('goldenServices/steps', () => {
  it('should export config for the service', () => {
    expect(goldenServicesSteps).toBeInstanceOf(Array);
  });
});
