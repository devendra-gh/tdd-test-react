import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import pages from './pages';

interface IState {}

export const initialState: IVariables = {
  itemId: null,
  subTitle: '',
  currentGoods: [],
  goodsList: {
    selectedGood: '',
    loadedCategoriesLocale: 'en',
    nonPaginatedData: [],
    data: [],
    categories: [],
    alertText: '',
    alertStatus: '',
    searchBy: 'product',
    selectedCategory: '',
    searchText: '',
    currentPage: 1,
    totalCount: null,
    recInPage: 10,
    batchDate: null,
    showTable: false,
    showSpinner: false,
    showAlert: false,
    showCategories: false,
  },
  showSpinner: false,
  retailers: [
    { value: '1', label: 'KM TRADING', checked: false },
    { value: '2', label: 'LULU', checked: false },
    { value: '3', label: 'SPAR', checked: false },
  ],
  locations: [
    { value: '1', label: 'Al Ain', checked: false },
    { value: '2', label: 'Abu Dhabi', checked: false },
    { value: '3', label: 'Sharjah', checked: false },
  ],
};

const redirectUrl =
  window.location.href.indexOf('stage.tamm.abudhabi') !== -1
    ? 'https://stage.tamm.abudhabi/'
    : 'https://www.tamm.abudhabi/';

const config = {
  appName: 'consumerGoodPrices',
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '1',
  // default variables, for now title is used
  defaults: {
    title: 'Consumer Good Prices',
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
