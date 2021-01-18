import { addAnalyticsEvent } from '../../sharedFunctions/tammAnalytics';

export async function init(props: any) {
  // props.adgeName
  // props.serviceCode
  // props.productName
  props.actions.showSidebar.update(false);
}
export async function onPageInit(props: any) {
  addAnalyticsEvent(props, 'SLA', 'fail');
}
export async function f1_onClick(props: any) {
  await props.bpm.message('workbench', {
    businessKey: props.businessKey,
    messageName: 'onError',
  });
  window.location.href = `${window.location.origin}/${
    props.locale === 'en' ? 'en' : 'ar-AE'
  }/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforRenewalofEconomicLicenceIndustrialLicence?recache=true`;
  props.history.push('/');
}
