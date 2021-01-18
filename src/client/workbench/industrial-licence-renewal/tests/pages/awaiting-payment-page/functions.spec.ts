/* eslint-disable camelcase */
import {
  init,
  f1_onClick,
} from '../../../pages/awaiting-payment-page/functions';

jest.mock('client/services/bpm');

describe('pages/awaiting-payment-page/functions', () => {
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

  describe('f1_onClick functions', () => {
    it('should call', () => {
      f1_onClick(props);
    });
    it('should call when there is payment url', () => {
      f1_onClick({ ...props, paymentURL: 'http:// payment' });
    });
  });
});
