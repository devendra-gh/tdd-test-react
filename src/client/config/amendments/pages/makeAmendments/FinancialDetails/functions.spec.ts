import * as utilsFunctions from 'client/config/amendments/utils/functions';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('client/config/amendments/utils/functions');

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
  const props = {
    businessKey: 'businessKey',
    history: {
      push: jest.fn(),
    },
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
      paidUpCapital: {},
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
  };

  it('should properly call onSubmitAmendment', async () => {
    functions.onSubmitAmendment(props);
  });
  it('should properly call onSubmitAmendment', async () => {
    mockCallgetNextSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.onSubmitAmendment(props);
  });

  it('should properly call handleBack', async () => {
    functions.handleBack(props);
  });

  it('should properly call handleBack else', async () => {
    mockCallgetPrevSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.handleBack(props);
  });
  it('should properly call handleCapitalAmountChange', async () => {
    functions.handleCapitalAmountChange(props, 'values');
  });

  it('should properly call onPageInit', () => {
    expect(functions.onPageInit(props)).toBeInstanceOf(Object);
  });
});
