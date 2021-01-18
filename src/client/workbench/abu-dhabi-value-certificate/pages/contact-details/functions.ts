import { format } from 'date-fns';

import { getContactDetails } from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  const steps = getSteps(props.i18n, 0, 3);
  props.actions.loading.update(false);

  props.actions.steps.update(steps);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(3);
}
export async function f1_onFocus(props: any) {}
export function call_f2_onChange(props: any) {
  return (name: string) => {
    console.log('the value of the name on change', name);
    props.actions.contactName.update(name);
  };
}
export async function f3_onSelect(props: any) {}
export async function f4_isValidFunc(formValues: any, props: any) {
  const value = formValues.mobileNumber;
  if (!value) {
    return false;
  }

  const withOutSpace = value.split(' ').join('');
  const PHONE_REGEX = /^(\+|0+)?9715\d{8}$/;

  return !!withOutSpace.match(PHONE_REGEX);
}
export async function f5_onChange(props: any) {}
export async function f6_btnSubmitClick(props: any, formValues: any) {
  // props.fetch();
  const { fetch, bpm } = props;
  const contact = {
    proName: props.contactForm.name,
    proEmail: props.contactForm.email,
    proMobileNumber: props.contactForm.mobileNumber.slice(1),
  };

  const { entityPayload } = props;
  const companyDetails = props.companyDetailsForm;
  const submittedOn = format(new Date(), 'do MMMM, yyyy');
  const { businessKey } = props;
  const { instanceId } = props;
  const licenseNumber = props.licenceNumber;

  const payload = {
    ...contact,
    entityPayload,
    companyDetails,
    submittedOn,
    businessKey,
    instanceId,
    licenseNumber,
  };
  console.log('the payload about to be sent@@@@@', payload);

  props.actions.loading.update(true);
  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onSubmitApplication',
    variables: payload,
  });
}
export async function f7_btnSubmitDisabled(props: any, formValues: any) {
  return !props.isUndertakingChecked;
}
export async function f8_btnBackClick(props: any, formValues: any) {
  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onContactFormBack',
  });
  props.actions.businessKey.update('');
  props.actions.instanceId.update('');
  props.history.push('/upload-document');
}
export async function f9_btnCancelClick(props: any, formValues: any) {
  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onContactFormBack',
  });
  props.actions.businessKey.update('');
  props.actions.instanceId.update('');
  props.history.push('/');
}
