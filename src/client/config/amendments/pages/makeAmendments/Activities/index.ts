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

const activities = [
  {
    path: '/amendments/activities', // path for router
    uniqueId: 'activities', // uniqueId for caching and other purposes
    template: 'activities', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments',
    // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: 'subStep.activities',
      currentCategory: categories.ACTIVITIES,
      currentPage: pages.ACTIVITIES,
      setActivities: functions.setActivities,
      subTitle: 'activities.heading',
      description: 'activities.pageDescription',
      onSubmitAmendment: functions.onSubmitAmendment,
      // onPageInit: functions.onPageInit,
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
        'loggedIn',
        'activityList',
        'dedErrorMessage',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            'subStep.activities',
          ),
        },
      ],
      mapDispatch: [
        'licenceDetails',
        'activityList',
        'activity',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default activities;
