import {
  downloadFile,
  sendEmailNotification,
} from '../../sharedFunctions/services';

import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { getDateFromTimeStamp } from '../../sharedFunctions/utils';

import { addAnalyticsEvent } from '../../sharedFunctions/tammAnalytics';

export async function init(props: any) {
  // props.adgeName
  // props.serviceCode
  // props.productName
  // props.fetch();
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(2);
  // which substep to open up
  props.actions.expandedStepIndexes.update([1]);
  const cStep = { id: 'Global_GetLicenceStep', status: '' };
  const cSubStep = { id: 'Global_GetLicenceDownloadLicence', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);

  // sets the tags of the notice template
  // props.actions.renewalNumber.update();
  // props.actions.recordId.update();
  // props.actions.individualIssuedTags.update([]);
}
export async function onPageInit(props: any) {
  const licenceFees = JSON.parse(props.feeDetails);
  props.actions.renewalNumber.update(props.renewalNumber);
  props.actions.recordId.update(props.recordId);
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
  const totalFees =
    licenceFees.length > 0
      ? licenceFees.reduce((a: any, b: any) => {
          return a + b.FeeAmount;
        }, 0)
      : 0;
  addAnalyticsEvent(props, 'PAY2', 'success', totalFees);
  console.log('Sending emails');
  const email = props.email;
  const serviceNameEn =
    'Request for Renewal of Economic Licence - Industrial Licence';
  const serviceNameAr = 'طلب تجديد رخصة اقتصادية - صناعية';
  const paymentDoneEn = `Thank you for making a payment on TAMM for Renewal of Economic Licence - Industrial Licence. The transaction receipt is attached in this email.`;
  const paymentDoneAr = `<span dir='rtl'>
 نشكرك على دفع رسوم خدمة تجديد رخصة اقتصادية- صناعية عبر منصة تـــم. مرفق طيّ إيصال الدفع.
  </span>`;
  const applicationSuccessEn = `Your renewed Economic Licence - Industrial Licence ${props.renewalNumber} has been issued. Please find the renewed licence attached in this email.`;
  const applicationSuccessAr = `<span dir='rtl'>
 اكتمل طلبك لتجديد رخصة اقتصادية صناعية رقم
  </span>
  <span dir='rtl'>
   <strong> ${props.renewalNumber} </strong>
  </span>
  <span dir='rtl'>
   بنجاح.مرفق طيّ الرخصة الجديدة في هذا البريد الإلكتروني. 
  </span>`;

  const paymentEmailTokens = [
    {
      subject: `${serviceNameEn} - ${serviceNameAr}`,
      enText: paymentDoneEn,
      arText: paymentDoneAr,
      docType: 'receipt',
      emailType: 'payment-success',
    },
  ];

  const successEmailTokens = [
    {
      subject: `${serviceNameEn} - ${serviceNameAr}`,
      enText: applicationSuccessEn,
      arText: applicationSuccessAr,
      docType: 'certificate',
      emailType: 'application-success',
    },
  ];

  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onPaymentDone',
    variables: {
      proEmail: email,
      continueProcessUrl: props.continueProcessUrl,
      emailTokens: JSON.stringify(paymentEmailTokens),
    },
  });

  await sendEmailNotification(props, 'payment-success', props.instanceId);

  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onIssued',
    variables: {
      proEmail: email,
      continueProcessUrl: props.continueProcessUrl,
      emailTokens: JSON.stringify(successEmailTokens),
    },
  });

  await sendEmailNotification(props, 'application-success', props.instanceId);
}
export function call_f1_buttons_onClick(props: any) {
  return async (value: string) => {
    props.actions.download_value.update(value);
    props.actions.loading.update(true);
    //props.fetch();
    const result = await downloadFile(
      props.renewalNumber,
      props.recordId,
      props.instanceId,
      'certificate',
      props,
    );
    props.actions.loading.update(false);
  };
}
export async function f2_buttons_onClick(props: any) {
  window.location.href = `${window.location.origin}/${
    props.locale === 'en' ? 'en' : 'ar-AE'
  }/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforRenewalofEconomicLicenceIndustrialLicence?recache=true`;
}
