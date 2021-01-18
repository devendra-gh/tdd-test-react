import { getDashboardUrl } from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

export async function init(props: any) {
  if (!props.businessKey || !props.instanceId) {
    window.location.href = getDashboardUrl();
  }
  props.actions.showSideBar.update(true);
  props.actions.currentStepIndex.update(2);
  props.actions.currentSubStepIndex.update(0);
  props.actions.expandedStepIndexes.update([2]);
  props.actions.loading.update(false);
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
      ? `Please wait while we contact the Department of Economic Development to initiate this payment. This can take up to 5 minutes. This page will refresh once your reference number has been generated. You will be notified about changes to your application's status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the <a href='${visitDashBoardURL}'>Dashboard</a>.`
      : `يرجى الانتظار بينما يحدث الاتصال بدائرة التنمية الاقتصادية لبدء عملية الدفع. قد يستغرق هذا مدة تصل إلى 5 دقائق. سيتم تحديث هذه الصفحة بمجرد صدور الرقم المرجعي الخاص بك. سيتم إخطارك بالتغييرات التي تطرأ على حالة طلبك على عنوان البريد الإلكتروني ورقم الهاتف المحمول المسجلين. يمكنك أيضًا التحقق من حالة طلبك في أي وقت عن طريق زيارة <a href='${visitDashBoardURL}'>لوحة التحكم</a> الخاصة بك.`;
  props.actions.waitingApprovalDescription.update(description);
}
export async function onPageInit(props: any) {
  addAnalyticsEvent(props, 'SLA', 'success', 0, 'Open');
}
