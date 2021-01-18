import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const updateReduxState = async (payload: IVariables) => {
  return fetch('/pub/proxy/io/amendmentUpdate', 'POST', payload)
    .then(response => response.data)
    .catch(err => err);
};

export default updateReduxState;
