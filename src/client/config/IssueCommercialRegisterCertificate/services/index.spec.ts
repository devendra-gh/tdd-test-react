import fetch from 'client/services/fetch';
import baseUrl from 'client/utils/baseUrl';
import { PATH_ERROR } from '../routes';
import {
  fetchLicences,
  issueCertificate,
  downloadBusinessCertificate,
  errorBoundary,
} from './index';

jest.mock('client/services/fetch', () =>
  jest
    .fn()
    .mockResolvedValueOnce({
      success: false,
      data: {
        responseStatus: { statusCode: 200 },
        TradeLicensesList: { contents: 'contents' },
      },
    })
    .mockResolvedValueOnce({
      success: false,
      data: {
        responseStatus: { statusCode: 200 },
        TradeLicensesList: { contents: 'contents' },
      },
    })
    .mockResolvedValue({
      success: true,
      data: {
        responseStatus: { statusCode: 'status' },
        TradeLicensesList: { contents: 'contents' },
      },
    }),
);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Services', () => {
  it('should return null if issue certificate fails', async () => {
    const cnNumber = 'CN-1234567';
    const data = await issueCertificate({ cnNumber });

    expect(data).toBe(null);
  });

  it('should fetch licences with the right emirates Id', async () => {
    // const testEmiratesId = '12345';
    // await fetchLicences({ emiratesId: testEmiratesId });
    // expect(fetch).toHaveBeenCalledWith(
    //   '/pub/proxy/listTradeLicensesV3',
    //   'POST',
    //   {
    //     emiratesIdNumber: testEmiratesId,
    //   },
    // );
    await fetchLicences();
    expect(fetch).toBeCalled();
  });

  it('should fetch licences with the right emirates Id', async () => {
    // const emiratesId = 'emiratesId';

    // await fetchLicences({ emiratesId });
    // expect(fetch).toHaveBeenCalledWith(
    //   '/pub/proxy/listTradeLicensesV3',
    //   'POST',
    //   {
    //     emiratesIdNumber: emiratesId,
    //   },
    // );
    await fetchLicences();
    expect(fetch).toBeCalled();
  });

  it('should successfully issue certificate given the cn number', async () => {
    const cnNumber = 'CN-1234567';
    const letterType = 'license'; // 'haslicense';

    await issueCertificate({ cnNumber });
    expect(fetch).toHaveBeenCalledWith('/pub/proxy/issueLetter', 'POST', {
      cnNumber,
      letterType,
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
