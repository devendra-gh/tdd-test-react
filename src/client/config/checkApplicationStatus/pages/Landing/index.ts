// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const landing = [
  {
    path: ['/application-status/landing'], // path for router
    uniqueId: 'landing-page', // uniqueId for caching and other purposes
    template: 'statusLanding', // template name, must be located in index of folder template/index
    title: 'checkApplicationStatus.title', // title of the page, later it will be read from CMS
    props: {
      title: 'checkApplicationStatus.landingPage.title',
      description: 'checkApplicationStatus.landingPage.description',
      showRelatedJourneyCard: true,
      startLogin: {
        title: 'checkApplicationStatus.title',
        description:
          'checkApplicationStatus.landingPage.startLogin.description',
        onClick: functions.onClick,
        buttonLabel: 'button.start',
      },
      process: {
        title: 'checkApplicationStatus.landingPage.process.title',
        steps: [
          {
            label: 'checkApplicationStatus.step.1',
            description:
              'checkApplicationStatus.landingPage.process.step.1.description',
          },
          {
            label: 'checkApplicationStatus.step.2',
            description:
              'checkApplicationStatus.landingPage.process.step.2.description',
          },
        ],
      },
      helpfulBlock: {
        callField: {
          onChange: () => {},
        },
        commentField: {
          onChange: () => {},
        },
        emailField: {
          onChange: () => {},
        },
        onChange: () => {},
        submitButton: {
          onClick: () => {},
        },
        telephoneField: {
          countries: [],
          onChange: () => {},
        },
      },
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: ['instanceId', 'businessKey', 'stepStatus'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

// @ts-ignore
export default landing;
