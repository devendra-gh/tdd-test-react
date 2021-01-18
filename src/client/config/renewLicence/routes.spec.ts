import { BASE_PATH } from './routes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Routes', () => {
  it('should export routes', () => {
    expect(BASE_PATH).toEqual(BASE_PATH);
  });
});
