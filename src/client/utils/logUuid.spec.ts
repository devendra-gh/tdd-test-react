import cookie from 'react-cookies';
import { getLogUuid } from './logUuid';

jest.mock('react-cookies');

describe('logUuid', () => {
  let mockCookie: any;

  beforeAll(() => {
    mockCookie = cookie;
  });

  it('should return logUuid from cookie if exists', () => {
    const value = 'something';
    mockCookie.load.mockReturnValue(value);
    expect(getLogUuid()).toBe(value);
  });

  it("should return '' from cookie if logUuid exist", () => {
    mockCookie.load.mockImplementation((key: string) => undefined);
    expect(getLogUuid()).toBe('');
  });
});
