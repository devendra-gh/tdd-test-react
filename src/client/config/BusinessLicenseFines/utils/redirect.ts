import { IVariables } from '@tamm/app-composer';

export const redirectToErrorPage = (props: IVariables) => {
  props.history.push('/business-licence-fine/error-page');
};
