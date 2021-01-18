import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { STEP_4_1_1, STEP_4_1, STEP_4_1_2 } from '../../steps';
import { STEP_TRACKER_STATUS_FINISH } from '../../utils/constants/stepTrackerStatus';
import { StepStatus } from '../../utils/interfaces';

const onClick = (bpmUrl: string) => async (props: IVariables) => {
  await bpm.message(bpmUrl, {
    businessKey: props.businessKey,
    messageName: 'proceedPayment',
  });
  if (props.paymentLink) {
    window.open(props.paymentLink, '_blank');
  }
};

const formatValue = (value: number) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
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
const getPermitFees = (props: IVariables) => {
  return props.permitsFees ? JSON.parse(props.permitsFees) : [];
};
const getPaymentSummaryDetails = (props: IVariables) => {
  const { i18n, locale } = props;
  const permitsFees = getPermitFees(props);
  return [
    {
      columns: [
        {
          id: 'description',
          title: i18n('global.description'),
        },
        {
          id: 'price',
          title: i18n('global.price'),
          align: 'end',
        },
      ],
      headerHidden: false,
      items:
        permitsFees && permitsFees.length
          ? permitsFees.map((li: any, index: number) => ({
              id: index,
              description: locale === 'en' ? li.feeDescEn : li.feeDescAr,
              price: `${i18n('global.aed')} ${formatValue(li.FeeAmount)}`,
            }))
          : [{ id: 0, description: '', price: 0 }],
      title: i18n('global.paymentSummary'),
      uiType: 'default',
    },
  ];
};

export default {
  onClick,
  formatValue,
  getStepStatus,
  getPaymentSummaryDetails,
};
