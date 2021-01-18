import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME } from 'client/config/payApplicationFees/constants';
import { FORM_STEP_1 } from 'client/config/payApplicationFees/steps';
import { getAnalyticsData } from '../../utils/common';

const onInit = (props: IVariables) => {
  props.actions.stepsStatus.update({
    ...props.stepsStatus,
    [`${FORM_STEP_1}`]: 'finish',
  });
};

const onClick = async (props: IVariables) => {
  getAnalyticsData(
    'pay1',
    { serviceStatus: 'success' },
    { sum: parseFloat(props.totalFees) || props.totalFees },
  );
  await bpm.message(
    PROCESS_NAME,
    {
      businessKey: props.businessKey,
      messageName: 'msgProceedPayment',
      variables: {
        isProceedPayment: true,
      },
    },
    true,
  );
};
const onBack = async (props: IVariables) => {
  await bpm.message(
    PROCESS_NAME,
    {
      businessKey: props.businessKey,
      messageName: 'msgProceedPayment',
      variables: {
        isProceedPayment: false,
      },
    },
    true,
  );
};
export default {
  onInit,
  onClick,
  onBack,
};
