import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const routes = [
  {
    path: ['/business-licence-procedure/licence-information/'],
    uniqueId: 'businessLicenseProcedure-SelectCompanyDetails',
    template: 'businessLicenseProcedureResult',
    title: 'businessLicenseProcedure.main.title',
    props: {
      currentStep: 'businessLicenseProcedure.step3.title',
      getInitialState: functions.getInitialState,
      getDownloadLicenseProcedureDoc: functions.getDownloadLicenseProcedureDoc,
      onSubmitLabel: 'button.next',
      withArrow: true,
      subTitle: 'businessLicenseProcedure.step3.title',
      description: 'businessLicenseProcedure.step3.page.description',
      stepsStatus: {
        'businessLicenseProcedure.step1.title': 'finish',
        'businessLicenseProcedure.step2.title': 'finish',
      },
    },
    init: (props: IVariables) => {
      const { formCompanyDetails, formSelectActivity, actions } = props;
      const { location, legalForm } = formCompanyDetails;
      const { activities, activity } = formSelectActivity;
      if (!activities) {
        props.history.push('/business-licence-procedure/error-page');
        return;
      }
      const selectedActivity = activities.find(
        (x: IVariables) => activity === x.activityCode,
      );
      if (!location || !legalForm || !selectedActivity) {
        props.history.push('/business-licence-procedure/error-page');
      } else {
        actions.resultState.update({
          ...formCompanyDetails,
          selectedActivity,
        });
      }
    },
    fromProcessState: {},
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'formCompanyDetails',
        'formSelectActivity',
        'resultState',
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
        'resultState',
        'downloadLicenseProcedureDoc',
      ],
    },
  },
];

export default routes;
