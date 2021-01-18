import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_BUSINESS_LICENCE_FINE } from '../../constants';
import { redirectToErrorPage } from '../../utils/redirect';
import { getAnalyticsData } from '../../utils/common';
import { IFeeItem } from '../../types';

/* istanbul ignore file */

/**
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  try {
    const feeData = props.feeItems && JSON.parse(props.feeItems);
    const totalFee =
      feeData && feeData.reduce((a: number, i: IFeeItem) => a + i.FINE_AMT, 0);
    const sumAmount = Number(totalFee);
    if (sumAmount === 0 || Number.isNaN(sumAmount)) {
      throw new Error('sum values is coming as 0');
    }
    getAnalyticsData(
      'pay1',
      { serviceStatus: 'success' },
      { sum: Number(totalFee) },
    );
    await bpm.message(
      PROCESS_NAME_BUSINESS_LICENCE_FINE,
      {
        businessKey: props.businessKey,
        messageName: 'proceedPayment',
        variables: {
          isProceedPayment: true,
        },
      },
      true,
    );
    window.location.replace(props.paymentLink);
    props.actions.formBusinessLicenceFine.update({
      ...props.formBusinessLicenceFine,
      isLoading: true,
    });
  } catch (e) {
    redirectToErrorPage(props);
  }
};

const redirect = async (props: IVariables) => {
  try {
    props.actions.formBusinessLicenceFine.update({
      ...props.formBusinessLicenceFine,
      isLoading: true,
    });
    await bpm.message(
      PROCESS_NAME_BUSINESS_LICENCE_FINE,
      {
        businessKey: props.businessKey,
        messageName: 'proceedPayment',
        variables: {
          isProceedPayment: false,
        },
      },
      true,
    );
  } catch (e) {
    redirectToErrorPage(props);
  }
};

export default {
  onClick,
  redirect,
};
