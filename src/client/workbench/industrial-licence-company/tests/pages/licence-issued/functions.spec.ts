/* eslint-disable camelcase */
import {
  init,
  // onPageInit,
  // f1_buttons_onClick,
  // f2_buttons_onClick,
  // f3_visible,
  // f4_onClick,
} from '../../../pages/licence-issued/functions';

jest.mock('../../../sharedFunctions/services', () => ({
  downloadFile: jest.fn(),
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
jest.mock('../../../sharedFunctions/breadCrumLinks.ts', () => ({
  crumsList: jest.fn(() => []),
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
      bpm: {
        sendMessage: jest.fn(),
      },
      analytics: {
        addEvent: jest.fn(),
      },
      actions: {
        downloadCertificateCheckLoader: {
          update: jest.fn(),
        },
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
        breadCrumItems: {
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

  // describe('onPageInit functions', () => {
  //   it('should properly call', async () => {
  //     await onPageInit(props);
  //   });
  // });

  // describe('f1_buttons_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f1_buttons_onClick(props);
  //   });
  // });

  // describe('f2_buttons_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f2_buttons_onClick(props);
  //   });
  // });

  // describe('f3_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f3_visible(props);
  //   });
  // });

  // describe('f4_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f4_onClick(props);
  //   });
  // });
});
