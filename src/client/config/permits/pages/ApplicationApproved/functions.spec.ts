import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('lodash');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/LicenseReturned/functions', () => {
  let props: any;
  let mockFetch: any;

  beforeEach(() => {
    mockFetch = fetch;

    props = {
      businessKey: 'businessKey',
      messageName: 'getPaymentUrlMsg',
    };
  });

  it('should be instance of function', () => {
    expect(functions.onClick).toBeInstanceOf(Function);
  });

  it('should successfully send message with bpm', async () => {
    const fakePayload = {
      success: true,
      data: {
        businessKey: 'businessKey',
        messageName: 'getPaymentUrlMsg',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    await functions.onClick(props);

    expect(mockFetch).toHaveBeenCalledWith(
      '/api/proxy/bpm/permits/message',
      'POST',
      {
        businessKey: 'businessKey',
        messageName: 'getPaymentUrlMsg',
      },
    );
  });
});
