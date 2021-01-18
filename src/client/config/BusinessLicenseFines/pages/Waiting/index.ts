import { IVariables } from '@tamm/app-composer';
import { payFineSummarySteps } from '../../steps';
import functions from './functions';
import { PROCESS_NAME_BUSINESS_LICENCE_FINE } from '../../constants';

const Waiting = [
  {
    path: '/business-licence-fine/waiting', // path for router
    uniqueId: 'license-waitingApproval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'payfines.title', // title of the page, later it will be read from CMS
    init: functions.init,
    onPageInit: (props: IVariables) => {
      return {
        link: props.paymentLink,
      };
    },
    props: {
      steps: payFineSummarySteps,
      currentStep: 'payfines.steps.payment',
      stepsStatus: {
        'payfines.steps.checkLicenceFines': 'finish',
        // 'payfines.steps.payment': 'process',
      },
      title: 'payfines.title.waiting',
      buttons: [],
      type: 'inProgress',
      text: 'payfines.subTitle.waiting',
      status: 'inProgress',
    },
    fromProcessState: {
      processName: PROCESS_NAME_BUSINESS_LICENCE_FINE,
      variables: ['paymentLink'],
    },
    state: {
      mapState: ['stepsStatus', 'formBusinessLicenceFine'],
      mapDispatch: ['stepsStatus', 'formBusinessLicenceFine'],
    },
  },
];

export default Waiting;
