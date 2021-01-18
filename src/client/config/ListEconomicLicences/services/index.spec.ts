import fetch from 'client/services/fetch';
import baseUrl from 'client/utils/baseUrl';
import { PATH_ERROR } from '../routes';
import {
  // fetchLicences,
  issueCertificate,
  downloadBusinessCertificate,
  errorBoundary,
} from './index';

jest.mock('client/services/fetch', () =>
  jest
    .fn()
    .mockResolvedValueOnce({ success: true, data: { mockData: [] } })
    .mockResolvedValueOnce({ success: false, data: { mockData: [] } }),
);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Services', () => {
  // it('should return an empty array if fetch licence fails', async () => {
  //   const testEmiratesId = '12345';
  //   const data = await fetchLicences({ emiratesId: testEmiratesId });

  //   expect(data).toEqual([]);
  // });

  // it('should return data if licence fetch is successful', async () => {
  //   const mockData = await fetchLicences({ emiratesId: '123455' });
  //   expect(mockData).toMatchObject({ mockData: [] });
  // });

  // it('should fetch licences with the right emirates Id', async () => {
  //   const testEmiratesId = '12345';
  //   await fetchLicences({ emiratesId: testEmiratesId });

  //   expect(fetch).toHaveBeenCalledWith('/pub/proxy/listTradeLicenses', 'POST', {
  //     emiratesIdNumber: testEmiratesId,
  //   });
  // });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('issueCertificate', () => {
    it('should return null if issue certificate fails', async () => {
      const cnNumber = 'CN-1234567';
      const data = await issueCertificate({ cnNumber });
      expect(data).toMatchObject({ mockData: [] });
    });

    it('should successfully issue certificate given the cn number', async () => {
      const cnNumber = 'CN-1234567';
      const letterType = 'haslicense';

      await issueCertificate({ cnNumber });
      expect(fetch).toHaveBeenCalledWith('/pub/proxy/issueLetter', 'POST', {
        cnNumber,
        letterType,
      });
    });
  });

  it('should redirect to error path in error boundary', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    errorBoundary(props, 'some error');
    expect(props.history.push).toHaveBeenCalledWith(PATH_ERROR);
  });

  it('should open new window with download link on download business certificate', async () => {
    const certificateName = 'receipt';
    const type = 'licenseOwnershipCertificate';
    const instanceId = '12345';

    global.window = Object.create(window);
    Object.defineProperty(window, 'open', {
      value: jest.fn(),
    });

    await downloadBusinessCertificate({ instanceId, certificateName, type });
    expect(window.open).toHaveBeenCalledWith(
      `${baseUrl}/api/download/businessCertificateGenericAuthADU?instanceId=${instanceId}&type=${type}&certificateName=${certificateName}&mobileDownloadable=pdf&mobileFileName=Certificate`,
    );
  });
});
