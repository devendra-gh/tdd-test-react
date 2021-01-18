import { IVariables } from '@tamm/app-composer';

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  props.actions.formBusinessLicenceFine.update({
    ...props.formBusinessLicenceFine,
    isLoading: false,
  });
};
export default {
  init,
};
