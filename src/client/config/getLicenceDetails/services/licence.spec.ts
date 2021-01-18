import fetch from 'client/services/fetch';
import fetchLicenceDetails from './licence';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('licence API', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  it('should receive success on fetchLicenceDetails call', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: { result: {} },
      });
    });
    const licenceNo = 'CN-1234567';
    fetchLicenceDetails(licenceNo);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getLicenceDetailsV3',
      'POST',
      {
        licenseNo: licenceNo || '',
      },
    );
  });

  it('should receive not found error on fetchLicenceDetails call', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        message: 'Failed to get trade licence details from DED',
        data: { result: {} },
      });
    });
    const licenceNo = undefined;
    fetchLicenceDetails(licenceNo);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getLicenceDetailsV3',
      'POST',
      {
        licenseNo: licenceNo || '',
      },
    );
  });

  it('should receive generic error on fetchLicenceDetails call', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        message: 'abc',
        data: { result: {} },
      });
    });
    const licenceNo = undefined;
    fetchLicenceDetails(licenceNo);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getLicenceDetailsV3',
      'POST',
      {
        licenseNo: licenceNo || '',
      },
    );
  });
});
