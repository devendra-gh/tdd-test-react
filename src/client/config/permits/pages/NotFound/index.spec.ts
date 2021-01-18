import notFound from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/Home/index', () => {
  it('should export dedReturned', () => {
    expect(notFound).toBeInstanceOf(Object);
  });
});
