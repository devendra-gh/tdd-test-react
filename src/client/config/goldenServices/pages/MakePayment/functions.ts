import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { addAnalytics } from '../../utils';
import { PAY1_EVENT_KEY } from '../../constants';

const init = async (props: IVariables) => {};

const getTotalAmount = (props: IVariables) => {
  return 1000;
};

const proceedWithPay = async (props: IVariables) => {
  props.actions.stepsStatus.update({
    ...props.stepsStatus,
    'goldenServices.steps.makePayment': 'process',
  });
  const bpmUrl = 'goldenServices';

  const { businessKey } = props;

  if (businessKey) {
    // open payment page in same tab
    window.location.replace(props.paymentLink);
    // send message to camunda
    let response;
    try {
      response = await bpm.message(
        bpmUrl,
        {
          businessKey,
          messageName: 'proceedPayment',
        },
        true,
      );
    } catch (e) {
      response = { status: false };
      // console.log('comunda message have not been sent e: ', e);
    } finally {
      addAnalytics(
        PAY1_EVENT_KEY,
        {
          serviceStatus: response.status ? 'success' : 'fail',
        },
        {
          sum: getTotalAmount(props),
        },
      );
    }
  } else {
    // console.log('comunda: no business key ');
  }
  // TODO: call Camunda? to proceed with payment
  // setTimeout(() => {
  //   // props.history.push('/golden-services/appointment-summary');
  //   props.actions.goldenService.update({
  //     ...props.goldenService,
  //     paymentInProgress: false,
  //   });
  //   props.actions.stepsStatus.update({
  //     ...props.stepsStatus,
  //     'goldenServices.steps.makePayment': 'finish',
  //   });
  // }, 4000);
};

const getSummaryList = (props: IVariables) => {
  const { i18n } = props;

  const licenceSummary = {
    columns: [
      {
        id: 'description',
        title: i18n('goldenServices.label.description'),
      },
      {
        id: 'fee',
        title: i18n('goldenServices.label.fee'),
      },
    ],
    headerHidden: false,
    items: [
      {
        description: i18n('goldenServices.label.serviceFees'),
        fee: 'AED 1000.00',
        id: '1',
      },
    ],
    title: i18n('goldenServices.subTitle.summary'),
    uiType: 'default',
  };
  return [licenceSummary];
};

export default {
  init,
  getSummaryList,
  proceedWithPay,
  getTotalAmount,
};
