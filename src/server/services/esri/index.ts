import { Request } from 'express';
import ajaxClient from 'server/services/ajaxClient';
import { IVariables } from '@tamm/app-composer';

interface IpayloadIVariables {
  headers: IVariables;
  body: IVariables;
}

// const {
//   esri: { tokenUrl }, // process.env.ARCGIS_TOKEN_URL;
// }: IVariables = config;
const tokenUrl =
  'https://www.tamm.abudhabi/journeys/discover-abudhabi-business/api/esri-token';
const arcgisHost = false
  ? 'https://sarcgis.sdi.gov.abudhabi' // Staging
  : 'https://arcgis.sdi.abudhabi.ae'; // Production

/**
 * Wrapper for get method
 * @param {IVariables} payload
 * @param {string} url
 * @param {IVariables} req
 * @returns {Promise}
 */
const get = async (
  payload: IpayloadIVariables = { headers: {}, body: {} },
  url: string,
  req: Request,
) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'api-key': apiKey,
    // 'x-Gateway-APIKey': xGatewayAPIKey,
    ...payload.headers,
  };

  return ajaxClient(
    {
      url: `${url}`,
      method: 'get',
      params: payload.body,
      headers,
    },
    req,
  )
    .then(({ data }: IVariables) => data)
    .catch((error: any) => error);
};

/**
 * get token from token url
 * @param {IVariables} req
 * @returns {Promise}
 */
const getTokenHandler = async (req: Request) => {
  const headers: IVariables = {};

  const url: string = tokenUrl;
  return get(
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
 * get query response from arcgis
 * @param {IVariables} req
 * @param {string} appendUrl
 * @returns {Promise}
 */
const getMapServerQuery = async (req: Request, appendUrl = '') => {
  const headers: IVariables = {};

  return get(
    {
      headers,
      body: {},
    },
    `${arcgisHost}${appendUrl}`,
    req,
  )
    .then(data => data)
    .catch((error: any) => error);
};

export { get, getTokenHandler, getMapServerQuery };
