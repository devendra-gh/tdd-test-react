// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const routes = [
  {
    path: ['/business-licence-procedure/select-transaction-type/'],
    uniqueId: 'businessLicenseProcedure-SelectCompanyDetails',
    template: 'businessLicenseProcedureSelectCompanyDetails',
    title: 'businessLicenseProcedure.main.title',
    props: {
      currentStep: 'businessLicenseProcedure.step1.title',
      onSubmit: functions.onSubmit,
      getInitialState: functions.getInitialState,
      onSubmitLabel: 'button.next',
      withArrow: true,
      subTitle: 'businessLicenseProcedure.step1.title',
      description: 'businessLicenseProcedure.step1.page.description',
      stepsStatus: {},
    },
    fromProcessState: {
      // processName: PROCESS_NAME_RENEW_LICENCE,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'formCompanyDetails',
        {
          steps: (state: IVariables) => {
            return state.businessLicenseProcedureSteps;
          },
        },
      ],
      mapDispatch: ['formCompanyDetails', 'instanceId', 'businessKey'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default routes;
