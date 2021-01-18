import { IVariables } from '@tamm/app-composer';
import { PATH_ADD_ACTIVITY } from 'client/config/AddEconomicActivity/routes';
import { reset } from '../../utils/common';

const onClick = async (props: IVariables) => {
  props.history.push(PATH_ADD_ACTIVITY);
};

const init = (props: IVariables) => {
  reset(props);
};

export default {
  onClick,
  init,
};
