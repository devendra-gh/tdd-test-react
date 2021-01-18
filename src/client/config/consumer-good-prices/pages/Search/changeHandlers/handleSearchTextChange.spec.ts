import { handleSearchTextChange } from './handleSearchTextChange';
import { fetchGoodsFromSearchText } from '../../../services/goodsSearch';

jest.mock('client/config/consumer-good-prices/config');
jest.mock('../../../services/goodsSearch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('handleSearchTextChange', () => {
  const fetchGoodsFromSearchTextMock: any = fetchGoodsFromSearchText;
  const props = {
    history: {
      push: jest.fn(),
    },
    itemId: 1,
    goodsList: {
      searchBy: 'product',
      recInPage: 1,
      selectedGood: '1. Lipton / 200g / UAE',
      nonPaginatedData: [
        {
          id: '123',
          enName: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
        {
          id: '456',
          enName: '2. Lipton / 200g / UAE',
          value: 2,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
      data: [
        {
          id: '123',
          enName: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
    },
    actions: {
      goodsList: {
        update: jest.fn(),
      },
    },
  };

  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  it('should call goodsList.update with error alert when api fails', async () => {
    await handleSearchTextChange('searchText', props, 1);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(1);
  });

  it('should call goodsList.update with error alert when api fails - calls update', async () => {
    Object.defineProperty(global, 'sessionStorage', {
      value: {
        getItem: () => 'product',
      },
    });
    await handleSearchTextChange('searchText', props, 1);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update with error - api success - wrong data 1', async () => {
    fetchGoodsFromSearchTextMock.mockImplementationOnce(() =>
      Promise.resolve({}),
    );
    await handleSearchTextChange('searchText', props, 1);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update with error - api success - wrong data 2', async () => {
    fetchGoodsFromSearchTextMock.mockImplementationOnce(() =>
      Promise.resolve({
        list: [],
      }),
    );
    await handleSearchTextChange('searchText', props, 1);

    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update with error - api success - totalCount 0', async () => {
    fetchGoodsFromSearchTextMock.mockImplementationOnce(() =>
      Promise.resolve({
        list: [],
        totalCount: 0,
      }),
    );
    await handleSearchTextChange('searchText', props, 1);

    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update twice when session when searchBy changed', async () => {
    fetchGoodsFromSearchTextMock.mockImplementationOnce(() =>
      Promise.resolve({
        list: [
          {
            itemNameEn: 'itemNameEn',
            itemNameAr: 'itemNameAr',
            barCode: 'barCode',
          },
        ],
        totalCount: 0,
      }),
    );
    await handleSearchTextChange('searchText', props, 1);
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showSpinner,
    ).toBeFalsy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update when searchBy changed', async () => {
    sessionStorage.getItem = () => 'category';
    fetchGoodsFromSearchTextMock.mockImplementationOnce(() =>
      Promise.resolve({
        list: [
          {
            itemNameEn: 'itemNameEn',
            itemNameAr: 'itemNameAr',
            barCode: 'barCode',
          },
        ],
        totalCount: 0,
      }),
    );
    await handleSearchTextChange('searchText', props, 1);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(1);
  });
});
