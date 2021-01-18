// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/config', () => {
  beforeAll((): void => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
        writable: true,
      },
    });
  });

  it('should be a instance of object', () => {
    const url = 'https://stage.tamm.abudhabi/';
    window.location.href = url;
    /* eslint-disable global-require */
    const config = require('./config');

    expect(window.location.href).toEqual(url);
    expect(config.default).toBeInstanceOf(Object);
  });
});
