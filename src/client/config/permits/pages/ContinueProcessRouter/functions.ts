/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import { PROCESS_NAME } from 'client/config/permits/constants';
import bpm from 'client/services/bpm';
import baseUrl from 'client/utils/baseUrl';
import {
  PATH_404_NOT_FOUND,
  PATH_CONTINUE_PROCESS,
} from '../../utils/constants/pageRoutes';

const qs = require('querystring');

async function continueProcess(instanceId: string) {
  const data: IVariables = await bpm.state(PROCESS_NAME, instanceId);

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
        const variables: IVariables = await bpm.getVariables(instanceId, {
          processName: PROCESS_NAME,
          variables: ['serviceName', 'emiratesId'],
        });
        let serviceType;
        let emiratesId;
        if (variables) {
          serviceType = variables.data.serviceName
            ? variables.data.serviceName.value
            : '';
          emiratesId = variables.data.emiratesId
            ? variables.data.emiratesId.value
            : '';
        }

        if (props.user.IDN === emiratesId) {
          if (serviceType) {
            window.location.href = `${baseUrl}/${serviceType}${PATH_CONTINUE_PROCESS}?instanceId=${instanceId}&businessKey=${businessKey}`;
          }
        } else {
          props.actions.businessKey.reset();
          props.actions.instanceId.reset();
          props.history.push(PATH_404_NOT_FOUND);
        }
      }
    } catch (exception) {
      // eslint-disable-next-line no-console
      // console.log('exception on redirect data: ', exception.toString());
    }
  }
};

export default { continueProcess, onPageInit };
