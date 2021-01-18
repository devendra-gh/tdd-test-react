import cookie from 'react-cookies';

export const getLogUuid = (): string => {
  return cookie.load('logUuid') || '';
};
