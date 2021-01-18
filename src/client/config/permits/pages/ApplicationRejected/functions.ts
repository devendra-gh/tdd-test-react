import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { StepStatus } from '../../utils/interfaces';
import {
  STEP_TRACKER_STATUS_FINISH,
  STEP_TRACKER_STATUS_PROCESS,
} from '../../utils/constants/stepTrackerStatus';
import { STEP_4_1, STEP_4_1_1, STEP_4_1_2 } from '../../steps';

/**
 * @param {string} bpmUrl
 * @returns {*}
 */
const onClick = (bpmUrl: string) => async (props: IVariables) => {
  const data = await bpm.message(bpmUrl, {
    businessKey: props.businessKey,
    messageName: 'permitRejected',
  });
  if (data.success) {
    props.actions.businessKey.reset();
    props.actions.instanceId.reset();
    props.actions.permitType.reset();
    props.actions.serviceType.reset();
    props.actions.companyType.reset();
    props.actions.companyDetails.reset();
    props.actions.stepsStatus.reset();
    window.location.href = `${
      window.location.href.indexOf('stage.tamm') !== -1
        ? 'https://stage.tamm.abudhabi/'
        : 'https://www.tamm.abudhabi/'
    }tamm-centers-services/department-of-economic-development`;
  } else {
    // console.log('Message Failed with 500');
  }
};

const getCurrentStep = (props: IVariables) => {
  const { otherEntitySubmitted, steps } = props;
  if (checkIfMultiStepPermit(props) && otherEntitySubmitted)
    return steps[3].name;
  return steps[1].name;
};
const getStepStatus = (props: IVariables) => {
  const { steps, otherEntitySubmitted } = props;
  const stepstatus: StepStatus = {
    [steps[0].name]: STEP_TRACKER_STATUS_FINISH,
  };
  if (checkIfMultiStepPermit(props) && otherEntitySubmitted) {
    stepstatus[steps[1].name] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[steps[2].name] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_2}`] = STEP_TRACKER_STATUS_PROCESS;
  } else {
    stepstatus[steps[1].name] = STEP_TRACKER_STATUS_PROCESS;
  }
  return stepstatus;
};
export default {
  onClick,
  getCurrentStep,
  getStepStatus,
};
