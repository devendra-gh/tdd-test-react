import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { DASHBOARD_PATH } from '../../routes';
import { addAnalytics } from '../../utils';
import { SLA_EVENT_KEY, PAY2_EVENT_KEY } from '../../constants';

const init = async (props: IVariables) => {};

const getSummaryList = (props: IVariables) => {
  const { i18n } = props;

  const licenceSummary = {
    columns: [
      {
        id: 'section',
        title: i18n('goldenServices.label.section'),
      },
      {
        id: 'description',
        title: i18n('goldenServices.label.description'),
      },
    ],
    headerHidden: false,
    items: [
      {
        description: props.datePreference,
        section: i18n('goldenServices.label.date'),
        id: '1',
      },
      {
        description: props.timePreference,
        section: i18n('goldenServices.label.time'),
        id: '2',
      },
      {
        description: props.address,
        section: i18n('goldenServices.label.address'),
        id: '3',
      },
    ],
    title: i18n('goldenServices.subTitle.appointmentSummary'),
    uiType: 'default',
  };
  return [licenceSummary];
};

const paymentAnalytics = (props: IVariables) => {
  addAnalytics(
    PAY2_EVENT_KEY,
    {
      serviceStatus: 'success',
    },
    {
      sum: '1000',
    },
  );
};

const onSubmit = async (props: IVariables) => {
  const bpmUrl = 'goldenServices';

  const { businessKey } = props;

  // send message to camunda
  if (businessKey) {
    try {
      // const response =
      await bpm.message(
        bpmUrl,
        {
          businessKey,
          messageName: 'paymentSuccess',
        },
        true,
      );
      window.location.replace(DASHBOARD_PATH);
      // if (response.success) {
      //   //
      // } else {
      //   // console.log('comunda message have not been sent');
      // }
    } catch (e) {
      // console.log('comunda message have not been sent e: ', e);
    } finally {
      addAnalytics(SLA_EVENT_KEY);
    }
  } else {
    // console.log('comunda: no business key ');
  }
};

export default {
  init,
  getSummaryList,
  onSubmit,
  paymentAnalytics,
};
