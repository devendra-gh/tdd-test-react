import {
  steps,
  withoutNameSteps,
  moaWithoutNameSteps,
  instantLicenceSteps,
  moeSteps,
  economicNameSteps,
} from './steps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Steps', () => {
  it('should be defined', () => {
    expect(steps).toBeInstanceOf(Array);
    expect(withoutNameSteps).toBeInstanceOf(Array);
    expect(moaWithoutNameSteps).toBeInstanceOf(Array);
    expect(instantLicenceSteps).toBeInstanceOf(Array);
    expect(moeSteps).toBeInstanceOf(Array);
    expect(economicNameSteps).toBeInstanceOf(Array);
  });
});
