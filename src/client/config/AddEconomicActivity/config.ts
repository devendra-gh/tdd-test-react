import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';
import { IVariables } from '@tamm/app-composer';
import { addEconomicActivitySteps } from './steps';
import pages from './pages';
import { getVariables } from './services/bpm';

export const initialState: IVariables = {
  fileUploadData: {
    documents: {
      activitySupportingDoc: null,
    },
  },

  instanceId: '',
  businessKey: '',

  formData: {
    arabicActivityName: '',
    englishActivityName: '',
    arabicActivityDescription: '',
    englishActivityDescription: '',
    name: '',
    email: '',
    mobileNumber: '',
  },
  helperData: {
    isSubmitted: false,
  },
  newActivityApiData: {
    submittedOn: '',
    altId: '',
  },
  statusRecieved: false,
  stepsStatus: {},
  addEconomicActivitySteps,
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  appName: 'newActivityService',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '0.6',
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
