export async function f1_onClick(props: any) {}
export function call_f2_onChange(props: any) {
  const { locale } = props;
  return (value: any) => {
    const checkBoxState = props.contactDetailsFlag ? false : true;
    props.actions.contactDetailsFlag.update(checkBoxState);
    if (checkBoxState) {
      const name =
        locale === 'en'
          ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
          : props.user['Full Name AR'];
      props.actions.contactName.update(name);
      props.actions.contactNumber.update(props.user.Mobile);
      props.actions.contactEmail.update(props.user['User Email']);

      // disable all the fields

      props.actions.disableContactName.update(true);
      props.actions.disableContactNo.update(true);
      props.actions.disableContactEmail.update(true);
    } else {
      props.actions.contactName.update('');
      props.actions.contactNumber.update('');
      props.actions.contactEmail.update('');
      props.actions.disableContactName.update(false);
      props.actions.disableContactNo.update(false);
      props.actions.disableContactEmail.update(false);
    }
    props.actions.validateStatus_contact_name.update('');
    props.actions.help_contact_name.update('');
    props.actions.help_phone_no.update('');
    props.actions.validateStatus_phone.update('');
    props.actions.help_email.update('');
    props.actions.validateStatus_email.update('');
  };
}
export function call_f3_onChange(props: any) {
  return (name: string) => {
    props.actions.help_contact_name.update('');
    props.actions.validateStatus_contact_name.update('');
    if (!props.contactDetailsFlag && name.length < 5) {
      props.actions.validateStatus_contact_name.update('error');
      props.actions.help_contact_name.update(props.i18n('nameValidation'));
    }
    props.actions.contactName.update(name);
  };
}
export function call_f4_onSelect(props: any) {
  return (no: any) => {
    props.actions.contactNumber.update(no);
    props.actions.help_phone_no.update('');
    props.actions.validateStatus_phone.update('');
  };
}
export function call_f5_onChange(props: any) {
  return (email: string) => {
    props.actions.contactEmail.update(email);
    props.actions.help_email.update('');
    props.actions.validateStatus_email.update('');
  };
}
export function f6_visible(props: any) {
  return props.camundaMessage ? true : false;
}
