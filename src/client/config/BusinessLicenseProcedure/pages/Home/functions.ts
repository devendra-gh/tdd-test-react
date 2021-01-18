import { IVariables } from '@tamm/app-composer';

const onStart = async (props: IVariables) => {
  props.history.push('/business-licence-procedure/select-transaction-type');
};

export default {
  onStart,
};
