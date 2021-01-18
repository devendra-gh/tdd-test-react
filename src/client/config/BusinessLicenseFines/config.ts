import { getVariables } from './services/bpm';
import businessLicenseFinesPages from './pages';

interface IState {}

const initialState: IState = {
  businessKey: '',
  instanceId: '',
  formBusinessLicenceFine: {
    licenceNo: '',
    isLoading: false,
  },
  stepsStatus: {},
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
    title: 'default.title',
  },
  getVariables,
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
  pages: [...businessLicenseFinesPages],
};

export default config;
