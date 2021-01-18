// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { BASE_PATH } from 'client/config/payApplicationFees/routes';

const home = [
  {
    path: BASE_PATH, // path for router
    uniqueId: 'pay-application-fees.home', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'main.title',
    props: {
      showRelatedJourneyCard: true,
    }, // title of the page, later it will be read from CMS
    state: {
      mapState: [
        'loggedIn',
        'user',
        {
          steps: () => [],
        },
        'instanceId',
        'businessKey',
        'stepsStatus',
        'form',
        'showRelatedJourneyCard',
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'form',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default home;
