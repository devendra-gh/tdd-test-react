import { IVariables } from '@tamm/app-composer';
import { lazy } from 'react';
import Hero from '@tamm/ui-lib-v2-hero';
import BaseLayout from '@tamm/ui-lib-v2-base-layout';
import SidebarLayout from '@tamm/ui-lib-v2-sidebar-layout';
import Header from '@tamm/ui-lib-v2-header';
import Footer from '@tamm/ui-lib-v2-footer';
import Symbol from 'client/components/workbench/main/Symbol';
import FormTemplate from 'client/components/workbench/main/FormTemplate';
import { CustomerSatisfaction } from 'client/components/CustomerSatisfaction';

const LOADING_COMPONENT_CACHE: any = {};

function preloadComponent(cacheKey: string, dynamicImportedModule: any): any {
  return Promise.resolve(dynamicImportedModule()).then(loadedComponent => {
    // console.log('CACHED COMPONENT', cacheKey, loadedComponent);
    LOADING_COMPONENT_CACHE[cacheKey] = loadedComponent.default;
    return loadedComponent;
  });
}

function getComponent(cacheKey: string, dynamicImportedModule: any): any {
  // console.log('CACHED ITEMS', Object.keys(cachedItems));
  if (LOADING_COMPONENT_CACHE[cacheKey]) {
    return { component: LOADING_COMPONENT_CACHE[cacheKey], preloaded: true };
  }

  return {
    component: lazy(() => preloadComponent(cacheKey, dynamicImportedModule)),
    preloaded: false,
  };
}

