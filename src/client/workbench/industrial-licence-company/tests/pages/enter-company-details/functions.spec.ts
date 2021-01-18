/* eslint-disable camelcase */
import {
  init,
  f1_onSearch,
  call_f2_onChange,
  f3_onOpenChange,
  // call_f4_onChange,
  call_f5_onChange,
  // call_f6_onClick,
  // f7_visible,
} from '../../../pages/enter-company-details/functions';

jest.mock('client/services/fetch');
jest.mock('../../../sharedFunctions/utils', () => ({
  checkSubmitStatus: jest.fn(),
}));
jest.mock('../../../sharedFunctions/breadCrumLinks.ts', () => ({
  crumsList: jest.fn(() => []),
}));

describe('pages/enter-company-details/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      user: {
        'First Name EN': 'test',
        'Full Name AR': 'test',
        IDN: 'test',
        'Nationality EN': 'test',
      },
      companyDetailsCheckLoader: true,
      ownerDetailsColumns: [
        {
          title: 'test',
          ownNameEn: 'test',
          nationalityEn: 'test',
          nationalityAr: 'test',
          idNumber: 'test',
          share: 'test',
        },
      ],
      totalCapitalvalue: '250000',
      totalInvestmentValue: null,
      tradeNamePartnersList: [],
      partners: [],
      actions: {
        helpValidateStatusTotalCapitalValue: {
          update: jest.fn(),
        },
        helpValidateStatusTotalInvestmentValue: {
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
        ownerDetailsColumns: {
          update: jest.fn(),
        },
        ownerDetailsRow: {
          update: jest.fn(),
        },
        selectedIndustrialType: {
          update: jest.fn(),
        },
        totalInvestmentValue: {
          update: jest.fn(),
        },
        validateStatusTotalInvestmentValue: {
          update: jest.fn(),
        },
        totalCapitalvalue: {
          update: jest.fn(),
        },
        validateStatusTotalCapitalValue: {
          update: jest.fn(),
        },
        companyDetailsExistingBranchTypeVal: {
          update: jest.fn(),
        },
        companyDetailsBranchTypeVal: {
          update: jest.fn(),
        },
        validateStatus_branchType: {
          update: jest.fn(),
        },
        existingLicenceVisibility: {
          update: jest.fn(),
        },
        help_branchType: {
          update: jest.fn(),
        },
        validateStatus_existingLicense: {
          update: jest.fn(),
        },
        help_existingLicense: {
          update: jest.fn(),
        },
        validateStatus_industryType: {
          update: jest.fn(),
        },
        help_industryType: {
          update: jest.fn(),
        },
        legalFormSelect: {
          update: jest.fn(),
        },
        loading: {
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

    it('should properly call', async () => {
      props = {
        ...props,
        locale: 'ar',
      };
      await init(props);
    });
  });

  describe('f1_onSearch functions', () => {
    it('should properly call', async () => {
      await f1_onSearch(props);
    });
  });

  describe('call_f2_onChange functions', () => {
    it('should properly call', async () => {
      const value = 'test';
      await call_f2_onChange(props)(value);
    });
  });

  describe('f3_onOpenChange functions', () => {
    it('should properly call', async () => {
      await f3_onOpenChange(props);
    });
  });

  // describe('call_f4_onChange functions', () => {
  //   it('should properly call', async () => {
  //     const value = 'test';
  //     await call_f4_onChange(props)(value);
  //   });
  // });

  describe('call_f5_onChange functions', () => {
    it('should properly call', async () => {
      const value = 'test';
      await call_f5_onChange(props)(value);
    });
  });

  // describe('call_f6_onClick functions', () => {
  //   it('should properly call 1', async () => {
  //     await call_f6_onClick(props)();
  //   });

  //   it('should properly call 2', async () => {
  //     props = {
  //       ...props,
  //       totalCapitalvalue: '',
  //       totalInvestmentValue: '10000',
  //     };
  //     await call_f6_onClick(props)();
  //   });

  //   it('should properly call 3', async () => {
  //     props = {
  //       ...props,
  //       totalCapitalvalue: '10000',
  //       totalInvestmentValue: '',
  //     };
  //     await call_f6_onClick(props)();
  //   });

  //   it('should properly call 4', async () => {
  //     props = {
  //       ...props,
  //       totalCapitalvalue: '10000',
  //       totalInvestmentValue: '100',
  //     };
  //     await call_f6_onClick(props)();
  //   });
  // });

  // describe('f7_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f7_visible(props);
  //   });
  // });
});
