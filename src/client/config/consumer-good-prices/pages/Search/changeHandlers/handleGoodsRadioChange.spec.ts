import { handleGoodsRadioChange } from './handleGoodsRadioChange';

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
        {
          id: 'label',
          value: 11,
          arName: 'label',
        },
      ],
    },
    actions: {
      goodsList: {
        update: jest.fn(),
      },
      itemId: {
        update: jest.fn(),
      },
    },
  };

  it('should load next page data and set the selectedGood', () => {
    handleGoodsRadioChange('label', props);
    expect(props.actions.goodsList.update).toBeCalledWith({
      ...props.goodsList,
      selectedGood: 'label',
    });
  });
});
