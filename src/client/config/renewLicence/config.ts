import bpm from 'client/services/bpm';
// import { getSmartpassData } from 'client/utils/appData';
import { IVariables } from '@tamm/app-composer';
import steps, {
  minimumSteps,
  FORM_STEP_2,
} from 'client/config/renewLicence/steps';
import pages from './pages';

// const smartpassData = getSmartpassData();

export const initialState: IVariables = {
  nocForm: {},
  fileUploadData: {
    documents: {
      thawtheeq: null,
      noc: null,
    },
  },
  form: {
    licenceNo: '',
    licenceExpiryDate: '',
    daysPendingForLicenceExpiry: null,
  },
  stepsStatus: {},
  steps,
  minimumSteps,
  instanceId: '',
  businessKey: '',
  reachedPayment: false, // 2 waiting pages toggled using this
  isTawtheeqRequired: true,
  licenceSubmitPage: FORM_STEP_2,
  paymentAmount: '0',
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  appName: 'renewLicence',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '1',
  // default variables, for now title is used
  defaults: {
    title: 'Renew Licence',
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
