import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';
import { PATH_ERROR } from '../../routes';

const qs = require('query-string');

async function continueProcess(instanceId: string) {
  const data: IVariables = await bpm.state(
    PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
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
        const variables: IVariables = await bpm.getVariables(
          instanceId,
          {
            processName: PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
            variables: ['emiratesId', 'submittedOn', 'altId'],
          },
          true,
        );
        let emiratesId;
        let submittedOn;
        let altId;
        if (variables) {
          emiratesId = variables.data.emiratesId
            ? variables.data.emiratesId.value
            : '';
          submittedOn = variables.data.emiratesId
            ? variables.data.submittedOn.value
            : '';
          altId = variables.data.altId ? variables.data.altId.value : '';
        }
        if (props.user.IDN === emiratesId) {
          props.actions.businessKey.update(businessKey);
          props.actions.instanceId.update(instanceId);
          props.actions.newActivityApiData.update({
            submittedOn,
            altId,
          });
          props.history.push(redirectData.value);
        } else {
          props.actions.businessKey.reset();
          props.actions.instanceId.reset();
          props.history.push(PATH_ERROR);
        }
      }
    } catch (exception) {
      // console.log('exception on redirect data: ', exception.toString());
    }
  }
};

export default { continueProcess, onPageInit };
