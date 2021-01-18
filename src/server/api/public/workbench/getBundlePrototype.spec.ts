import httpMocks from 'node-mocks-http';
import { createErrorResponse } from 'server/utils/response-utils';
import getBundlePrototype from 'server/api/public/workbench/getBundlePrototype';
import documentStore from 'server/services/documentStore';

jest.mock('server/utils/response-utils');
jest.mock('server/services/documentStore');

describe('public/routes/getBundlePrototype', () => {
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

  it('should call createErrorResponse()', async () => {
    const mockError = 'error';
    const mockErr = new Error(mockError);

    mockGetFile.mockImplementationOnce(() => Promise.reject(mockErr));

    await getBundlePrototype(req, res);

    expect(createErrorResponse).toHaveBeenCalled();
  });
});
