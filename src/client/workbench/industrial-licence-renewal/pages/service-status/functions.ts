import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { getDateFromTimeStamp } from '../../sharedFunctions/utils';

export async function init(props: any) {
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(0);
  // which substep to open up
  props.actions.expandedStepIndexes.update([1]);
  const cStep = { id: 'Global_GetLicenceStep', status: '' };
  const cSubStep = { id: 'Global_GetLicenceGetDedApproval', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export async function onPageInit(props: any) {
  props.actions.individualIssuedTags.update([
    {
      label: props.i18n('AwaitingPayment_RefNo'),
      value: props.licenceNumber,
    },
    {
      label: props.i18n('Submitted On:'),
      value: getDateFromTimeStamp(props.submitDate),
    },
  ]);
}
export async function f1_onClick(props: any) {
  const data = await props.bpm.message('workbench', {
    businessKey: props.businessKey,
    messageName: 'onPay',
  });
  // if (props.paymentLink) {
  //   window.location.href = props.paymentLink;
  // }
  props.history.push('/went-wrong');
}
