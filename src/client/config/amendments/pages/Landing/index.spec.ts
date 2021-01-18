import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/Landing', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
  });
  it('should export index', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onStart', () => {
    index[0].props.onStart(props);
    expect(index[0].props.onStart).toBeInstanceOf(Function);
  });
});
