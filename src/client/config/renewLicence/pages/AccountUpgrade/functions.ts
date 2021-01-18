import { IVariables } from '@tamm/app-composer';
import { BASE_PATH } from '../../routes';

const init = (props: IVariables) => {
  const { user, loggedIn } = props;
  if (loggedIn && user.Type === 'SOP3') {
    props.history.push(BASE_PATH);
  }
};

export default {
  init,
};
