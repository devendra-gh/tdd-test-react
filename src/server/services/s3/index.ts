import { Request } from 'express';
import { IVariables } from '@tamm/app-composer';
import ajaxClient from 'server/services/ajaxClient';
import config from '../../../config';

interface IpayloadIVariables {
  headers: IVariables;
  body: IVariables;
}

const conf = {
  url: config.api.microservice.url,
  apiKeyheader: config.api.microservice.apiKeyHeader,
  apiKey: config.api.microservice.apiKey,
  apiGatewayHeader: config.api.microservice.apiGatewayHeader,
  apiGatewayKey: config.api.microservice.apiGatewayKey,
  serviceAppentPath: config.api.microservice.s3.s3AppendPath,
};

/**
 * get document
 * @param {string} path
 * @param {Request} req
 * @returns {Promise}
 */
const getDocument = async (path: string, req: Request) => {
  const arr = path.split('**');
  const {
    apiKeyheader,
    apiKey,
    apiGatewayHeader,
    apiGatewayKey,
  }: IVariables = conf;

  const { url, serviceAppentPath } = conf;
  const s3Url = `${url}${serviceAppentPath}?appId=${arr[0]}&userId=${arr[1]}&stage=${arr[2]}&fileName=${arr[3]}`;
  const requestOptions = {
    method: 'get' as 'GET',
    url: s3Url,
    headers: {
      [apiKeyheader]: apiKey,
      [apiGatewayHeader]: apiGatewayKey,
    },
    responseType: 'arraybuffer',
  };

  const certificate = {
    success: false,
    data: {},
    message:
      'Something went wrong while downloading (getting the document from s3) file, please try again later',
  };
  try {
    // @ts-ignore
    const axiRes = await ajaxClient(requestOptions, req);
    const { data: response } = axiRes;
    if (response) {
      certificate.success = true;
      certificate.data = response;
      return certificate;
    }
  } catch (error) {
    return certificate;
  }
  return certificate;
};

/**
 * get document
 * @param {string} fileData
 * @param {Request} req
 * @returns {Promise}
 */
const uploadDocument = async (fileData: IVariables, req: Request) => {
  const {
    apiKeyheader,
    apiKey,
    apiGatewayHeader,
    apiGatewayKey,
  }: IVariables = conf;
  const contentTypeHeader = 'Content-Type';
  const { url, serviceAppentPath } = conf;
  const s3Url = `${url}${serviceAppentPath}`;
  const requestOptions = {
    method: 'put' as 'PUT',
    url: s3Url,
    headers: {
      [apiKeyheader]: apiKey,
      [apiGatewayHeader]: apiGatewayKey,
      [contentTypeHeader]: 'multipart/form-data',
    },
    data: fileData,
  };

  if (fileData) {
    requestOptions.headers = {
      ...requestOptions.headers,
      ...fileData.getHeaders(),
    };
  }

  const certificate = {
    success: false,
    data: {},
  };

  try {
    const response = await ajaxClient(requestOptions, req);

    if (response) {
      return response;
    }
  } catch (error) {
    return certificate;
  }
  return certificate;
};

export default {
  getDocument,
  uploadDocument,
};
