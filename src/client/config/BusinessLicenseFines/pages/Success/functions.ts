import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_BUSINESS_LICENCE_FINE } from '../../constants';
import { getAnalyticsData } from '../../utils/common';
import { IFeeItem } from '../../types';
import { DASHBOARD_PATH } from '../../routes';

/* istanbul ignore file */

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  const { instanceId } = props;
  if (props.instanceId) {
    window.open(
      `${baseUrl}/api/download/businessCertificateGenericADU?type=businessLicenceFines&instanceId=${instanceId}&certificateName=receipt&mobileDownloadable=pdf&mobileFileName=Certificate`,
      '_blank',
    );
  }
};

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onFinish = async (props: IVariables) => {
  await bpm.message(
    PROCESS_NAME_BUSINESS_LICENCE_FINE,
    {
      businessKey: props.businessKey,
      messageName: 'paymentSuccess',
    },
    true,
  );
  props.actions.instanceId.update('');
  props.actions.businessKey.update('');
  window.location.replace(DASHBOARD_PATH);
};

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  const feeData = props.feeItems && JSON.parse(props.feeItems);
  const totalFee =
    feeData && feeData.reduce((a: number, i: IFeeItem) => a + i.FINE_AMT, 0);
  getAnalyticsData(
    'pay2',
    { serviceStatus: 'success' },
    { sum: Number(totalFee) || totalFee },
  );
  props.actions.formBusinessLicenceFine.update({
    ...props.formBusinessLicenceFine,
    isLoading: false,
  });
};
export default {
  onClick,
  init,
  onFinish,
};
