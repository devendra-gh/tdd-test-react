/* eslint-disable camelcase */
import {
  init,
  onPageInit,
  f1_visible,
  f2_visible,
  call_f3_onSelectionChange,
  f4_onActionClick,
  call_f5_onClick,
} from '../../../pages/review-quotations/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/getData.ts', () => ({
  uploadDocumentToDed: jest.fn(),
  getEntities: jest.fn(() => {
    return [];
  }),
  getAwards: jest.fn(() => {
    return [{ certifiedBodyName: 'test' }];
  }),
}));

jest.mock('../../../sharedFunctions/stepUtils.ts', () => ({
  getSteps: jest.fn(),
}));

describe('pages/review-quotations/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      submittedOn: 'test',
      apTransactionNumber: '1234',
      capId: '1234',
      instanceId: '1234',
      transactionNumber: '1234',
      Feedback: 'test',
      isAllQuotationsFetched: false,
      awardedEntity: 'test',
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
        entityQuotations: {
          update: jest.fn(),
        },
        isAllQuotationsFetched: {
          update: jest.fn(),
        },
        hasEntityFeedback: {
          update: jest.fn(),
        },
        isEntityNotSelected: {
          update: jest.fn(),
        },
        referenceTags: {
          update: jest.fn(),
        },
        awardedEntity: {
          update: jest.fn(),
        },
        selectedQuotationsArr: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
        getVariables: jest.fn(() => {
          return {
            success: false,
            data: [],
          };
        }),
      },
    };
  });

  describe('functions', () => {
    it('should call', () => {
      init(props);
    });

    it('should call', async () => {
      await onPageInit(props);
    });

    it('should call f1_visible', async () => {
      f1_visible(props);
    });

    it('should call f2_visible', async () => {
      f2_visible(props);
    });

    it('should call f2_visible', async () => {
      call_f3_onSelectionChange(props)('test');
    });

    it('should call f4_onActionClick', async () => {
      f4_onActionClick(props);
    });

    it('should call call_f5_onClick', async () => {
      call_f5_onClick(props)();
    });
  });
});
