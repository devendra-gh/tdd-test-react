// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const routes = [
  {
    path: '/commercial-promotions/search',
    uniqueId: 'commercial-promotions',
    template: 'search',
    title: 'commericalPromotions.title',
    props: {
      subTitle: 'commericalPromotions.subTitle',
      subTitleDescription: 'commericalPromotions.subTitleDes',
      getCommercialPromotions: functions.getCommercialPromotions,
      getValidation: functions.getValidation,
      changePage: functions.changePage,
      onPageInit: functions.onPageInit,
      onBack: functions.onBack,
      onRadioSelect: functions.onRadioSelect,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'commercialPromotions',
        'displayErrorFlag',
        'displaySpinner',
        'displayAccordian',
        'stepsStatus',
        'showNotFoundAlert',
        'showErrorAlert',
        'promotionType',
        {
          steps: (state: IVariables) => {
            return state.commercialPromotionsSteps;
          },
        },
      ],
      mapDispatch: [
        'commercialPromotions',
        'displayErrorFlag',
        'displaySpinner',
        'displayAccordian',
        'showNotFoundAlert',
        'showErrorAlert',
        'promotionType',
        'stepsStatus',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default routes;
