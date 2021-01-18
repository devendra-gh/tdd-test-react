import bpm from 'client/services/bpm';
import functions from './functions';
import { PERMIT_SEASONAL_PROMOTION } from '../../utils/constants/permits';

const qs = require('querystring');

jest.mock('querystring');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/continueProcessRouter/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(value => value),
      user: {
        IDN: 'emiratesId',
      },
      history: {
        location: {
          search: 'instanceId="testid"&businessKey="testkey"',
        },
        push: jest.fn(),
      },
      actions: {
        businessKey: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        serviceType: {
          update: jest.fn(),
        },
        permitType: {
          update: jest.fn(),
        },
        permitInfo: {
          update: jest.fn(),
        },
      },
      serviceType: PERMIT_SEASONAL_PROMOTION,
      permitInfo: {
        [PERMIT_SEASONAL_PROMOTION]: {
          permitDetails: { startDate: '2020-03-03', endDate: '2021-03-03' },
        },
      },
    };
  });
  const mockQs: any = qs.parse;
  const mockBpm: any = bpm.state;
  const mockBpmgetVariables: any = bpm.getVariables;
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    beforeEach(() => {
      props = {
        i18n: jest.fn(value => value),
        user: {
          IDN: 'emiratesId',
        },
        history: {
          location: {
            search: 'instanceId="testid"&businessKey="testkey"',
          },
          push: jest.fn(),
        },
        actions: {
          businessKey: {
            update: jest.fn(),
            reset: jest.fn(),
          },
          instanceId: {
            update: jest.fn(),
            reset: jest.fn(),
          },
          serviceType: {
            update: jest.fn(),
          },
          permitType: {
            update: jest.fn(),
          },
          permitInfo: {
            update: jest.fn(),
          },
        },
        serviceType: PERMIT_SEASONAL_PROMOTION,
        permitInfo: {
          [PERMIT_SEASONAL_PROMOTION]: {
            permitDetails: { startDate: '2020-03-03', endDate: '2021-03-03' },
          },
        },
      };
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: 'businessKey',
        };
      });
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          data: { value: '/' },
        });
      });
      mockBpmgetVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            serviceName: {
              value: PERMIT_SEASONAL_PROMOTION,
            },
            seasonalPromotions: {
              value: 'seasonalPromotions',
            },
            emiratesId: {
              value: 'emiratesId',
            },
          },
        });
      });
    });
    it('should properly call onPageInit ', async () => {
      functions.onPageInit(props);
      expect(props.history.push).not.toBeCalled();
    });
    it('serviceName doesnot exhist ', async () => {
      mockBpmgetVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            serviceName: {
              value: 'test',
            },
            seasonalPromotions: {
              value: 'seasonalPromotions',
            },
            emiratesId: {
              value: 'emiratesId',
            },
          },
        });
      });
      functions.onPageInit(props);
      expect(props.history.push).not.toBeCalled();
    });
    it('instanceId and businessKey empty', async () => {
      mockQs.mockImplementation(() => {
        return {
          instanceId: '',
          businessKey: '',
        };
      });
      functions.onPageInit(props);
    });
    it('Invalid instanceId', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({});
      });
      functions.onPageInit(props);
    });
    // it('serviceType and seasonalPromotions  - empty/ null or undefined', async () => {
    //   mockBpmgetVariables.mockImplementation(() => {
    //     return Promise.resolve({
    //       data: {
    //         emiratesId: {
    //           value: 'emiratesId',
    //         },
    //       },
    //     });
    //   });
    //   await functions.onPageInit(props);
    //   expect(props.actions.businessKey.update).toBeCalled();
    // });
    it('emiratesId - empty/ null or undefined', async () => {
      mockBpmgetVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            serviceName: {
              value: 'test',
            },
            seasonalPromotions: {
              value: 'seasonalPromotions',
            },
          },
        });
      });
      await functions.onPageInit(props);
      expect(props.actions.businessKey.reset).toBeCalled();
    });
    it('empty BPM variables ', async () => {
      mockBpmgetVariables.mockImplementation(() => {
        return Promise.resolve(false);
      });
      await functions.onPageInit(props);
      expect(props.history.push).toBeCalled();
    });
  });
});
