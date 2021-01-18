

import {urlSearch} from '../../sharedFunctions/utils';

import {updateRelevantEntity} from '../../sharedFunctions/relevantEntity';

export async function init(props: any) {
    props.actions.showSidebar.update(false);
  let basePath: string;
  let smartPassLoginType: string;
  let uaePassLoginType: string;
  if (window.location.hostname.indexOf('journeys-stg.tamm') !== -1) {
    basePath = '/journeys/journey-template/';
    smartPassLoginType = 'demo-login';
    uaePassLoginType = 'demo-login?provider=uaepass';
  } else {
    basePath = `/services/business/ded/`;
    smartPassLoginType = 'login';
    uaePassLoginType = 'login?provider=uaepass';
  }
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  props.actions.smartPassURL.update(
    `${host}${basePath}api/smartpass/${smartPassLoginType}`
  );
  props.actions.uaePassURL.update(
    `${host}${basePath}/api/smartpass/${uaePassLoginType}`
  );
  // props.actions();
  // props.history();
  let redirectUrl: string = urlSearch('redirectUrl') || '';
  const businessKey: string = urlSearch('businessKey') || '';
  if (props.loggedIn) {
    if (redirectUrl && businessKey) {
      redirectUrl = redirectUrl.concat('&businessKey=' + businessKey);
      window.location.href = redirectUrl;
    } else {
      props.history.push('/enter-trade-name');
    }
  }

  const relevantEntityData = updateRelevantEntity(props);
  props.actions.relevant_entities.update(relevantEntityData);
}
export async function f1_smartPassProps_onClick(props: any) {
	  props.actions.loginType.update('smartpass');
}
export async function f2_uaePassProps_onClick(props: any) {
	  props.actions.loginType.update('uaepass');
}
