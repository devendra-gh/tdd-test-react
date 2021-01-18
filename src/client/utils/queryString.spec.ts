import qs from 'querystring';
import { getQueryStringParams } from 'client/utils/queryString';

jest.mock('querystring');

describe('queryString', () => {
  const mockQuery: any = qs;

  it('should call', () => {
    mockQuery.parse.mockImplementation(() => {
      return {};
    });
    getQueryStringParams('');
  });

  it('should call', () => {
    mockQuery.parse.mockImplementation(() => {
      return { legalForm: 'instant' };
    });
    getQueryStringParams('?legalForm=instant');
  });

  it('should call', () => {
    mockQuery.parse.mockImplementation(() => {
      return { legalForm: 'instant' };
    });
    getQueryStringParams();
  });
});
