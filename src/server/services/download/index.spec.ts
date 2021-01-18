import httpMocks from 'node-mocks-http';
import request from 'server/services/ajaxClient';
import FormData from 'form-data';
import { convertToPdf } from './index';
import config from '../../../config';

jest.mock('server/services/ajaxClient');

describe('server/services/download', () => {
  const mockRequest: any = request;

  const convertToPdfReq: httpMocks.MockRequest<any> = {
    body: {},
  };
  const convertToPdfRes = {
    status: 'success',
    data: {
      data: {
        pdf: {
          type: 'Buffer',
          data: [37, 80],
        },
      },
    },
  };

  it('should properly call convertToPdf', async () => {
    const fileData = new FormData();
    fileData.append('file', '../../api/internal/docxTemplates/BLP.docx');
    const res = mockRequest.mockResolvedValue(Promise.resolve(convertToPdfRes));
    await convertToPdf(convertToPdfReq, fileData);
    expect(res).toBeCalled();
  });

  it('should properly call convertToPdf in prod env', async () => {
    const fileData = new FormData();
    fileData.append('file', '../../api/internal/docxTemplates/BLP.docx');
    const res = mockRequest.mockResolvedValue(Promise.resolve(convertToPdfRes));
    config.api.isStagingEndPoint = false;
    await convertToPdf(convertToPdfReq, fileData);
    expect(res).toBeCalled();
  });

  it('should properly handle response if returned any other unexpected value from ajaxClient call', async () => {
    const fileData = new FormData();
    fileData.append('file', '../../api/internal/docxTemplates/BLP.docx');
    const convertToPdfFailedRes = {
      status: 'success',
      data: {},
    };
    const res1 = mockRequest.mockResolvedValue(
      Promise.resolve(convertToPdfFailedRes),
    );
    await convertToPdf(convertToPdfReq, fileData);
    expect(res1).toBeCalled();
    const res2 = mockRequest.mockResolvedValue(Promise.resolve(undefined));
    await convertToPdf(convertToPdfReq, fileData);
    expect(res2).toBeCalled();
    const res3 = mockRequest.mockResolvedValue(Promise.resolve(0));
    await convertToPdf(convertToPdfReq, fileData);
    expect(res3).toBeCalled();
  });
});
