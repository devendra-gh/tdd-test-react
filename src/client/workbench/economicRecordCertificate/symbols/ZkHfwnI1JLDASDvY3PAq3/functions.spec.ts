/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import {
  f1_onClick,
  call_f2_onChange,
  f3_visible,
  call_f4_onChange,
  call_f5_onChange,
  call_f6_onSelect,
  f7_visible,
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

  describe('f1_onClick functions', () => {
    it('should properly call f1_onClick', () => {
      f1_onClick(props);
    });
  });
  call_f2_onChange;
  describe('call_f2_onChange functions', () => {
    it('should properly call call_f2_onChange', () => {
      let value = {
        target: {
          checked: true,
        },
      };
      call_f2_onChange(props)(value);

      props = {
        ...props,
        locale: 'ar',
      };
      value = {
        target: {
          checked: true,
        },
      };
      call_f2_onChange(props)(value);

      value = {
        target: {
          checked: false,
        },
      };
      call_f2_onChange(props)(value);
    });
  });

  describe('f3_visible functions', () => {
    it('should properly call f3_visible', () => {
      f3_visible(props);
    });
  });

  describe('call_f4_onChange functions', () => {
    it('should properly call call_f4_onChange', () => {
      call_f4_onChange(props)('value');
    });
  });

  describe('call_f5_onChange functions', () => {
    it('should properly call call_f5_onChange', () => {
      call_f5_onChange(props)('value');
    });
  });

  describe('call_f6_onSelect functions', () => {
    it('should properly call call_f6_onSelect', () => {
      call_f6_onSelect(props)('value');
    });
  });

  describe('f7_visible functions', () => {
    it('should properly call f7_visible', () => {
      f7_visible(props);
    });
    it('should properly call f7_visible', () => {
      props = {
        ...props,
        camundaMessage: false,
      };
      f7_visible(props);
    });
  });
});
