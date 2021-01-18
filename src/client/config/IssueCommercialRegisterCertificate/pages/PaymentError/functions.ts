import { IVariables } from '@tamm/app-composer';
import { paymentFailure } from '../../utils';
import { PATH_SELECT_LICENCE } from '../../routes';

const handleBackButton = async (props: IVariables) => {
  props.history.push(PATH_SELECT_LICENCE);
  paymentFailure(props);
};

export default { handleBackButton };
