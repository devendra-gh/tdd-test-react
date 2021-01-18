import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { getSteps } from 'client/config/amendments/utils/functions';
import functions from './functions';
import { REQUIRES_SOP3 } from '../../constants/requires';
import { PROCESS_NAME, mapStateCommonForAll } from '../../constants';

const amendmentsCategory = [
  {
    path: '/amendments/categories', // path for router
    uniqueId: 'category-page', // uniqueId for caching and other purposes
    template: 'category', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments',
    // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.selectAmendmentType',
      stepsStatus: {
        'process.selectLicenceNumber': 'finish',
      },
      subTitle: 'category.subTitle',
      description: 'category.description',
      onNext: functions.handleNext,
      onBack: functions.handleBack,
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['logUuid', 'dbAmendmentId'],
    },
    state: {
      mapState: [
        ...mapStateCommonForAll,
        'pageLoading',
        'dedErrorMessage',
        {
          steps: getSteps,
        },
      ],
      mapDispatch: [
        'amendmentCategories',
        'pageLoading',
        'licenseType',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default amendmentsCategory;
