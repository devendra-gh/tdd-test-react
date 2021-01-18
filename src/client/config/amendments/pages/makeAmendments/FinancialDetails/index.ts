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

const financialDetails = [
  {
    path: '/amendments/financial-details', // path for router
    uniqueId: 'financial-details', // uniqueId for caching and other purposes
    template: 'financial', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments',
    // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: `subStep.${pages.PAID_UP_CAPITAL}`,
      currentCategory: categories.FINANCIAL,
      currentPage: pages.PAID_UP_CAPITAL,

      subTitle: 'financial.subTitle',
      description: 'financial.description',
      currentCapital: 'financial.currentCapital',
      onSubmitAmendment: functions.onSubmitAmendment,
      onBack: functions.handleBack,
      handleCapitalAmountChange: functions.handleCapitalAmountChange,
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['logUuid', 'dbAmendmentId'],
    },
    state: {
      mapState: [
        ...mapStateCommonForAll,
        'loggedIn',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            `subStep.${pages.PAID_UP_CAPITAL}`,
          ),
        },
        'licenceDetails',
        'dedErrorMessage',
      ],
      mapDispatch: ['licenceDetails', 'amendmentServerError'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default financialDetails;
