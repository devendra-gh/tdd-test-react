/* eslint-disable camelcase */
import {
  init,
  call_f1_onChange,
  f2_visible,
  call_f3_onChange,
  f4_visible,
  call_f5_onClick,
  f6_visible,
  f7_visible,
  call_f8_onChange,
  f9_visible,
  call_f10_onChange,
  f11_visible,
  f12_visible,
  call_f13_onChange,
  f14_visible,
  f15_visible,
  call_f16_onMapClick,
  f17_visible,
  // call_f17_onChange,
  call_f18_onChange,
  call_f19_onChange,
  f20_visible,
  // f19_visible,
  // call_f20_onSelect,
  // call_f21_onChange,
  call_f21_onSelect,
  call_f22_onChange,
  f23_visible,
  f24_onClick,
  call_f25_onClick,
  f26_onClick,
  // f22_visible,
  // f23_onClick,
  // call_f24_onClick,
  // f25_onClick,
} from '../../../pages/enter-company-details/functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');
jest.mock('../../../sharedFunctions/utils', () => ({
  checkSubmitStatus: jest.fn(),
  validateTawtheeqNumber: jest
    .fn()
    .mockImplementationOnce(() => {
      return true;
    })
    .mockImplementationOnce(() => {
      return false;
    }),
  validateCompanyDetailsForm: jest
    .fn()
    .mockImplementationOnce(() => {
      return true;
    })
    .mockImplementationOnce(() => {
      return false;
    }),
}));
jest.mock('../../../sharedFunctions/services', () => ({
  getCore: jest.fn(),
  tawtheeqDetails: jest.fn(() => {
    return {
      rentAndPaymentsDetails: {
        rentalValue: 100,
        contractStartDate: '27/07/2020',
        contractExpiryDate: '27/07/2020',
      },
      contractDetails: {
        contractNo: '2345678',
      },
    };
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
      loading: false,
      licenceNumber: '334567',
      tawtheeqNumber: '12345',
      leaseAgreementAmount: 4567,
      longitudeValidateStatus: '',
      latitudeValidateStatus: '',
      user: {
        'First Name EN': 'test',
        'Full Name AR': 'test',
        IDN: 'test',
        'Nationality EN': 'test',
        Type: 'SOP2',
        Mobile: 34567890,
        'User Email': 'kbkjsbdks@ndskd.com',
      },
      companyDetailsType: '0',
      typesOfCompanyDetails: [
        { name: 'EnterTawtheeqNumber', id: 0, label: 'CompanyDetails_Radio1' },
      ],
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
            success: 'success',
            data: {
              businessKey: '123456789',
              id: '123456789',
            },
          };
        }),
      },
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
        tawtheeqNumberValidateStatus: {
          update: jest.fn(),
        },
        typesOfCompanyDetails: {
          update: jest.fn(),
        },
        companyDetailsType: {
          update: jest.fn(),
        },
        leaseAgreementNumber: {
          update: jest.fn(),
        },
        checkTawtheeqNumberdisabled: {
          update: jest.fn(),
        },
        tawtheeqNumber: {
          update: jest.fn(),
        },
        tawtheeqNumberValidateMessage: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        leaseAgreementAmount: {
          update: jest.fn(),
        },
        leaseAgreementDate: {
          update: jest.fn(),
        },
        latitude: {
          update: jest.fn(),
        },
        longitude: {
          update: jest.fn(),
        },
        checkedTakeContactInfo: {
          update: jest.fn(),
        },
        contactInfoName: {
          update: jest.fn(),
        },
        contactInfoPhNo: {
          update: jest.fn(),
        },
        contactInfoEmailAddress: {
          update: jest.fn(),
        },
        contactInfoEmailAddressValidateStatus: {
          update: jest.fn(),
        },
        contactInfoPhNoValidateStatus: {
          update: jest.fn(),
        },
        contactInfoNameValidateStatus: {
          update: jest.fn(),
        },
        contactInfoEmailAddressHelp: {
          update: jest.fn(),
        },
        contactInfoPhNoHelp: {
          update: jest.fn(),
        },
        contactInfoNameHelp: {
          update: jest.fn(),
        },
        tawtheeqNumberHelp: {
          update: jest.fn(),
        },
        leaseAgreementDateHelp: {
          update: jest.fn(),
        },
        leaseAgreementNumberHelp: {
          update: jest.fn(),
        },
        leaseAgreementAmountHelp: {
          update: jest.fn(),
        },
        leaseAgreementDateValidateStatus: {
          update: jest.fn(),
        },
        leaseAgreementNumberValidateStatus: {
          update: jest.fn(),
        },
        leaseAgreementAmountValidateStatus: {
          update: jest.fn(),
        },
        tawtheeqNumberIsValid: {
          update: jest.fn(),
        },
        latitudeValidateStatus: {
          update: jest.fn(),
        },
        longitudeValidateStatus: {
          update: jest.fn(),
        },
        latitudeHelp: {
          update: jest.fn(),
        },
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

  describe('call_f1_onChange functions', () => {
    it('should properly call', async () => {
      const fnCall = await call_f1_onChange(props);
      const event = { target: { id: 1 } };
      fnCall(event);
    });
    it('should properly call with target value', async () => {
      const fnCall = await call_f1_onChange(props);
      const event = { target: { id: 0 } };
      fnCall(event);
    });
  });

  describe('f2_visible functions', () => {
    it('should properly call', async () => {
      await f2_visible(props);
    });
  });

  describe('call_f3_onChange functions', () => {
    it('should properly call', async () => {
      const fnCall = await call_f3_onChange(props);
      const event = '1235';
      fnCall(event);
    });
    it('should properly call empty value', async () => {
      const fnCall = await call_f3_onChange(props);
      fnCall();
    });
  });

  describe('f4_visible functions', () => {
    it('should properly call', async () => {
      expect(await f4_visible(props)).toBeTruthy();
    });
  });

  describe('call_f5_onClick functions', () => {
    it('should properly call', async () => {
      const fnCall = await call_f5_onClick(props);
      const event = '1235';
      fnCall(event);
    });
    it('should properly call value', async () => {
      const fnCall = await call_f5_onClick({
        ...props,
        tawtheeqNumber: '12345',
      });
      const event = '';
      fnCall(event);
    });
    it('should properly call empty value for tawtheeqNumber', async () => {
      const fnCall = await call_f5_onClick({
        ...props,
        tawtheeqNumber: null,
      });
      const event = '';
      fnCall(event);
    });
    it('should properly call empty value for tawtheeqNumber', async () => {
      const fnCall = await call_f5_onClick({
        ...props,
        tawtheeqNumber: '1234567',
      });
      const event = '';
      fnCall(event);
    });
  });

  describe('f6_visible functions', () => {
    it('should properly call', async () => {
      expect(await f6_visible(props)).toBeTruthy();
    });
  });

  describe('f7_visible functions', () => {
    it('should properly call', async () => {
      await f7_visible(props);
    });
  });

  describe('call_f8_onChange functions', () => {
    it('should properly call', async () => {
      await call_f8_onChange(props)('test');
    });
    it('should properly call', async () => {
      await call_f8_onChange(props)();
    });
  });

  describe('f9_visible functions', () => {
    it('should properly call', async () => {
      expect(await f9_visible(props)).toBeFalsy();
    });
  });

  describe('call_f10_onChange functions', () => {
    it('should properly call', async () => {
      await call_f10_onChange(props)('test');
    });
    it('should properly call', async () => {
      await call_f10_onChange(props)();
    });
  });

  describe('f11_visible functions', () => {
    it('should properly call', async () => {
      expect(await f11_visible(props)).toBeFalsy();
    });
  });

  describe('call_f13_onChange functions', () => {
    it('should properly call', async () => {
      await call_f13_onChange(props)(new Date());
    });
  });

  describe('f14_visible functions', () => {
    it('should properly call', async () => {
      expect(await f14_visible(props)).toBeTruthy();
    });
  });

  describe('f15_visible functions', () => {
    it('should properly call', async () => {
      expect(await f15_visible(props)).toBeTruthy();
    });
  });

  describe('call_f16_onMapClick functions', () => {
    it('should properly call', async () => {
      await call_f16_onMapClick(props)({
        mapPoint: { latitude: 12.345, longitude: 34.56 },
      });
    });
  });

  describe('call_f18_onChange functions', () => {
    it('should properly call', async () => {
      await call_f18_onChange(props)({ target: { checked: true } });
    });
    it('should properly call with checked false', async () => {
      await call_f18_onChange(props)({ target: { checked: false } });
    });
  });

  describe('call_f19_onChange functions', () => {
    it('should properly call', async () => {
      await call_f19_onChange(props)('test');
    });
    it('should properly call', async () => {
      await call_f19_onChange(props)();
    });
  });

  describe('f17_visible functions', () => {
    it('should properly call', async () => {
      expect(await f17_visible(props)).toBeFalsy();
    });
  });

  describe('f20_visible functions', () => {
    it('should properly call', async () => {
      expect(await f20_visible(props)).toBeTruthy();
    });
  });

  describe('call_f21_onSelect functions', () => {
    it('should properly call', async () => {
      await call_f21_onSelect(props)('test');
    });
  });

  describe('call_f22_onChange functions', () => {
    it('should properly call', async () => {
      await call_f22_onChange(props)('test');
    });
    it('should properly call', async () => {
      await call_f22_onChange(props)();
    });
  });

  describe('f23_visible functions', () => {
    it('should properly call', async () => {
      expect(await f23_visible(props)).toBeTruthy();
    });
  });

  describe('f24_onClick functions', () => {
    it('should properly call', async () => {
      await f24_onClick(props);
    });
  });

  describe('call_f25_onClick functions', () => {
    const defaultProps = {
      // ...props,
      leaseAgreementDate: ['12/02/2020', '1/03/2020'],
      leaseAgreementNumber: 3456789,
      latitude: 12.345,
      longitude: 34.56,
      bpm: {
        startProcess: jest.fn(event => {
          return {
            success: 'success',
            data: {
              businessKey: '123456789',
              id: '123456789',
            },
          };
        }),
        sendMessage: jest.fn(),
      },
    };
    it('should properly call', async () => {
      await call_f25_onClick({ ...props, ...defaultProps })('');
    });
    it('should properly call', async () => {
      await call_f25_onClick({
        ...props,
        ...defaultProps,
        companyDetailsType: 1,
      })('');
    });
  });

  describe('f26_onClick functions', () => {
    it('should properly call', async () => {
      await f26_onClick(props);
    });
  });

  describe('f12_visible functions', () => {
    it('should properly call', async () => {
      await f12_visible(props);
    });
  });
});
