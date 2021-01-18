import bpm from 'client/services/bpm';
import { getSmartpassData } from 'client/utils/appData';
// import home from './pages/Home';
import economicLicence from './pages/EconomicLicence';
// import withoutEconomicName from './pages/WithoutEconomicName';
import commonPages from './pages/Common';
import instantLicence from './pages/InstantLicence';
import welcome from './pages/Welcome';
import login from './pages/Login';
import notFound from './pages/Notfound';
import upgradeInfo from './pages/UpgradeInfo';
import questioner from './pages/Questioner';
import errorPage from './pages/ErrorPage';
import moaConfirm from './pages/MoaConfirm';
import moaGenerate from './pages/MoaGenerate';
import pageNotFound from './pages/PageNotFound';

import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';
import testPage from './pages/TestPage';
import { steps, withoutNameSteps, instantLicenceSteps } from './steps';
import { CATEGORIES } from './utils/lookup';

interface IState {}

// eslint-disable-next-line
const smartpassData = getSmartpassData();

export const initialState: IState = {
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
          label: 'home',
          link: '/',
        },
        {
          label: 'businessLaunch',
          link: '/',
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
    ...instantLicence,
    ...welcome,
    ...login,
    ...notFound,
    ...upgradeInfo,
    ...questioner,
    ...moaConfirm,
    ...moaGenerate,
    ...errorPage,
    ...testPage,
    ...pageNotFound,
  ],
};

export default config;
