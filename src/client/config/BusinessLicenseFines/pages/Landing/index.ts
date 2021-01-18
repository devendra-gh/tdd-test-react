import { IVariables } from '@tamm/app-composer';
import { payFineSummarySteps } from '../../steps';

const home = [
  {
    path: '/business-licence-fine', // path for router
    uniqueId: 'business-licence-fine-home', // uniqueId for caching and other purposes
    template: 'landing', // template name, must be located in index of folder template/index
    title: 'payfines.title', // title of the page, later it will be read from CMS
    props: {
      stepsSummary: payFineSummarySteps,
      showRelatedJourneyCard: true,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: [],
    },
  },
];

export default home;
