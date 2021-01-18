export async function f1_onClick(props: any) {}
export function call_f2_onChange(props: any) {
  const { locale } = props;
  return (value: any) => {
    props.actions.camundaMessage.update('');
    const checkBoxState = props.contactDetailsFlag ? false : true;
    props.actions.contactDetailsFlag.update(checkBoxState);
    if (checkBoxState) {
      const name =
        locale === 'en'
          ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
          : props.user['Full Name AR'];
      props.actions.contactDetailsName.update(name);
      props.actions.contactDetailsMobile.update(props.user.Mobile);
      props.actions.contactDetailsEmail.update(props.user['User Email']);
    } else {
      props.actions.contactDetailsName.update('');
      props.actions.contactDetailsMobile.update('');
      props.actions.contactDetailsEmail.update('');
    }
    props.actions.nameValidateStatus.update('');
    props.actions.nameValidateHelp.update('');
    props.actions.mobileValidateStatus.update('');
    props.actions.mobileValidateHelp.update('');
    props.actions.emailValidateStatus.update('');
    props.actions.emailValidateHelp.update('');
  };
}
export function f3_visible(props: any) {}
export function call_f4_onChange(props: any) {
  return (value: string) => {
    props.actions.nameValidateStatus.update('');
    props.actions.nameValidateHelp.update('');
    if (!props.contactDetailsFlag && value.length < 5) {
      props.actions.nameValidateStatus.update('error');
      props.actions.nameValidateHelp.update(props.i18n('nameValidation'));
    }
    props.actions.contactDetailsName.update(value);
  };
}
export function call_f5_onChange(props: any) {
  return (value: string) => {
    props.actions.emailValidateStatus.update('');
    props.actions.emailValidateHelp.update('');
    props.actions.contactDetailsEmail.update(value);
  };
}
export function call_f6_onSelect(props: any) {
  return (value: string) => {
    props.actions.mobileValidateStatus.update('');
    props.actions.mobileValidateHelp.update('');
    props.actions.contactDetailsMobile.update(value);
  };
}
export function f7_visible(props: any) {
  return props.camundaMessage ? true : false;
}
