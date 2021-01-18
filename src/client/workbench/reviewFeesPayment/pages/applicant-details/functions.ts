import { isMobile, isEmail } from '../../sharedFunctions/validation';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

import { returnCamundaMessage } from '../../sharedFunctions/util';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  props.actions.contactName.update('');
  props.actions.help_contact_name.update('');
  props.actions.validateStatus_contact_name.update('');
  props.actions.contactNumber.update('');
  props.actions.help_phone_no.update('');
  props.actions.validateStatus_phone.update('');
  props.actions.contactEmail.update('');
  props.actions.help_email.update('');
  props.actions.validateStatus_email.update('');
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  props.actions.currentStepIndex.update(1);
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
    props.actions.contactName.update(name);
    props.actions.contactNumber.update(props.user.Mobile);
    props.actions.contactEmail.update(props.user['User Email']);

    // disable all the fields

    props.actions.disableContactName.update(true);
    props.actions.disableContactNo.update(true);
    props.actions.disableContactEmail.update(true);
  }
}
export async function onPageInit(props: any) {
  if (props.responseDescription) {
    props.actions.camundaMessage.update(props.responseDescription);
    addAnalyticsEvent(props, 'SLA', 'fail', 0, '');
  } else {
    props.actions.camundaMessage.update('');
  }
}
export async function f1_btnSubmitClick(props: any, formValues: any) {
  const { i18n } = props;
  let validateStatus: boolean = true;
  if (props.contactName.trim() === '') {
    validateStatus = false;
    props.actions.help_contact_name.update(i18n('error_contactName'));
    props.actions.validateStatus_contact_name.update('error');
  }
  if (props.validateStatus_contact_name) {
    validateStatus = false;
  }
  if (props.contactNumber.trim() === '' || !isMobile(props.contactNumber)) {
    validateStatus = false;
    props.actions.help_phone_no.update(i18n('error_phoneNumber'));
    props.actions.validateStatus_phone.update('error');
  }

  if (props.contactEmail.trim() === '' || !isEmail(props.contactEmail)) {
    validateStatus = false;
    props.actions.help_email.update(i18n('error_email'));
    props.actions.validateStatus_email.update('error');
  }
  if (validateStatus) {
    props.actions.loading.update(true);

    const data = await props.bpm.startProcess({
      licenceNo: props.licenceNo,
      serviceName: 'EHSMS Reviewing',
      proName: props.contactName,
      proEmail: props.contactEmail,
      proMobileNumber: props.contactNumber,
      mock: false,
    });
    if (data.success && data.data && data.data.businessKey && data.data.id) {
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);
      // const response = await props.bpm.message('workbench', {
      //   businessKey: data.data.businessKey,
      //   instanceId: props.instanceId,
      //   emiratesId: props.user['IDN'],
      //   messageName: 'onSubmit',
      //   isSubmit: 'yes',
      // });
      const serviceNameEn = 'EHSMS Reviewing Fee Payment';
      const serviceNameAr = 'دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة';
      const paymentSuccessEn = `Thank you for making a payment on TAMM for ${serviceNameEn}. Your application has been successfully completed. The transaction receipt is attached in this email.`;
      const paymentSuccessAr = `<span dir='rtl'>نشكرك على دفع رسوم خدمة ${serviceNameAr} عبر منصة تـــم. مرفق طيه إيصال الدفع.</span>`;
      const emailTokens = [
        {
          subject: `${serviceNameEn} - ${serviceNameAr}`,
          enText: paymentSuccessEn,
          arText: paymentSuccessAr,
          docType: 'receipt',
          emailType: 'payment-success',
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
          serviceNameEn,
          serviceNameAr,
          emailTokens: JSON.stringify(emailTokens),
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
export async function f2_btnCancelClick(props: any, formValues: any) {
  props.history.push('/');
}
export async function f3_btnBackClick(props: any, formValues: any) {
  props.history.push('/selectlicences');
}
