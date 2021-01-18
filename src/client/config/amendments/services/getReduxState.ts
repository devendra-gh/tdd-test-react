import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const getReduxState = async (payload: IVariables) => {
  return fetch('/pub/proxy/io/amendmentById', 'POST', payload)
    .then(response => response.data)
    .catch(err => err);
};

export default getReduxState;
