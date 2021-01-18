/* eslint-disable complexity */
import baseFetch from 'universal-fetch';

const defaults = {
  // method: 'POST',
  // mode: 'no-cors',
  // credentials: 'omit',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
  },
};
/**
 * @param {string} url
 * @param {string} method
 * @param {Object} data
 * @returns {Promise<any | never>}
 */
export default async function api(
  url: string,
  method: string = 'GET',
  data?: object,
) {
  const config = {
    ...defaults,
    method,
    body: {},
  };
  // if (method === 'POST' || method === 'PUT') {
  //   config.headers = {
  //     ...config.headers,
  //     // @ts-ignore
  //     'csrf-token': cookie.load('XSRF-TOKEN'),
  //   };
  // }
  if (data && method !== 'GET') {
    // config.headers = {
    //   ...config.headers,
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // };
    config.body = JSON.stringify(data);
  } else {
    delete config.body;
  }
  try {
    const response = await baseFetch(url, config);
    const payload = response.json();
    return payload;
  } catch (e) {
    throw e;
  }
}
