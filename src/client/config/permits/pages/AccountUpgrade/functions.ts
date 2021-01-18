import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';

const init = (props: IVariables) => {
  const { user, loggedIn } = props;
  if (loggedIn && user.Type === 'SOP3') {
    window.location.href = baseUrl;
  }
};

export default {
  init,
};
