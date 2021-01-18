import { formatDateForTags } from './formatDate';

jest.mock('moment', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    format: jest.fn(),
    add: jest.fn().mockReturnValue({
      format: jest.fn(),
    }),
  }),
}));

describe('formatDate', () => {
  it('should call with date', () => {
    const date = 'Sun May 10 2020 16:19:01 GMT+0400 (Gulf Standard Time)';
    formatDateForTags(date);
  });

  it('should call without date', () => {
    const date = '';
    formatDateForTags(date);
  });
});
