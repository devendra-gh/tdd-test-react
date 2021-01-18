import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const getVariables = (
  instanceId: string,
  processState: IVariables,
  pub: boolean = true,
) => {
  return fetch(
    `/${pub ? 'pub' : 'api'}/proxy/bpm/${
      processState.processName
    }/${instanceId}/variables`,
    'POST',
    {
      variables: processState.variables,
    },
  );
};

export default getVariables;
