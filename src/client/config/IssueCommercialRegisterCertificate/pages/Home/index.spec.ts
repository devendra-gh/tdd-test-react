import config from './index';

jest.mock('./functions', () => ({
  onStart: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  it('should return buttons on page init', () => {
    const page = config[0];
    const props = {};
    const { onStart } = page.onPageInit(props);
    onStart();
    expect(onStart).toBeInstanceOf(Function);
  });
});
