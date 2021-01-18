import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';
import { reset } from '../../utils/common';
import { PATH_ADD_ACTIVITY } from '../../routes';

const onClick = async (props: IVariables) => {
  const { businessKey } = props;
  await bpm.message(
    PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
    {
      businessKey,
      messageName: 'msgError',
      variables: {},
    },
    true,
  );
  props.history.push(PATH_ADD_ACTIVITY);
  reset(props);
};

export default {
  onClick,
};
