/* eslint-disable camelcase */
import {
  init,
  call_f1_onSelectionChange,
  call_f2_onSearch,
  f3_onPageResize,
  f4_onClick,
  call_f5_onPageTurn,
  call_f6_onClick,
  f7_onClick,
  f8_onClick,
  // onPageInit,
  // f1_onClick,
} from '../../../pages/select-licence/functions';

jest.mock('client/services/bpm');
jest.mock('../../../sharedFunctions/utils', () => ({
  listLicenses: jest.fn(() => {
    return [
      { tradeLicenseNumber: 'IN-1343' },
      { tradeLicenseNumber: 'IN-1343' },
    ];
  }),
  filteredLicenceList: jest.fn(),
}));
jest.mock('../../../sharedFunctions/services', () => ({
  listLicenses: jest.fn(() => {
    return [
      { tradeLicenseNumber: 'IN-1343' },
      { tradeLicenseNumber: 'IN-1343' },
    ];
  }),
  licenseDetails: jest.fn(() => ({
    expiryDate: 'August 19, 1975 23:15:30',
  })),
}));

describe('pages/select-licence/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      feeDetails: '[{ "feeDescEn":"John", "FeeAmount":30, "city":"New York"}]',
      paymentLink: 'https://stag-tamm',
      history: {
        push: jest.fn(),
      },
      licenceNumber: '23456789',
      licenceListColumns: [
        {
          id: 'licenceNumber',
          title: 'SelectLicence_TableColumn1',
        },
        {
          id: 'companyName',
          title: 'SelectLicence_TableColumn2',
        },
      ],
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
        licenceListColumns: {
          update: jest.fn(),
        },
        actualLicenceList: {
          update: jest.fn(),
        },
        tablePageSize: {
          update: jest.fn(),
        },
        licenceListRows: {
          update: jest.fn(),
        },
        tableCurrPage: {
          update: jest.fn(),
        },
        tableTotalRecords: {
          update: jest.fn(),
        },
        licenceNumber: {
          update: jest.fn(),
        },
        disabled_eligibility: {
          update: jest.fn(),
        },
        eligible: {
          update: jest.fn(),
        },
        disabled_eligible: {
          update: jest.fn(),
        },
        licenceSearch: {
          update: jest.fn(),
        },
        myLicenceSelectedItems: {
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
      init({ ...props });
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

  describe('call_f1_onSelectionChange functions', () => {
    it('should call', () => {
      call_f1_onSelectionChange({
        ...props,
        licenceListRows: [{ _id: '1' }],
      })(['1']);
    });
    it('should call with empty licence number', () => {
      call_f1_onSelectionChange({
        ...props,
        licenceListRows: [{ _id: '1' }],
      })([]);
    });
  });
  describe('call_f2_onSearch functions', () => {
    it('should call', () => {
      call_f2_onSearch({
        ...props,
        actualLicenceList: [{ _id: '1' }],
      })('');
    });
  });
  describe('f3_onPageResize functions', () => {
    it('should call', () => {
      f3_onPageResize(props);
    });
  });
  describe('f4_onClick functions', () => {
    it('should call', () => {
      f4_onClick(props);
    });
  });
  describe('call_f5_onPageTurn functions', () => {
    it('should call', () => {
      call_f5_onPageTurn(props)('3');
    });
  });
  describe('call_f6_onClick functions', () => {
    it('should call', () => {
      call_f6_onClick(props)('3');
    });
  });
  describe('f7_onClick functions', () => {
    it('should call', () => {
      f7_onClick(props);
    });
  });
  describe('f8_onClick functions', () => {
    it('should call', () => {
      f8_onClick(props);
    });
  });
});
