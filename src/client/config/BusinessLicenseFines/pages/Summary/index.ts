import { IVariables } from '@tamm/app-composer';
import { payFineSummarySteps } from '../../steps';
import functions from './functions';
import { IFeeItem } from '../../types';
import { getAnalyticsData } from '../../utils/common';

const Summary = [
  {
    path: '/business-licence-fine/summary', // path for router
    uniqueId: 'payment-summary', // uniqueId for caching and other purposes
    template: 'finesSummary', // template name, must be located in index of folder template/index
    title: 'payfines.title', // title of the page, later it will be read from CMS,
    fromProcessState: {
      processName: 'business-licence-fine',
      variables: ['paymentLink', 'feeItems'],
    },
    props: {
      steps: payFineSummarySteps,
      currentStep: 'payfines.steps.payment',
      stepsStatus: {
        'payfines.steps.checkLicenceFines': 'finish',
      },
      subTitle: 'payfines.subTitle.payment',
      description: 'payfines.subTitle.desc.payment',
      title: 'payfines.subTitle.fines',
      buttons: [
        {
          label: 'button.back',
          onClick: functions.redirect,
          uiType: 'secondary',
          withArrow: true,
          alignIcon: 'start',
        },
        {
          label: 'button.pay',
          onClick: functions.onClick,
          uiType: 'primary',
          withArrow: true,
          alignIcon: 'end',
        },
      ],
      onPageInit: (props: IVariables) => {
        getAnalyticsData('sla', { serviceStatus: 'success' });
        props.actions.formBusinessLicenceFine.update({
          ...props.formBusinessLicenceFine,
          isLoading: false,
        });
        const feeData = props.feeItems && JSON.parse(props.feeItems);
        const totalFee =
          feeData &&
          feeData.reduce((a: string, i: IFeeItem) => a + i.FINE_AMT, 0);
        return {
          totalFee,
          feeData,
        };
      },
    },

    state: {
      mapState: [
        'stepsStatus',
        'businessKey',
        'instanceId',
        'formBusinessLicenceFine',
        'paymentLink',
      ],
      mapDispatch: [
        'stepsStatus',
        'instanceId',
        'businessKey',
        'formBusinessLicenceFine',
      ],
    },
  },
];

export default Summary;
