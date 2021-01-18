import { getDashboardUrl } from '../../sharedFunctions/util';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

export async function init(props: any) {
  if (!props.businessKey || !props.instanceId) {
    window.location.href = getDashboardUrl();
  }
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  props.actions.currentStepIndex.update(2);
  props.actions.currentSubStepIndex.update(0);
  props.actions.expandedStepIndexes.update([2]);
  const cStep = { id: 'step_makePayment', status: '' };
  const cSubStep = { id: 'subStep_requestConfirmation', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  const protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  const visitDashBoardURL = `${host}/${props.locale}/mylocker`;
  const description =
    props.locale === 'en'
      ? `This page will refresh once your payment is processed. You will be notified about changes to your application's status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the <a href='${visitDashBoardURL}'>Dashboard</a>`
      : `سيتم تحديث بيانات الصفحة فور تمام عملية الدفع. سيتم إخطارك بالتحديثات على الطلب من خلال البريد الإلكتروني أو الرسائل النصية القصيرة لرقم الهاتف المحمول المسجل. كما يمكنك مراجعة حالة الطلب بنفسك  في أي وقت من خلال لوحة التحكم <a href='${visitDashBoardURL}'> أدِر شركتك  </a>.`;
  props.actions.waitingApprovalDescription.update(description);
}
export async function onPageInit(props: any) {
  addAnalyticsEvent(props, 'SLA', 'success', 0, 'Open');
}
