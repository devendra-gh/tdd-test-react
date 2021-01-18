import { IVariables } from '@tamm/app-composer';
import { PATH_ERROR } from '../routes';

export const redirectToErrorPage = (props: IVariables) => {
  props.history.push(PATH_ERROR);
  props.actions.helperData.update({
    ...props.helperData,
    isSubmitted: false,
  });
};
