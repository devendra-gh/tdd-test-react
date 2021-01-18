import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/welcome', () => {
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

  it('should properly call onClick', () => {
    index[0].props.buttons[0].onClick(props);
  });
});
