// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const routes = [
  {
    path: '/get-licence-details/licence-number',
    uniqueId: 'licence-number-enter',
    template: 'licenceFormTemplate',
    title: 'getLicenceDetails.title.tradeLicenceDetails',
    init: functions.init,
    props: {
      currentStep: 'getLicenceDetails.steps.enterLicenceNumber',
      onSubmit: functions.onSubmit,
      onSubmitLabel: 'button.view',
      withArrow: true,
      subTitle: 'getLicenceDetails.title.enterLicenceNumber',
      description: 'getLicenceDetails.subTitle.enterLicenceNumber',
      onChange: functions.onChange,
      onBack: functions.goBack,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'tradeLicence',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: ['tradeLicence', 'stepsStatus'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default routes;
