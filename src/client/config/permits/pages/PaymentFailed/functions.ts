import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PATH_PAYMENT_SUMMARY } from '../../utils/constants/pageRoutes';
import { STEP_TRACKER_STATUS_FINISH } from '../../utils/constants/stepTrackerStatus';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { STEP_4_1, STEP_4_1_1, STEP_4_1_2 } from '../../steps';
import { StepStatus } from '../../utils/interfaces';

/**
 * @param {string} bpmUrl
 * @returns {*}
 */
const onClick = (bpmUrl: string) => async (props: IVariables) => {
  const { serviceType, businessKey } = props;
  const data = await bpm.message(bpmUrl, {
    businessKey,
    messageName: 'paymentFail',
  });
  if (data.success) {
    props.history.push(`/${serviceType}${PATH_PAYMENT_SUMMARY}`);
  }
};
const getStepStatus = (props: IVariables) => {
  const { steps } = props;
  const stepstatus: StepStatus = {
    [steps[1].name]: STEP_TRACKER_STATUS_FINISH,
    [steps[0].name]: STEP_TRACKER_STATUS_FINISH,
  };
  if (checkIfMultiStepPermit(props)) {
    stepstatus[steps[2].name] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_2}`] = STEP_TRACKER_STATUS_FINISH;
  }
  return stepstatus;
};
export default {
  onClick,
  getStepStatus,
};
