import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const init = async (props: IVariables) => {};

const onSubmit = async (props: IVariables) => {
  const bpmUrl = 'goldenServices';

  const { businessKey } = props;

  // send message to camunda
  if (businessKey) {
    try {
      // const response =
      await bpm.message(
        bpmUrl,
        {
          businessKey,
          messageName: 'retryPayment',
        },
        true,
      );
      // if (response.success) {
      //   //
      // } else {
      //   // console.log('comunda message have not been sent');
      // }
    } catch (e) {
      // console.log('comunda message have not been sent e: ', e);
    }
  } else {
    // console.log('comunda: no business key ');
  }
};

export default {
  init,
  onSubmit,
};
