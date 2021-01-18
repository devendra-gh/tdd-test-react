import { REQUIRES_LOGIN } from '@tamm/app-composer';
// import baseUrl from 'client/utils/baseUrl';
import functions from './functions';
import { REQUIRES_SOP3 } from '../../constants/requires';
import { mapStateCommonForAll } from '../../constants';

const start = [
  {
    path: ['/amendments/select-licence'], // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'selectlicence', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.selectLicenceNumber',
      stepsStatus: {},
      listTradeLicenses: functions.listTradeLicenses,
      filterSearchTradeLicenseList: functions.filterSearchTradeLicenseList,
      selectLicense: functions.selectLicense,
      backLink: '/amendments/start-process',
    },
    init: functions.init,
    onPageInit: functions.onPageInit, // functions.listTradeLicenses,
    state: {
      mapState: [
        ...mapStateCommonForAll,
        'loggedIn',
        'user',
        'tradeLicenceList',
        'steps',
        'stepsStatus',
        'amendmentServerError',
        'pageLoading',
        'commundaError',
      ],
      mapDispatch: [
        'instanceId',
        'commundaError',
        ...mapStateCommonForAll,
        'tradeLicenceList',
        'pageLoading',
        'amendmentServerError',
        'documents',
        'applicationReturnDocuments',
        'dedErrorMessage',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default start;
