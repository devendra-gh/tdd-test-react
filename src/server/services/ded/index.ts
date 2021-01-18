/* eslint-disable no-shadow */
import { Request } from 'express';
import ajaxClient from 'server/services/ajaxClient';
import { IVariables } from '@tamm/app-composer';

import config from '../../../config';

interface IpayloadIVariables {
  headers: IVariables;
  body: IVariables;
}

const {
  api: {
    microservice: {
      apiKey,
      apiGatewayKey: xGatewayAPIKey,
      ded: {
        baseUrl,
        endpoint,
        agency,
        userId,
        pass,
        authenticateUserSuffix,
        businessCertificateSuffix,
      },
    },
  },
}: IVariables = config;

/**
 * Authenticate User and get access token
 * @param {Request} req
 * @returns {Promise}
 */
const authenticateUser = async (req: Request) => {
  const headers: IVariables = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'api-key': apiKey,
    'x-Gateway-APIKey': xGatewayAPIKey,
  };

  const body: IVariables = {
    agency,
    userId,
    password: pass,
  };
  return ajaxClient(
    {
      url: baseUrl + endpoint + authenticateUserSuffix,
      method: 'post',
      data: body,
      headers,
    },
    req,
  )
    .then(({ data }: IVariables) => {
      return data.data && data.data.result && data.data.result.token
        ? data.data.result.token
        : '';
    })
    .catch((error: any) => error);
};

/**
 * Wrapper for post method
 * @param {IVariables} data
 * @param {string} url
 * @param {IVariables} req
 * @returns {Promise}
 */
const get = async (
  data: IpayloadIVariables = { headers: {}, body: {} },
  url: string,
  req: Request,
) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'api-key': apiKey,
    'x-Gateway-APIKey': xGatewayAPIKey,
    ...data.headers,
  };
  const token = await authenticateUser(req);

  return ajaxClient(
    {
      url: `${url}?token=${token}`,
      method: 'get',
      params: data.body,
      headers,
    },
    req,
  )
    .then(({ data }: IVariables) => data)
    .catch((error: any) => error);
};

/**
 * Wrapper for post method
 * @param {IVariables} data
 * @param {string} url
 * @param {IVariables} req
 * @returns {Promise}
 */
const post = async (
  data: IpayloadIVariables = { headers: {}, body: {} },
  url: string,
  req: Request,
) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'api-key': apiKey,
    'x-Gateway-APIKey': xGatewayAPIKey,
    ...data.headers,
  };
  const token: string = await authenticateUser(req);

  return ajaxClient(
    {
      url: `${url}?token=${token}`,
      method: 'post',
      data: data.body,
      headers,
    },
    req,
  )
    .then(({ data }: IVariables) => data)
    .catch((error: any) => error);
};

/**
 * Business Certificate
 * @param {IVariables} req
 * @returns {Promise}
 */
const businessCertificate = async (req: Request) => {
  const body: IVariables = {
    capId: req.body.capID,
    applicationNumber: req.body.applicationNumber,
  };

  const headers: IVariables = {};
  const url: string = `${baseUrl + endpoint + businessCertificateSuffix}`;
  return post(
    {
      headers,
      body,
    },
    url,
    req,
  )
    .then(data => data)
    .catch((error: any) => error);
};

export { businessCertificate, authenticateUser, post, get };
