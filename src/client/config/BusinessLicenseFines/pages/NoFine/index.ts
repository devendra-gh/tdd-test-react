import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { payFineSteps } from '../../steps';
import functions from './functions';

const noFine = [
  {
    path: '/business-licence-fine/no-fine', // path for router
    uniqueId: 'license-waitingApproval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'payfines.title', // title of the page, later it will be read from CMS
    init: functions.init,
    props: {
      steps: payFineSteps,
      stepsStatus: {
        'payfines.steps.checkLicenceFines': 'finish',
      },
      currentStep: 'payfines.steps.fineSummary',
      buttons: [
        {
          label: 'button.tryAnother',
          onClick: functions.onClick,
          uiType: 'primary',
          ariaLabel: 'tryAnother',
          withArrow: false,
        },
      ],
      type: noticeTypes.INFO,
      title: 'payfines.notice.subTitle.noFines',
      text: 'payfines.notice.subTitle.desc.noFines',
      status: 'alert',
    },
    state: {
      mapState: ['stepsStatus', 'formBusinessLicenceFine', 'businessKey'],
      mapDispatch: ['formBusinessLicenceFine'],
    },
  },
];

export default noFine;
