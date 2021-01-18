import { IVariables } from '@tamm/app-composer';

const onSubmit = async (props: IVariables) => {
  props.history.push('/tradename-search/search');
};

export default {
  onSubmit,
};
