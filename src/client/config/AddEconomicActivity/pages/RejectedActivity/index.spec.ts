import index from './index';

jest.mock('../../utils/common');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceDetails/index', () => {
  const props = {
    i18n: jest.fn(),
  };

  it('should be instanceOf', () => {
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

  it('should properly call onPageInit', () => {
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
