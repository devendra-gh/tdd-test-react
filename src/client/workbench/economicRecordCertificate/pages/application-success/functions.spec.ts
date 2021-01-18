/* eslint-disable camelcase */
import {
  init,
  onPageInit,
  f2_onClick,
  f3_onClick,
  f1_visible,
} from './functions';
import { returnCamundaMessage } from '../../sharedFunctions/utils';

jest.mock('client/services/fetch');
jest.mock('../../sharedFunctions/utils');
describe('economicRecordCertificate/pages/application-succes', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      fetch: jest.fn(),
      then: jest.fn(),
      locale: 'en',
      paymentLink: '',
      camundaMessage: true,
      licenceNumber: 'IN-123',
      capId: 'capId',
      instanceId: 'instanceId',
      apTransactionNo: 'apTransactionNo',
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
        applicationIssuedDescription: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        paymentLinkString: {
          update: jest.fn(),
        },
        capId: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        apTransactionNo: {
          update: jest.fn(),
        },
        camundaMessage: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call init', () => {
      init(props);
    });

    it('should properly call init', () => {
      props = {
        ...props,
        locale: 'ar',
      };
      init(props);
    });
  });

  describe('f3_onClick functions', () => {
    it('should properly call f3_onClick', () => {
      f3_onClick(props);
    });
  });

  describe('f2_onClick functions', () => {
    it('should properly call f2_onClick', () => {
      f2_onClick(props);
    });
  });
  describe('f1_visible functions', () => {
    it('should properly call f1_visible', () => {
      f1_visible(props);
      props.camundaMessage = false;
      f1_visible(props);
    });
  });
  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      const mockRturnCamundaMessage: any = returnCamundaMessage;
      onPageInit(props);
      mockRturnCamundaMessage.mockImplementation(() => {
        return '';
      });
    });
  });
});
