import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import bpm from 'client/services/bpm';
import pages from './pages';
import steps from './steps';

import './override.less';

interface IState {
  form: {};
  validation: {};
  businessLicenseProcedureSteps: {};
  formCompanyDetails: {};
  formSelectActivity: {};
  resultState: {};
}

export const initialState: IState = {
  businessLicenseProcedureSteps: steps,
  form: {
    documents: {},
  },
  validation: {
    errors: {},
    startShowingErrors: false,
  },
  formCompanyDetails: {
    locations: [
      {
        locationEn: 'Abu Dhabi',
        locationAr: 'أبوظبي',
      },
    ],
    legalForms: [],
    loading: true,
    loadingCategories: true,
    showError: false,
    location: 'Abu Dhabi',
    legalForm: '',
    legalFormAr: '',
  },
  formSelectActivity: {
    activitiesNonPaginated: [],
    activitiesCurrentPage: 1,
    activitiesRecInPage: 10,
    activitiesTotalCount: 0,
    activities: [],
    alertText: '',
    alertStatus: '',
    showTable: false,
    loading: true,
    showError: false,
    showCategories: false,
    inputType: 'CATEGORY',
    searchText: '',
    category: '',
    subCategory: '',
    subCategories: [],
    categories: [],
    activity: '',
  },
  resultState: {
    selectedActivity: {},
    loading: true,
    showError: false,
    fees: [],
    requirements: [],
  },
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  appName: 'businessLicenceProcedure',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '1.2',
  // default variables, for now title is used
  defaults: {
    title: 'Get Trade License',
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
  pages,
};

export default config;
