import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from './constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('addNewActivity/constants', () => {
  it('should export string', () => {
    expect(PROCESS_NAME_ADD_ECONOMIC_ACTIVITY).toContain('addNewActivity');
  });
});
