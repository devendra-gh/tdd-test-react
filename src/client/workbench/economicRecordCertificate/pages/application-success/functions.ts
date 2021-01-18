import { getSteps } from '../../sharedFunctions/stepUtils';

import {
  downloadFile,
  sendEmailNotification,
} from '../../sharedFunctions/services';

import {
  returnCamundaMessage,
  getDashboardUrl,
  getDateFromTimeStamp,
} from '../../sharedFunctions/utils';

export async function init(props: any) {
  const { i18n, locale } = props;
  if (!props.businessKey || !props.instanceId) {
    window.location.href = getDashboardUrl();
  }
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  props.actions.currentStepIndex.update(3);
  props.actions.currentSubStepIndex.update(999);
  props.actions.expandedStepIndexes.update([]);
  const cStep = { id: 'step_downloadCertificate', status: '' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  props.actions.camundaMessage.update('');
  // props.actions.paymentTag.update(tags);
  const message =
    locale === 'en'
      ? `Economic Record Certificate has been generated for the licence number ${props.licenceNumber}. You can download the relevant documents below.`
      : `صدرت شهادة السجل الاقتصادي الخاصة بك  رقم ${props.licenceNumber} . بإمكانك إصدار وتنزيل الملف أدناه. `;
  props.actions.applicationIssuedDescription.update(message);
  // props.actions.apTransactionNo.update();
  // props.actions.capId.update();
  // props.actions.instanceId.update();
}
export async function onPageInit(props: any) {
  const { i18n, locale } = props;
  const tags = [
    { label: i18n('globalReference'), value: props.apTransactionNumber },
    {
      label: i18n('globalSubmitted'),
      value: getDateFromTimeStamp(props.submitDate, locale),
    },
  ];
  props.actions.paymentTag.update(tags);
  // props.actions.apTransactionNo.update(props.apTransactionNumber);
  // props.actions.capId.update(props.capId);
  props.actions.instanceId.update(props.instanceId);
  await sendEmailNotification('payment-success', props);
  await sendEmailNotification('application-success', props);
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  const cStep = { id: 'step_downloadCertificate', status: 'finish' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  props.actions.loading.update(true);
  // const fetch = props.fetch;
  props.actions.camundaMessage.update('');
  const data = await downloadFile(props.instanceId, 'license', props);
  props.actions.loading.update(false);
  if (!data || !data.fileContent) {
    await returnCamundaMessage(data, props);
  }
}
export async function f3_onClick(props: any) {
  const cStep = { id: 'step_downloadCertificate', status: 'finish' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  props.actions.loading.update(true);
  // const fetch = props.fetch;
  props.actions.camundaMessage.update('');
  const data = await downloadFile(props.instanceId, 'receipt', props);
  props.actions.loading.update(false);
  if (!data || !data.fileContent) {
    await returnCamundaMessage(data, props);
  }
}
export async function f4_onClick(props: any) {
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/Request-for-Issuing-Economic-Register-Certificate---Industrial`;
}
