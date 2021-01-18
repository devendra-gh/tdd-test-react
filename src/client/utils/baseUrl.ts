// globals APP_NESTED_PATH
// eslint-disable-next-line
let baseUrl: string = APP_NESTED_PATH || '/';
if (baseUrl.endsWith('/')) {
  // we already have `/` in all the urls below
  baseUrl = baseUrl.substr(0, baseUrl.length - 1);
}

// export const imagePath = '/images';
export const imagePath = `${baseUrl}/images`;

export default baseUrl;
