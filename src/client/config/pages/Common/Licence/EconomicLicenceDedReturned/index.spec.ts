import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNameReturned/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should properly call onPageInit', () => {
    const props = {
      i18n: jest.fn(),
      actions: {
        licenceCapId: {
          update: jest.fn(),
        },
        cnNumber: {
          update: jest.fn(),
        },
      },
      cnNumber: 'Cap-Id',
      submitDate: 'TN-NUMBER',
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
