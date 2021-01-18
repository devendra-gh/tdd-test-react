import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/Login', () => {
  it('should properly call smartpassOnClick and uaepassOnClick', () => {
    index[0].props.smartpassOnClick();
    index[0].props.uaepassOnClick();
    expect(index[0].props.smartpassOnClick).toBeInstanceOf(Function);
    expect(index[0].props.uaepassOnClick).toBeInstanceOf(Function);
  });
});
