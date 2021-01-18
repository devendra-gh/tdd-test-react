import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PATH_ENTER_LICENCE_NO } from 'client/config/renewLicence/routes';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { initialState } from '../../config';

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgError',
  });
  props.actions.form.update({ ...initialState });
  props.actions.instanceId.update('');
  props.actions.businessKey.update('');
  props.history.push(PATH_ENTER_LICENCE_NO);
};

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  props.actions.form.update({
    licenceNo: '',
    isLoading: false,
  });
};
export default {
  onClick,
  init,
};
