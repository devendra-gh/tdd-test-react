import config from './index';

const props = {
  history: {
    push: jest.fn(),
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  it('should return buttons on page init', () => {
    const page = config[0];
    const { button } = page.onPageInit(props);
    expect(button.onClick).toBeInstanceOf(Function);
    button.onClick();
    expect(props.history.push).toHaveBeenCalled();
  });
});
