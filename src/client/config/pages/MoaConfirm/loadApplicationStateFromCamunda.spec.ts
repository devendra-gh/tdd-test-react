import bpm from 'client/services/bpm';
import {
  loadApplicationStateFromCamunda,
  getPartnersArray,
  compareEID,
} from './loadApplicationStateFromCamunda';

const qs = require('querystring');

jest.mock('querystring');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/pages/moaConfirm', () => {
  const mockQuery: any = qs;
  const mockGetVariables: any = bpm.getVariables;

  const props: any = {
    location: {
      search: 'searchFieds',
    },
    history: {
      push: jest.fn(),
    },
    actions: {
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
      partners: {
        update: jest.fn(),
      },
      smartPassData: {
        update: jest.fn(),
      },
      economicLicense: {
        update: jest.fn(),
      },
    },
    economicLicense: {},
  };
  it('should properly return businessKey and instanceId', async () => {
    mockQuery.parse.mockImplementation(() => {
      return {
        id: 'This.is.an.id',
        key: 'This.is.a.key',
      };
    });

    mockGetVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          partners: {
            value: JSON.stringify([{ name: 'partner1' }, { name: 'partner2' }]),
          },
          smartPassData: {
            value: JSON.stringify([{ someKey: 'value' }]),
          },
          allPartnersMoaApproved: {
            value: 'yes',
          },
          licenceType: {
            value: 'tadjer',
          },
        },
      });
    });
    expect(await loadApplicationStateFromCamunda(props)).toMatchObject({});
  });

  it('should properly return businessKey and instanceId', async () => {
    props.instanceId = 'instance';
    props.businessKey = 'businessKey';
    props.economicLicense = { licenceType: { licenceType: 'tadjer' } };

    mockQuery.parse.mockImplementation(() => {
      return {
        id: '',
        key: '',
      };
    });
    mockGetVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          partners: {
            value: JSON.stringify(''),
          },
          smartPassData: {
            value: JSON.stringify(''),
          },
          licenceType: {
            value: 'tadjer',
          },
        },
      });
    });
    expect(await loadApplicationStateFromCamunda(props)).toMatchObject({
      instanceId: '',
      businessKey: '',
    });
  });

  it('should properly call getPartnersArray empty partners', () => {
    expect(getPartnersArray('')).toStrictEqual([]);
  });
  it('should properly call getPartnersArray empty partners', () => {
    expect(getPartnersArray(JSON.stringify(['1']))).toStrictEqual(['1']);
  });
  it('should properly call getPartnersArray empty partners', () => {
    expect(getPartnersArray(['2'])).toStrictEqual(['2']);
  });

  it('shoud properly call compareEID', () => {
    expect(compareEID('test', 'test')).toBe(true);
  });

  it('shoud properly call compareEID', () => {
    expect(compareEID('te-st', 'test')).toBe(true);
  });

  it('shoud properly call compareEID', () => {
    expect(compareEID('te-st', 'ts-et')).toBe(false);
  });
});
