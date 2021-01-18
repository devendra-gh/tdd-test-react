import { IVariables } from '@tamm/app-composer';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { STEP_4_1, STEP_4_1_1, STEP_4_1_2, STEP_4_1_3 } from '../../steps';
import {
  STEP_TRACKER_STATUS_FINISH,
  STEP_TRACKER_STATUS_PROCESS,
} from '../../utils/constants/stepTrackerStatus';
import { StepStatus } from '../../utils/interfaces';

const getCurrentStep = (props: IVariables) => {
  const { steps } = props;
  if (checkIfMultiStepPermit(props)) {
    return steps[3].name;
  }
  return steps[2].name;
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
    stepstatus[`${STEP_4_1}.${STEP_4_1_3}`] = STEP_TRACKER_STATUS_PROCESS;
  } else {
    stepstatus[steps[2].name] = STEP_TRACKER_STATUS_PROCESS;
  }
  return stepstatus;
};
export default {
  getCurrentStep,
  getStepStatus,
};
