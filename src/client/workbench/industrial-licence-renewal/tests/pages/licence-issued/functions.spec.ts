/* eslint-disable camelcase */
import {
  init,
  onPageInit,
  call_f1_buttons_onClick,
  f2_buttons_onClick,
} from '../../../pages/licence-issued/functions';

jest.mock('../../../sharedFunctions/services', () => ({
  downloadFile: jest.fn(),
  sendEmailNotification: jest.fn(),
}));

jest.mock('../../../sharedFunctions/utils', () => ({
  getDateFromTimeStamp: jest.fn(),
}));

jest.mock('../../../sharedFunctions/serviceSteps', () => ({
  stepsLists: jest.fn(),
}));

jest.mock('../../../sharedFunctions/stepUtils', () => ({
  getSteps: jest.fn(),
}));
jest.mock('../../../sharedFunctions/tammAnalytics', () => ({
  addAnalyticsEvent: jest.fn(),
}));

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');

describe('pages/licence-issued/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      user: { 'User Email': 'testing@gmail.com' },
      bpm: {
        sendMessage: jest.fn(),
      },
      feeDetails: '[{"FeeAmount":1},{"FeeAmount":1}]',
      actions: {
        individualIssuedTags: {
          update: jest.fn(),
        },
        showSidebar: {
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
        download_value: {
          update: jest.fn(),
        },
        renewalNumber: {
          update: jest.fn(),
        },
        recordId: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });
  });

  describe('onPageInit functions', () => {
    it('should properly call', async () => {
      await onPageInit(props);
    });
  });

  describe('call_f1_buttons_onClick functions', () => {
    it('should properly call', async () => {
      await call_f1_buttons_onClick(props)('test');
    });
  });
  describe('f2_buttons_onClick functions', () => {
    it('should properly call', async () => {
      await f2_buttons_onClick(props);
    });
  });
});
