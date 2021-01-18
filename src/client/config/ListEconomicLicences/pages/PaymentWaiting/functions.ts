import { IVariables } from '@tamm/app-composer';
import { getEmiratesId } from '../../utils';

/* istanbul ignore file */

const querystring = require('query-string');

export const continueProcess = async (props: IVariables) => {
  const queries = querystring.parse(window.location.search);
  const { businessKey, instanceId } = queries;

  if (businessKey && instanceId) {
    const emiratesId = await getEmiratesId(instanceId);
    if (emiratesId === props.user.IDN) {
      props.actions.businessKey.update(businessKey);
      props.actions.instanceId.update(instanceId);
    }
  }
};
