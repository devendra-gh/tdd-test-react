import {
  PROCESS_NAME_CHECK_APPLICATION_STATUS,
  ANALYTICS_INFO,
} from './constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('checkApplicationStatus/constants', () => {
  it('should export string', () => {
    expect(PROCESS_NAME_CHECK_APPLICATION_STATUS).toContain(
      'checkApplicationStatus',
    );
  });

  it('should be object', () => {
    expect(ANALYTICS_INFO).toBeInstanceOf(Object);
  });
});
