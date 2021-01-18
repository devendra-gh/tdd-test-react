import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import scrollToElement from 'client/config/utils/permitsScrollToElement';
import validation from './functions/validation';
import { errorMsgMap } from '../../constants';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { STEP_4_1, STEP_4_1_1, STEP_4_1_2 } from '../../steps';
import {
  STEP_TRACKER_STATUS_FINISH,
  STEP_TRACKER_STATUS_PROCESS,
} from '../../utils/constants/stepTrackerStatus';
import { StepStatus } from '../../utils/interfaces';

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
  if (checkIfMultiStepPermit(props)) {
    if (otherEntitySubmitted) {
      stepstatus[steps[1].name] = STEP_TRACKER_STATUS_FINISH;
      stepstatus[steps[2].name] = STEP_TRACKER_STATUS_FINISH;
      stepstatus[`${STEP_4_1}.${STEP_4_1_1}`] = STEP_TRACKER_STATUS_FINISH;
      stepstatus[`${STEP_4_1}.${STEP_4_1_2}`] = STEP_TRACKER_STATUS_PROCESS;
    } else {
      stepstatus[steps[1].name] = STEP_TRACKER_STATUS_PROCESS;
    }
  } else {
    stepstatus[steps[1].name] = STEP_TRACKER_STATUS_PROCESS;
  }
  return stepstatus;
};

/**
 * @param {string} bpmUrl
 * @returns {*}
 */
const onClick = (bpmUrl: string): any => async (props: IVariables) => {
  const { returnPage } = props;

  let permitServerError: string = '';
  props.actions.permitSubmitting.update(true);
  props.actions.permitServerError.update(permitServerError);

  try {
    const response = await bpm.message(bpmUrl, {
      businessKey: props.businessKey,
      messageName: 'onPermitReturned',
      variables: {
        ...(returnPage.documents
          ? {
              documents: JSON.stringify(returnPage.documents || []),
            }
          : {}),
      },
    });

    if (response.success && response.message === 'Success') {
      permitServerError = '';
    } else if (response.success && response.message) {
      permitServerError = errorMsgMap[response.message]
        ? errorMsgMap[response.message]
        : 'something_went_wrong';
    } else {
      permitServerError = 'something_went_wrong';
    }
  } catch (e) {
    permitServerError = 'something_went_wrong';
  }

  props.actions.permitServerError.update(permitServerError);
  props.actions.permitSubmitting.update(false);
  if (permitServerError) {
    scrollToElement('error-message-div', 'id');
  }
};

export default {
  onClick,
  validation,
  getStepStatus,
  getCurrentStep,
};
