import { addEconomicActivitySteps } from './steps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('checkApplicationStatus/steps', () => {
  it('should export config for the service', () => {
    expect(addEconomicActivitySteps).toBeInstanceOf(Array);
  });
});
