import { getUrlParams } from '../../sharedFunctions/utils';

import { getMetaDataFromAdlocker } from '../../sharedFunctions/services';

export async function init(props: any) {
  props.actions.showSideBar.update(false);
  props.actions.loading.update(false);
  let { instanceId = '', businessKey = '', adlAppId = '' } = getUrlParams();

  if (adlAppId) {
    // const fetch = props.fetch;
    try {
      const resp = await getMetaDataFromAdlocker(props, adlAppId);
      if (resp && resp.businessKey && resp.instanceId) {
        businessKey = resp.businessKey;
        instanceId = resp.instanceId;
        props.actions.businessKey.update(resp.businessKey);
        props.actions.instanceId.update(resp.instanceId);
      }
    } catch (exception) {}
  }
  if (instanceId && businessKey) {
    try {
      const processName = 'workbench';
      const data = await props.bpm.state(processName, instanceId);
      if (data) {
        const variables = await props.bpm.getVariables(instanceId, {
          processName,
          variables: ['emiratesId', 'licenceNo'],
        });
        let emiratesId;
        if (variables) {
          emiratesId = variables.data.emiratesId
            ? variables.data.emiratesId.value
            : '';
        }
        if (props.user.IDN === emiratesId) {
          props.actions.businessKey.update(businessKey);
          props.actions.instanceId.update(instanceId);
          props.actions.licenceNumber.update(variables.data.licenceNo.value);
          props.history.push(data.data.value);
        } else {
          props.actions.businessKey.update('');
          props.actions.instanceId.update('');
        }
      }
    } catch (exception) {}
  }
}
