import baseFetch from 'universal-fetch';
import cookie from 'react-cookies';
import baseUrl from 'client/utils/baseUrl';

const defaults = {
  method: 'POST', // handy with GraphQL backends
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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
  const config = {
    ...defaults,
    method,
    body: {},
  };

  if (method === 'POST' || method === 'PUT') {
    config.headers = {
      ...config.headers,
      // @ts-ignore
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
    const response = await baseFetch(`${baseUrl}${url}`, config);
    const payload = response.json();
    return payload;
  } catch (e) {
    throw e;
  }
}
