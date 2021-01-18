import { getMetaDataFromAdlocker } from '../../sharedFunctions/services';

export async function init(props: any) {
  // props.actions();
  // props.history();
  console.log('continue process props ', props);
  props.actions.resetState();
  props.actions.showSidebar.update(false);
  const queryString = props.history.location.search;
  const urlParams = new URLSearchParams(queryString);
  let instanceId = urlParams.get('instanceId');
  let businessKey = urlParams.get('businessKey');
  const appId = urlParams.get('adlAppId');
  if (appId) {
    // const fetch = props.fetch;
    try {
      const resp = await getMetaDataFromAdlocker(props, appId);
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
          variables: ['emiratesId'],
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
          props.history.push(data.data.value);
        } else {
          props.actions.businessKey.update('');
          props.actions.instanceId.update('');
        }
      }
    } catch (exception) {}
  }
}
