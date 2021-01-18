import { IVariables } from '@tamm/app-composer';

const onStart = (props: IVariables) => {
  props.history.push('/consumer-good-prices/search');
};

export default {
  onStart,
};
