

import {addAnalyticsEvent} from '../../sharedFunctions/tammAnalytics';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    //props.fetch
  // const { fetch, bpm } = props;
  //props.bpm.sendMessage()
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  props.actions.loading.update(false);
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(3);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'fill_application', status: '' };
  const cSubStep = { id: 'upload_documents', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export  function call_f1_onRemove(props: any) {
	return (files: any[]) => {
    props.actions.files.update(files);
  };
}
export  function call_f2_onChange(props: any) {
	 return (files: any[]) => {
    props.actions.files.update(files);
    props.actions.uploadDocumentNextBtnDisabled.update(false);
  };
}
export async function f3_btnBackClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onBackToChooseActivities',
    variables: {},
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f4_btnSubmitClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  addAnalyticsEvent(props, 'TRA');
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onSubmit',
    variables: {
      fileId: props.files[0].fileId,
    },
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f5_btnCancelClick(props: any, formValues: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(true);
}
export async function f6_btnSubmitDisabled(props: any, formValues: any) {
	  return props.uploadDocumentNextBtnDisabled;
}
export async function f7_primaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
  props.actions.resetState();
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforIssuingEconomicLicenceIndustrialLeaderCompany?recache=true`;
}
export async function f8_secondaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
}
export async function f9_onClose(props: any) {
	  props.actions.isCancelModalOpen.update(false);
}
