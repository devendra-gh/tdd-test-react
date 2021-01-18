export async function init(props: any) {
  // props.actions.showSidebar.update(false);
}
export async function f1_onClick(props: any) {
  const { businessKey } = props;
  if (businessKey) {
    await props.bpm.sendMessage({
      businessKey,
      messageName: 'onBack',
    });
    props.actions.businessKey.update('');
    props.actions.instanceId.update('');
  }
  props.history.push('/');
}
