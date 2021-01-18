

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {urlSearch} from '../../sharedFunctions/utils';

import {getMetaDataFromAdlocker} from '../../sharedFunctions/services';

import {updateRelevantEntity} from '../../sharedFunctions/relevantEntity';

export async function init(props: any) {
    // props.actions();
  // props.history();
  props.actions.resetState();
  props.actions.showSidebar.update(false);
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  let instanceId: string = urlSearch('instanceId') || '';
  let businessKey: string = urlSearch('businessKey') || '';
  const appId = urlSearch('adlAppId');
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

  const relevantEntityData = updateRelevantEntity(props);
  props.actions.relevant_entities.update(relevantEntityData);
}
