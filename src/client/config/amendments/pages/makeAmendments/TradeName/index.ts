import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import {
  PROCESS_NAME,
  mapStateCommonForAll,
} from 'client/config/amendments/constants';
import {
  AMENDMENT_CATEGORIES as categories,
  AMENDMENT_PAGES as pages,
} from 'client/config/amendments/constants/amendmentObjects';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import functions from './functions';

const tradeName = [
  {
    path: '/amendments/trade-name', // path for router
    uniqueId: 'trade-name', // uniqueId for caching and other purposes
    template: 'economicName', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments',
    // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: `subStep.${pages.TRADE_NAME}`,
      currentCategory: categories.TRADE_NAME,
      currentPage: pages.TRADE_NAME,

      subTitle: 'tradeName.subTitle',
      description: 'tradeName.description',
      currentEconomicName: 'tradeName.currentEcononmicNameEn',
      currentEconomicNameAr: 'tradeName.currentEcononmicNameAr',
      tnTextInfo: 'tradeName.tnTextInfo',
      onSubmitAmendment: functions.onSubmitAmendment,
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
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            `subStep.${pages.TRADE_NAME}`,
          ),
        },
      ],
      mapDispatch: [
        'amendmentCategories',
        'licenceDetails',
        'pageLoading',
        'tradeName',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default tradeName;
