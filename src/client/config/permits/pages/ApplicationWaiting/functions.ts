import { IVariables } from '@tamm/app-composer';

import {
  STEP_TRACKER_STATUS_FINISH,
  STEP_TRACKER_STATUS_PROCESS,
} from '../../utils/constants/stepTrackerStatus';
import { STEP_4_1_2, STEP_4_1_1 } from '../../steps';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { StepStatus } from '../../utils/interfaces';

const getStepStatus = (props: IVariables) => {
  const { permitInfo, serviceType, otherEntitySubmitted, steps } = props;
  const stepStatus: StepStatus = {
    [steps[0].name]: STEP_TRACKER_STATUS_FINISH,
  };
  if (
    serviceType &&
    permitInfo[serviceType] &&
    checkIfMultiStepPermit(props) &&
    otherEntitySubmitted
  ) {
    stepStatus[`${steps[3].name}.${STEP_4_1_2}`] = STEP_TRACKER_STATUS_PROCESS;
    stepStatus[`${steps[3].name}.${STEP_4_1_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepStatus[steps[2].name] = STEP_TRACKER_STATUS_FINISH;
    stepStatus[steps[1].name] = STEP_TRACKER_STATUS_FINISH;
  } else {
    stepStatus[steps[1].name] = STEP_TRACKER_STATUS_PROCESS;
  }
  return stepStatus;
};
const getCurrentStep = (props: IVariables) => {
  const { permitInfo, serviceType, otherEntitySubmitted, steps } = props;
  if (
    serviceType &&
    permitInfo[serviceType] &&
    checkIfMultiStepPermit(props) &&
    otherEntitySubmitted
  ) {
    return steps[3].name;
  }

  return steps[1].name;
};
export default {
  getCurrentStep,
  getStepStatus,
};
