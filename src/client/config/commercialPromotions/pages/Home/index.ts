// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const Home = [
  {
    path: '/commercial-promotions/home', // path for router
    uniqueId: 'commercial-promotions', // uniqueId for caching and other purposes
    template: 'service', // template name, must be located in index of folder template/index
    title: 'commericalPromotions.title', // title of the page, later it will be read from CMS,
    props: {
      startLogin: {
        description: 'commericalPromotions.title.description',
      },
      title: 'commericalPromotions.service',
      description: 'commericalPromotions.service.description',
      onSubmit: functions.onSubmit,
      showRelatedJourneyCard: true,
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
        'history',
        {
          steps: (state: IVariables) => {
            return state.commercialPromotionsSteps;
          },
        },
      ],
      mapDispatch: ['stepsStatus', 'history'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default Home;
