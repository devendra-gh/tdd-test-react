import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicLicenceWaitingInitialApproval/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check onPageInit', () => {
    const props = {
      cnNumber: '12345',
      submitDate: 'Tue May 05 2020 16:07:39 GMT+0400 (Gulf Standard Time)',
    };

    index[0].onPageInit(props);
  });
});
