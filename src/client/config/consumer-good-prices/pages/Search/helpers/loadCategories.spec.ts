import { loadCategories } from './loadCategories';
import fetchCategories from '../../../services/categories';

jest.mock('../../../services/categories');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const fetchCategoriesMock: any = fetchCategories;
  const props = {
    history: {
      push: jest.fn(),
    },
    itemId: 1,
    goodsList: {
      recInPage: 1,
      selectedGood: '1. Lipton / 200g / UAE',
      nonPaginatedData: [
        {
          id: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
        {
          id: '2. Lipton / 200g / UAE',
          value: 2,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
      data: [
        {
          id: '1. Lipton / 200g / UAE',
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

  beforeEach(() => {});

  it('should call goodsList.update with error alert when api fails', async () => {
    await loadCategories(props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls[1][0].alertStatus).toBe(
      'error',
    );
  });

  it('should call goodsList.update with correct value when api success', async () => {
    fetchCategoriesMock.mockImplementationOnce(() =>
      Promise.resolve({
        categories: ['one'],
      }),
    );
    await loadCategories(props);
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeFalsy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].categories.length,
    ).toBe(1);
  });

  it('should call goodsList.update with error value alert when api fail', async () => {
    fetchCategoriesMock.mockImplementationOnce(() =>
      Promise.resolve({
        categories: [],
      }),
    );
    await loadCategories(props);
    expect(
      props.actions.goodsList.update.mock.calls[0][0].showSpinner,
    ).toBeTruthy();
    expect(
      props.actions.goodsList.update.mock.calls[1][0].showAlert,
    ).toBeTruthy();
    expect(props.actions.goodsList.update.mock.calls[1][0].alertStatus).toBe(
      'error',
    );
  });
});
