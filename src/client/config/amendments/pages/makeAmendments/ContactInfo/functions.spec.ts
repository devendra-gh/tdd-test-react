import fetch from 'client/services/fetch';
import getApplicationPayload from 'client/config/amendments/utils/getApplicationPayload';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
import functions from './functions';

jest.mock('client/config/amendments/utils/functions');
jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('activities', () => {
  const mockCallgetNextSubStepPage: any = utilsFunctions.getNextSubStepPage;
  const mockCallgetPrevSubStepPage: any = utilsFunctions.getPrevSubStepPage;

  mockCallgetNextSubStepPage.mockImplementation(() => {
    return 'next';
  });
  mockCallgetPrevSubStepPage.mockImplementation(() => {
    return 'prev';
  });
  let props: any;
  props = {
    businessKey: 'businessKey',
    actions: {
      licenceDetails: {
        update: jest.fn(),
      },
      dedErrorMessage: {
        reset: jest.fn(),
      },
      amendmentServerError: {
        update: jest.fn(),
        reset: jest.fn(),
      },
    },
    licenceDetails: {
      contactInfo: {
        name: 'test',
        phone: 'test',
        email: 'test',
      },
    },
  };

  let mockFetch: any;
  beforeEach(() => {
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

  it('should properly call submit', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          result: [
            {
              applicationStatus: 'hold',
              capId: '20LIC-00000-008B7',
              ioDetails: {
                businessKey: '123',
                processInstanceId: '123',
              },
            },
          ],
        },
      });
    });
    functions.submit(props);
    await getApplicationPayload(props);
  });

  it('should properly call handleBack', async () => {
    props = {
      ...props,
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
    };
    functions.handleBack(props);
  });
  it('should properly call handleBack else ', async () => {
    mockCallgetPrevSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.handleBack(props);
  });

  it('should properly call init', async () => {
    functions.init(props);
  });

  it('should properly call onPageInit', () => {
    expect(functions.onPageInit(props)).toBeInstanceOf(Object);
  });
});
