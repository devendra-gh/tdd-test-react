import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('license-poc/Home/functions', () => {
  let props: any;

  beforeEach(() => {
    props = {};
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init', () => {
    it('should be instance of function', () =>
      expect(functions.init).toBeInstanceOf(Function));
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    it('should be instance of function', () =>
      expect(functions.onPageInit).toBeInstanceOf(Function));

    it('should call with correct params', () => {
      const externalProps = functions.onPageInit(props);

      expect(externalProps).toEqual({
        testField: 'Test Field',
      });
    });
  });
});
