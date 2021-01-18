import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  const steps = getSteps(props.i18n, 0, 2);
  props.actions.steps.update(steps);
  props.actions.currentSubStepIndex.update(2);

  props.actions.isPrivacyWaiverChecked.update(false);
}
export function call_f1_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document0.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[0] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f2_onRemove(props: any) {
  props.actions.document0.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[0] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f3_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document2.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[2] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f4_onRemove(props: any) {
  props.actions.document2.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[2] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f5_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document4.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[4] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f6_onRemove(props: any) {
  props.actions.document4.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[4] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f7_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document6.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[6] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f8_onRemove(props: any) {
  props.actions.document6.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[6] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f9_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document1.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[1] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f10_onRemove(props: any) {
  props.actions.document1.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[1] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f11_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document3.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[3] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f12_onRemove(props: any) {
  props.actions.document3.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[3] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f13_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document5.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[5] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f14_onRemove(props: any) {
  props.actions.document5.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[5] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export function call_f15_onChange(props: any) {
  return (files: any) => {
    if (files[0] && files[0].status == 'success') {
      const { isPrivacyWaiverChecked } = props;
      props.actions.document7.update(files);
      const updatedFileUploads = [...props.fileUploads];
      updatedFileUploads[7] = files[0];
      props.actions.fileUploads.update(updatedFileUploads);
      props.actions.isSubmitButtonDisabled.update(
        !isPrivacyWaiverChecked ||
          updatedFileUploads.filter(file => !!file).length !== 8,
      );
    }
  };
}
export async function f16_onRemove(props: any) {
  props.actions.document7.update([]);
  const updatedFileUploads = [...props.fileUploads];
  updatedFileUploads[7] = null;
  props.actions.fileUploads.update(updatedFileUploads);
  props.actions.isSubmitButtonDisabled.update(true);
}
export async function f17_onClick(props: any) {
  props.history.push('/entity-details');
}
export function call_f18_onClick(props: any) {
  return async () => {
    props.actions.loading.update(true);
    props.actions.isSubmitButtonDisabled.update(true);
    const data = await props.bpm.startProcess({
      continueProcessUrl: 'tamm.abudhabi.ae',
      emiratesId: props.user.IDN,
    });
    if (data.success && data.data && data.data.businessKey && data.data.id) {
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);
    } else {
      props.actions.loading.update(false);
    }
  };
}
export async function f19_onClick(props: any) {
  props.history.push('/');
}
