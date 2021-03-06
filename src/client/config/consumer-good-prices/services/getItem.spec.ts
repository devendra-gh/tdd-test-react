import fetch from 'client/services/fetch';
import fetchGoodsDetail from './getItem';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const mockFetch: any = fetch;
  beforeEach(() => {});
  // it('should throw when fail', async () => {
  //   mockFetch.mockImplementationOnce(() => Promise.reject());
  //   const fn = jest.fn();
  //   await fetchGoodsDetail({ barCode: 'barCode' }).catch(() => {
  //     fn();
  //   });
  //   expect(fn).toBeCalled();
  // });

  it('not fail', async () => {
    mockFetch.mockImplementationOnce(() =>
      Promise.resolve({
        data: 'data',
      }),
    );
    const fn = jest.fn();
    await fetchGoodsDetail({ barCode: 'barCode' }).then((data: string) => {
      fn(data);
    });
    expect(fn).toBeCalledWith('data');
  });
});
