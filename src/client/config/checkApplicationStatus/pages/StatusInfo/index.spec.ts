import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusInfo/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ checkApplicationSteps: 'checkApplicationSteps' });
      }
    });
  });
  it('should export routes', () => {
    expect(index[0].onPageInit()).toBeUndefined();
  });
});
