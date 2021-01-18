// import { getSmartpassData } from 'client/utils/appData';
import steps, { minimumSteps } from './steps';
import pages from './pages';
import getVariables from './services/bpm';

interface IState {}

// eslint-disable-next-line
// const smartpassData = getSmartpassData();
export const formInitialState = {
  transactionNumber: '',
  showTradeName: false,
  businessNameEng: '',
  businessNameArb: '',
  capId: '',
  applicationStatusCode: '',
  applicationStatus: '',
  submittedDate: '',
  waitingMsg: {},
  feesDetails: {},
  totalFees: 0.0,
  applicationFeesResult: '',
};
const initialState: IState = {
  form: { ...formInitialState },
  showHelpFulBlock: false,
  showSpinner: false,
  showLoader: false,
  showError: false,
  buttonDisabled: true,
  showRelatedJourneyCard: false,
  currentStep: '',
  stepsStatus: {},
  steps,
  minimumSteps,
};

const config = {
  appName: 'payApplicationFees',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '1',
  // default variables, for now title is used
  defaults: {
    title: 'Pay Application Fees',
  },
  getVariables,
  // initial redux state, you can configure per your project need,
  initialState,
  header: {
    template: 'header',
    props: {
      aspectsOfLifeType: 'business-management',
      breadcrumbs: [
        // {
        //   label: 'home',
        //   link: '/',
        // },
        // {
        //   label: 'businessLaunch',
        //   link: '#',
        // },
        {
          label: 'breadcrumb.level0.title',
          link: 'https://www.tamm.abudhabi/',
        },
        {
          label: 'breadcrumb.level1.title',
          link: 'https://www.tamm.abudhabi/tamm-centers-services',
        },
        {
          label: 'breadcrumb.level2.title',
          link:
            'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
        },
      ],
    },
    state: {
      mapState: ['user', 'locale', 'title', 'form', 'minimumSteps'],
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
  pages,
};

export default config;
