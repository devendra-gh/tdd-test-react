import { handleCategoryChange } from './handleCategoryChange';
import { fetchGoodsFromCategory } from '../../../services/goodsCategories';

jest.mock('client/config/consumer-good-prices/config');
jest.mock('../../../services/goodsCategories');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const fetchGoodsFromCategoryMock: any = fetchGoodsFromCategory;
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call goodsList.update with error alert when api fails - doesent calls update', async () => {
    await handleCategoryChange('product', props);
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
    await handleCategoryChange('product', props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update with error - api success - wrong data 1', async () => {
    fetchGoodsFromCategoryMock.mockImplementationOnce(() =>
      Promise.resolve([]),
    );
    await handleCategoryChange('product', props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update with error - api success - wrong data 2', async () => {
    fetchGoodsFromCategoryMock.mockImplementationOnce(() =>
      Promise.resolve(null),
    );
    await handleCategoryChange('product', props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update with error - api success - wrong data 2', async () => {
    fetchGoodsFromCategoryMock.mockImplementationOnce(() =>
      Promise.resolve('other'),
    );
    await handleCategoryChange('product', props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls.length).toBe(2);
  });

  it('should call goodsList.update - api success - case 1', async () => {
    Object.defineProperty(global, 'sessionStorage', {
      writable: true,
      value: {
        getItem: () => 'product',
      },
    });
    fetchGoodsFromCategoryMock.mockImplementationOnce(() =>
      Promise.resolve([
        {
          itemNameEn: 'itemNameEn',
          itemNameAr: 'itemNameAr',
          barCode: 'barCode',
          storeItemJob: {
            collectionDate: 'collectionDate',
          },
        },
      ]),
    );
    await handleCategoryChange('cat1', props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls[1][0].totalCount).toBe(1);
  });

  it('should call goodsList.update - api success - case 2 - session different', async () => {
    Object.defineProperty(global, 'sessionStorage', {
      writable: true,
      value: {
        getItem: () => 'category',
      },
    });
    fetchGoodsFromCategoryMock.mockImplementationOnce(() =>
      Promise.resolve([
        {
          itemNameEn: 'itemNameEn',
          itemNameAr: 'itemNameAr',
          barCode: 'barCode',
        },
      ]),
    );
    await handleCategoryChange('cat1', props);
    expect(props.actions.goodsList.update.mock.calls.length).toBe(1);
  });
});
