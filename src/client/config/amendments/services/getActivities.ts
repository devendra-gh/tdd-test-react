import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const getActivities = async (payload: IVariables) => {
  return fetch('/pub/proxy/getActivities', 'POST', payload)
    .then(response => response.data)
    .catch(err => err);
};

export default getActivities;
