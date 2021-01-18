import request from 'server/services/ajaxClient';
import httpMocks from 'node-mocks-http';
import documentStore from './index';

jest.mock('server/services/ajaxClient');
jest.mock('fs-extra');
jest.mock('form-data');

describe('documentStore', () => {
  let req: httpMocks.MockRequest<any>;

  beforeEach(() => {
    req = httpMocks.createRequest({
      headers: {},
      log: {
        error: jest.fn(),
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create test getFile', async () => {
    (request as jest.MockedFunction<any>).mockResolvedValue({ data: [] });
    await documentStore.getFile('fileName', req);
  });

  it('should test savePlain', async () => {
    (request as jest.MockedFunction<any>).mockResolvedValue({
      data: {
        data: { fileName: 'test' },
        status: 'success',
      },
    });
    await documentStore.savePlain('file base64', 'fileName', req);
  });

  it('should test savePlain when null', async () => {
    (request as jest.MockedFunction<any>).mockResolvedValue({
      error: 'error',
    });
    const result = await documentStore.savePlain(
      'file base64',
      'fileName',
      req,
    );
    expect(result).toBe(null);
  });

  it('should test savePlain when exception', async () => {
    (request as jest.MockedFunction<any>).mockRejectedValue(new Error('error'));
    try {
      await documentStore.savePlain('file base64', 'fileName', req);
    } catch (e) {
      expect(req.log.error).toBeCalled();
    }
  });
});
