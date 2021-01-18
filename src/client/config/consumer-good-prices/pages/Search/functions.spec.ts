import functions from './functions';

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
      selectedGood: '1. Lipton / 200g / UAE',
      data: [
        {
          id: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
    },
    actions: {
      itemId: {
        update: jest.fn(),
      },
    },
  };

  it('should properly redirect to home page on clicking cancel button', async () => {
    functions.onCancel(props);
    expect(props.history.push).toBeCalledWith('/consumer-good-prices/');
  });

  it('should redirects to details page', async () => {
    functions.onNextClick(props);
    expect(props.history.push).toBeCalledWith(
      `/consumer-good-prices/details/${props.itemId}`,
    );
  });
});
