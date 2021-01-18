import { IVariables } from '@tamm/app-composer';
import { PATH_ACCOUNT_UPGRADE } from '../../utils/constants/pageRoutes';

const init = (props: IVariables) => {
  const { user, loggedIn } = props;
  if (loggedIn && user.Type === 'SOP3') {
    window.location.href = `${
      window.location.href.indexOf('stage.tamm') !== -1
        ? 'https://stage.tamm.abudhabi/'
        : 'https://www.tamm.abudhabi/'
    }tamm-centers-services/department-of-economic-development`;
  }
  if (loggedIn && user.Type !== 'SOP3') {
    props.history.push(PATH_ACCOUNT_UPGRADE);
  }
};

export default {
  init,
};
