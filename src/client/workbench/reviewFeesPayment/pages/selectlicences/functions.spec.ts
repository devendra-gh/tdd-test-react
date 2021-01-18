/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import fetch from 'client/services/fetch';
import {
  init,
  call_f1_onSelectionChange,
  call_f2_onSearch,
  f4_visible,
  call_f3_onPageTurn,
  f5_visible,
  f6_onClick,
} from './functions';
jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../sharedFunctions/validation');
describe('Contact Details', () => {
  let props: any;
  const mockBpm: any = bpm;
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    props = {
      fetch,
      bpm,
      locale: 'en',
      user: {},
      i18n: jest.fn(i => i),
      businessKey: 'businessKey',
      instanceId: 'instanceId',
      camundaMessage: true,
      actualLicenceList: [],
      table_row: [],
      currentIndexLicenceList: true,
      totalRecords: [],
      licenceFilter: '',
      licenceNo: 'CN-2971217',
      alertFlag: true,
      actions: {
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        showSideBar: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentPageSize: {
          update: jest.fn(i => i),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        camundaMessage: {
          update: jest.fn(),
        },
        actualLicenceList: {
          update: jest.fn(),
        },
        table_row: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        currentIndexLicenceList: {
          update: jest.fn(),
        },
        totalRecords: {
          update: jest.fn(),
        },
        licenceFilter: {
          update: jest.fn(),
        },
        licenceNoError: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        licenceNo: {
          update: jest.fn(),
        },
        currentIndex: {
          update: jest.fn(),
        },
        alertFlag: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
    const fakePayload = {
      success: true,
      message: 'Success',
      data: [
        {
          tradeLicenseNumber: 'CN-2971217',
          businessNameArb: 1003893,
          businessNameEng: 1003893,
          legalForm: {
            legalFormCode: 'EST',
            businessLegalFormArb: 'مؤسسة فردية',
            businessLegalFormEng: 'Establishment',
          },
          businessLicenseStatus: {
            businessLicenseStatusCode: 'I',
            businessLicenseStatusArb: 'اصدرت الرخصة',
            businessLicenseStatusEng: 'Issued',
          },
        },
      ],
      error: {},
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
  });
  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });
  });
  describe('call_f1_onSelectionChange functions', () => {
    it('should properly call call_f1_onSelectionChange', () => {
      let value = [{ _id: '1' }];
      props.licenceListRows = [
        {
          _id: '1',
        },
      ];
      call_f1_onSelectionChange(props)(value);
      value = [];
      props.licenceListRows = [
        {
          _id: '1',
        },
      ];
      call_f1_onSelectionChange(props)(value);
    });
  });
  describe('call_f2_onSearch functions', () => {
    it('should properly call call_f2_onSearch', () => {
      call_f2_onSearch(props)('value');
    });
  });
  describe(' functions', () => {
    it('should properly call call_f3_onPageTurn', () => {
      call_f3_onPageTurn(props)('value');
    });
  });
  describe('f4_visible functions', () => {
    it('should properly call f6_visible', () => {
      f4_visible(props);
    });
  });
  describe('f5_visible functions', () => {
    it('should properly call f5_visible', () => {
      f5_visible(props);
      props.camundaMessage = false;
      f5_visible(props);
    });
  });
  describe('f6_onClick functions', () => {
    it('should properly call f6_onClick', () => {
      f6_onClick(props);
      props.licenceNumber = '';
      f6_onClick(props);
    });
  });
});
