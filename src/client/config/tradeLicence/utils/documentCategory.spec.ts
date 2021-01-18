import documentCategory from './documentCategory';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Client/config/utilis/documentCategory', () => {
  it('should properly call documentCategory', () => {
    expect(documentCategory).toBeInstanceOf(Object);
  });
});
