import { IVariables } from '@tamm/app-composer';
import functions from './functions';
// import { PROCESS_NAME } from '../../constants';
import { PATH_SUBMITTED } from '../../routes';

const routes = [
  {
    path: PATH_SUBMITTED,
    uniqueId: 'submitted',
    template: 'submitted',
    title: 'goldenServices.title.goldenServices',
    init: functions.init,
    onPageInit: (props: IVariables) => {
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        'goldenServices.steps.addApplicationInformation': 'finish',
      });
      return {};
    },
    props: {
      currentStep: 'goldenServices.steps.addApplicationInformation',
      buttons: [],
      subTitle: 'goldenServices.subTitle.submitted',
      description: 'goldenServices.subTitle.desc.submitted',
      nextButton: 'goldenServices.viewAppointmentSummary',
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        'goldenService',
        'businessKey',
        {
          steps: (state: IVariables) => {
            return state.goldenServicesSteps;
          },
        },
      ],
      mapDispatch: ['stepsStatus', 'goldenService'],
    },
  },
];

export default routes;
