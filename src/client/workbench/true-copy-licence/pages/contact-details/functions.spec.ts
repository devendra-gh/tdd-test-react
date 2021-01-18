/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import {
  init,
  f1_btnCancelClick,
  f3_btnSubmitClick,
  f2_btnBackClick,
} from './functions';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../sharedFunctions/validation');
jest.mock('../../sharedFunctions/utils');

describe('Contact Details', () => {
  let props: any;
  const mockBpm: any = bpm.message;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      businessKey: 'businessKey',
      camundaMessage: true,
      contactDetailsName: '',
      contactDetailsMobile: '',
      contactDetailsEmail: '',
      actions: {
        showSideBar: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        camundaMessage: {
          update: jest.fn(),
        },
        contactDetailsFlag: {
          update: jest.fn(),
        },
        contactDetailsName: {
          update: jest.fn(),
        },
        contactDetailsMobile: {
          update: jest.fn(),
        },
        nameValidateStatus: {
          update: jest.fn(),
        },
        nameValidateHelp: {
          update: jest.fn(),
        },
        mobileValidateStatus: {
          update: jest.fn(),
        },
        mobileValidateHelp: {
          update: jest.fn(),
        },
        emailValidateStatus: {
          update: jest.fn(),
        },
        emailValidateHelp: {
          update: jest.fn(),
        },
        contactDetailsEmail: {
          update: jest.fn(),
        },
      },
      user: {
        'First Name EN': 'firstname',
        'Last Name EN': 'lastname',
        'Full Name AR': 'name',
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
    it('should properly call init', () => {
      init(props);
    });
  });

  describe('f1_btnCancelClick functions', () => {
    it('should properly call f1_btnCancelClick', () => {
      f1_btnCancelClick(props, '');
    });
  });

  describe('f3_btnSubmitClick functions', () => {
    it('should properly call f3_btnSubmitClick', () => {
      f3_btnSubmitClick(props, '');
    });
  });

  describe('f2_btnBackClick functions', () => {
    it('should properly call f2_btnBackClick', () => {
      f2_btnBackClick(props, '');
    });
  });
});
