import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const init = async (props: IVariables) => {};

const onSubmit = async (props: IVariables) => {
  const bpmUrl = 'goldenServices';

  const { businessKey } = props;

  if (businessKey) {
    try {
      await bpm.message(
        bpmUrl,
        {
          businessKey,
          messageName: 'paymentSuccess',
        },
        true,
      );
    } catch (e) {
      // console.log('comunda message have not been sent e: ', e);
    }
  }
};

export default {
  init,
  onSubmit,
};
