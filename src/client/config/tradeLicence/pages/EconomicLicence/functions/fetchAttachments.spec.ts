import fetch from 'client/services/fetch';
import fetchAttachments from './fetchAttachments';

jest.mock('client/services/fetch');
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/pages/economicLicence/function/fetchAttachments', () => {
  const mockFetch: any = fetch;
  it('should call fetchAttachment without type', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        data: {
          result: {
            TransactionRequirementData: 'TransactionRequirementData',
          },
        },
      });
    });
    expect(await fetchAttachments('1', 'establishment')).toBe(
      'TransactionRequirementData',
    );
  });
});
