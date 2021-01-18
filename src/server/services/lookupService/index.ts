import { Request } from 'express';
import { TammRequestConfig } from '@tamm/request';
import request from 'server/services/ajaxClient';
import config from 'config';
import authConfig from 'config/authConfig';

/**
 * @param {Request} req
 * @returns {Object}
 */
async function fetchCountries(req: Request) {
  const requestConfig: TammRequestConfig = {
    url: `${config.lookup.host}/countries`,
    method: 'GET',
    headers: {
      [authConfig.esb.header]: authConfig.esb.key,
      [authConfig.apiGateway.header]: authConfig.apiGateway.key,
    },
  };

  const response = await request(requestConfig, req);

  return response.data;
}

export { fetchCountries };

export default {};
