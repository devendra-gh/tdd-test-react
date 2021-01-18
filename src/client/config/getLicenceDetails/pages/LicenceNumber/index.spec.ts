import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceNumber/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ getLicenceDetailsSteps: 'getLicenceDetailsSteps' });
      }
    });
    expect(index).toBeInstanceOf(Object);
  });
});
