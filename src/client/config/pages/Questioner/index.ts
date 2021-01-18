import { IVariables, REQUIRES_LOGIN } from '@tamm/app-composer';
import functions from './functions';

const questionnaire = [
  {
    path: '/questioner/:formIndex',
    uniqueId: 'questionnaire',
    template: 'questioner',
    title: 'questionnaire.title',
    props: {
      onSubmit: functions.onSubmit,
      onCancel: (history: IVariables) =>
        history.push('/economic-licence/submit'),
      onSubmitLabel: 'common.next',
      title: 'questionnaire.select_legal_form',
      onOutcome: functions.updateLegalForm,
      summaryTitle: 'wizardSummary.title',
      // summaryText: "wizardSummary.description",
      init: functions.init,
      outcomes: [
        // {
        //   title: "wizardSummary.title",
        //   value: "establishmentGCC",
        //   description: "legalForms.GCC_ESTABLISHMENT.description",
        //   display: (formValues: IVariables) =>
        //     formValues.applicantType === "expandBusiness" &&
        //     formValues.eCommerce === "yes",
        //   onClick: () =>
        //     window.open(
        //       "https://www.tamm.abudhabi/journeys/manage-your-business/"
        //     )
        // }
      ],
      summary: {
        // description: "questionnaire.summary.description"
      },
    },
    state: {
      mapState: [
        'userName',
        'userId',
        'formIndex',
        'questionnaireData',
        {
          questions: functions.getFormState,
          summaryList: functions.getSummary,
          summaryButtonLabel: functions.getButtonLabel,
          summaryText: functions.getSummaryText,
        },
        'economicLicense',
        'stepsStatus',
      ],
      mapDispatch: [
        'questionnaireData',
        'user',
        'instanceId',
        'businessKey',
        'legalForm',
        'economicLicense',
        'stepsStatus',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default questionnaire;
