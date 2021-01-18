/* eslint-disable camelcase */
import {
  init,
  // onPageInit,
  // f1_primaryButton_onClick,
  // f2_onClose,
  // f3_onClick,
  // f4_onClick,
  // f5_visible,
} from '../../../pages/application-approved/functions';

jest.mock('client/services/bpm');

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

    it('should call', () => {
      props = {
        ...props,
        locale: 'ar',
        basket: [1, 2],
      };
      init(props);
    });
  });

  // describe('onPageInit functions', () => {
  //   it('should call', () => {
  //     onPageInit(props);
  //   });
  // });

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
  //   it('should call', () => {
  //     f4_onClick(props);
  //   });
  // });

  // describe('f5_visible functions', () => {
  //   it('should call', () => {
  //     f5_visible(props);
  //   });
  // });
});
