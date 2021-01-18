import { getDashboardUrl } from '../../sharedFunctions/utils';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

export async function init(props: any) {
  props.actions.camundaMessage.update('');
  props.actions.showSideBar.update(false);
  props.actions.loading.update(false);
}
export async function onPageInit(props: any) {
  addAnalyticsEvent(props, 'SLA', 'fail', 0, '');
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  window.location.href = getDashboardUrl();
}
