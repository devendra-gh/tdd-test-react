import fetch from 'client/services/fetch';
import fetchCategories from './category';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('category', () => {
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
        businessCategories: { businessCategories: [{}] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchCategories(undefined).then(res => {
      expect(res).toStrictEqual([{}]);
    });
  });

  it('apis success - data format different - should return correct value', async () => {
    const response = {
      data: {
        businessCategories: {
          businessCategories: {
            description: 'description',
            descriptionAr: 'descriptionAr',
          },
        },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchCategories(undefined).then(res => {
      expect(res).toStrictEqual([
        {
          description: 'description',
          descriptionAr: 'descriptionAr',
        },
      ]);
    });
  });

  it('apis success - data format wrong - should throw', async () => {
    const response = {
      data: {
        businessCategories: {
          businessCategories: {
            description: 'description',
          },
        },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    const errorHandler = jest.fn();
    try {
      await fetchCategories(undefined);
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
      await fetchCategories(undefined);
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });
});
