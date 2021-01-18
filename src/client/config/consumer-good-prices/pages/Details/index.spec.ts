import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/details/1', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    currentGoods: {},
    match: {
      params: { id: '444444' },
      locale: 'ar',
    },
    action: {
      currentGoods: {
        update: jest.fn(),
      },
    },
  };

  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should call onPageInit', () => {
    expect(index[0].onPageInit(props)).toBeUndefined();
  });
});
