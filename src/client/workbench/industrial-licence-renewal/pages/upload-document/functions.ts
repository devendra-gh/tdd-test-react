import { validateFileUpload } from '../../sharedFunctions/validation';

import { addAnalyticsEvent } from '../../sharedFunctions/tammAnalytics';

import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

/* istanbul ignore file */

export async function init(props: any) {
  // props.actions.newLeaseContractValidationMessage.update('');
  // props.actions.newLeaseContractValidateStatus.update('');
  // props.actions.civilDefenceCertificateValidateStatus.update('');
  // props.actions.civilDefenceCertificateValidationMessage.update('');
  // props.actions.adEnvironmentPermitValidateStatus.update('');
  // props.actions.adEnvironmentPermitValidationMessage.update('');
  // props.adgeName
  // props.serviceCode
  // props.productName
  props.actions.loading.update(false);
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(2);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'Global_FillApplicationStep', status: '' };
  const cSubStep = { id: 'Global_UploadDocumentsStep', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export function call_f1_onChange(props: any) {
  return (files: any[]) => {
    props.actions.newLeaseContractFiles.update(files);
    props.actions.newLeaseContractValidationMessage.update('');
    props.actions.newLeaseContractValidateStatus.update('');
  };
}
export function call_f2_onRemove(props: any) {
  return (files: any[]) => {
    props.actions.newLeaseContractFiles.update(files);
  };
}
export function call_f3_onChange(props: any) {
  return (files: any[]) => {
    props.actions.adEnvironmentPermitFiles.update(files);
    props.actions.adEnvironmentPermitValidateStatus.update('');
    props.actions.adEnvironmentPermitValidationMessage.update('');
  };
}
export function call_f4_onRemove(props: any) {
  return (files: any[]) => {
    props.actions.adEnvironmentPermitFiles.update(files);
  };
}
export function call_f5_onChange(props: any) {
  return (files: any[]) => {
    props.actions.civilDefenceCertificateFiles.update(files);
    props.actions.civilDefenceCertificateValidateStatus.update('');
    props.actions.civilDefenceCertificateValidationMessage.update('');
  };
}
export function call_f6_onRemove(props: any) {
  return (files: any[]) => {
    props.actions.civilDefenceCertificateFiles.update(files);
  };
}
export async function f7_onClick(props: any) {
  props.history.push('/enter-company-details');
}
export function call_f8_onClick(props: any) {
  // props.fetch();
  return async (value: string) => {
    const validatedFileUpload = validateFileUpload(props);
    props.actions.autoSaveStatus.update('autosaved');
    if (validatedFileUpload) {
      props.actions.loading.update(true);

      const data = await props.bpm.startProcess({
        emiratesId: props.user.IDN,
        serviceName: 'renewIndustrialLicense',
        submitLicence: false,
      });
      addAnalyticsEvent(props, 'TRA');
      if (data.success && data.data && data.data.businessKey && data.data.id) {
        props.actions.instanceId.update(data.data.id);
        props.actions.businessKey.update(data.data.businessKey);
        const message = await props.bpm.sendMessage({
          businessKey: data.data.businessKey,
          messageName: 'onCompanyDetails',
          variables: {
            businessKey: data.data.businessKey,
            instanceId: data.data.id,
            licenseID: props.licenceNumber,
            email: props.contactInfoEmailAddress,
            proName: props.contactInfoName,
            arabicPreferedName: props.contactInfoName,
            englishPreferedName: props.contactInfoName,
            phoneNumber: props.contactInfoPhNo,
            leaseAmount: props.leaseAgreementAmount,
            leaseStartDate: props.leaseAgreementDate[0],
            leaseEndDate: props.leaseAgreementDate[1],
            leaseNumber: props.leaseAgreementNumber,
            xCoordinate: props.longitude,
            yCoordinate: props.latitude,
            submitLicence: true,
          },
        });
        // props.actions.loading.update(false);
      } else {
        props.actions.autoSaveStatus.update('error');
      }

      // const message = await props.bpm.sendMessage({
      //   businessKey: props.businessKey,
      //   messageName: 'onUploadDocument',
      // });
    }
  };
  props.history.push('/application-inprogress');
}
export async function f9_onClick(props: any) {
  props.history.push('/');
}
