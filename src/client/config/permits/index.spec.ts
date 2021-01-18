import { fetchState, skipFetchState, translations } from './index';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [],
        ar: [],
      },
    };
  }),
  getSmartpassData: jest.fn(),
  getMetaData: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config', () => {
  it('should export fetchState', () => {
    expect(fetchState).toBeInstanceOf(Object);
  });
  it('should export skipFetchState', () => {
    expect(skipFetchState).toBeInstanceOf(Object);
  });
  it('should export skipFetchState', () => {
    expect(translations).toBeInstanceOf(Object);
  });
});
