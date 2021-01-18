import { handlePageChange } from './handlePageChange';
import { handleSearchTextChange } from './handleSearchTextChange';
import { handleClientPagination } from '../helpers/handleClientPagination';

jest.mock('./handleSearchTextChange', () => ({
  handleSearchTextChange: jest.fn(),
  esModule: true,
}));

jest.mock('../helpers/handleClientPagination', () => ({
  handleClientPagination: jest.fn(),
  esModule: true,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    itemId: 1,
    goodsList: {
      searchBy: 'product',
      searchText: 'searchText',
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

  it('should call handleSearchTextChange when searchBy is product', async () => {
    await handlePageChange(1, props);
    expect(handleSearchTextChange).toHaveBeenCalledWith('searchText', props, 1);
  });

  it('should call handleSearchTextChange when searchBy is category', async () => {
    props.goodsList.searchBy = 'category';
    await handlePageChange(1, props);
    expect(handleClientPagination).toHaveBeenCalledWith(props, 1);
  });
  it('should call handleSearchTextChange when searchBy is category', async () => {
    props.goodsList.searchBy = 'other';
    await handlePageChange(1, props);
    expect(handleClientPagination).not.toBeCalled();
  });
});
