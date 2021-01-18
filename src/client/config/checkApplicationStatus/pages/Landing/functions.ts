import { IVariables } from '@tamm/app-composer';

const init = () => {};

const onClick = async (props: IVariables) => {
  props.history.push('/application-status/enter-number');
};

export default {
  init,
  onClick,
};
