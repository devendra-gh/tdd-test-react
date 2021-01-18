import { getSteps } from '../../sharedFunctions/stepUtils';

import {
  downloadFile,
  sendEmailNotification,
} from '../../sharedFunctions/services';

import {
  returnCamundaMessage,
  getDashboardUrl,
  getDateFromTimeStamp,
} from '../../sharedFunctions/util';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

export async function init(props: any) {
  const { locale } = props;
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
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  // props.actions.paymentTag.update(tags);
  props.actions.downloadFailureFlag.update(false);
  props.actions.downloadErrorMsg.update('');

  const message =
    locale === 'en'
      ? `EHMS receipt has been generated for the licence number ${props.licenceNo}. You can download the relevant document below.`
      : `صدر إيصال دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة عن رقم الرخصة  ${props.licenceNo} . بإمكانك تنزيل جميع الملفات المطلوبة أدناه.  `;
  props.actions.applicationIssuedDescription.update(message);
}
export async function onPageInit(props: any) {
  const { i18n, locale } = props;
  const tags = [
    { label: i18n('global-reference'), value: props.apTransactionNumber },
    {
      label: i18n('global-submitted'),
      value: getDateFromTimeStamp(props.submitDate, locale),
    },
  ];
  props.actions.paymentTag.update(tags);
  addAnalyticsEvent(props, 'PAY1', 'success');
  await sendEmailNotification('payment-success', props);
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  props.actions.loading.update(true);
  const cStep = { id: 'step_downloadCertificate', status: 'finish' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  // const fetch = props.fetch;
  props.actions.camundaMessage.update('');
  const data = await downloadFile(props.instanceId, 'receipt', props);
  props.actions.loading.update(false);
  if (!data || !data.fileContent) {
    await returnCamundaMessage(data, props);
  }
}
export async function f3_onClick(props: any) {
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/EHSMSReviewingFeesPayment`;
}
