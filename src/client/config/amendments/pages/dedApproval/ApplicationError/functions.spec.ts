// import bpm from 'client/services/bpm';
// import fetch from 'client/services/fetch';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/dedApproval/ApplicationError', () => {
  let props: any;

  beforeEach(() => {
    props = {
      currentPage: 'activities',
      businessKey: 'businessKey',
      history: {
        push: jest.fn(),
      },
      amendmentCategories: {
        ownership: true,
      },
      locale: {
        locale: 'en',
      },
      activity: {
        searchFields: {
          activityCategory: 'AGRICULTURE',
          activitySubCategory: 'Crop Farming',
          searchTerm: 'as',
        },
        changeActivities: [],
        removeActivities: [],
      },
      activityList: {
        pagesInList: ['1'],
        list: [],
        updating: false,
        totalItems: 0,
      },
      licenseType: 'tajer',

      actions: {
        activityList: {
          update: jest.fn(),
        },
        dedErrorMessage: {
          update: jest.fn(),
        },
        amendmentServerError: {
          reset: jest.fn(),
        },
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClickReviewApplication functions', () => {
    it('should be instance of function upload', () =>
      expect(functions.onClickReviewApplication).toBeInstanceOf(Function));

    it('should call function upload with bpm success', async () => {
      functions.onClickReviewApplication(props);
      utilsFunctions.getFirstSubStepPage(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      props = {
        ...props,
        errorMessage: 'Error',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);

      props = {
        ...props,
        errorMessage: '',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
    });
  });
});
