import { IVariables } from '@tamm/app-composer';
import { PATH_HOME } from '../../routes';

const handleBackButton = async (props: IVariables) => {
  const {
    history: { push: redirectTo },
    actions: { businessKey, instanceId },
  } = props;
  businessKey.update('');
  instanceId.update('');
  redirectTo(PATH_HOME);
};

export default { handleBackButton };
