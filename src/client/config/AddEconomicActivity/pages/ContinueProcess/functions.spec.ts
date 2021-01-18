import bpm from 'client/services/bpm';
import functions from './functions';

const qs = require('query-string');

jest.mock('query-string');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/common/continueProcess', () => {
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
          newActivityApiData: {
            update: jest.fn(),
            reset: jest.fn(),
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
    it('returns emiratesId, submittedOn, altId', async () => {
      mockBpmgetVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            emiratesId: { value: 'emiratesId' },
            submittedOn: { value: 'b' },
            altId: { value: 'a' },
          },
        });
      });
      await functions.onPageInit(props);
      expect(props.actions.newActivityApiData.update).toBeCalled();
    });
    it('emiratesId - empty/ null or undefined', async () => {
      mockBpmgetVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {},
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
