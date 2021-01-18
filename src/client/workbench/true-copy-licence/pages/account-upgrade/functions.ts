import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

export async function init(props: any) {
  addAnalyticsEvent(props, 'USE');
  props.actions.loading.update(false);
}
export async function f1_onClick(props: any) {
  window.open('https://smartpass.government.ae/index-en.html/how_to', '_blank');
}
