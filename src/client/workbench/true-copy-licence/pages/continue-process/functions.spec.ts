/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import { init } from './functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');

describe('economicRecordCertificate/pages/continue-process', () => {
  let props: any;

  const mockBpmState: any = bpm.state;
  const mockBpmGetVariables: any = bpm.getVariables;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      bpm: {
        state: jest.fn(),
        getVariables: jest.fn(),
      },
      history: {
        location: {
          search: "?instanceId='21321321'&businessKey='21321323213'",
        },
        push: jest.fn(),
      },
      actions: {
        showSideBar: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        paymentTag: {
          update: jest.fn(),
        },
        paymentLinkString: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        user: {
          IDN: 'dasasdas',
        },
        loading: {
          update: jest.fn(),
        },
      },
    };
    mockBpmState.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
        data: {
          value: 'asdsada',
          emiratesId: {
            value: 'dasasdas',
          },
        },
      });
    });
    mockBpmGetVariables.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
        data: {
          value: 'asdsada',
          emiratesId: {
            value: 'dasasdas',
          },
        },
      });
    });
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });
  });
});
