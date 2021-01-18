import { returnCamundaMessage } from '../../sharedFunctions/util';

export async function init(props: any) {
  props.actions.camundaMessage.update('');
  props.actions.showSideBar.update(false);
  props.actions.loading.update(false);
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  const data = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onNoInformation',
    variables: {},
  });
  await returnCamundaMessage(data, props);
  props.history.push('/select-licence');
}
