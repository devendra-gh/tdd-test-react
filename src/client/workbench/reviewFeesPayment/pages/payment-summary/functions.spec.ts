/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import { init, f1_visible, f2_onClick, onPageInit } from './functions';
import { returnCamundaMessage } from '../../sharedFunctions/util';
// import { addAnalyticsEvent } from '../../sharedFunctions/analytics';
jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
// jest.mock('../../sharedFunctions/getVariables');
jest.mock('../../sharedFunctions/util');

describe('economicRecordCertificate/pages/application-in-progress', () => {
  let props: any;
  const mockBpm: any = bpm.message;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      businessKey: 'businessKey',
      camundaMessage: true,
      analytics: {
        addEvent: jest.fn(),
      },
      actions: {
        showSideBar: {
          update: jest.fn(),
        },
        camundaMessage: {
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
        payment_table_rows: {
          update: jest.fn(),
        },
        paymentTotal: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        paymentURL: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
    mockBpm.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
      });
    });
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });
  });
  describe('onPageInit functions', () => {
    it('should properly call onPageInit', async () => {
      await onPageInit(props);
    });
  });

  describe('f1_visible functions', () => {
    it('should properly call f1_visible', async () => {
      await f1_visible(props);
    });

    it('should properly call f1_visible', async () => {
      props = {
        ...props,
        camundaMessage: false,
      };
      await f1_visible(props);
    });
  });

  describe('f2_onClick functions', () => {
    it('should properly call f2_onClick', async () => {
      const mockRturnCamundaMessage: any = returnCamundaMessage;
      await f2_onClick(props);

      mockRturnCamundaMessage.mockImplementation(() => {
        return '';
      });
    });
  });
});
