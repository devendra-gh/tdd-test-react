/* eslint-disable camelcase */
import {
  init,
  f1_onFocus,
  call_f2_onChange,
  f3_onSelect,
  f4_isValidFunc,
  f5_onChange,
  f6_btnSubmitClick,
  f7_btnSubmitDisabled,
  f8_btnBackClick,
  f9_btnCancelClick,
} from '../../../pages/contact-details/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/utils.ts', () => ({
  getContactDetails: jest.fn(),
}));

jest.mock('../../../sharedFunctions/stepUtils.ts', () => ({
  getSteps: jest.fn(),
}));

describe('pages/contact-details/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      formValues: {
        mobileNumber: '9715 11111111',
      },
      contactForm: {
        name: 'test',
        email: 'test',
        mobileNumber: '9715 11111111',
      },
      entityPayload: 'test',
      companyDetailsForm: 'test',
      businessKey: '12345',
      instanceId: '12345',
      licenceNumber: '12345',
      isUndertakingChecked: true,
      actions: {
        loading: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        contactName: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should call', () => {
      init(props);
    });
  });

  describe('f1_onFocus functions', () => {
    it('should call', () => {
      f1_onFocus(props);
    });
  });

  describe('call_f2_onChange functions', () => {
    it('should call', () => {
      call_f2_onChange(props)('test');
    });
  });

  describe('f3_onSelect functions', () => {
    it('should call', () => {
      f3_onSelect(props);
    });
  });

  describe('f4_isValidFunc functions', () => {
    it('should call 1', () => {
      f4_isValidFunc('', props);
    });

    it('should call 2', () => {
      f4_isValidFunc(props.formValues, props);
    });
  });

  describe('f5_onChange functions', () => {
    it('should call', () => {
      f5_onChange(props);
    });
  });

  describe('f6_btnSubmitClick functions', () => {
    it('should call', async () => {
      await f6_btnSubmitClick(props, props.formValues);
    });
  });

  describe('f7_btnSubmitDisabled functions', () => {
    it('should call', async () => {
      f7_btnSubmitDisabled(props, props.formValues);
    });
  });

  describe('f8_btnBackClick functions', () => {
    it('should call', async () => {
      f8_btnBackClick(props, props.formValues);
    });
  });

  describe('f9_btnCancelClick functions', () => {
    it('should call', async () => {
      f9_btnCancelClick(props, props.formValues);
    });
  });
});
