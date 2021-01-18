import result from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicLicenceApproved/index', () => {
  it('should export a result object', () => {
    expect(result).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    const props = {
      activities: '[{"ActivityCode":"4329901"}]',
      economicLicense: {
        licenceType: { licenceType: 'tadjer' },
      },
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };
    expect(result[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit withouit data', () => {
    const props = {
      activities: '[{"ActivityCode":"4329901"}]',
      economicLicense: {},
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };
    expect(result[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
