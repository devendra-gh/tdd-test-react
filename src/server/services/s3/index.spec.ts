import httpMocks from 'node-mocks-http';
import S3 from 'server/services/s3';
import ajaxClient from 'server/services/ajaxClient';

jest.mock('server/services/ajaxClient');
jest.mock('config/authConfig', () => ({
  esb: {
    header: 'header',
    key: 'key',
  },
  apiGateway: {
    header: 'header',
    key: 'key',
  },
}));

describe('service/S3', () => {
  let req: httpMocks.MockRequest<any>;
  const mockAjaxClient: any = ajaxClient;
  const response = {
    data: 'test',
  };

  it('getDocument should give success', async () => {
    const path = 'some_path**';
    const res = mockAjaxClient.mockResolvedValue(Promise.resolve(response));

    await S3.getDocument(path, req);
    expect(res).toBeCalled();
  });

  it('getDocument should fail', async () => {
    const path = 'some_path**';
    const res = mockAjaxClient.mockRejectedValueOnce('error');

    await S3.getDocument(path, req);
    expect(res).toBeCalled();
  });

  it('getDocument should not give response', async () => {
    const path = 'some_path**';
    const res = mockAjaxClient.mockResolvedValue(Promise.resolve(false));

    await S3.getDocument(path, req);
    expect(res).toBeCalled();
  });

  it('uploadDocument give success', async () => {
    const fileData = {
      getHeaders: jest.fn().mockImplementationOnce(() => Promise.resolve({})),
    };
    mockAjaxClient.mockResolvedValue(Promise.resolve(response));

    await S3.uploadDocument(fileData, req);
  });

  it('uploadDocument should not give response', async () => {
    const fileData = {
      getHeaders: jest.fn().mockImplementationOnce(() => Promise.resolve({})),
    };
    mockAjaxClient.mockResolvedValue(Promise.resolve(false));

    await S3.uploadDocument(fileData, req);
  });

  it('uploadDocument give failure', async () => {
    const fileData = {
      getHeaders: jest.fn().mockImplementationOnce(() => Promise.resolve({})),
    };
    mockAjaxClient.mockRejectedValueOnce('error');

    await S3.uploadDocument(fileData, req);
  });
});
