/* eslint-disable camelcase */
import bpm from 'client/services/bpm';
import fetch from 'client/services/fetch';
import {
  init,
  call_f1_onSelectionChange,
  call_f2_onSearch,
  f3_onPageResize,
  f4_onClick,
  call_f5_onPageTurn,
  f6_visible,
  f7_visible,
  f8_onClick,
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
      licenceListRows: [],
      currentIndexLicenceList: true,
      totalLicenceList: [],
      licenceSearch: '',
      licenceNumber: 'CN-2971217',
      licenceNoError: true,
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
        licenceListRows: {
          update: jest.fn(),
        },
        currentIndexLicenceList: {
          update: jest.fn(),
        },
        totalLicenceList: {
          update: jest.fn(),
        },
        licenceSearch: {
          update: jest.fn(),
        },
        licenceNoError: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        licenceNumber: {
          update: jest.fn(),
        },
        licenceListColumns: {
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
  describe('call_f5_onPageTurn functions', () => {
    it('should properly call call_f5_onPageTurn', () => {
      call_f5_onPageTurn(props)('value');
    });
  });
  describe('empty functions', () => {
    it('should properly call', () => {
      f3_onPageResize(props);
      f4_onClick(props);
    });
  });
  describe('f6_visible functions', () => {
    it('should properly call f6_visible', () => {
      f6_visible(props);
    });
  });
  describe('f7_visible functions', () => {
    it('should properly call f7_visible', () => {
      f7_visible(props);
      props.camundaMessage = false;
      f7_visible(props);
    });
  });
  describe('f8_onClick functions', () => {
    it('should properly call f8_onClick', () => {
      f8_onClick(props);
      props.licenceNumber = '';
      f8_onClick(props);
    });
  });
});
