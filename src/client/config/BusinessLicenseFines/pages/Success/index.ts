import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { payFineSummarySteps } from '../../steps';
import functions from './functions';

const Success = [
  {
    path: '/business-licence-fine/success', // path for router
    uniqueId: 'business-licence-fine-success', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'payfines.title', // title of the page, later it will be read from CMS
    init: functions.init,
    props: {
      steps: payFineSummarySteps,
      currentStep: 'payfines.steps.fineSummary',
      stepsStatus: {
        'payfines.steps.checkLicenceFines': 'finish',
        'payfines.steps.payment': 'finish',
      },
      buttons: [
        {
          label: 'button.viewReceipt',
          onClick: functions.onClick,
          uiType: 'primary',
          ariaLabel: 'viewReceipt',
        },
        {
          label: 'button.dashboard',
          onClick: functions.onFinish,
          uiType: 'secondary',
          ariaLabel: 'finish',
        },
      ],
      type: noticeTypes.SUCCESS,
      title: 'payfines.title.success',
      text: 'payfines.subTitle.success',
    },
    state: {
      mapState: [
        'instanceId',
        'stepsStatus',
        'formBusinessLicenceFine',
        'businessKey',
      ],
      mapDispatch: [
        'stepsStatus',
        'formBusinessLicenceFine',
        'instanceId',
        'businessKey',
      ],
    },
  },
];

export default Success;
