export async function f1_onFocus(props: any) {
}
export async function f2_onClick(props: any) {
}
export  function call_f3_onChange(props: any) {
	 return () => {
    const isPrivacyWaiverChecked = !props.isPrivacyWaiverChecked;
    const files = props.fileUploads;

    props.actions.isPrivacyWaiverChecked.update(isPrivacyWaiverChecked);
    props.actions.isSubmitButtonDisabled.update(
      !isPrivacyWaiverChecked || files.filter((file: any) => !!file).length !== 8,
    );
  };
}