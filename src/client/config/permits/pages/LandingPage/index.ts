import functions from './functions';
import { PATH_LANDING } from '../../utils/constants/pageRoutes';

const landingPage = [
  {
    path: [`/:serviceName${PATH_LANDING}`], // path for router
    uniqueId: 'landing-page', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    init: functions.init,

    props: {
      onStart: functions.onStart,
      hideSidebar: true,
      title: 'pageTitle.permitApplication',
      description: 'landingPage.serviceDesc',
      serviceTitle: 'landingPage.serviceTitle',
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'steps',
        'stepsStatus',
        'pageTitle',
        'companyType',
        'permitType',
        'permitInfo',
        'serviceType',
        'urlServiceName',
        'locale',
      ],
      mapDispatch: [
        'steps',
        'stepsStatus',
        'pageTitle',
        'permitType',
        'permitInfo',
        'serviceType',
        'companyType',
        'urlServiceName',
        'locale',
      ],
    },
  },
];

export default landingPage;
