export async function init(props: any) {
  props.actions.showSideBar.update(false);
  props.actions.loading.update(false);
  props.actions.camundaMessage.update('');
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onNoInformation',
    variables: {},
  });
  props.history.push('select-licence');
}
