/* eslint-disable camelcase */
import {
  // onPageInit,
  init,
  // f1_primaryButton_onClick,
  // f2_onClose,
  // f3_onClick,
  // f4_onClick,
} from '../../../pages/application-approved/functions';

jest.mock('client/services/bpm');
jest.mock('../../../sharedFunctions/services', () => ({
  sendEmailNotification: jest.fn(() => 'test'),
  uploadDocumentToDed: jest.fn(() => 'test'),
}));

describe('pages/application-approved/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      locale: 'en',
      applicationApprovedCheckLoader: false,
      paymentSummaryColoum: [{ title: 'test' }],
      basket: [],
      files: [{ fileId: '' }],
      actions: {
        applicationApprovedCheckLoader: {
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
        paymentSummaryColoum: {
          update: jest.fn(),
        },
        paymentTotal: {
          update: jest.fn(),
        },
        paymentSummaryRows: {
          update: jest.fn(),
        },
        isModalOpen: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  // describe('onPageInit functions', () => {
  //   it('should call', () => {
  //     onPageInit(props);
  //   });
  // });

  describe('init functions', () => {
    it('should call', () => {
      init(props);
    });

    it('should call', () => {
      props = {
        ...props,
        locale: 'ar',
        basket: [1, 2],
      };
      init(props);
    });
  });

  // describe('f1_primaryButton_onClick functions', () => {
  //   it('should call', () => {
  //     f1_primaryButton_onClick(props);
  //   });
  // });

  // describe('f2_onClose functions', () => {
  //   it('should call', () => {
  //     f2_onClose(props);
  //   });
  // });

  // describe('f3_onClick functions', () => {
  //   it('should call', () => {
  //     f3_onClick(props);
  //   });
  // });

  // describe('f4_onClick functions', () => {
  //   it('should call', async () => {
  //     await f4_onClick(props);
  //   });
  // });
});
