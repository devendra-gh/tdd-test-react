import { IVariables } from '@tamm/app-composer';
import baseFetch from 'universal-fetch';
import cookie from 'react-cookies';
import baseUrl from '../utils/baseUrl';

interface IFetchConfig {
  method: string;
  mode: string;
  credentials: string;
  headers: IVariables;
}

const defaults: IFetchConfig = {
  method: 'POST', // handy with GraphQL backends
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};
/**
 * @param {string} url
 * @param {string} method
 * @param {Object} data
 * @param {boolean} fileUpload
 * @returns {Promise<any | never>}
 */
export default async function api(
  url: string,
  method: string = 'GET',
  data?: object,
  fileUpload: boolean = false,
) {
  // eslint-disable-next-line no-param-reassign
  method = method.toUpperCase();
  const config = {
    ...defaults,
    method,
    body: {},
  };
  if (method === 'POST' || method === 'PUT') {
    config.headers = {
      ...config.headers,
      'csrf-token': cookie.load('XSRF-TOKEN'),
    };
  }
  if (data && method !== 'GET') {
    if (!fileUpload) {
      config.headers = {
        ...config.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    if (fileUpload) {
      delete config.headers['Content-Type'];
    }
    config.body = fileUpload ? data : JSON.stringify(data);
  } else {
    delete config.body;
  }
  try {
    let response;
    if (url.includes('https://')) response = await baseFetch(url, data);
    else response = await baseFetch(`${baseUrl}${url}`, config);
    const payload = response.json();
    return payload;
  } catch (e) {
    throw e;
  }
}
