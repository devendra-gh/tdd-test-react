// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const routes = [
  {
    path: ['/business-licence-procedure/search-activities/'],
    uniqueId: 'businessLicenseProcedure-SelectCompanyDetails',
    template: 'businessLicenseProcedureSelectActivityDetails',
    title: 'businessLicenseProcedure.main.title',
    props: {
      currentStep: 'businessLicenseProcedure.step2.title',
      onSubmit: functions.onSubmit,
      onChange: functions.onChange,
      getInitialState: functions.getInitialState,
      onSubmitLabel: 'button.next',
      withArrow: true,
      subTitle: 'businessLicenseProcedure.step2.title',
      description: 'businessLicenseProcedure.step2.page.description',
      stepsStatus: {
        'businessLicenseProcedure.step1.title': 'finish',
      },
    },
    init: (props: IVariables) => {
      const { formCompanyDetails } = props;
      const { location, legalForm } = formCompanyDetails;
      if (!location || !legalForm) {
        props.history.push('/business-licence-procedure/error-page');
      }
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
        'formRenewEconomicLicence',
        'formSelectActivity',
        'formCompanyDetails',
        {
          steps: (state: IVariables) => {
            return state.businessLicenseProcedureSteps;
          },
        },
      ],
      mapDispatch: [
        'formRenewEconomicLicence',
        'instanceId',
        'businessKey',
        'formSelectActivity',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default routes;
