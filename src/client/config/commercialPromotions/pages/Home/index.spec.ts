import Home from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('TradeNameSearch/Home/index', () => {
  it('should export a result object', () => {
    expect(Home).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    Home[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
