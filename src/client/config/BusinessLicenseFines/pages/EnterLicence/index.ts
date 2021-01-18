import functions from './functions';
import { payFineSteps } from '../../steps';

const routes = [
  {
    path: '/business-licence-fine/enter-licence',
    uniqueId: 'renew-economic-licence-enter',
    template: 'payFineForm',
    title: 'payfines.title',
    init: functions.init,
    props: {
      currentStep: 'payfines.steps.checkLicenceFines',
      onSubmit: functions.onSubmit,
      onSubmitLabel: 'button.check',
      subTitle: 'payfines.subTitle.checkLicenceFines',
      description: 'payfines.label.desc.licenceNo',
      onChange: functions.onChange,
      steps: payFineSteps,
    },
    state: {
      mapState: [
        'instanceId',
        'businessKey',
        'formBusinessLicenceFine',
        'stepsStatus',
      ],
      mapDispatch: ['instanceId', 'businessKey', 'formBusinessLicenceFine'],
    },
  },
];

export default routes;
