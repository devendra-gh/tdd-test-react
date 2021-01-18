import fetch from 'client/services/fetch';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Ownership/functions', () => {
  const props = {
    currentPage: 'ownership',
    history: {
      push: jest.fn(),
    },
    licenceDetails: {
      partners: [],
    },
    amendmentCategories: {
      category: {
        ownership: true,
        location: false,
        activities: false,
        tradename: false,
        financialDetails: false,
      },
      isUploadStep: false,
    },
    legalForm: '',
    licenseType: '',
    currentCategory: '',
    actions: {
      licenseNo: {
        update: jest.fn(),
      },

      legalForm: {
        update: jest.fn(),
      },
      licenseType: {
        update: jest.fn(),
      },
      amendmentPage: {
        update: jest.fn(),
      },
      profile: {
        update: jest.fn(),
      },
      amendmentServerError: {
        reset: jest.fn(),
        update: jest.fn(),
      },
    },
    i18n: jest.fn(),
  };

  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          continueAmendments: false,
        },
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // it('should properly call init with success response', () => {
  //   functions.init(props);
  //   // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
  // });

  it('should properly call checkRules with success response', async () => {
    await functions.checkRules(props, 'single');
    // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
  });
  it('should properly call checkRules with null', async () => {
    await functions.checkRules(props);
    // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
  });

  it('should properly call checkRules with failure response', async () => {
    await functions.checkRules(props, 'test');
    // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
  });

  it('should properly call onNext with success response', async () => {
    await functions.onNext(props);
    // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
  });

  it('should properly call getAmendmentTypes with success response', async () => {
    const data = functions.getAmendmentTypes(
      'limitedLiabilityCompanyLLC',
      'economicLicense',
      'ownership',
    );
    expect(data).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentTypes with failure response', async () => {
    const data = functions.getAmendmentTypes('', '', '');
    expect(data).toBe(null);
  });

  it('should properly call getRuleList with success response', async () => {
    const a = functions.getRuleList(
      'economicLicense',
      'limitedLiabilityCompanyLLC',
    );
    expect(a).toBeInstanceOf(Object);
  });

  it('should properly call getRuleList with failure response', async () => {
    const a = functions.getRuleList('', '');
    expect(a).toBeInstanceOf(Object);
  });

  it('should properly call handleBack', async () => {
    functions.handleBack(props);
    utilsFunctions.getPrevSubStepPage(props.currentPage, props);
  });

  it('should properly call getActionType', async () => {
    functions.getActionType('partners', 'update', 0, props);
  });

  it('should properly call getActionType else statement', async () => {
    functions.getActionType('', 'update', 0, props);
  });
  it('should properly call onPageInit', () => {
    expect(functions.onPageInit(props)).toBeInstanceOf(Object);
  });
});
