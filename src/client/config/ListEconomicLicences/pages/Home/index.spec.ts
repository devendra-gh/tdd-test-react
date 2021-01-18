import config from './index';

jest.mock('./functions', () => ({
  onStart: jest.fn(),
  onPageInit: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  const props = {
    actions: {
      submitting: {
        update: jest.fn(),
      },
    },
  };

  it('should export routes', () => {
    config[0].onPageInit(props);
    expect(config).toBeInstanceOf(Object);
  });
});
