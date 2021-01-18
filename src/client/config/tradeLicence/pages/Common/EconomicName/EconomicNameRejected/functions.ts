import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { BASE_PATH } from '../../../../routes';

const redirect = async (props: IVariables) => {
  await bpm.message('tradeName', {
    businessKey: props.businessKey,
    messageName: 'onNameRejected',
  });
  props.history.push(BASE_PATH);
};

const getCapId = (state: IVariables) => {
  return state.economicNameCapId;
};

export default { redirect, getCapId };
