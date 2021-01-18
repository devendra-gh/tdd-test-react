/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import { init, f1_visible, f2_onClick, onPageInit } from './functions';
import { returnCamundaMessage } from '../../sharedFunctions/utils';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../sharedFunctions/getVariables');
jest.mock('../../sharedFunctions/utils');

describe('economicRecordCertificate/pages/application-in-progress', () => {
  let props: any;
  const mockBpm: any = bpm.message;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      businessKey: 'businessKey',
      camundaMessage: true,
      locale: 'en',
      apTransactionNumber: '',
      submitDate: '',
      pageLoader: true,
      feeDetails:
        '{"feeDescEn":"EHSMS Reviewing","feeDescAr":"مراجعة أنظمة صحة وسلامة","FeeAmount":5000}',
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
        paymentTableRows: {
          update: jest.fn(),
        },
        paymentTotal: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        paymentTableColumns: {
          update: jest.fn(),
        },
        paymentURL: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
      history: {
        push: jest.fn(),
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
    it('should properly call init', () => {
      init(props);
    });
  });

  describe('f1_visible functions', () => {
    it('should properly call f1_visible', () => {
      f1_visible(props);
    });

    it('should properly call f1_visible', () => {
      props = {
        ...props,
        camundaMessage: false,
      };
      f1_visible(props);
    });
  });

  describe('f2_onClick functions', () => {
    it('should properly call f2_onClick', () => {
      const mockRturnCamundaMessage: any = returnCamundaMessage;
      f2_onClick(props);

      mockRturnCamundaMessage.mockImplementation(() => {
        return '';
      });
    });
  });
  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      onPageInit(props);
    });
    it('should properly call onPageInit without feesDeatils', () => {
      props.feeDetails =
        '{"feeDescEn":"EHSMS Reviewing","feeDescAr":"مراجعة أنظمة صحة وسلامة"}';
      onPageInit(props);
      props.feeDetails = '';
      onPageInit(props);

      props.locale = 'ar';
      onPageInit(props);
    });
  });
});
