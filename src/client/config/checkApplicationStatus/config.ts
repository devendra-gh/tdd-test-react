import bpm from 'client/services/bpm';
// import { getSmartpassData } from 'client/utils/appData';
import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';
import { checkApplicationSteps } from './steps';
import pages from './pages';

interface IState {}

// const smartpassData = getSmartpassData();

const initialState: IState = {
  businessKey: '',
  instanceId: '',
  formApplicationNumber: {
    applicationNumber: '',
    isSubmitted: false,
  },
  applicationStatusResponse: {},
  statusRecieved: false,
  stepsStatus: {},
  checkApplicationSteps,
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  appName: 'checkApplicationStatus',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '0.6',
  // default variables, for now title is used
  defaults: {
    title: 'default.title',
  },
  getVariables: bpm.getVariables,
  // initial redux state, you can configure per your project need,
  initialState,
  header: {
    template: 'header',
    props: {
      aspectsOfLifeType: 'manage_business',
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
      mapState: ['user', 'locale', 'title'],
      mapDispatch: ['user', 'locale'],
    },
  },
  footer: {
    template: 'footer',
    state: {
      mapState: ['user'],
    },
  },
  // pages of the application
  pages,
};

export default config;
