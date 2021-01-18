import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const redirect = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onNameRejected',
  });
  props.history.push('/');
};

const getCapId = (state: IVariables) => {
  return state.economicNameCapId;
};

export default { redirect, getCapId };
