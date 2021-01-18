

export async function init(props: any) {
    // props.actions.showSidebar.update(false);
}
export async function f1_onClick(props: any) {
	  const businessKey = props.businessKey;
  if (businessKey) {
    await props.bpm.sendMessage({
      businessKey: businessKey,
      messageName: 'onBack',
    });
    props.actions.businessKey.update('');
    props.actions.instanceId.update('');
  }
  props.history.push('/');
}
