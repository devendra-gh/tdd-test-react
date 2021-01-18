/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import { init, f1_visible, f2_onClick } from './functions';
import { returnCamundaMessage } from '../../sharedFunctions/util';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../sharedFunctions/util');

describe('economicRecordCertificate/pages/application-in-progress', () => {
  let props: any;
  const mockBpm: any = bpm.message;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      businessKey: 'businessKey',
      camundaMessage: true,
      actions: {
        showSideBar: {
          update: jest.fn(),
        },
        camundaMessage: {
          update: jest.fn(),
        },
        loading: {
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
        success: 'Success',
        message: 'Success',
      });
    });
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
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
