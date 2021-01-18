import httpMocks from 'node-mocks-http';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import getPrototype from 'server/api/public/workbench/getPrototype';
import documentStore from 'server/services/documentStore';

jest.mock('server/utils/response-utils');
jest.mock('server/services/documentStore');

describe('public/routes/getPrototype', () => {
  let req: any;
  let res: any;

  const mockGetFile = documentStore.getFile as any;

  beforeEach(() => {
    req = httpMocks.createRequest({
      params: {
        prototypeId: 'prototypeId',
      },
    });
    res = httpMocks.createResponse();
    req.log = {
      error: jest.fn(),
    };
  });

  it('should call createSuccessResponse()', async () => {
    mockGetFile.mockImplementationOnce(() => ({ title: 'Project 1' }));

    await getPrototype(req, res);

    expect(createSuccessResponse).toHaveBeenCalled();
  });

  it('should call createErrorResponse()', async () => {
    const mockError = 'error';
    const mockErr = new Error(mockError);

    mockGetFile.mockImplementationOnce(() => Promise.reject(mockErr));

    await getPrototype(req, res);

    expect(createErrorResponse).toHaveBeenCalled();
  });
});
