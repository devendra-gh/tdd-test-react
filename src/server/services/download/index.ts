import { Request } from 'express';
import ajaxClient from 'server/services/ajaxClient';
import { IVariables } from '@tamm/app-composer';

import tammLogger from 'server/utils/logger';
import config from '../../../config';

const logger = tammLogger.getService();

/**
 * convert to pdf
 * @param {FormData} fileData
 * @param {Request} req
 * @returns {Promise}
 */

const convertToPdf = async (req: Request, fileData: IVariables) => {
  const convertPdf: IVariables = {
    success: false,
    data: null,
  };

  const {
    url,
    pdfConverterAppendPath,
    apiKeyHeader = 'Api-Key',
    apiKey,
    apiGatewayHeader = 'x-Gateway-APIKey',
    apiGatewayKey,
  } = config.api.microservice;
  const { isStagingEndPoint } = config.api;
  const appendUrl = `${pdfConverterAppendPath}/convertToPDF`;
  // header changes
  const newHeaders: IVariables = {};
  if (isStagingEndPoint) {
    newHeaders[apiGatewayHeader] = apiGatewayKey;
    newHeaders[apiKeyHeader] = apiKey;
  }

  const headers = {
    'Content-Type': 'multipart/form-data',
    ...newHeaders,
    ...fileData.getHeaders(),
  };
  logger.info(
    '=========== CONVERT PDF REQUEST==========',
    `${url}${appendUrl}`,
    headers,
  );

  try {
    const response: any = await ajaxClient(
      {
        url: `${url}${appendUrl}`,
        method: 'post',
        data: fileData,
        headers,
      },
      req,
    )
      .then(({ data }: IVariables) => data)
      .catch((error: any) => error);
    logger.info('=========== CONVERT PDF RESPONSE==========', response);
    if (response) {
      const { data } = response.data.pdf;
      convertPdf.success = true;
      convertPdf.data = data;
    }
  } catch (error) {
    logger.info('===============Convert PDF ERROR==============', error);
    return convertPdf;
  }
  return convertPdf;
};

export { convertToPdf };
