import pages from './pages';
import tradeNameSearchSteps from './steps';
import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
// import './override.less';
interface IState {}
const initialState: IState = {
  businessKey: '',
  instanceId: '',
  tradeName: {
    currentPage: 1,
    totalRecords: 0,
    recInPage: 10,
    data: {},
    value: '',
    enName: '',
    arName: '',
  },

  displayErrorFlag: false,
  displaySpinner: false,
  displayTable: false,
  showNotFoundAlert: false,
  showErrorAlert: false,
  stepsStatus: {},
  tradeNameSearchSteps,
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  // default variables, for now title is used
  initialState,
  version: 'v0.1',
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
    fromProcessState: {},
    state: {
      mapState: ['user', 'locale', 'title', 'pageTitle', 'serviceType'],
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
