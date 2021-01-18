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
    microservice: { apiKey, apiGatewayKey: xGatewayAPIKey },
  },
  adu: { host },
}: IVariables = config;

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

  return (
    ajaxClient(
      {
        url,
        method: 'post',
        data: data.body,
        headers,
      },
      req,
    )
      // eslint-disable-next-line no-shadow
      .then(({ data }: IVariables) => data)
      .catch((error: any) => error)
  );
};

/**
 * Business Certificate
 * @param {IVariables} req
 * @returns {Promise}
 */
const businessCertificate = async (req: Request) => {
  const { instanceId, type, emiratesId } = req.query;

  const headers: IVariables = {};
  const url: string = `${host}/businessCertificate?instanceId=${instanceId}&type=${type}&emiratesId=${emiratesId}`;
  return post(
    {
      headers,
      body: {},
    },
    url,
    req,
  )
    .then(data => data)
    .catch((error: any) => error);
};

/**
 * Business Certificate Generic
 * @param {IVariables} req
 * @returns {Promise}
 */
const businessCertificateGeneric = async (req: Request) => {
  const { instanceId, type, certificateName, emiratesId = '' } = req.query;

  const headers: IVariables = {};
  const url: string = `${host}/businessCertificate?instanceId=${instanceId}&type=${type}&certificateName=${certificateName}&emiratesId=${emiratesId}`;
  return post(
    {
      headers,
      body: {},
    },
    url,
    req,
  )
    .then(data => data)
    .catch((error: any) => error);
};

/**
 * get applications from adu
 * @param {IVariables} req
 * @returns {Promise}
 */
const getApplications = async (req: Request) => {
  const { sponsorEmiratesId } = req.body;

  const headers: IVariables = {};
  const url: string = `${host}/io/getApplications`;
  return post(
    {
      headers,
      body: {
        sponsorEmiratesId,
      },
    },
    url,
    req,
  )
    .then(data => data)
    .catch((error: any) => error);
};

export {
  businessCertificate,
  businessCertificateGeneric,
  getApplications,
  post,
};
