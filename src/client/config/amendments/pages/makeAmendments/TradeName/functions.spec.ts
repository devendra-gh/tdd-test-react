import fetch from 'client/services/fetch';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
import functions from './functions';

jest.mock('client/config/amendments/utils/functions');
jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('tradeName', () => {
  let props: any;
  let mockFetch: any;

  const mockCallgetNextSubStepPage: any = utilsFunctions.getNextSubStepPage;
  const mockCallgetPrevSubStepPage: any = utilsFunctions.getPrevSubStepPage;

  mockCallgetNextSubStepPage.mockImplementation(() => {
    return 'next';
  });
  mockCallgetPrevSubStepPage.mockImplementation(() => {
    return 'prev';
  });
  beforeEach(() => {
    props = {
      currentPage: 'activities',
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
      history: {
        push: jest.fn(),
      },
      actions: {
        activityList: {
          update: jest.fn(),
        },
        businessNameSuggestion: {
          reset: jest.fn(),
        },
        economicNameAvailable: {
          reset: jest.fn(),
          update: jest.fn(),
        },
        busNameSuggestionAvailable: {
          reset: jest.fn(),
        },
        pageLoading: {
          update: jest.fn(),
        },
        newTradeName: {
          reset: jest.fn(),
        },
        amendmentServerError: {
          reset: jest.fn(),
        },
      },
    };

    mockFetch = fetch;
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          pageName: 'test',
        },
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmitAmendment', async () => {
    functions.onSubmitAmendment(props);
  });
  it('should properly call onSubmitAmendment else', async () => {
    mockCallgetNextSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.onSubmitAmendment(props);
  });

  it('should properly call handleBack', () => {
    functions.handleBack(props);
  });
  it('should properly call handleBack else', () => {
    mockCallgetPrevSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.handleBack(props);
  });

  it('should export onPageInit', () => {
    functions.onPageInit(props);
  });
});
