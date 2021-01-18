import getApplicationPayload from './getApplicationPayload';
import getAmendmentsMade from './getAmendmentsMade';

jest.mock('./getAmendmentsMade');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/utils/getApplicationPayload', () => {
  let mockCall: any;
  beforeEach(() => {
    mockCall = getAmendmentsMade;
  });
  const props = {
    prevLegalForm: 'establishment',
    legalForm: 'establishment',
    prevLicenseType: 'economicLicense',
    licenseType: 'economicLicense',
    licenseNo: 'CN-11111',
    capID: 'T23-1111-2222-34H',
    licenceDetails: {
      partners: [],
      managers: [],
      representatives: [],
      localAgents: [],
      heirs: [],
      location: {},
      tradeName: {},
      country: {},
      paidUpCapital: {},
      activities: [],
      contactInfo: {
        name: 'test',
        phone: 'test',
        email: 'test',
      },
    },
  };

  it('should properly call getApplicationPayload for paid up capital ', () => {
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
    const applicationPayload = getApplicationPayload(props);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getApplicationPayload for ownership partners ', () => {
    mockCall.mockImplementation(() => {
      return {
        ownership: {
          partners: {
            add: [
              {
                status: 'add',
                profileType: 'Individual',
                representativeTypeEng: 'partners',
                emiratesId: '243-2343-2342234-2',
                moiId: '24AS32',
                sharePercentage: '10',
              },
              {
                status: 'add',
                profileType: '',
                representativeTypeEng: 'partners',
                emiratesId: '',
                moiId: '24AS32',
                sharePercentage: '10',
              },
              {
                status: 'add',
                profileType: '',
                representativeTypeEng: 'partners',
                emiratesId: '',
                moiId: '',
                sharePercentage: '10',
              },
            ],
            delete: [
              {
                referenceContactId: '2434',
                status: 'delete',
              },
            ],
          },
          partnerNationality: {
            update: [
              {
                referenceContactId: '2434',
                nationality: 'India',
                status: 'update',
              },
            ],
          },
          partnerShare: {
            update: [
              {
                referenceContactId: '2434',
                sharePercentage: '20',
                status: 'update',
              },
            ],
          },
        },
      };
    });
    const applicationPayload = getApplicationPayload(props);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getApplicationPayload for activity ', () => {
    mockCall.mockImplementation(() => {
      return {
        activities: {
          activities: {
            update: {
              ActivityCode: [
                {
                  ActivityCode: '123',
                  Action: 'Add',
                },
              ],
            },
          },
        },
      };
    });
    const applicationPayload = getApplicationPayload(props);
    expect(applicationPayload).toBeInstanceOf(Object);
  });
});
