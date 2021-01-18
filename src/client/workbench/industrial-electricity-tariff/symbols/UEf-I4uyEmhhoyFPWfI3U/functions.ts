export function f1_visible(props: any) {
	  return props.hasEntityFeedback;
}
export function f2_visible(props: any) {
	  return props.hasEntityFeedback;
}
export  function call_f3_onClick(props: any) {
	  return async () => {
    props.actions.loading.update(true);
    await props.bpm.sendMessage({
      messageName: 'onFeedback',
      businessKey: props.businessKey,
      variables: {
        processResult: 'FEEDBACK',
      },
    });
  };
}