

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {updateRelevantEntity} from '../../sharedFunctions/relevantEntity';

export async function init(props: any) {
    props.actions.showSidebar.update(false);
  // breadCrumbs
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  const relevantEntityData = updateRelevantEntity(props);
  props.actions.relevant_entities.update(relevantEntityData);
}
export function f1_visible(props: any) {
	  // props.referenceNo
  return true;
}
export async function f2_onClick(props: any) {
	  let basePath: string;
  let logoutType: string = '';
  basePath = `/services/business/ded/industrial-licence-individual/`;
  if (props.user.provider == 'uaepass') {
    logoutType = '?provider=uaepass';
  }
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/services/business/ded/api/smartpass/logout${logoutType}?redirectUrl=${host}${basePath}enter-company-details`;
}
