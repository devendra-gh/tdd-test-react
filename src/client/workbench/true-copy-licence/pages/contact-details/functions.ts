import { isMobile, isEmail } from '../../sharedFunctions/validation';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

import { returnCamundaMessage } from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  props.actions.contactDetailsName.update('');
  props.actions.contactDetailsMobile.update('');
  props.actions.contactDetailsEmail.update('');
  props.actions.nameValidateStatus.update('');
  props.actions.nameValidateHelp.update('');
  props.actions.mobileValidateStatus.update('');
  props.actions.mobileValidateHelp.update('');
  props.actions.emailValidateStatus.update('');
  props.actions.emailValidateHelp.update('');
  props.actions.showSideBar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.pageLoader.update(false);
  props.actions.expandedStepIndexes.update([]);
  const cStep = { id: 'step_enterContactDetails', status: '' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  props.actions.camundaMessage.update('');
  if (props.contactDetailsFlag) {
    const name =
      props.locale === 'en'
        ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
        : props.user['Full Name AR'];
    props.actions.contactDetailsName.update(name);
    props.actions.contactDetailsMobile.update(props.user.Mobile);
    props.actions.contactDetailsEmail.update(props.user['User Email']);
  }
}
export async function onPageInit(props: any) {
  if (props.responseDescription) {
    props.actions.camundaMessage.update(props.responseDescription);
  }
}
export async function f1_btnCancelClick(props: any, formValues: any) {
  props.history.push('/');
}
export async function f2_btnBackClick(props: any, formValues: any) {
  props.history.push('/select-licence');
}
export async function f3_btnSubmitClick(props: any, formValues: any) {
  const { i18n } = props;
  let validateStatus: boolean = true;
  if (props.contactDetailsName.trim() === '') {
    validateStatus = false;
    props.actions.nameValidateStatus.update('error');
    props.actions.nameValidateHelp.update(i18n('errorContactName'));
  }
  if (props.nameValidateStatus) {
    validateStatus = false;
  }
  if (
    props.contactDetailsMobile.trim() === '' ||
    !isMobile(props.contactDetailsMobile)
  ) {
    validateStatus = false;
    props.actions.mobileValidateStatus.update('error');
    props.actions.mobileValidateHelp.update(i18n('errorContactMobile'));
  }
  if (
    props.contactDetailsEmail.trim() === '' ||
    !isEmail(props.contactDetailsEmail)
  ) {
    validateStatus = false;
    props.actions.emailValidateStatus.update('error');
    props.actions.emailValidateHelp.update(i18n('errorContactEmail'));
  }
  if (validateStatus) {
    props.actions.loading.update(true);

    const data = await props.bpm.startProcess({
      licenceNo: props.licenceNumber,
      serviceName: 'Original License Copy Stamp',
      proName: props.contactDetailsName,
      proEmail: props.contactDetailsEmail,
      proMobileNumber: props.contactDetailsMobile,
      mock: false,
    });
    if (data.success && data.data && data.data.businessKey && data.data.id) {
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);

      const serviceNameEn = 'Original License Copy Stamp';
      const serviceNameAr = 'ختم نسخة الرخصة الأصلية';
      const paymentSuccessEn = `Thank you for making a payment on TAMM for True Copy of Economic Licence.The transaction receipt is attached in this email.`;
      const paymentSuccessAr = `<span dir='rtl'>نشكرك على دفع رسوم خدمة رخصة اقتصادية طبق الأصل عبر منصة تـــم. </span><br/><span dir="rtl">مرفق طيه إيصال الدفع.</span>`;
      const applicationSuccessEn = `Your True Copy of Economic Licence ${props.licenceNumber} has been issued. Please find the true copy of economic licence attached in this email.`;
      const applicationSuccessAr = `<span dir='rtl'>صدرت رخصة اقتصادية طبق الأصل رقم </span>
<span dir='rtl'>${props.licenceNumber}</span>
<span dir="rtl"> بنجاح.</span><br/>
<span dir='rtl'>الشهادة مرفقة طيّ هذا البريد الإلكتروني.</span>`;
      const emailTokens = [
        {
          subject: `${serviceNameEn} - ${serviceNameAr}`,
          enText: paymentSuccessEn,
          arText: paymentSuccessAr,
          docType: 'receipt',
          emailType: 'payment-success',
        },
        {
          subject: `${serviceNameEn} - ${serviceNameAr}`,
          enText: applicationSuccessEn,
          arText: applicationSuccessAr,
          docType: 'license',
          emailType: 'application-success',
        },
      ];
      const response = await props.bpm.sendMessage({
        businessKey: data.data.businessKey,
        messageName: 'onSubmit',
        variables: {
          isSubmit: 'yes',
          businessKey: data.data.businessKey,
          instanceId: data.data.id,
          emiratesId: props.user['IDN'],
          emailTokens: JSON.stringify(emailTokens),
          serviceNameEn,
          serviceNameAr,
        },
      });
      addAnalyticsEvent(props, 'TRA');

      returnCamundaMessage(response, props);
    } else {
      returnCamundaMessage(data, props);
    }
    // props.actions.loading.update(false);
  }
}
