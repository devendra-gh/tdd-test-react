import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import baseUrl from 'client/utils/baseUrl';
import { STEP_TRACKER_STATUS_FINISH } from '../../utils/constants/stepTrackerStatus';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import {
  STEP_4_1,
  STEP_4_1_1,
  STEP_4_1_2,
  STEP_4_1_3,
  STEP_4_1_4,
  STEP_1_1,
  STEP_2_1,
  STEP_3_1,
  STEP_4,
  STEP_1,
  STEP_2,
  STEP_3,
} from '../../steps';
import { StepStatus } from '../../utils/interfaces';

const processCompleteCheck = (props: IVariables) => {
  return props.processComplete;
};
const onClick = (bpmUrl: string) => async (props: IVariables) => {
  try {
    await bpm.message(bpmUrl, {
      businessKey: props.businessKey,
      messageName: 'paymentSuccess',
      variables: {},
    });

    props.actions.permitInfo.reset();
    props.actions.instanceId.reset();
    props.actions.permitType.reset();
    props.actions.serviceType.reset();
    props.actions.companyType.reset();
    props.actions.companyDetails.reset();
    props.actions.stepsStatus.reset();
    window.location.replace(
      `${
        window.location.href.indexOf('stage.tamm') !== -1
          ? 'https://stage.tamm.abudhabi/'
          : 'https://www.tamm.abudhabi/'
      }journeys/manage-your-business`,
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('throwing error', e);
  }
};
const getStepStatus = (props: IVariables) => {
  const stepstatus: StepStatus = {};
  if (checkIfMultiStepPermit(props)) {
    stepstatus[`${STEP_1_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_2_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_3_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_1}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_2}`] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[`${STEP_4_1}.${STEP_4_1_3}`] = STEP_TRACKER_STATUS_FINISH;
    if (processCompleteCheck(props)) {
      stepstatus[STEP_4_1] = STEP_TRACKER_STATUS_FINISH;
      stepstatus[`${STEP_4_1}.${STEP_4_1_4}`] = STEP_TRACKER_STATUS_FINISH;
    }
  } else {
    stepstatus[STEP_1] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[STEP_2] = STEP_TRACKER_STATUS_FINISH;
    stepstatus[STEP_3] = STEP_TRACKER_STATUS_FINISH;
    if (processCompleteCheck(props))
      stepstatus[STEP_4] = STEP_TRACKER_STATUS_FINISH;
  }
  return stepstatus;
};
const documentDownload = (props: IVariables) => {
  window.open(
    `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${props.instanceId ||
      ''}&type=permits`,
    '_blank',
  );

  props.actions.processComplete.update(true);
};
const getCurrentStep = (props: IVariables) => {
  let currentStep = '';
  if (checkIfMultiStepPermit(props)) {
    currentStep = STEP_4_1;
  } else if (!processCompleteCheck(props)) currentStep = STEP_4;
  return currentStep;
};
export default {
  onClick,
  documentDownload,
  processCompleteCheck,
  getStepStatus,
  getCurrentStep,
};
