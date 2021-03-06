import index from './index';

jest.mock('../../utils/common');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusForm/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ addEconomicActivitySteps: 'addEconomicActivitySteps' });
      }
    });
  });
});
