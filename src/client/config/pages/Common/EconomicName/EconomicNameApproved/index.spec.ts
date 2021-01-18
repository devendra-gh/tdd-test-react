import fetch from 'client/services/fetch';
import result from './index';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNameApproved/index', () => {
  let fetchMock: any;
  beforeEach(() => {
    fetchMock = fetch;
  });
  it('should export a result object', () => {
    expect(result).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', async () => {
    const props = {
      actions: {
        economicLicenceConditions: {
          update: jest.fn(),
        },
        economicLicenceActivities: {
          update: jest.fn(),
        },
      },
      activities: JSON.stringify(['(ActivityCode:4329901)']),
    };
    fetchMock.mockImplementation(() => ({
      data: {
        result: {
          TransactionRequirementData: 'data',
        },
      },
    }));
    expect(await result[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit without activities', () => {
    const props = {
      actions: {
        economicLicenceConditions: {
          update: jest.fn(),
        },
      },
    };
    expect(result[0].onPageInit(props)).toBeInstanceOf(Promise);
  });
});
