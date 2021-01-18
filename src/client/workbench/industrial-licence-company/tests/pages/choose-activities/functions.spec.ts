import fetch from 'client/services/fetch';
// import bpm from 'client/services/bpm';
/* eslint-disable camelcase */
import {
  call_f11_onPageTurn,
  call_f12_onPageResize,
  f13_onChange,
  f14_onSubmit,
  call_f15_onRemove,
  // f16_onClick,
  // f17_primaryButton_onClick,
} from '../../../pages/choose-activities/functions';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../../sharedFunctions/services', () => ({
  getActivities: jest.fn(),
}));

describe('pages/choose-activities/functions', () => {
  let props: any;
  // const mockBpm: any = bpm;
  // let mockFetch: any;

  beforeEach(() => {
    props = {
      fetch,
      locale: 'en',
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
      getActivitiesReqFilter: [],
      actions: {
        chooseActivitiesCheckLoader: {
          update: jest.fn(),
        },
        tableActivities: {
          update: jest.fn(),
        },
        selectedActivities: {
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
        loading: {
          update: jest.fn(),
        },
        tablePageSize: {
          update: jest.fn(),
        },
        tableCurrPage: {
          update: jest.fn(),
        },
        groupValue: {
          update: jest.fn(),
        },
        getActivitiesReqFilter: {
          update: jest.fn(),
        },
        classDisabled: {
          update: jest.fn(),
        },
        branchValue: {
          update: jest.fn(),
        },
        tableTotalRecords: {
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
      bpm: {
        sendMessage: jest.fn(),
      },
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

  // describe('call_f7_onChange functions', () => {
  //   it('should properly call', () => {
  //     call_f7_onChange(props)('All');
  //   });

  //   it('should properly call', () => {
  //     call_f7_onChange(props)('test');
  //   });
  // });

  // describe('call_f8_onChange functions', () => {
  //   it('should properly call', async () => {
  //     await call_f8_onChange(props)('test');
  //   });
  // });

  // describe('call_f9_onSelectionChange functions', () => {
  //   it('should properly call', () => {
  //     call_f9_onSelectionChange(props)('');
  //   });
  // });

  // describe('call_f10_onSearch functions', () => {
  //   it('should properly call', () => {
  //     call_f10_onSearch(props)('test');
  //   });
  // });

  describe('call_f11_onPageTurn functions', () => {
    it('should properly call', () => {
      call_f11_onPageTurn(props)(1);
    });
  });

  describe('call_f12_onPageResize functions', () => {
    it('should properly call', () => {
      call_f12_onPageResize(props)(1);
    });
  });

  describe('f13_onChange functions', () => {
    it('should properly call', () => {
      f13_onChange(props);
    });
  });

  describe('f14_onSubmit functions', () => {
    it('should properly call', () => {
      f14_onSubmit(props);
    });
  });

  describe('call_f15_onRemove functions', () => {
    it('should properly call', async () => {
      await call_f15_onRemove(props)('test');
    });
  });

  // describe('f16_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f16_onClick(props);
  //   });
  // });

  // describe('f17_primaryButton_onClick functions', () => {
  //   it('should properly call', () => {
  //     f17_primaryButton_onClick(props);
  //   });
  // });
});
