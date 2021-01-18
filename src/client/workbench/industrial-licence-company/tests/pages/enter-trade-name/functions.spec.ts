// import fetch from 'client/services/fetch';
/* eslint-disable camelcase */
import {
  init,
  call_f1_onChange,
  // f2_onClick,
  call_f3_onSelectionChange,
  // f4_onClick,
  // call_f5_onClick,
  f10_primaryButton_onClick,
} from '../../../pages/enter-trade-name/functions';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../../sharedFunctions/services', () => ({
  getActivities: jest.fn(),
  businessLicenseDetailsV3: jest.fn().mockImplementationOnce(() => ({
    code: '200',
    results: [
      {
        partners: [],
      },
    ],
  })),
  // .mockImplementationOnnce(() => ({
  //   code: '500',
  //   results: [
  //     {
  //       partners: [],
  //     },
  //   ],
  // })),
}));

describe('pages/enter-trade-name/functions', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      user: {
        Type: 'SOP2',
        'Nationality EN': 'IND',
      },
      actions: {
        tnNumber: {
          update: jest.fn(),
        },
        tableSearch: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        tradeNameTableRow: {
          update: jest.fn(),
        },
        englishPreferedName: {
          update: jest.fn(),
        },
        arabicPreferedName: {
          update: jest.fn(),
        },
        mainLicenseNumber: {
          update: jest.fn(),
        },
        tradeNamePartnersList: {
          update: jest.fn(),
        },
        branchType: {
          update: jest.fn(),
        },
        isbranch: {
          update: jest.fn(),
        },
        legalType: {
          update: jest.fn(),
        },
        tradeNameBtnDisabled: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        basket: {
          update: jest.fn(),
        },
        selectedActivities: {
          update: jest.fn(),
        },
        tradeNumberCheckDisabled: {
          update: jest.fn(),
        },
        tradeNumberValidateStatus: {
          update: jest.fn(),
        },
        tradeNumberHelpMsg: {
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
        tradeNameStatus: {
          update: jest.fn(),
        },
        breadCrumItems: {
          update: jest.fn(),
        },
        selectedIndustrialType: {
          update: jest.fn(),
        },
        totalCapitalvalue: {
          update: jest.fn(),
        },
        totalInvestmentValue: {
          update: jest.fn(),
        },
        isProcessStarted: {
          update: jest.fn(),
        },
        isCancelModalOpen: {
          update: jest.fn(),
        },
        relevant_entities: {
          update: jest.fn(),
        },
        tradeNameLink: {
          update: jest.fn(),
        },
        resetState: jest.fn(),
      },
      fetch: jest.fn(),
      bpm: {
        startProcess: jest.fn(),
        sendMessage: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });

    it('should properly call 2', async () => {
      props = {
        ...props,
        user: {
          Type: 'SOP3',
          'Nationality EN': 'IND',
        },
      };
      await init(props);
    });
  });

  describe('call_f1_onChange functions', () => {
    it('should properly call', async () => {
      await call_f1_onChange(props)('test');
    });
  });

  // describe('f2_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f2_onClick(props);
  //   });
  // });

  describe('call_f3_onSelectionChange functions', () => {
    it('should properly call', async () => {
      await call_f3_onSelectionChange(props);
    });
  });

  // describe('f4_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f4_onClick(props);
  //   });
  // });

  describe('f10_primaryButton_onClick functions', () => {
    it('should properly call', async () => {
      await f10_primaryButton_onClick(props);
    });
  });
});
