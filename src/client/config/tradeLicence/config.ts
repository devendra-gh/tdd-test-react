import bpm from 'client/services/bpm';
// import { getSmartpassData } from 'client/utils/appData';
import economicLicence from './pages/EconomicLicence';
import commonPages from './pages/Common';
import welcome from './pages/Welcome';
import errorPage from './pages/ErrorPage';
import home from './pages/Home';

import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import '../override.less';
// import testPage from './pages/TestPage';
import { steps, withoutNameSteps, instantLicenceSteps } from './steps';
import { CATEGORIES } from './utils/lookup';

interface IState {}

// const smartpassData = getSmartpassData();

const initialState: IState = {
  icaApproved: false,
  economicNameCapId: '',
  licenceCapId: '',
  tnNumber: '',
  cnNumber: '',
  countries: [],
  activities: {
    isLoading: false,
    totalItems: 0,
    items: [],
  },
  businessKey: '',
  instanceId: '',
  tradeNameCheckStatus: '',
  currentCategory: CATEGORIES[0],
  economicLicenceSubmitting: false,
  economicLicenceServerError: false,
  economicLicense: {
    pageTitle: 'licenceForm.title',
    licenceType: {
      licenceType: '',
    },
    branchDetails: {
      branch: '',
    },
    legalForm: {
      legalForm: '',
    },
    activityCategory: '',
    activitySubCategory: '',
  },
  tawtheeqNumber: {
    tawtheeqNumber: '',
    status: '',
  },
  stepsStatus: {},
  economicName: { reservationPeriod: 3 },
  additionalDocumentCategory: null,
  additionalDocuments: [],
  licenceAdditionalDocuments: [],
  licenceAdditionalDocumentCategory: null,
  disableDocumentCategorySelection: false,
  economicLicenceDocuments: [],
  questionnaireData: {},
  questionIndex: 0,
  economicLicenceActivities: [],
  economicLicenceConditions: [],
  steps,
  withoutNameSteps,
  instantLicenceSteps,
  partners: [],
  smartPassData: [],
  moa: {
    moaHTML: '',
    moaModalShow: false,
  },
  applications: [],
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  appName: 'businessServiceApplication',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '6',
  // default variables, for now title is used
  defaults: {
    title: 'Start Your Business',
  },
  getVariables: bpm.getVariables,
  // initial redux state, you can configure per your project need,
  initialState,
  header: {
    template: 'header',
    props: {
      aspectsOfLifeType: 'business-management',
      breadcrumbs: [
        {
          label: 'breadcrumb.home',
          link: `${redirectUrl}`,
          linkTarget: '_self',
        },
        {
          label: 'breadcrumb.digitalServices',
          link: `${redirectUrl}tamm-centers-services`,
          linkTarget: '_self',
        },
        {
          label: 'breadcrumb.dedServices',
          link: `${redirectUrl}tamm-centers-services/department-of-economic-development`,
          linkTarget: '_self',
        },
      ],
    },
    state: {
      mapState: ['user', 'locale', 'title', 'economicLicense'],
      mapDispatch: ['user', 'locale'],
    },
    // hideForPaths: ['/login'],
  },
  footer: {
    template: 'footer',
    state: {
      mapState: ['user'],
    },
    // hideForPaths: ['/login'],
  },
  // pages of the application
  pages: [
    ...economicLicence,
    ...commonPages,
    ...welcome,
    ...errorPage,
    ...home,
  ],
};

export default config;
