import { IVariables } from '@tamm/app-composer';
import functions from './functions';

/* istanbul ignore file */

const home = [
  {
    path: '/business-directory', // path for router
    uniqueId: 'business-directory-home', // uniqueId for caching and other purposes
    template: 'landing', // template name, must be located in index of folder template/index
    title: 'business-directory.title', // title of the page, later it will be read from CMS
    props: {
      showRelatedJourneyCard: true,
      onChange: functions.onChange,
    },
    init: functions.init,
    onPageInit: functions.onPageInit,
    state: {
      mapState: [
        'loggedIn',
        'user',
        'natureList',
        'token',
        'activityByNature',
        'selectedHeatActivity',
        'selectedHeatCategory',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: [
        'natureList',
        'token',
        'activityByNature',
        'selectedHeatActivity',
        'selectedHeatCategory',
      ],
    },
  },
];

export default home;
