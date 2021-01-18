/* eslint-disable camelcase */
import {
  init,
  call_f1_buttons_onClick,
  f2_buttons_onClick,
} from '../../../pages/licence-issued/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/stepUtils.ts', () => ({
  getSteps: jest.fn(),
}));

jest.mock('../../../sharedFunctions/getData.ts', () => ({
  getDEDToken: jest.fn(),
  sendEmailNotification: jest.fn(),
}));

describe('pages/licence-issued/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      emailSent: false,
      capId: '11',
      apTransactionNumber: 'tsrt',
      instanceId: '111',
      businessKey: '111',

      actions: {
        steps: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        emailSent: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('functions', () => {
    it('should call init 1', async () => {
      await init(props);
    });

    it('should call init 2', async () => {
      props.emailSent = true;
      await init(props);
    });

    it('should call f2_buttons_onClick', () => {
      f2_buttons_onClick(props);
    });

    it('should call call_f1_buttons_onClick', () => {
      call_f1_buttons_onClick(props)();
    });
  });
});
