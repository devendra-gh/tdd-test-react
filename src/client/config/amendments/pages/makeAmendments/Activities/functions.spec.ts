// import fetch from 'client/services/fetch';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
import { getActivities } from 'client/config/amendments/services';
import functions from './functions';

jest.mock('client/config/amendments/utils/functions');
jest.mock('client/services/fetch');
jest.mock('client/config/amendments/services');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('activities', () => {
  let props: any;

  const mockCallgetNextSubStepPage: any = utilsFunctions.getNextSubStepPage;
  const mockCallgetPrevSubStepPage: any = utilsFunctions.getPrevSubStepPage;
  const mockgetActivities: any = getActivities;

  mockCallgetNextSubStepPage.mockImplementation(() => {
    return 'next';
  });
  mockCallgetPrevSubStepPage.mockImplementation(() => {
    return 'prev';
  });

  mockgetActivities.mockImplementation(() => {
    return Promise.resolve({
      result: {
        activityinfoData: [
          {
            responseInfo: 'Row : 1 From : 1 | Page : 1 From : 1',
            pageNumber: 'test',
          },
        ],
      },
    });
  });
  beforeEach(() => {
    props = {
      currentPage: 'activities',
      businessKey: 'businessKey',
      history: {
        push: jest.fn(),
      },
      amendmentCategories: {
        category: {
          ownership: true,
          activities: true,
          tradename: true,
          location: false,
          financialDetails: false,
        },
        ownership: {
          ownership: false,
          activities: false,
          tradename: false,
          location: false,
          financialDetails: false,
        },
        isUploadStep: true,
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
          reset: jest.fn(),
        },
        amendmentServerError: {
          reset: jest.fn(),
        },
      },
      i18n: jest.fn(),
    };
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

  it('should properly call getSearchBy', () => {
    const licenseTypeLoop = [
      'tajer',
      'mobdea',
      'economicLicense',
      'allInOne',
      'instantLicense',
      'tech',
      'branch',
    ];

    functions.setActivities({ props, pageNumber: '1', pageSize: '10' });

    licenseTypeLoop.forEach((licence: string) => {
      props.activityList.pagesInList = [];
      props.licenseType = licence;
      functions.setActivities({ props, pageNumber: '1', pageSize: '10' });
    });
    props.activity.searchFields.searchTerm = '';
    functions.setActivities({ props, pageNumber: '1', pageSize: '10' });
  });
  it('should properly call getSearchBy else statement', () => {
    props = {
      ...props,
      activity: {
        searchFields: {
          activityCategory: '',
          activitySubCategory: '',
        },
      },
    };
    mockgetActivities.mockImplementation(() => {
      return Promise.resolve({
        result: {},
      });
    });
    const licenseTypeLoop = ['instantLicense'];

    functions.setActivities({ props, pageNumber: '1', pageSize: '10' });

    licenseTypeLoop.forEach((licence: string) => {
      props.activityList.pagesInList = [];
      props.licenseType = licence;
      functions.setActivities({ props, pageNumber: '1', pageSize: '10' });
    });
    props.activity.searchFields.searchTerm = '';
    functions.setActivities({ props, pageNumber: '1', pageSize: '10' });
  });

  it('should properly call handleBack', () => {
    functions.handleBack(props);
    utilsFunctions.getPrevSubStepPage(props.currentPage, props);
  });

  it('should properly call handleBack else', () => {
    mockCallgetPrevSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.handleBack(props);
  });

  it('should properly call onPageInit', () => {
    expect(functions.onPageInit(props)).toBeInstanceOf(Object);
  });
});
