import index from './index';

jest.mock('client/config/AddEconomicActivity/utils/common.ts');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ addEconomicActivitySteps: 'addEconomicActivitySteps' });
      }

      // if (typeof item === 'object') {
      //   expect(item.steps).toBeInstanceOf(Function);
      //   const stepsValue = item.steps({ linkLicenceSteps: 'linkLicenceSteps' });
      //   expect(stepsValue).toEqual([]);
      // }
    });
  });
});
