import fetch from 'client/services/fetch';
import fetchLegalForms from './legalForms';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('legalForm', () => {
  let mockFetch: any;

  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('apis success - should return correct value', async () => {
    const response = {
      data: {
        legalform: { legalform: [{}] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchLegalForms().then(res => {
      expect(res).toStrictEqual([{}]);
    });
  });

  it('apis success - insufficient data - should throw', async () => {
    const response = {
      data: {
        legalform: { legalform: [] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    const errorHandler = jest.fn();
    try {
      await fetchLegalForms();
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });

  it('apis fail - should throw', async () => {
    const response = {};
    mockFetch.mockImplementation(() => {
      return Promise.reject(response);
    });
    const errorHandler = jest.fn();
    try {
      await fetchLegalForms();
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });
});
