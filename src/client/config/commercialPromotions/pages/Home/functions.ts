import { IVariables } from '@tamm/app-composer';

const onSubmit = async (props: IVariables) => {
  props.history.push('/commercial-promotions/search');
};

export default {
  onSubmit,
};
