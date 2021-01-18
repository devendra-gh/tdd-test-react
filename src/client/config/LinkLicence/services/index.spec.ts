import fetch from 'client/services/fetch';
import { services } from './index';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('link licence API', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  it('should receive a success case on industrialLicenceDetails', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          code: 200,
          result: [
            {
              licenseNo: '',
              clasification_en: '',
              clasification_ar: '',
              businessNameEng: '',
              businessNameArb: '',
            },
          ],
        },
      });
    });
    const licenseNo = 'CN-1234567';
    services.industrialLicenceDetails(licenseNo);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getLicenceDetailsV3',
      'POST',
      {
        licenseNo: licenseNo || '',
      },
    );
  });
  it('should receive a success case on industrialLicenceDetails without result', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          code: 200,
          result: {},
        },
      });
    });
    const licenseNo = 'CN-1234567';
    services.industrialLicenceDetails(licenseNo);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getLicenceDetailsV3',
      'POST',
      {
        licenseNo: licenseNo || '',
      },
    );
  });
  it('should receive a failure case on industrialLicenceDetails', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        data: { result: {} },
      });
    });
    const licenseNo = undefined;
    services.industrialLicenceDetails(licenseNo);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getLicenceDetailsV3',
      'POST',
      {
        licenseNo: licenseNo || '',
      },
    );
  });

  it('should receive a success case on linkUserLicence', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        status: 'success',
        data: { code: '200', result: {} },
      });
    });
    const licenseNo = 'CN-1234567';
    const spuuid = '362888e9-ddd1-7cc7-bbca-47945a297136';
    services.linkUserLicence(licenseNo, spuuid);
    expect(mockFetch).toHaveBeenCalledWith('/pub/proxy/linkLicense', 'POST', {
      licenseNumber: licenseNo,
      SPUUID: spuuid,
    });
  });
  it('should receive a missing licence number and spuuid case on linkUserLicence', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        status: 'fail',
        message: 'Bad Request',
        data: {
          errorMessage:
            '"licenseNumber" is not allowed to be empty in body. "SPUUID" is not allowed to be empty in body. ',
        },
        error: {
          status: 400,
          statusText: 'Bad Request',
          errors: [],
        },
      });
    });
    const licenseNo = undefined;
    const spuuid = undefined;
    services.linkUserLicence(licenseNo, spuuid);
    expect(mockFetch).toHaveBeenCalledWith('/pub/proxy/linkLicense', 'POST', {
      licenseNumber: licenseNo || '',
      SPUUID: spuuid || '',
    });
  });
  it('should receive throw error case on linkUserLicence', () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    const licenseNo = undefined;
    const spuuid = undefined;
    services.linkUserLicence(licenseNo, spuuid);
    expect(mockFetch).toHaveBeenCalledWith('/pub/proxy/linkLicense', 'POST', {
      licenseNumber: licenseNo || '',
      SPUUID: spuuid || '',
    });
  });
});
