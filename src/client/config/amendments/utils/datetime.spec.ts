import { getDateFromTimeStamp } from './datetime';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('time stamp', () => {
  it('should export time stamp', () => {
    getDateFromTimeStamp(1586171253);
  });
});
