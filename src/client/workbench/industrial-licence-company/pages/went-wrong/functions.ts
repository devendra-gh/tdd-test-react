

export async function init(props: any) {
    const { locale, i18n } = props;
  //props.fetch();
  //props.actions();
  props.actions.showSidebar.update(false);
  props.actions.loading.update(false);
  let content = props.responseDescription
    ? props.responseDescription
    : i18n('somethingWentWrongContent');
  props.actions.somethingWentWrongContent.update(content);
}
export async function f1_onClick(props: any) {
	  // props.actions();
  await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onError',
  });
  // props.actions.resetState();
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforIssuingEconomicLicenceIndustrialLeaderCompany?recache=true`;
}
