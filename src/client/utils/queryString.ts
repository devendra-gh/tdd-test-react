import qs from 'querystring';
import { IVariables } from '@tamm/app-composer';

export const getQueryStringParams = (search: string = '') => {
  const returnObj: IVariables = {};
  if (search) {
    const myParams = qs.parse(search);
    if (myParams && Object.keys(myParams)) {
      Object.keys(myParams).map((key: string) => {
        returnObj[key.replace('?', '')] = myParams[key];
        return true;
      });
      return returnObj;
    }
  }
  return returnObj;
};
