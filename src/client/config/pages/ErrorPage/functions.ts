import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const redirect = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onErrorAcknowledge',
  });
};

export default { redirect };
