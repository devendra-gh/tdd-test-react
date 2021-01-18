/* eslint-disable camelcase */
import {
  init,
  f1_primaryButton_onClick,
  f2_secondaryButton_onClick,
  f3_onClose,
  f4_onSearch,
  call_f5_onChange,
  f6_onOpenChange,
  call_f10_onChange,
  f7_onSearch,
  call_f8_onChange,
  f9_onOpenChange,
  // f11_visible,
  call_f12_onChange,
  call_f13_onChange,
  f14_btnBackClick,
  f16_btnCancelClick,
  f15_btnSubmitClick,
  f17_btnSubmitDisabled,
} from '../../../pages/enter-company-details/functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');
jest.mock('../../../sharedFunctions/breadCrumLinks.ts', () => ({
  crumsList: jest.fn(() => []),
}));
jest.mock('../../../sharedFunctions/utils', () => ({
  checkSubmitStatus: jest.fn(),
  validateCompanyDetailsForm: jest
    .fn()
    .mockImplementationOnce(() => {
      return true;
    })
    .mockImplementationOnce(() => {
      return false;
    }),
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
        Type: 'SOP2',
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
      bpm: {
        startProcess: jest.fn(() => {
          return {
            success: true,
            data: {
              success: true,
              businessKey: '123456789',
              id: '123456789',
            },
          };
        }),
        sendMessage: jest.fn(() => {
          return {
            success: true,
            data: {
              success: true,
            },
          };
        }),
      },
      actions: {
        loading: {
          update: jest.fn(),
        },
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
        existingLicenceVisibility: {
          update: jest.fn(),
        },
        validateStatus_existingLicense: {
          update: jest.fn(),
        },
        help_existingLicense: {
          update: jest.fn(),
        },
        validateStatus_branchType: {
          update: jest.fn(),
        },
        help_branchType: {
          update: jest.fn(),
        },
        validateStatus_industryType: {
          update: jest.fn(),
        },
        help_industryType: {
          update: jest.fn(),
        },
        parentCompanylicenceNumberVal: {
          update: jest.fn(),
        },
        companyDetailsCheckLoader: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        validateStatus_parentLicenceNumber: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        help_parentLicenceNumber: {
          update: jest.fn(),
        },
        breadCrumItems: {
          update: jest.fn(),
        },
        relevant_entities: {
          update: jest.fn(),
        },
        isCancelModalOpen: {
          update: jest.fn(),
        },
        skipEconomicName: {
          update: jest.fn(),
        },
        resetState: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });

    it('should properly call 2', async () => {
      const props2 = {
        ...props,
        user: {
          ...props.user,
          Type: 'SOP3',
        },
      };
      await init(props2);
    });

    it('should properly call', async () => {
      props = {
        ...props,
        locale: 'ar',
      };
      await init(props);
    });
  });

  describe('f1_primaryButton_onClick functions', () => {
    it('should properly call', async () => {
      await f1_primaryButton_onClick(props);
    });
  });

  describe('f2_secondaryButton_onClick functions', () => {
    it('should properly call', async () => {
      await f2_secondaryButton_onClick(props);
    });

    it('should properly call 2', async () => {
      await f2_secondaryButton_onClick(props);
    });

    it('should properly call 3', async () => {
      await f2_secondaryButton_onClick(props);
    });
  });

  describe('f3_onClose functions', () => {
    it('should properly call', async () => {
      await f3_onClose(props);
    });
  });

  describe('f4_onSearch functions', () => {
    it('should properly call', async () => {
      await f4_onSearch(props);
    });
  });

  describe('call_f5_onChange functions', () => {
    it('should properly call', async () => {
      await call_f5_onChange(props);
    });
  });

  describe('f6_onOpenChange functions', () => {
    it('should properly call', async () => {
      await f6_onOpenChange(props);
    });
  });

  describe('call_f10_onChange functions', () => {
    it('should properly call', async () => {
      await call_f10_onChange(props);
    });
  });

  describe('f7_onSearch functions', () => {
    it('should properly call', async () => {
      await f7_onSearch(props);
    });
  });

  describe('call_f8_onChange functions', () => {
    it('should properly call', async () => {
      await call_f8_onChange(props)('test');
    });
  });

  describe('f9_onOpenChange functions', () => {
    it('should properly call', async () => {
      await f9_onOpenChange(props);
    });
  });

  // describe('f11_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f11_visible(props)(true);
  //   });
  // });

  describe('call_f12_onChange functions', () => {
    it('should properly call', async () => {
      await call_f12_onChange(props);
    });
  });

  describe('call_f13_onChange functions', () => {
    it('should properly call', async () => {
      await call_f13_onChange(props);
    });
  });

  describe('f14_btnBackClick functions', () => {
    it('should properly call', async () => {
      await f14_btnBackClick(props, {});
    });
  });

  describe('f15_btnSubmitClick functions', () => {
    it('should properly call 1', async () => {
      await f15_btnSubmitClick(props, {});
    });

    it('should properly call 2', async () => {
      props = {
        ...props,
        companyDetailsExistingBranchTypeVal: 'No',
        totalCapitalvalue: 300000,
        totalInvestmentValue: 500000,
        selectedIndustrialType: 'test',
        bpm: {
          startProcess: jest.fn(() => {
            return false;
          }),
          sendMessage: jest.fn(() => {
            return {
              success: true,
              data: {
                success: true,
              },
            };
          }),
        },
      };

      await f15_btnSubmitClick(props, {});
    });

    it('should properly call 21', async () => {
      props = {
        ...props,
        companyDetailsExistingBranchTypeVal: 'No',
        totalCapitalvalue: 300000,
        totalInvestmentValue: 500000,
        selectedIndustrialType: 'test',
        bpm: {
          startProcess: jest.fn(() => {
            return {
              success: true,
              data: {
                businessKey: 'test',
                id: 'test',
              },
            };
          }),
          sendMessage: jest.fn(() => {
            return {
              success: true,
              data: {
                success: true,
              },
            };
          }),
        },
      };

      await f15_btnSubmitClick(props, {});
    });

    it('should properly call 3', async () => {
      props = {
        ...props,
        companyDetailsExistingBranchTypeVal: '',
        totalCapitalvalue: '',
        totalInvestmentValue: '',
        selectedIndustrialType: '',
      };

      await f15_btnSubmitClick(props, {});
    });

    it('should properly call 4', async () => {
      props = {
        ...props,
        companyDetailsExistingBranchTypeVal: 'Yes',
        totalCapitalvalue: 'test',
        totalInvestmentValue: 'test',
        companyDetailsBranchTypeVal: 'test',
      };

      await f15_btnSubmitClick(props, {});
    });

    it('should properly call 5', async () => {
      props = {
        ...props,
        totalCapitalvalue: 200000,
        companyDetailsExistingBranchTypeVal: 'Yes',
        companyDetailsBranchTypeVal: '',
        parentCompanylicenceNumberVal: '',
      };

      await f15_btnSubmitClick(props, {});
    });

    // it('should properly call 2', async () => {
    //   props = {
    //     ...props,
    //     bpm: {
    //       startProcess: jest.fn(() => {
    //         return false;
    //       }),
    //     },
    //   };
    //   await f15_btnSubmitClick(props);
    // });
  });

  describe('f16_btnCancelClick functions', () => {
    it('should properly call', async () => {
      await f16_btnCancelClick(props, {});
    });
  });

  describe('f17_btnSubmitDisabled functions', () => {
    it('should properly call', async () => {
      await f17_btnSubmitDisabled(props, {});
    });
  });
});
