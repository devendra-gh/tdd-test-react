/* eslint-disable camelcase */
import {
  init,
  onPageInit,
  call_f1_onClick,
} from '../../../pages/application-approved/functions';

jest.mock('client/services/bpm');

describe('pages/application-approved/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      feeDetails: '[{ "feeDescEn":"John", "FeeAmount":30, "city":"New York"}]',
      paymentLink: 'https://stag-tamm',
      history: {
        push: jest.fn(),
      },
      locale: 'en',
      paymentSummaryColoum: [{ title: 'test' }],
      basket: [],
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
        paymentSummaryColoum: {
          update: jest.fn(),
        },
        paymentTotal: {
          update: jest.fn(),
        },
        paymentSummaryRows: {
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

  describe('onPageInit functions', () => {
    it('should call', () => {
      onPageInit(props);
    });
    it('should call for locale = ar', () => {
      onPageInit({ ...props, locale: 'ar' });
    });
    it('should call for empty feeDetails', () => {
      onPageInit({ ...props, feeDetails: '[]' });
    });
  });

  describe('call_f1_onClick functions', () => {
    it('should call', () => {
      call_f1_onClick(props);
    });
    it('should call when there is payment url', () => {
      call_f1_onClick({ ...props, paymentURL: 'http:// payment' });
    });
  });
});
