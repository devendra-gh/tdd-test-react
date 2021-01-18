// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const routes = [
  {
    path: '/tradename-search/search',
    uniqueId: 'economic-licence',
    template: 'search',
    title: 'tradeNameSearch.title',
    props: {
      getTradeName: functions.getTradeName,
      getValidation: functions.getValidation,
      changePage: functions.changePage,
      onPageInit: functions.onPageInit,
      onBack: functions.onBack,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'tradeName',
        'displayErrorFlag',
        'displaySpinner',
        'displayTable',
        'showNotFoundAlert',
        'showErrorAlert',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return state.tradeNameSearchSteps;
          },
        },
      ],
      mapDispatch: [
        'tradeName',
        'displayErrorFlag',
        'displaySpinner',
        'displayTable',
        'showNotFoundAlert',
        'showErrorAlert',
        'stepsStatus',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default routes;
