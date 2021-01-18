import { IVariables } from '@tamm/app-composer';

const init = (props: IVariables) => {
  const { user, loggedIn } = props;
  if (loggedIn && user.Type === 'SOP3') {
    props.history.push('/');
  }
};

export default {
  init,
};
