import fetch from 'client/services/fetch';
import { get } from 'lodash';
import fetchLicenseDetails from './fetchLicenseDetails';

jest.mock('client/services/fetch');
jest.mock('lodash');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home functions', () => {
  let mockFetch: any;
  let mockLodash: any;

  beforeEach(() => {
    mockFetch = fetch;
    mockLodash = get;
  });

  it('should cover license validation', async () => {
    const fakePayload = {
      success: true,
      data: {
        licenseNo: 'business-key',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });

    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: 'some-data' });
    });

    const data = await fetchLicenseDetails('CN-Test');
    expect(mockFetch).toBeCalledWith('/pub/proxy/getLicenceDetailsV3', 'POST', {
      licenseNo: 'CN-Test',
    });
    expect(data).toMatchObject({ data: 'some-data' });

    const datatest = await fetchLicenseDetails('Test');
    expect(mockFetch).toBeCalledWith('/pub/proxy/getLicenceDetailsV3', 'POST', {
      licenseNo: 'CN-Test',
    });
    expect(datatest).toMatchObject({ data: 'some-data' });
  });
});
