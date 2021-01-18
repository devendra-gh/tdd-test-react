import { IVariables } from '@tamm/app-composer';
import { PATH_SELECT_LICENCE } from '../../routes';

const handleBackButton = async (props: IVariables) => {
  const {
    history: { push: redirectTo },
  } = props;
  redirectTo(PATH_SELECT_LICENCE);
};

export default { handleBackButton };
