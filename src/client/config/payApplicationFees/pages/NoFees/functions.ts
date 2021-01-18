import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME } from 'client/config/payApplicationFees/constants';
import { Common } from 'client/config/payApplicationFees/utils';

const onClick = async (props: IVariables) => {
  Common.reset(props, '/application-status/landing');
};

const onTryAnother = async (props: IVariables) => {
  await bpm.message(
    PROCESS_NAME,
    {
      businessKey: props.businessKey,
      messageName: 'msgTryAnother',
    },
    true,
  );
  props.actions.form.reset();
  props.history.push('/pay-application-fees/check-application');
};

export default { onClick, onTryAnother };
