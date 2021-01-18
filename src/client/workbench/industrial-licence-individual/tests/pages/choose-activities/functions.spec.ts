// import fetch from 'client/services/fetch';
import bpm from 'client/services/bpm';
/* eslint-disable camelcase */
import {
  init,
  // f1_primaryButton_onClick,
  // f3_onClose,
  // f4_onBlur,
  // call_f5_onChange,
  // f6_onSearch,
  call_f7_onChange,
  // f8_onOpenChange,
  // call_f9_onChange,
  // call_f10_onSearch,
  // call_f11_onPageTurn,
  // call_f12_onPageResize,
  // f13_onChange,
  // f14_onSubmit,
  // call_f15_onRemove,
  // f16_onClick,
  // f17_onChange,
  // f18_visible,
  // f2_secondaryButton_onClick,
} from '../../../pages/choose-activities/functions';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');

jest.mock('../../../sharedFunctions/services', () => ({
  getActivities: jest.fn(() => 'test'),
}));
jest.mock('../../../sharedFunctions/breadCrumLinks.ts', () => ({
  crumsList: jest.fn(() => []),
}));
jest.mock('../../../sharedFunctions/utils', () => ({
  filteredActivities: jest.fn(() => [{ selected: true, _id: '111' }]),
}));
jest.mock('../../../sharedFunctions/serviceSteps', () => ({
  stepsLists: jest.fn(() => 'test'),
}));
jest.mock('../../../sharedFunctions/stepUtils', () => ({
  getSteps: jest.fn(() => 'test'),
}));

describe('pages/choose-activities/functions', () => {
  let props: any;
  // const mockBpm: any = bpm;
  // let mockFetch: any;

  beforeEach(() => {
    props = {
      fetch: jest.fn(),
      locale: 'en',
      bpm,
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      chooseActivitiesCheckLoader: '',
      basket: [{ id: 1 }],
      tableActivities: [
        {
          _id: 1,
          selected: true,
        },
      ],
      tableAllActivities: [
        {
          _id: 1,
          selected: true,
        },
      ],
      actions: {
        chooseActivitiesCheckLoader: {
          update: jest.fn(),
        },
        tableActivities: {
          update: jest.fn(),
        },
        tableAllActivities: {
          update: jest.fn(),
        },
        basket: {
          update: jest.fn(),
        },
        chooseActivitiesBtnDisabled: {
          update: jest.fn(),
        },
        tableSearch: {
          update: jest.fn(),
        },
        selectedActivities: {
          update: jest.fn(),
        },
        tableCurrPage: {
          update: jest.fn(),
        },
        tablePageSize: {
          update: jest.fn(),
        },
        tablePageResizeOptions: {
          update: jest.fn(),
        },
        tableTotalRecords: {
          update: jest.fn(),
        },
        currency: {
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
        categoryValue: {
          update: jest.fn(),
        },
        groupDisabled: {
          update: jest.fn(),
        },
        classDisabled: {
          update: jest.fn(),
        },
        branchDisabled: {
          update: jest.fn(),
        },
        divisionValue: {
          update: jest.fn(),
        },
        groupValue: {
          update: jest.fn(),
        },
        classValue: {
          update: jest.fn(),
        },
        branchValue: {
          update: jest.fn(),
        },
        getActivitiesReqFilter: {
          update: jest.fn(),
        },
        divisionDisabled: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        tableColumns: {
          update: jest.fn(),
        },
        tableActivitiesStatus: {
          update: jest.fn(),
        },
        isCancelModalOpen: {
          update: jest.fn(),
        },
        breadCrumItems: {
          update: jest.fn(),
        },
        activitiesCommonSelection: {
          update: jest.fn(),
        },
        classes: {
          update: jest.fn(),
        },
        divisions: {
          update: jest.fn(),
        },
        groups: {
          update: jest.fn(),
        },
        branches: {
          update: jest.fn(),
        },
        categories: {
          update: jest.fn(),
        },
      },
      // bpm: {
      //   sendMessage: jest.fn(),
      // },
    };
    // const fakePayload = {
    //   success: true,
    //   message: 'Success',
    //   data: [],
    //   error: {},
    // };
    // mockFetch.mockImplementation(() => {
    //   return Promise.resolve(fakePayload);
    // });
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });
    it('should properly call', async () => {
      const props2 = {
        ...props,
        locale: 'ar',
      };
      await init(props2);
    });
  });

  // describe('f1_primaryButton_onClick functions', () => {
  //   it('should properly call', () => {
  //     f1_primaryButton_onClick(props);
  //   });
  // });

  // describe('f3_onClose functions', () => {
  //   it('should properly call', () => {
  //     f3_onClose(props);
  //   });
  // });

  // describe('f4_onBlur functions', () => {
  //   it('should properly call', () => {
  //     f4_onBlur(props);
  //   });

  //   it('should properly call', () => {
  //     f4_onBlur(props);
  //   });
  // });

  // describe('call_f5_onChange functions', () => {
  //   it('should properly call', () => {
  //     call_f5_onChange(props);
  //   });
  // });

  // describe('f6_onSearch functions', () => {
  //   it('should properly call', () => {
  //     f6_onSearch(props);
  //   });

  //   it('should properly call', () => {
  //     f6_onSearch(props);
  //   });
  // });

  describe('call_f7_onChange functions', () => {
    it('should properly call', () => {
      call_f7_onChange(props)('test');
    });

    it('should properly call', () => {
      call_f7_onChange(props)('');
    });
  });

  // describe('f8_onOpenChange functions', () => {
  //   it('should properly call', () => {
  //     f8_onOpenChange(props);
  //   });

  //   it('should properly call', () => {
  //     f8_onOpenChange(props);
  //   });
  // });

  // describe('call_f9_onChange functions', () => {
  //   it('should properly call', () => {
  //     call_f9_onChange(props)('test');
  //   });
  // });

  // describe('call_f10_onSearch functions', () => {
  //   it('should properly call', () => {
  //     call_f10_onSearch(props)('test');
  //   });
  // });

  // describe('call_f11_onPageTurn functions', () => {
  //   it('should properly call', () => {
  //     call_f11_onPageTurn(props)(1);
  //   });
  // });

  // describe('call_f12_onPageResize functions', () => {
  //   it('should properly call', () => {
  //     call_f12_onPageResize(props)(1);
  //   });
  // });

  // describe('f13_onChange functions', () => {
  //   it('should properly call', () => {
  //     f13_onChange(props);
  //   });
  // });

  // describe('f14_onSubmit functions', () => {
  //   it('should properly call', () => {
  //     f14_onSubmit(props);
  //   });
  // });

  // describe('call_f15_onRemove functions', () => {
  //   it('should properly call', () => {
  //     call_f15_onRemove(props)('1');
  //   });
  // });

  // describe('f16_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f16_onClick(props);
  //   });
  // });

  // describe('f17_onChange functions', () => {
  //   it('should properly call', () => {
  //     f17_onChange(props);
  //   });
  // });

  // describe('f18_visible functions', () => {
  //   it('should properly call', () => {
  //     f18_visible(props);
  //   });
  // });

  // describe('f2_secondaryButton_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f2_secondaryButton_onClick(props);
  //   });

  //   it('should properly call', async () => {
  //     await f2_secondaryButton_onClick(props);
  //   });
  // });
});
