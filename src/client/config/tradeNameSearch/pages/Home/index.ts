// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const Home = [
  {
    path: '/tradename-search/home', // path for router
    uniqueId: 'trade-name', // uniqueId for caching and other purposes
    template: 'service', // template name, must be located in index of folder template/index
    title: 'tradeNameSearch.title', // title of the page, later it will be read from CMS,
    props: {
      startLogin: {
        description: 'tradenameSearch.title.description',
      },
      showRelatedJourneyCard: true,
      title: 'tradeNameSearch.home.title',
      description: 'tradenameSearch.home.description',
      isFineSummary: true,
      onSubmit: functions.onSubmit,
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
        },
      },
    },

    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'feeItemsTab',
        'isFineSummary',
        'payFinesFlag',
        'history',
        {
          steps: (state: IVariables) => {
            return state.tradeNameSearchSteps;
          },
        },
      ],
      mapDispatch: ['stepsStatus', 'feeItemsTab', 'history'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default Home;
