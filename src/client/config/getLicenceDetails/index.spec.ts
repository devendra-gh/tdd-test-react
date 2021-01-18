import {
  config,
  fetchState,
  templates,
  skipFetchState,
  translations,
} from './index';

jest.mock('client/templates/Header', () => () => '');
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
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('checkApplicationStatus/index', () => {
  it('should export config object', () => {
    expect(config).toBeInstanceOf(Object);
  });
  it('should export fetchState object', () => {
    expect(fetchState).toBeInstanceOf(Object);
  });
  it('should export templates object', () => {
    expect(templates).toBeInstanceOf(Object);
  });
  it('should export skipFetchState object', () => {
    expect(skipFetchState).toBeInstanceOf(Object);
  });
  it('should export translations object', () => {
    expect(translations).toBeInstanceOf(Object);
  });
});
