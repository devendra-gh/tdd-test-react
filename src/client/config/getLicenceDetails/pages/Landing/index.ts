// import { REQUIRES_LOGIN} from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';

const home = [
  {
    path: '/get-licence-details', // path for router
    uniqueId: 'get-licence-details-home', // uniqueId for caching and other purposes
    template: 'landingTemplate', // template name, must be located in index of folder template/index
    title: 'getLicenceDetails.title.tradeLicenceDetails', // title of the page, later it will be read from CMS
    props: {
      showRelatedJourneyCard: true,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
        'stepsStatus',
      ],
      mapDispatch: ['steps', 'stepsStatus'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default home;
