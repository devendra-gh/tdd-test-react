import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { getDateFromTimeStamp } from '../../sharedFunctions/utils';

import { uploadS3File } from '../../sharedFunctions/services';

/* istanbul ignore file */

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
  // props.actions.loading.update();
  // props.actions.individualIssuedTags.update([]);
  // props.newLeaseContractFiles;
  // props.civilDefenceCertificateFiles;
  // props.adEnvironmentPermitFiles;
}
export async function onPageInit(props: any) {
  props.actions.individualIssuedTags.update([
    {
      label: props.i18n('AwaitingPayment_RefNo'),
      value: props.renewalNumber,
    },
    {
      label: props.i18n('Submitted On:'),
      value: getDateFromTimeStamp(props.submitDate),
    },
  ]);
  console.log(props.newLeaseContractFiles[0], 'props.newLeaseContractFiles[0]');
  if (props.newLeaseContractFiles[0].status === 'success') {
    await uploadS3File(
      props,
      props.capId,
      props.apTransactionNumber,
      props.newLeaseContractFiles[0].fileId,
    );
  }
  if (props.civilDefenceCertificateFiles[0].status === 'success') {
    await uploadS3File(
      props,
      props.capId,
      props.apTransactionNumber,
      props.civilDefenceCertificateFiles[0].fileId,
    );
  }
  if (props.adEnvironmentPermitFiles[0].status === 'success') {
    await uploadS3File(
      props,
      props.capId,
      props.apTransactionNumber,
      props.adEnvironmentPermitFiles[0].fileId,
    );
  }
  props.actions.loading.update(false);
}
