import { IVariables } from '@tamm/app-composer';
import { PATH_ENTER_LICENCE_NO } from 'client/config/renewLicence/routes';

const onSubmit = async (props: IVariables) => {
  props.history.push(PATH_ENTER_LICENCE_NO);
};

export default {
  onSubmit,
};
