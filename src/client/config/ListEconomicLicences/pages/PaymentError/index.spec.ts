import config from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  it('should return buttons on page init', () => {
    const page = config[0];
    const props = {};
    const { buttons } = page.onPageInit(props);
    buttons.forEach(button => button.onClick());
    expect(Array.isArray(buttons)).toBeTruthy();
  });
});
