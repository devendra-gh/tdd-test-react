import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_BUSINESS_LICENCE_FINE } from '../../constants';

const qs = require('query-string');

async function continueProcess(instanceId: string) {
  const data: IVariables = await bpm.state(
    PROCESS_NAME_BUSINESS_LICENCE_FINE,
    instanceId,
    true,
  );

  if (data && data.data) {
    return data.data;
  }
  return false;
}

const onPageInit = async (props: IVariables) => {
  const queryParams = qs.parse(props.history.location.search);
  const instanceId: any = get(queryParams, 'instanceId', '');
  const businessKey: any = get(queryParams, 'businessKey', '');
  if (instanceId && businessKey) {
    try {
      const redirectData = await continueProcess(instanceId);
      if (redirectData) {
        props.actions.businessKey.update(businessKey);
        props.actions.instanceId.update(instanceId);
        props.history.push(redirectData.value);
      }
    } catch (exception) {
      // console.log('exception on redirect data: ', exception.toString());
    }
  }
};

export default { continueProcess, onPageInit };
