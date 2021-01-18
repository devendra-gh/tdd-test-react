import bpm from 'client/services/bpm';
import InvestorLanding from './pages/InvestorLanding';
import InvestorForm from './pages/InvestorForm';
import ServiceType from './pages/ServiceType';
import ErrorPage from './pages/Error';
import Success from './pages/Success';
import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';

interface IState {
  form: {};
  validation: {};
  submitRef: string;
  submitDate: string;
  documents: any;
  currentStep: string;
  steps: { name: string }[];
  stepsStatus: any;
}

const initialState: IState = {
  currentStep: '',
  steps: [
    { name: 'step.selectServie.label' },
    { name: 'step.servieDetails.label' },
    { name: 'step.viewStatus.label' },
  ],
  stepsStatus: {},
  form: {
    documents: {},
    userType: '1',
  },
  validation: {
    errors: {},
    startShowingErrors: false,
  },
  documents: {},
  submitRef: '',
  submitDate: '',
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '1.3',
  // default variables, for now title is used
  defaults: {
    title: 'manageYourBusiness',
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
          link: `${redirectUrl}`,
          linkTarget: '_self',
        },
        {
          label: 'digitalServices',
          link: `${redirectUrl}tamm-centers-services`,
          linkTarget: '_self',
        },
        {
          label: 'dedServices',
          link: `${redirectUrl}tamm-centers-services/department-of-economic-development`,
          linkTarget: '_self',
        },
      ],
    },
    state: {
      mapState: ['user', 'locale', 'title'],
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
    ...InvestorLanding,
    ...InvestorForm,
    ...ErrorPage,
    ...Success,
    ...ServiceType,
  ],
};

export default config;
