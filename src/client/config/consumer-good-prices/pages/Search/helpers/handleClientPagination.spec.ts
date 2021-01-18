import { handleClientPagination } from './handleClientPagination';

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

  it('should load next page data and set the selectedGood', () => {
    handleClientPagination(props, 1);
    expect(props.actions.goodsList.update).toBeCalledWith({
      ...props.goodsList,
      currentPage: 1,
      selectedGood: '1. Lipton / 200g / UAE',
      data: [
        {
          id: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
    });
  });
});
