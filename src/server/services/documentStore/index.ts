import { Request } from 'express';
import FormData from 'form-data';
import request from 'server/services/ajaxClient';
import { TammRequestConfig } from '@tamm/request';
import qs from 'query-string';
import { get } from 'lodash';
import config from 'config';
import authConfig from 'config/authConfig';

async function getFile(fileName: string, req: Request) {
  const params = {
    appId: config.documentStore.appId,
    userId: config.documentStore.userId,
    stage: config.documentStore.stage,
    fileName,
  };

  const requestConfig: TammRequestConfig = {
    url: `${config.documentStore.host}?${qs.stringify(params)}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      [authConfig.esb.header]: authConfig.esb.key,
      [authConfig.apiGateway.header]: authConfig.apiGateway.key,
    },
  };

  const response = await request(requestConfig, req);

  return get(response, 'data', {});
}

async function savePlain(file: string, filename: string, req: Request) {
  const params: any = {
    appId: config.documentStore.appId,
    userId: config.documentStore.userId,
    stage: config.documentStore.stage,
  };

  const requestConfig: TammRequestConfig = {
    url: config.documentStore.host,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      [authConfig.esb.header]: authConfig.esb.key,
      [authConfig.apiGateway.header]: authConfig.apiGateway.key,
    },
  };

  const formData = new FormData();

  Object.keys(params).forEach(key => {
    formData.append(key, params[key]);
  });

  formData.append('file', file, { filename });

  requestConfig.data = formData;
  requestConfig.headers = {
    'Content-Type': 'multipart/form-data',
    ...requestConfig.headers,
    ...formData.getHeaders(),
  };

  try {
    const response = await request(requestConfig, req);

    if (
      response.data &&
      response.data.status === 'success' &&
      response.data.data.fileName
    ) {
      return response.data.data.fileName;
    }

    return null;
  } catch (err) {
    req.log.error('Failed to upload file', { err, req });
    throw err;
  }
}

export default {
  getFile,
  savePlain,
};
