import { getDashboardUrl } from '../../sharedFunctions/util';

export async function init(props: any) {
  props.actions.camundaMessage.update('');
  props.actions.showSideBar.update(false);
  props.actions.loading.update(false);
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  window.location.href = getDashboardUrl();
}
