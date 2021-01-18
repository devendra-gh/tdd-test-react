import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  await bpm.message('permits', {
    businessKey: props.businessKey,
    messageName: 'getPaymentUrlMsg',
  });
};

export default {
  onClick,
};
