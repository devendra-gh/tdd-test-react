import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME } from 'client/config/payApplicationFees/constants';
import baseUrl from 'client/utils/baseUrl';
import {
  FORM_STEP_3,
  FORM_STEP_2,
} from 'client/config/payApplicationFees/steps';
import { DASHBOARD_PATH } from 'client/config/payApplicationFees/routes';
import { Common } from '../../utils';
import { getAnalyticsData } from '../../utils/common';

const onInit = async (props: IVariables) => {
  getAnalyticsData(
    'pay2',
    { serviceStatus: 'success' },
    { sum: props.totalFees },
  );
  props.actions.currentStep.update(FORM_STEP_3);
  props.actions.stepsStatus.update({
    ...props.stepsStatus,
    [`${FORM_STEP_2}`]: 'finish',
  });
};
const onClick = async (props: IVariables, licenceType: string) => {
  props.actions.showLoader.update(false);
  const { instanceId } = props;
  if (props.instanceId) {
    window.open(
      `${baseUrl}/api/download/businessCertificateGenericADU?type=payApplicationFees&instanceId=${instanceId}&certificateName=${licenceType}&mobileDownloadable=pdf&mobileFileName=Certificate`,
      '_blank',
    );
  }
};

const onFinish = async (props: IVariables) => {
  await bpm.message(
    PROCESS_NAME,
    {
      businessKey: props.businessKey,
      messageName: 'paymentSuccess',
    },
    true,
  );
  Common.reset(props);
  window.location.replace(DASHBOARD_PATH);
};

const onDownloadReceipt = (props: IVariables) => {
  onClick(props, 'receipt');
};

export default {
  onInit,
  onClick,
  onDownloadReceipt,
  onFinish,
};
