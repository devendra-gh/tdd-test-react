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

const location = [
  {
    path: '/amendments/location', // path for router
    uniqueId: 'location', // uniqueId for caching and other purposes
    template: 'location', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments',
    // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: `subStep.${pages.LOCATION}`,
      currentCategory: categories.LOCATION_COUNTRY,
      currentPage: pages.LOCATION,
      subTitle: 'makeAmendmentsLocation',
      description: 'locationDescription',
      branchDescription: 'branchDescription',
      onSubmitAmendment: functions.onSubmitAmendment,
      onBack: functions.handleBack,
      validation: functions.validation,
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['logUuid', 'dbAmendmentId'],
    },
    onPageInit: functions.onPageInit,
    state: {
      mapState: [
        ...mapStateCommonForAll,
        'loggedIn',
        'countryList',
        'dedErrorMessage',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            `subStep.${pages.LOCATION}`,
          ),
        },
      ],
      mapDispatch: [
        'categoryType',
        'countryList',
        'tawtheeqDetails',
        'amendmentCategories',
        'licenceDetails',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default location;
