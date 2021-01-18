import fetch from 'client/services/fetch';
// import { get } from 'lodash';
import functions from './functions';

jest.mock('client/services/fetch');
// jest.mock('lodash');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Profile/functions', () => {
  let mockFetch: any;
  // let mockLodash: any;
  let props: any;
  beforeEach(() => {
    mockFetch = fetch;
    // mockLodash = get;
  });

  props = {
    legalForm: 'limitedLiabilityCompanyLLC',
    licenseType: 'economicLicense',
    amendmentPage: [],
    representativeType: 'partners',
    profileType: 'Individual',
    action: 'update',
    index: -1,
    formValues: {},
    profile: {
      representativeType: 'partners',
      profileType: 'Individual',
      action: 'update',
      index: -1,
      formValues: {},
    },
    licenceDetails: {
      partners: [
        {
          status: 'add',
        },
      ],
      managers: [],
      representatives: [],
      localAgents: [],
      heirs: [],
    },
    actions: {
      licenceDetails: {
        update: jest.fn(),
      },
      countryList: {
        update: jest.fn(),
      },
    },
    i18n: jest.fn(),
    history: {
      push: jest.fn(),
    },
    countryList: [],
  };

  it('should properly call onSubmit action update', () => {
    functions.onSubmit(props);
  });

  it('should properly call onSubmit update', () => {
    props.licenceDetails.partners[0].status = 'update';
    props.profile.index = 0;
    functions.onSubmit(props);
  });

  it('should properly call onSubmit else statement', () => {
    props.profile.action = 'add';
    functions.onSubmit(props);
  });

  it('should properly call getPossibleRepTypes', () => {
    props.profile.action = 'add';
    functions.getPossibleRepTypes(props);
  });

  it('should properly call onPageInit', async () => {
    const fakePayload = {
      success: true,
      data: [
        {
          name: 'test',
        },
      ],
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    await functions.onPageInit(props);
    expect(mockFetch).toHaveBeenCalledWith('/pub/proxy/getCountriesList');
    expect(mockFetch).toBeCalledTimes(1);

    const fakePayload1 = {
      success: true,
      data: [],
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload1);
    });
    await functions.onPageInit(props);
    expect(mockFetch).toHaveBeenCalledWith('/pub/proxy/getCountriesList');
    expect(mockFetch).toBeCalledTimes(2);
  });

  it('should properly call onPageInit', async () => {
    const fakePayload = {
      success: true,
      data: [
        {
          name: 'test',
        },
      ],
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    props = {
      ...props,
      countryList: [
        {
          name: 'test',
        },
      ],
    };
    await functions.onPageInit(props);
  });
});
