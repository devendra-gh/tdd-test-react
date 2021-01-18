/* eslint-disable camelcase */
import {
  init,
  call_f1_onSelectionChange,
  call_f2_onSearch,
  f3_onPageResize,
  f4_onClick,
  call_f5_onPageTurn,
  call_f7_onSelectionChange,
  call_f8_onSearch,
  f9_onPageResize,
  f10_onClick,
  f11_onPageTurn,
  f12_visible,
  f13_onClick,
  f14_onClick,
  f6_visible,
} from '../../../pages/select-licence/functions';

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

describe('pages/select-licence/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      licenceSearchValue: 'test',
      licenceListCurrentPage: 'test',
      licenceList: [{ _id: 111 }],
      fetchingLicencesStatus: 'loading',
      licenceNumber: '12345',
      // licenceListCurrentPage: 'test',
      actions: {
        licenceList: {
          update: jest.fn(),
        },
        selectedLicencesArr: {
          update: jest.fn(),
        },
        licenceNumber: {
          update: jest.fn(),
        },
        paginatedLicenceList: {
          update: jest.fn(),
        },
        isSelectLicenceNextButtonDisabled: {
          update: jest.fn(),
        },
        licenceSearchValue: {
          update: jest.fn(),
        },
        filteredLicenceListLength: {
          update: jest.fn(),
        },
        licenceListCurrentPage: {
          update: jest.fn(),
        },
        filteredLicenceList: {
          update: jest.fn(),
        },
        showSidebar: {
          update: jest.fn(),
        },
        fetchingLicencesStatus: {
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
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('functions', () => {
    it('should call', () => {
      init(props);
    });

    it('should call', () => {
      call_f1_onSelectionChange(props)('test');
    });

    it('should call', () => {
      call_f2_onSearch(props)('test');
    });

    it('should call', () => {
      call_f5_onPageTurn(props)('test');
    });

    it('should call', () => {
      call_f7_onSelectionChange(props)([{ id: 111 }]);
    });

    it('should call', () => {
      call_f8_onSearch(props)('test');
    });

    it('should call', () => {
      f6_visible(props);
      f12_visible(props);
    });

    it('should call', () => {
      props.fetchingLicencesStatus = '';
      f6_visible(props);
      f12_visible(props);
    });

    it('should call', () => {
      f13_onClick(props);
    });

    it('should call', () => {
      props.licenceNumber = '';
      f13_onClick(props);
    });

    it('should call', () => {
      f14_onClick(props);
    });

    it('should call', () => {
      f3_onPageResize(props);
      f4_onClick(props);
      f9_onPageResize(props);
      f10_onClick(props);
      f11_onPageTurn(props);
    });
  });
});
