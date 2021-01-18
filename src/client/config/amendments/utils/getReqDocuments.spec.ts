import getAmendmentsMade from 'client/config/amendments/utils/getAmendmentsMade';
import * as functions from './getReqDocuments';

jest.mock('client/config/amendments/utils/getAmendmentsMade');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getReqDocuments', () => {
  let mockCall: any;
  beforeEach(() => {
    mockCall = getAmendmentsMade;
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
    },
    prevLegalForm: 'establishment',
    legalForm: 'establishment',
    prevLicenseType: 'economicLicense',
    licenseType: 'economicLicense',
    amendmentCategories: {
      category: {
        ownership: true,
        location: true,
        activity: false,
        tradeName: false,
        financialDetails: true,
      },
      ownership: {
        ownership: false,
        location: false,
        activity: false,
        tradeName: true,
        financialDetails: true,
      },
    },
    licenceDetails: {
      partners: [],
      managers: [
        {
          status: 'Add',
        },
      ],
      representatives: [],
      localAgents: [],
      heirs: [],
      location: {},
      tradeName: {},
      country: {},
      paidUpCapital: {},
      activities: [],
      contactInfo: {},
    },
  };

  it('should properly call getReqDocuments', async () => {
    mockCall.mockImplementation(() => {
      return {
        financialDetails: {
          paidUpCapital: {
            update: {
              Capital: '400',
            },
          },
        },
      };
    });
    functions.getRequiredDocuments(props);
  });
});
