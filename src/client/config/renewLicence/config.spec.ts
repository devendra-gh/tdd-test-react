jest.mock('./pages', () => '');
jest.mock('./steps', () => '');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('TradeNameSearch/config', () => {
  beforeAll((): void => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
        writable: true,
      },
    });
  });

  it('should export config for the service', () => {
    const url = 'https://stage.tamm.abudhabi/';
    window.location.href = url;
    /* eslint-disable global-require */
    const config = require('./config');

    expect(window.location.href).toEqual(url);
    expect(config.default).toBeInstanceOf(Object);
  });
});
