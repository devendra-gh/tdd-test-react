// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData } from '../../utils/common';
import functions from './functions';

const details = [
  {
    path: ['/consumer-good-prices/details/:id'], // path for router
    uniqueId: 'cgp-search', // uniqueId for caching and other purposes
    template: 'details', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    onPageInit: (props: IVariables) => {
      functions.getDetails(props);
      getAnalyticsData('sla', { serviceStatus: 'success' });
    },
    props: {
      getDetails: functions.getDetails,
      description: 'cpg_resultpage_des',
      buttons: [
        {
          label: 'common.back',
          onClick: functions.onBack,
          uiType: 'secondary',
          withArrow: true,
          alignIcon: 'start',
        },
      ],
      sortByItems: [
        {
          id: 'none',
          label: 'None',
        },
        {
          id: 'asc',
          label: 'cpg_low_to_high',
        },
        {
          id: 'desc',
          label: 'cpg_high_to_low',
        },
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'steps',
        'locations',
        'stepsStatus',
        'retailers',
        'currentGoods',
      ],
      mapDispatch: ['steps', 'locations', 'currentGoods'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default details;
