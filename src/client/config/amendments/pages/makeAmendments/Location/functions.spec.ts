import fetch from 'client/services/fetch';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
// import getTawtheeqInfo from 'client/config/amendments/services/getTawtheeqInfo';
import functions from './functions';

jest.mock('client/config/amendments/utils/functions');
jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('activities', () => {
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
    mockFetch = fetch;
  });

  const props = {
    currentPage: 'location',
    businessKey: 'businessKey',
    history: {
      push: jest.fn(),
    },
    actions: {
      tawtheeqDetails: {
        update: jest.fn(),
      },
      licenceDetails: {
        update: jest.fn(),
      },
      amendmentServerError: {
        reset: jest.fn(),
      },
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
    tawtheeqDetails: {},
    licenceDetails: {
      location: {},
    },
    countryList: [],
  };

  it('should properly call onSubmitAmendment', async () => {
    functions.onSubmitAmendment(props);
    // utilsFunctions.getNextSubStepPage(props.currentPage, props);
  });

  it('should properly call onSubmitAmendment else', async () => {
    mockCallgetNextSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.onSubmitAmendment(props);
    // utilsFunctions.getNextSubStepPage(props.currentPage, props);
  });

  it('should properly call handleBack', async () => {
    functions.handleBack(props);
    // utilsFunctions.getPrevSubStepPage(props.currentPage, props);
  });
  it('should properly call handleBack else', async () => {
    mockCallgetPrevSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.handleBack(props);
    // utilsFunctions.getPrevSubStepPage(props.currentPage, props);
  });

  it('should properly call handleBack', async () => {
    const fakePayload = {
      status: 'success',
      data: [
        {
          name: 'Afghanistan',
          code: 'AFG',
        },
        {
          name: 'Åland Islands',
          code: 'ALA',
        },
        {
          name: 'Albania',
          code: 'ALB',
        },
        {
          name: 'Gibraltar',
          code: 'GIB',
        },
        {
          name: 'Greece',
          code: 'GRC',
        },
      ],
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    functions.onPageInit(props);
  });

  it('should properly call handleBack', async () => {
    const fakePayload = {
      status: 'failure',
      data: [],
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    functions.onPageInit(props);
  });

  it('should properly call handleBack', async () => {
    const props1 = {
      currentPage: 'location',
      businessKey: 'businessKey',
      history: {
        push: jest.fn(),
      },
      actions: {
        tawtheeqDetails: {
          update: jest.fn(),
        },
        licenceDetails: {
          update: jest.fn(),
        },
      },
      tawtheeqDetails: {},
      licenceDetails: {
        location: {},
      },
      countryList: [
        {
          name: 'Afghanistan',
          code: 'AFG',
        },
        {
          name: 'Åland Islands',
          code: 'ALA',
        },
        {
          name: 'Albania',
          code: 'ALB',
        },
        {
          name: 'Gibraltar',
          code: 'GIB',
        },
        {
          name: 'Greece',
          code: 'GRC',
        },
      ],
    };
    functions.onPageInit(props1);
  });
});
