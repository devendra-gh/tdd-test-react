import { IVariables } from '@tamm/app-composer';
import Analytics from '@tamm/analytics';
import bpm from 'client/services/bpm';
import { PATH_HOME, PATH_PAYMENT_WAITING } from './routes';

/* istanbul ignore file */

const PROCESS_NAME = 'listEconomicLicencesCertificate';
const MSG_PROCEED_PAYMENT = 'msgProceedPayment';
const MSG_PAYMENT_FAILURE = 'paymentFailure';
const MSG_PAYMENT_SUCCESS = 'paymentSuccess';

interface PaymentStart {
  transactionNumber: string;
  emiratesId: string;
}

export const TRA_EVENT_KEY = 'TRA';
export const SLA_EVENT_KEY = 'SLA';
export const PAY1_EVENT_KEY = 'PAY1';
export const PAY2_EVENT_KEY = 'PAY2';

export const addAnalytics = (
  key: string,
  additionalData: object = {},
  paymentDetails: object = {},
) => {
  const adgeName = 'DED';
  const serviceName = 'DED_005';
  const productName = 'NOP';

  Analytics.addEvent({
    eventKey: key,
    ...paymentDetails,
    additionalData: {
      adgeName,
      serviceName,
      productName,
      ...additionalData,
    },
  });
};

export const startPaymentService = async (
  props: IVariables,
  { transactionNumber }: PaymentStart,
) => {
  const data = await bpm.start(PROCESS_NAME, {
    transactionNumber,
    emiratesId: '{{IDN}}',
    basePath: PATH_HOME,
    email:
      props.user && props.user['User Email'] ? props.user['User Email'] : '',
    mobileNumber: props.user && props.user.Mobile ? props.user.Mobile : '',
  });
  if (data.success && data.data && data.data.businessKey && data.data.id) {
    props.actions.instanceId.update(data.data.id);
    props.actions.businessKey.update(data.data.businessKey);
  }
};

export const getFeeDetails = async (props: IVariables) => {
  let feesData: any = null;
  const { instanceId } = props;
  try {
    const data = await bpm.getVariables(instanceId, {
      processName: PROCESS_NAME,
      variables: ['feesDetails'],
    });
    if (data && data.data.feesDetails && data.data.feesDetails.value) {
      feesData = JSON.parse(data.data.feesDetails.value);
    }
  } catch (exception) {
    // console.log('exception on redirect', exception.toString()); // eslint-disable-line
  }
  return feesData;
};

export const proceedToPayment = async (
  props: IVariables,
  isProceeding: boolean,
) => {
  const { businessKey } = props;
  await bpm.message(PROCESS_NAME, {
    businessKey,
    messageName: MSG_PROCEED_PAYMENT,
    variables: {
      isProceedPayment: isProceeding,
    },
  });
};

export const getPaymentLink = async (props: IVariables) => {
  const { instanceId } = props;
  let paymentLink: string = '';
  let paymentReturnLink: string = '';
  try {
    const paymentLinkData = await bpm.getVariables(instanceId, {
      processName: PROCESS_NAME,
      variables: ['paymentLink', 'paymentReturnLink'],
    });
    paymentLink = paymentLinkData.data.paymentLink.value;
    paymentReturnLink = paymentLinkData.data?.paymentReturnLink?.value;
    const paymentReturnURL = paymentReturnLink.replace(
      '{paymentCallbackURL}',
      `${PATH_PAYMENT_WAITING}`,
    );
    paymentLink = paymentLink.replace(
      '{ReturnURL}',
      encodeURI(paymentReturnURL),
    );
  } catch (exception) {
    // console.log('error fetching payment link', exception); // eslint-disable-line
  }

  return paymentLink;
};

export const paymentFailure = (props: IVariables) => {
  const { businessKey } = props;
  bpm.message(PROCESS_NAME, {
    businessKey,
    messageName: MSG_PAYMENT_FAILURE,
  });
};

export const paymentSuccess = async (props: IVariables) => {
  const { businessKey } = props;
  const data = await bpm.message(PROCESS_NAME, {
    businessKey,
    messageName: MSG_PAYMENT_SUCCESS,
  });

  return data.success;
};

export const getEmiratesId = async (instanceId: string) => {
  const data = await bpm.getVariables(instanceId, {
    processName: PROCESS_NAME,
    variables: ['emiratesId'],
  });
  return data?.data?.emiratesId?.value;
};

export const REQUIRES_SOP3 = {
  test: ({ user: { Type } }: IVariables) => Type === 'SOP3',
  redirecTo: PATH_HOME,
};
