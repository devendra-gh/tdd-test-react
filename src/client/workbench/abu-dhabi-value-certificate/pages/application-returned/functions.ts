import { uploadDocumentToDed } from '../../sharedFunctions/getData';

export async function init(props: any) {
  // props.actions.feedbackStatements.update([]);
  props.actions.loading.update(false);
}
export async function onPageInit(props: any) {
  const { applicationStatus } = props;
  const feedbackStatements = [
    {
      _id: 0,
      applicationStatus,
    },
  ];
  props.actions.feedbackStatements.update(feedbackStatements);
}
export function call_f1_onChange(props: any) {
  return (files: any[]) => {
    props.actions.files.update(files);
    props.actions.returnedSubmitDisabled.update(false);
  };
}
export function call_f2_onRemove(props: any) {
  return (files: any[]) => {
    props.actions.files.update(files);
    props.actions.returnedSubmitDisabled.update(true);
  };
}
export async function f3_onClick(props: any) {
  props.actions.loading.update(true);
  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onViewQuotationList',
    variables: {
      businessKey: props.businessKey,
      instanceId: props.instanceId,
    },
  });
}
export async function f4_onClick(props: any) {
  // props.fetch();
  // const { fetch, bpm } = props;
  console.log('about to call the upload document function>>>>>>>>>>>');
  console.log('application trans number', props.apTransactionNumber);
  props.actions.loading.update(true);

  try {
    const result = await uploadDocumentToDed(
      props.licenseNumber,
      props.capId,
      props.files[0].fileId,
      props,
    );

    console.log('@@@@@@@@@@', result);
    await props.bpm.sendMessage({
      businessKey: props.businessKey,
      messageName: 'onFeedbackSubmit',
      variables: {
        businessKey: props.businessKey,
        instanceId: props.instanceId,
      },
    });
  } catch (error) {
    console.log('Error uploading to DED', error);
    props.actions.loading.update(false);
  }
}
