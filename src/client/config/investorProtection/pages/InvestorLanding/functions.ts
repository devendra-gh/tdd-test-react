import { IVariables } from '@tamm/app-composer';
import { PATH_SERVICE_TYPE } from '../../routes';

const onClick = (props: IVariables) => {
  props.history.push(PATH_SERVICE_TYPE);
};

export default {
  onClick,
};
