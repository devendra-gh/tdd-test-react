import genericConfig from './genericConfig';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('genericConfig', () => {
  it('permitEstimatedFees calculateEstimatedFees to be called', async () => {
    const result = genericConfig.formFields.permitEstimatedFees.calculateBaseEstimatedPrice(
      {
        baseFees: 200,
        otherFees: [],
      },
    );
    expect(result).toBeInstanceOf(Array);
  });
  it('permitEstimatedFees calculateEstimatedFees to be called', async () => {
    const result = genericConfig.formFields.permitEstimatedFees.calculateBaseEstimatedPrice(
      {
        baseFees: 0,
      },
    );
    expect(result).toBeInstanceOf(Array);
  });
});
