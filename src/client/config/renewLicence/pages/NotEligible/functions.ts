import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PATH_ENTER_LICENCE_NO } from 'client/config/renewLicence/routes';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { initialState } from '../../config';

const onClick = async (props: IVariables) => {
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgNotEligible',
  });
  props.actions.form.update({ ...initialState });
  props.actions.stepsStatus.update({});
  props.history.push(PATH_ENTER_LICENCE_NO);
};

export default { onClick };
