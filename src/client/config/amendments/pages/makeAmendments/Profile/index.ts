import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import {
  AMENDMENT_CATEGORIES as categories,
  AMENDMENT_PAGES as pages,
} from 'client/config/amendments/constants/amendmentObjects';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import functions from './functions';

const profile = [
  {
    path: '/amendments/profile', // path for router
    uniqueId: 'profile-page', // uniqueId for caching and other purposes
    template: 'profile', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments',
    // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: 'subStep.ownership',
      currentCategory: categories.OWNERSHIP,
      currentPage: pages.OWNERSHIP,

      subTitle: 'profile.subTitle',
      description: 'profile.description',
      getPossibleRepTypes: functions.getPossibleRepTypes,
      onSubmit: functions.onSubmit,
    },
    // init,
    onPageInit: functions.onPageInit,
    state: {
      mapState: [
        'amendmentCategories',
        'legalForm',
        'licenseType',
        'licenceDetails',
        'profile',
        'countryList',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            'subStep.ownership',
          ),
        },
      ],
      mapDispatch: ['licenceDetails', 'profile', 'countryList'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default profile;