const dls: IVariables = {
  text: () =>
    getComponent('text', () =>
      import(
        /* webpackChunkName: "text" */ 'client/components/workbench/main/Typography'
      ),
    ),
  table: () =>
    getComponent('table', () =>
      import(
        /* webpackChunkName: "table" */ 'client/components/workbench/main/PreviewTable'
      ),
    ),
  map: () =>
    getComponent('map', () =>
      import(
        /* webpackChunkName: "map" */ 'client/components/workbench/main/PreviewMap'
      ),
    ),
  adgeServiceCsat: () =>
    getComponent('adgeServiceCsat', () =>
      import(
        /* webpackChunkName: "adge-service-csat" */ '@tamm/ui-lib-v2-adge-service-csat'
      ),
    ),
  accordion: () =>
    getComponent('accordion', () =>
      import(/* webpackChunkName: "accordion" */ '@tamm/ui-lib-v2-accordion'),
    ),
  alert: () =>
    getComponent('alert', () =>
      import(/* webpackChunkName: "alert" */ '@tamm/ui-lib-v2-alert'),
    ),
  basket: () =>
    getComponent('basket', () =>
      import(/* webpackChunkName: "basket" */ '@tamm/ui-lib-v2-basket'),
    ),
  breadcrumb: () =>
    getComponent('breadcrumb', () =>
      import(/* webpackChunkName: "breadcrumb" */ '@tamm/ui-lib-v2-breadcrumb'),
    ),
  businessActivities: () =>
    getComponent('businessActivities', () =>
      import(
        /* webpackChunkName: "business-activities" */ '@tamm/ui-lib-v2-business-activities'
      ),
    ),
  card: () =>
    getComponent('card', () =>
      import(/* webpackChunkName: "card" */ '@tamm/ui-lib-v2-card'),
    ),
  categoryList: () =>
    getComponent('categoryList', () =>
      import(
        /* webpackChunkName: "categoryList" */ 'client/components/workbench/main/CategoryList'
      ),
    ),
  checkboxGroup: () =>
    getComponent('checkboxGroup', () =>
      import(
        /* webpackChunkName: "checkbox-group" */ '@tamm/ui-lib-v2-checkbox-group'
      ),
    ),
  comparison: () =>
    getComponent('comparison', () =>
      import(/* webpackChunkName: "comparison" */ '@tamm/ui-lib-v2-comparison'),
    ),
  confirmationModal: () =>
    getComponent('confirmationModal', () =>
      import(
        /* webpackChunkName: "confirmation-modal" */ '@tamm/ui-lib-v2-confirmation-modal'
      ),
    ),
  customerSatisfaction: { preloaded: true, component: CustomerSatisfaction },
  datePicker: () =>
    getComponent('datePicker', () =>
      import(
        /* webpackChunkName: "date-picker" */ '@tamm/ui-lib-v2-date-picker'
      ),
    ),
  rangePicker: () =>
    getComponent('rangePicker', () =>
      import(
        /* webpackChunkName: "range-picker" */ 'client/components/workbench/main/RangePicker'
      ),
    ),
  drivingLicence: () =>
    getComponent('drivingLicence', () =>
      import(
        /* webpackChunkName: "driving-licence" */ '@tamm/ui-lib-v2-driving-licence'
      ),
    ),
  eventCard: () =>
    getComponent('eventCard', () =>
      import(/* webpackChunkName: "event-card" */ '@tamm/ui-lib-v2-event-card'),
    ),
  eligibility: () =>
    getComponent('eligibility', () =>
      import(
        /* webpackChunkName: "eligibility" */ '@tamm/ui-lib-v2-eligibility'
      ),
    ),
  fileUpload: () =>
    getComponent('fileUpload', () =>
      import(
        /* webpackChunkName: "file-upload" */ 'client/components/workbench/main/FileUpload'
      ),
    ),
  filter: () =>
    getComponent('filter', () =>
      import(/* webpackChunkName: "filter" */ '@tamm/ui-lib-v2-filter'),
    ),
  footer: { preloaded: true, component: Footer },
  gallery: () =>
    getComponent('gallery', () =>
      import(/* webpackChunkName: "gallery" */ '@tamm/ui-lib-v2-gallery'),
    ),
  globalCsatFeedback: () =>
    getComponent('globalCsatFeedback', () =>
      import(
        /* webpackChunkName: "global-csat-feedback" */ '@tamm/ui-lib-v2-global-csat-feedback'
      ),
    ),
  header: { preloaded: true, component: Header },
  helpfulBlock: () =>
    getComponent('helpfulBlock', () =>
      import(
        /* webpackChunkName: "helpful-block" */ '@tamm/ui-lib-v2-helpful-block'
      ),
    ),
  hero: { preloaded: true, component: Hero },
  highlightsSlider: () =>
    getComponent('highlightsSlider', () =>
      import(
        /* webpackChunkName: "highlights-slider" */ '@tamm/ui-lib-v2-highlights-slider'
      ),
    ),
  imageCard: () =>
    getComponent('imageCard', () =>
      import(/* webpackChunkName: "image-card" */ '@tamm/ui-lib-v2-image-card'),
    ),
  inputNumber: () =>
    getComponent('inputNumber', () =>
      import(
        /* webpackChunkName: "input-number" */ '@tamm/ui-lib-v2-input-number'
      ),
    ),
  inputTelephone: () =>
    getComponent('inputTelephone', () =>
      import(
        /* webpackChunkName: "input-telephone" */ '@tamm/ui-lib-v2-input-telephone'
      ),
    ),
  linkCard: () =>
    getComponent('linkCard', () =>
      import(/* webpackChunkName: "link-card" */ '@tamm/ui-lib-v2-link-card'),
    ),
  ineChart: () =>
    getComponent('lineChart', () =>
      import(/* webpackChunkName: "line-chart" */ '@tamm/ui-lib-v2-line-chart'),
    ),
  list: () =>
    getComponent('list', () =>
      import(/* webpackChunkName: "list" */ '@tamm/ui-lib-v2-list'),
    ),
  loginRequired: () =>
    getComponent('loginRequired', () =>
      import(
        /* webpackChunkName: "login-required" */ '@tamm/ui-lib-v2-login-required'
      ),
    ),
  modal: () =>
    getComponent('modal', () =>
      import(/* webpackChunkName: "modal" */ '@tamm/ui-lib-v2-modal'),
    ),
  notice: () =>
    getComponent('notice', () =>
      import(/* webpackChunkName: "notice" */ '@tamm/ui-lib-v2-notice'),
    ),
  pagination: () =>
    getComponent('pagination', () =>
      import(/* webpackChunkName: "pagination" */ '@tamm/ui-lib-v2-pagination'),
    ),
  process: () =>
    getComponent('process', () =>
      import(
        /* webpackChunkName: "process" */ 'client/components/workbench/main/Process'
      ),
    ),
  radioGroup: () =>
    getComponent('radioGroup', () =>
      import(
        /* webpackChunkName: "radio-group" */ '@tamm/ui-lib-v2-radio-group'
      ),
    ),
  rangeInput: () =>
    getComponent('rangeInput', () =>
      import(
        /* webpackChunkName: "range-input" */ '@tamm/ui-lib-v2-range-input'
      ),
    ),
  rangeSelect: () =>
    getComponent('rangeSelect', () =>
      import(
        /* webpackChunkName: "range-select" */ '@tamm/ui-lib-v2-range-select'
      ),
    ),
  relatedJourneyCard: () =>
    getComponent('relatedJourneyCard', () =>
      import(
        /* webpackChunkName: "related-journey-card" */ '@tamm/ui-lib-v2-related-journey-card'
      ),
    ),
  relevantEntity: () =>
    getComponent('relevantEntity', () =>
      import(
        /* webpackChunkName: "relevant-entity" */ '@tamm/ui-lib-v2-relevant-entity'
      ),
    ),
  'relevantEntity1-1-0': () =>
    getComponent('relevantEntity1-1-0', () =>
      import(
        /* webpackChunkName: "relevantEntity1-1-0" */ '@tamm/ui-lib-v2-relevant-entity-1-1-0'
      ),
    ),
  'relevantEntity2-0-0': () =>
    getComponent('relevantEntity2-0-0', () =>
      import(
        /* webpackChunkName: "relevantEntity2-0-0" */ 'client/components/workbench/main/RelevantEntity'
      ),
    ),
  relatedHighlight: () =>
    getComponent('relatedHighlight', () =>
      import(
        /* webpackChunkName: "related-highlight" */ '@tamm/ui-lib-v2-related-highlight'
      ),
    ),
  searchBox: () =>
    getComponent('searchBox', () =>
      import(/* webpackChunkName: "search-box" */ '@tamm/ui-lib-v2-search-box'),
    ),
  searchInput: () =>
    getComponent('searchInput', () =>
      import(
        /* webpackChunkName: "search-input" */ '@tamm/ui-lib-v2-search-input'
      ),
    ),
  slider: () =>
    getComponent('slider', () =>
      import(/* webpackChunkName: "slider" */ '@tamm/ui-lib-v2-slider'),
    ),
  smartPassButton: () =>
    getComponent('smartPassButton', () =>
      import(
        /* webpackChunkName: "smart-pass-button" */ '@tamm/ui-lib-v2-smart-pass-button'
      ),
    ),
  startLogin: () =>
    getComponent('startLogin', () =>
      import(
        /* webpackChunkName: "start-login" */ '@tamm/ui-lib-v2-start-login'
      ),
    ),
  'startLogin6-0-0': () =>
    getComponent('startLogin6-0-0', () =>
      import(
        /* webpackChunkName: "start-login6-0-0" */ '@tamm/ui-lib-v2-start-login-6-0-0'
      ),
    ),
  stepTracker: () =>
    getComponent('stepTracker', () =>
      import(
        /* webpackChunkName: "step-tracker" */ '@tamm/ui-lib-v2-step-tracker'
      ),
    ),
  status: () =>
    getComponent('status', () =>
      import(/* webpackChunkName: "status" */ '@tamm/ui-lib-v2-status'),
    ),
  tabs: () =>
    getComponent('tabs', () =>
      import(/* webpackChunkName: "tabs" */ '@tamm/ui-lib-v2-tabs'),
    ),
  testimonial: () =>
    getComponent('testimonial', () =>
      import(
        /* webpackChunkName: "testimonial" */ '@tamm/ui-lib-v2-testimonial'
      ),
    ),
  treeMapChart: () =>
    getComponent('treeMapChart', () =>
      import(
        /* webpackChunkName: "tree-map-chart" */ '@tamm/ui-lib-v2-tree-map-chart'
      ),
    ),
  toggleGroup: () =>
    getComponent('toggleGroup', () =>
      import(
        /* webpackChunkName: "toggle-group" */ '@tamm/ui-lib-v2-toggle-group'
      ),
    ),
  total: () =>
    getComponent('total', () =>
      import(/* webpackChunkName: "total" */ '@tamm/ui-lib-v2-total'),
    ),
  uaePassButton: () =>
    getComponent('uaePassButton', () =>
      import(
        /* webpackChunkName: "uaepass-button" */ '@tamm/ui-lib-v2-uaepass-button'
      ),
    ),
  badge: () =>
    getComponent('badge', () =>
      import(/* webpackChunkName: "badge" */ '@tamm/ui-lib-v2-badge'),
    ),
  button: () =>
    getComponent('button', () =>
      import(/* webpackChunkName: "button" */ '@tamm/ui-lib-v2-button'),
    ),
  checkbox: () =>
    getComponent('checkbox', () =>
      import(/* webpackChunkName: "checkbox" */ '@tamm/ui-lib-v2-checkbox'),
    ),
  dropdown: () =>
    getComponent('dropdown', () =>
      import(/* webpackChunkName: "dropdown" */ '@tamm/ui-lib-v2-dropdown'),
    ),
  icon: () =>
    getComponent('icon', () =>
      import(/* webpackChunkName: "icon" */ '@tamm/ui-lib-v2-icon'),
    ),
  input: () =>
    getComponent('input', () =>
      import(/* webpackChunkName: "input" */ '@tamm/ui-lib-v2-input'),
    ),

  inputPassword: () =>
    getComponent('inputPassword', () =>
      import(
        /* webpackChunkName: "input-password" */ '@tamm/ui-lib-v2-input-password'
      ),
    ),
  label: () =>
    getComponent('label', () =>
      import(/* webpackChunkName: "label" */ '@tamm/ui-lib-v2-label'),
    ),
  link: () =>
    getComponent('link', () =>
      import(/* webpackChunkName: "link" */ '@tamm/ui-lib-v2-link'),
    ),
  rating: () =>
    getComponent('rating', () =>
      import(/* webpackChunkName: "rating" */ '@tamm/ui-lib-v2-rating'),
    ),
  select: () =>
    getComponent('select', () =>
      import(/* webpackChunkName: "select" */ '@tamm/ui-lib-v2-select'),
    ),
  spinner: () =>
    getComponent('spinner', () =>
      import(/* webpackChunkName: "spinner" */ '@tamm/ui-lib-v2-spinner'),
    ),
  switcher: () =>
    getComponent('switcher', () =>
      import(/* webpackChunkName: "switcher" */ '@tamm/ui-lib-v2-switcher'),
    ),
  stickySidebar: () =>
    getComponent('stickySidebar', () =>
      import(
        /* webpackChunkName: "sticky-sidebar" */ 'client/components/workbench/main/StickySidebar'
      ),
    ),
  tag: () =>
    getComponent('tag', () =>
      import(/* webpackChunkName: "tag" */ '@tamm/ui-lib-v2-tag'),
    ),
  textArea: () =>
    getComponent('textArea', () =>
      import(/* webpackChunkName: "text-area" */ '@tamm/ui-lib-v2-text-area'),
    ),
  timePicker: () =>
    getComponent('timePicker', () =>
      import(
        /* webpackChunkName: "time-picker" */ '@tamm/ui-lib-v2-time-picker'
      ),
    ),
  toggle: () =>
    getComponent('toggle', () =>
      import(/* webpackChunkName: "toggle" */ '@tamm/ui-lib-v2-toggle'),
    ),
  tooltip: () =>
    getComponent('tooltip', () =>
      import(/* webpackChunkName: "tooltip" */ '@tamm/ui-lib-v2-tooltip'),
    ),
  iterator: () =>
    getComponent('iterator', () =>
      import(
        /* webpackChunkName: "tooltip" */ 'client/components/workbench/main/Iterator'
      ),
    ),
  symbol: { preloaded: true, component: Symbol },
  form: { preloaded: true, component: FormTemplate },
  sidebarTemplate: () =>
    getComponent('sidebarTemplate', () =>
      import(
        /* webpackChunkName: "sidebar-template" */ '@tamm/ui-lib-v2-sidebar-template'
      ),
    ),
  serviceTemplate: () =>
    getComponent('', () =>
      import(
        /* webpackChunkName: "service-template" */ '@tamm/ui-lib-v2-service-template'
      ),
    ),
  requiredDocuments: () =>
    getComponent('requiredDocuments', () =>
      import(
        /* webpackChunkName: "required-documents" */ 'client/components/workbench/main/RequiredDocuments'
      ),
    ),
  socialSharing: () =>
    getComponent('socialSharing', () =>
      import(
        /* webpackChunkName: "social-sharing" */ '@tamm/ui-lib-v2-social-sharing'
      ),
    ),
  contentHighlight: () =>
    getComponent('contentHighlight', () =>
      import(
        /* webpackChunkName: "content-highlight" */ '@tamm/ui-lib-v2-content-highlight'
      ),
    ),
  newsListingItem: () =>
    getComponent('newsListingItem', () =>
      import(
        /* webpackChunkName: "news-listing-item" */ '@tamm/ui-lib-v2-news-listing-item'
      ),
    ),
  pressReleaseItem: () =>
    getComponent('pressReleaseItem', () =>
      import(
        /* webpackChunkName: "press-release-item" */ '@tamm/ui-lib-v2-press-release-item'
      ),
    ),
  highlightLoader: () =>
    getComponent('highlightLoader', () =>
      import(
        /* webpackChunkName: "highlight-loader" */ '@tamm/ui-lib-v2-highlight-loader'
      ),
    ),
  imageSlider: () =>
    getComponent('imageSlider', () =>
      import(
        /* webpackChunkName: "image-slider" */ '@tamm/ui-lib-v2-image-slider'
      ),
    ),
  checkboxDataCard: () =>
    getComponent('checkboxDataCard', () =>
      import(
        /* webpackChunkName: "checkbox-data-card" */ '@tamm/ui-lib-v2-checkbox-data-card'
      ),
    ),
  questionnaire: () =>
    getComponent('questionnaire', () =>
      import(
        /* webpackChunkName: "checkbox-data-card" */ '@tamm/ui-lib-v2-questionnaire'
      ),
    ),
};

const dlsLayouts: IVariables = {
  base: BaseLayout,
  sidebar: SidebarLayout,
  sidebarLeft: SidebarLayout,
};

export { dlsLayouts };

export default dls;
