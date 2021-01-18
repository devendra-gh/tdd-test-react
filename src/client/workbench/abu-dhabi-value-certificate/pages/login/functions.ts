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
  const { protocol } = location;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  props.actions.smartPassURL.update(
    `${host}${basePath}api/smartpass/${smartPassLoginType}`,
  );
  props.actions.uaePassURL.update(
    `${host}${basePath}/api/smartpass/${uaePassLoginType}`,
  );
  if (props.loggedIn) {
    props.history.push('/');
  }
}
