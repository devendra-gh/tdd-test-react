import { IVariables } from '@tamm/app-composer';

const navigateToDashboard = (props: IVariables) => {
  const redirectUrl =
    window.location.href.indexOf('stage.tamm.abudhabi') !== -1
      ? 'https://stage.tamm.abudhabi/'
      : 'https://www.tamm.abudhabi/';
  window.location.replace(`${redirectUrl}journeys/manage-your-business/login`);
};

export default {
  navigateToDashboard,
};
