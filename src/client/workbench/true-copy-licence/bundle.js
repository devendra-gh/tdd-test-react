export default (/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _pages_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _pages_select_licence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _pages_contact_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _pages_application_in_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _pages_payment_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _pages_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _pages_payment_failed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _pages_application_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _pages_went_wrong__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _pages_no_information__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27);
/* harmony import */ var _pages_no_active_licence__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29);
/* harmony import */ var _pages_continue_process__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var _pages_account_upgrade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33);
/* harmony import */ var _localization_en__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
/* harmony import */ var _localization_ar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36);
/* harmony import */ var _symbols_LRdpV5hJYYHXEeQXvW572__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37);
/* harmony import */ var _symbols_SpZNRSS1hcBXpPT30yok2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(39);
/* harmony import */ var _symbols_9D0MQ6LCSJOtHaHem5NP5__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40);



















const config = {
    "version": "705",
    "appName": "Adu-business-SAS-TrueEconomyLicence- DROP 1",
    "defaults": {
        "title": "Adu-business-SAS-TrueEconomyLicence- DROP 1"
    },
    "initialState": {
        "currentStepIndex": 0,
        "currentSubStepIndex": 0,
        "steps": [
            {
              id: 'Select Licence',
              label: 'Select Licence',
              link: '',
              status: '',
            },
            {
              id: 'Enter contact details',
              label: 'Enter contact details',
              link: '',
              status: '',
            },
            {
              id: 'Make payment',
              label: 'Make payment',
              link: '',
              status: '',
            },
            {
              id: 'Download licence',
              label: 'Download licence',
              link: '',
              status: '',
            },
          ],
          licenceListColumns: [
            {
              id: 'licenceNumber',
              title: 'Licence Number',
            },
            {
              id: 'companyName',
              title: 'Company Name',
            },
          ],
          licenceListRows: [],
          paymentTag: [],
          paymentTableColumns: [
            {
              id: 'description',
              title: 'Description',
            },
            {
              id: 'price',
              title: 'Price',
            },
          ],
          paymentTableRows: [],
          actualLicenceList: [],
          paymentTotal: 0,
          contactDetailsName: '',
          contactDetailsMobile: '',
          contactDetailsEmail: '',
          contactDetailsFlag: true,
          nameValidateStatus: '',
          nameValidateHelp: '',
          mobileValidateStatus: '',
          mobileValidateHelp: '',
          emailValidateStatus: '',
          emailValidateHelp: '',
          licenceSearch: '',
          licenceNumber: '',
          licenceNoError: false,
          applicationIssuedDescription: '',
          expandedStepIndexes: [],
          totalLicenceList: 0,
          currentIndexLicenceList: 0,
          businessKey: '',
          instanceId: '',
          camundaMessage: '',
          showSideBar: false,
          pageLoader: false,
          currentPageSize: 0,
          paymentURL: '',
          smartPassURL: '',
          uaePassURL: '',
          adgeName: 'DED',
          serviceCode: 'AD_DED_023',
          productName: 'NOP',
          paymentLinkString: '',
          loading: false,
          alertTriangle: 'AlertTriangle',
          waitingApprovalDescription: '',
        },
        persistStates: [],
        symbols: [
          ..._symbols_LRdpV5hJYYHXEeQXvW572__WEBPACK_IMPORTED_MODULE_16__[
            'default'
          ],
          ..._symbols_SpZNRSS1hcBXpPT30yok2__WEBPACK_IMPORTED_MODULE_17__[
            'default'
          ],
          ..._symbols_9D0MQ6LCSJOtHaHem5NP5__WEBPACK_IMPORTED_MODULE_18__[
            'default'
          ],
        ],
        dictionary: {
          en: _localization_en__WEBPACK_IMPORTED_MODULE_14__['default'],
          ar: _localization_ar__WEBPACK_IMPORTED_MODULE_15__['default'],
        },
        skipFetchState: [
          '/login',
          '/select-licence',
          '/application-error',
          '/continue-process',
          '/account-upgrade',
          '/no-active-licence',
        ],
        pages: [
          ..._pages_login__WEBPACK_IMPORTED_MODULE_0__['default'],
          ..._pages_start__WEBPACK_IMPORTED_MODULE_1__['default'],
          ..._pages_select_licence__WEBPACK_IMPORTED_MODULE_2__['default'],
          ..._pages_contact_details__WEBPACK_IMPORTED_MODULE_3__['default'],
          ..._pages_application_in_progress__WEBPACK_IMPORTED_MODULE_4__[
            'default'
          ],
          ..._pages_payment_summary__WEBPACK_IMPORTED_MODULE_5__['default'],
          ..._pages_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          ..._pages_payment_failed__WEBPACK_IMPORTED_MODULE_7__['default'],
          ..._pages_application_success__WEBPACK_IMPORTED_MODULE_8__['default'],
          ..._pages_went_wrong__WEBPACK_IMPORTED_MODULE_9__['default'],
          ..._pages_no_information__WEBPACK_IMPORTED_MODULE_10__['default'],
          ..._pages_no_active_licence__WEBPACK_IMPORTED_MODULE_11__['default'],
          ..._pages_continue_process__WEBPACK_IMPORTED_MODULE_12__['default'],
          ..._pages_account_upgrade__WEBPACK_IMPORTED_MODULE_13__['default'],
        ],
        states: {
          initialState: {
            currentStepIndex: 0,
            currentSubStepIndex: 0,
            steps: [
              {
                id: 'Select Licence',
                label: 'Select Licence',
                link: '',
                status: '',
              },
              {
                id: 'Enter contact details',
                label: 'Enter contact details',
                link: '',
                status: '',
              },
              {
                id: 'Make payment',
                label: 'Make payment',
                link: '',
                status: '',
              },
              {
                id: 'Download licence',
                label: 'Download licence',
                link: '',
                status: '',
              },
            ],
            licenceListColumns: [
              {
                id: 'licenceNumber',
                title: 'Licence Number',
              },
              {
                id: 'companyName',
                title: 'Company Name',
              },
            ],
            licenceListRows: [],
            paymentTag: [],
            paymentTableColumns: [
              {
                id: 'description',
                title: 'Description',
              },
              {
                id: 'price',
                title: 'Price',
              },
            ],
            paymentTableRows: [],
            actualLicenceList: [],
            paymentTotal: 0,
            contactDetailsName: '',
            contactDetailsMobile: '',
            contactDetailsEmail: '',
            contactDetailsFlag: true,
            nameValidateStatus: '',
            nameValidateHelp: '',
            mobileValidateStatus: '',
            mobileValidateHelp: '',
            emailValidateStatus: '',
            emailValidateHelp: '',
            licenceSearch: '',
            licenceNumber: '',
            licenceNoError: false,
            applicationIssuedDescription: '',
            expandedStepIndexes: [],
            totalLicenceList: 0,
            currentIndexLicenceList: 0,
            businessKey: '',
            instanceId: '',
            camundaMessage: '',
            showSideBar: false,
            pageLoader: false,
            currentPageSize: 0,
            paymentURL: '',
            smartPassURL: '',
            uaePassURL: '',
            adgeName: 'DED',
            serviceCode: 'AD_DED_023',
            productName: 'NOP',
            paymentLinkString: '',
            loading: false,
            alertTriangle: 'AlertTriangle',
            waitingApprovalDescription: '',
          },
          persistStates: [],
        },
        hero: [
          {
            type: 'symbol',
            props: {
              symbol: 'SpZNRSS1hcBXpPT30yok2',
            },
            state: {
              mapState: [],
              mapDispatch: [],
            },
          },
        ],
        sidebar: [
          {
            type: 'symbol',
            props: {
              symbol: 'LRdpV5hJYYHXEeQXvW572',
            },
          },
        ],
      };
      /* harmony default export */ __webpack_exports__['default'] = config;

      /***/
    },
    /* 1 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        2,
      );

      const pageConfig = [
        {
          title: 'Login',
          pageId: 'Q4iHeKJPFiSl-4Er3UQtJ',
          expanded: true,
          path: '/login',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'LhCD9_RpUj9GtokIILohE',
                type: 'text',
                props: {
                  variant: 'h5',
                  content: "i18n('pleaseLogIn')",
                  displayAsHtml: true,
                  space: {
                    marginBottom: 'lg',
                  },
                },
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'sgYt4LbrltEI96hHwN0CJ',
                type: 'loginRequired',
                props: {
                  i18n: '',
                  smartPassProps: {
                    link: '${state.smartPassURL}',
                    linkTarget: '_self',
                  },
                  uaePassProps: {
                    link: '${state.uaePassURL}',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'smartPassURL', 'uaePassURL'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          requires: [],
          customPath: true,
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'smartPassURL',
              'uaePassURL',
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'smartPassURL',
              'uaePassURL',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 2 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'onPageInit',
        function () {
          return onPageInit;
        },
      );
      async function init(props) {
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
        let basePath;
        let smartPassLoginType;
        let uaePassLoginType;
        if (window.location.hostname.indexOf('journeys-stg.tamm') !== -1) {
          basePath = '/journeys/journey-template/';
          smartPassLoginType = 'demo-login';
          uaePassLoginType = 'demo-login?provider=uaepass';
        } else {
          basePath = `/services/business/ded/`;
          smartPassLoginType = 'login';
          uaePassLoginType = 'login?provider=uaepass';
        }
        let protocol = location.protocol;
        const slashes = protocol.concat('//');
        const host = slashes.concat(window.location.hostname);
        props.actions.smartPassURL.update(
          `${host}${basePath}api/smartpass/${smartPassLoginType}`,
        );
        props.actions.uaePassURL.update(
          `${host}${basePath}/api/smartpass/${uaePassLoginType}`,
        );
        if (props.loggedIn) {
          props.history.push('/');
        }
      }
      async function onPageInit(props) {
        if (props.loggedIn) {
          props.history.push('/');
        }
      }

      /***/
    },
    /* 3 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );

      const pageConfig = [
        {
          title: 'Start',
          pageId: 'JAD3mysZm7Afox_l-3dJv',
          path: '/',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'ctM7U3uf7wr8TKAu1yJmB',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('start')",
                  type: 'button',
                  uiType: 'primary',
                  disabled: false,
                  'aria-label': 'button',
                  size: 'default',
                  icon: null,
                  alignIcon: 'end',
                  withArrow: false,
                  active: false,
                  hidden: false,
                  iconTooltip: '',
                  applyAutoWidth: false,
                  onClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_onClick'],
                  space: {
                    marginBottom: 'xl',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'history'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          customPath: true,
          requires: [],
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
            ],
            mapDispatch: ['showSideBar'],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 4 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_onClick',
        function () {
          return f1_onClick;
        },
      );
      async function init(props) {
        props.actions.showSideBar.update(false);
        if (props.loggedIn) {
          props.history.push('/select-licence');
        } else {
          props.history.push('/login');
        }
      }
      async function f1_onClick(props) {
        props.history.push('/select-licence');
      }

      /***/
    },
    /* 5 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        6,
      );
      /* harmony import */ var _sharedFunctions_customRequires__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        10,
      );

      const pageConfig = [
        {
          title: 'Select Licence',
          pageId: 'R3Ao6kbjaGbo0UOutNUNI',
          expanded: true,
          path: '/select-licence',
          template: 'custom',
          layout: 'sidebar',
          props: {
            definitions: [
              {
                componentId: 'wazORLhsQWztoudr46j32',
                type: 'text',
                props: {
                  variant: 'h3',
                  content: "i18n('selectLicenceTitle')",
                  displayAsHtml: false,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'qjrO5xn-xoe-YBGwuDmJr',
                type: 'text',
                props: {
                  variant: 'p',
                  content: "i18n('selectLicenceDescription')",
                  displayAsHtml: false,
                  space: {
                    marginBottom: 'lg',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'i9a465fr2E-sER3mLIcbM',
                type: 'table',
                props: {
                  size: 'default',
                  selectable: true,
                  clickable: false,
                  columns: '${state.licenceListColumns}',
                  items: '${state.licenceListRows}',
                  title: "i18n('selectLicenceTableTitle')",
                  isSingleSelect: true,
                  space: {
                    marginTop: 'md',
                  },
                  onSelectionChange:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'call_f1_onSelectionChange'
                    ],
                  searchable: true,
                  total: '${state.totalLicenceList}',
                  currPage: '${state.currentIndexLicenceList}',
                  pageSize: '${state.currentPageSize}',
                  onSearch:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['call_f2_onSearch'],
                  onPageResize:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f3_onPageResize'],
                  search: '${state.licenceSearch}',
                  onClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f4_onClick'],
                  onPageTurn:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'call_f5_onPageTurn'
                    ],
                  editable: false,
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'actions',
                  'analytics',
                  'licenceListRows',
                  'actualLicenceList',
                  'licenceNumber',
                  'licenceSearch',
                  'licenceListColumns',
                  'totalLicenceList',
                  'currentIndexLicenceList',
                  'currentPageSize',
                  'actions',
                ],
              },
              {
                componentId: 'Wrw9rb3NhrIEmixk9_lch',
                type: 'alert',
                props: {
                  status: 'error',
                  message: "i18n('errorLicenceNotSelected')",
                  onClose: null,
                  space: {
                    marginBottom: 'sm',
                    marginTop: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f6_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'licenceNoError', 'liceneNo'],
              },
              {
                componentId: 'o4BErzPdP7zwW96T6aNpG',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginBottom: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f7_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: '2KRRzrGn5waEacvl7WjYw',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginTop: 'lg',
                    marginBottom: 'xl',
                  },
                  classNames: 'button-wrapper',
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'z6wH36UdObAofAaUveuZ_',
                    type: 'button',
                    props: {
                      label: "i18n('globalNext')",
                      type: 'button',
                      uiType: 'primary',
                      disabled: false,
                      'aria-label': "i18n('globalNext')",
                      size: 'default',
                      icon: null,
                      alignIcon: 'end',
                      withArrow: true,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f8_onClick'],
                      space: {
                        marginRight: 'md',
                      },
                    },
                    columnIndex: 1,
                    layout: 'base',
                    parentComponentId: 'kAAzK8MrdKtX-phVmKE29',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'history',
                      'actions',
                      'bpm',
                      'licenceNumber',
                      'actions',
                    ],
                  },
                  {
                    componentId: '8JUMSCEIQKs0CTOqjpNcC',
                    type: 'link',
                    props: {
                      href: '',
                      children: null,
                      uiType: 'text',
                      disabled: false,
                      tammHref: '/www.tamm.abudhabi/',
                      className: '',
                      label: "i18n('globalCancel')",
                      space: {
                        marginTop: 'sm',
                        marginRight: 'md',
                      },
                      'aria-label': "i18n('globalCancel')",
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f9_onClick'],
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale', 'history'],
                  },
                ],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          requires: [
            {
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
            {
              type: 'REQUIRES_CUSTOM',
              redirectTo: '/login',
              codeId: '1593517133758',
              test:
                _sharedFunctions_customRequires__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
            },
          ],
          customPath: true,
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'licenceListRows',
              'actualLicenceList',
              'licenceNumber',
              'licenceSearch',
              'licenceListColumns',
              'totalLicenceList',
              'currentIndexLicenceList',
              'currentPageSize',
              'licenceNoError',
              'liceneNo',
              'camundaMessage',
            ],
            mapDispatch: [
              'showSideBar',
              'currentStepIndex',
              'loading',
              'licenceNumber',
              'businessKey',
              'licenceSearch',
              'instanceId',
              'camundaMessage',
              'licenceNoError',
              'expandedStepIndexes',
              'steps',
              'actualLicenceList',
              'currentPageSize',
              'licenceListRows',
              'currentIndexLicenceList',
              'totalLicenceList',
              'licenceListColumns',
              'licenceNo',
              'pageLoader',
            ],
            "mapDispatch": [
                "showSideBar",
                "currentStepIndex",
                "loading",
                "licenceNumber",
                "businessKey",
                "licenceSearch",
                "instanceId",
                "camundaMessage",
                "licenceNoError",
                "expandedStepIndexes",
                "steps",
                "actualLicenceList",
                "currentPageSize",
                "licenceListRows",
                "currentIndexLicenceList",
                "totalLicenceList",
                "licenceListColumns",
                "licenceNo",
                "pageLoader"
            ]
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;


async function init(props) {
    props.actions.showSideBar.update(true);
    props.actions.currentStepIndex.update(0);
    props.actions.loading.update(false);
    props.actions.licenceNumber.update('');
    props.actions.businessKey.update('');
    props.actions.licenceSearch.update('');
    props.actions.instanceId.update('');
    props.actions.camundaMessage.update('');
    props.actions.licenceNoError.update('');
    props.actions.expandedStepIndexes.update([]);
    const cStep = { id: 'step_selectLicence', status: '' };
    const cSubStep = { id: '', status: '' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__["getSteps"])(props.i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    // props.actions.actualLicenceList.update('');
    // props.actions.currentPageSize.update('');
    // props.actions.licenceListRows.update('');
    // props.actions.currentIndexLicenceList.update('');
    // props.actions.totalLicenceList.update('');
    // props.actions.licenceListColumns.update('');
    // props.actions.camundaMessage.update('');
}
async function onPageInit(props) {
    if (props.user &&
        (props.user.Type === 'SOP3' ||
            (props.user.provider === 'uaepass' && props.user.Type === 'SOP2'))) {
        const data = await Object(_sharedFunctions_services__WEBPACK_IMPORTED_MODULE_2__["getLicenceList"])(props);
        if (data.length === 0) {
            props.history.push('/no-active-licence');
        }
        props.actions.actualLicenceList.update(data);
        props.actions.currentPageSize.update(10);
        const filteredData = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["filteredLicenceList"])(data, props.locale, props.licenceSearch || '', 1, props.actions.totalLicenceList, props.licenceNumber, props.actions.currentPageSize);
        props.actions.licenceListRows.update(filteredData);
        props.actions.currentIndexLicenceList.update(1);
        props.actions.totalLicenceList.update(data.length);
        props.actions.camundaMessage.update('');
        const tableHeaders = [
            {
              id: 'licenceNumber',
              title: props.i18n('selectLicenceLicenceColumn'),
              sortable: true,
            },
            {
              id: 'companyName',
              title: props.i18n('selectLicenceCompanyColumn'),
              sortable: true,
            },
          ];
          props.actions.licenceListColumns.update(tableHeaders);
        }
      }
      function call_f1_onSelectionChange(props) {
        return value => {
          props.actions.licenceNumber.update(value[0] || '');
          props.actions.licenceNoError.update(false);
          const updated_items = props.licenceListRows.map(item => ({
            ...item,
            selected: !!value.find((id) => item._id == id),
        }));
        props.actions.licenceListRows.update(updated_items);
    };
}
function call_f2_onSearch(props) {
    return (value) => {
        props.actions.licenceSearch.update(value);
        const pagedItems = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["filteredLicenceList"])(props.actualLicenceList, props.locale, value, 1, props.actions.totalLicenceList, props.licenceNumber, props.actions.currentPageSize);
        props.actions.licenceListRows.update(pagedItems);
        props.actions.currentIndexLicenceList.update(1);
        // props.actions.licenceNo.update('');
    };
}
async function f3_onPageResize(props) {
}
async function f4_onClick(props) {
}
function call_f5_onPageTurn(props) {
    return (pageNumber) => {
        const pagedItems = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["filteredLicenceList"])(props.actualLicenceList, props.locale, props.licenceSearch, pageNumber, props.actions.totalLicenceList, props.licenceNumber, props.actions.currentPageSize);
        props.actions.licenceListRows.update(pagedItems);
        props.actions.currentIndexLicenceList.update(pageNumber);
        // props.actions.totalLicenceList.update(data.length);
        props.actions.licenceNumber.update('');
    };
}
function f6_visible(props) {
    return !!props.licenceNoError && !props.liceneNo;
}
function f7_visible(props) {
    return props.camundaMessage ? true : false;
}
async function f8_onClick(props) {
    props.actions.licenceNoError.update(false);
    // props.actions.pageLoader.update(true);
    if (props.licenceNumber) {
        // const data = await props.bpm.startProcess({
        //   informationFound: 'yes',
        //   successSubmission: 'yes',
        //   successPayment: 'yes',
        // });
        // if (data.success && data.data && data.data.businessKey && data.data.id) {
        //   props.actions.instanceId.update(data.data.id);
        //   props.actions.businessKey.update(data.data.businessKey);
        // }
        // props.actions.pageLoader.update(false);
        // returnCamundaMessage(data, props);
        props.actions.licenceSearch.update('');
        props.actions.currentPageSize.update(10);
        props.history.push('/application-submit');
    }
    else {
        // props.actions.pageLoader.update(false);
        props.actions.licenceNoError.update(true);
    }
}
async function f9_onClick(props) {
    props.history.push('/');
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredLicenceList", function() { return filteredLicenceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFromTimeStamp", function() { return getDateFromTimeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnCamundaMessage", function() { return returnCamundaMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardUrl", function() { return getDashboardUrl; });
const getDateFromTimeStamp = (timestamp, locale) => {
    const date = new Date(timestamp);
    const monthsArr = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const monthsArabic = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
    ];
    const year = date.getFullYear(); // Year
    const month = monthsArr[date.getMonth()]; // Month
    const monthArabic = monthsArabic[date.getMonth()]; // Month
    const day = date.getDate(); // Day
    return locale === 'ar'
        ? `${day} ${monthArabic}, ${year}`
        : `${day} ${month}, ${year}`;
};
const formatValue = (value) => {
    return typeof value === 'number'
        ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        : value;
};
const filteredLicenceList = (data, locale, search = '', pageNumber = 1, totalRec, selectedLicenceNumber, currentPagesize) => {
    let updatedList = data || [];
    const localeKey = locale === 'en' ? 'Eng' : 'Arb';
    if (search) {
        updatedList = updatedList.filter((item) => {
            return (item.tradeLicenseNumber.toLowerCase().search(search.toLowerCase()) >=
                0 ||
                (item[`businessName${localeKey}`] || '')
                    .toString()
                    .toLowerCase()
                    .search(search.toLowerCase()) > -1);
        });
    }
    const PAGESIZE = updatedList.length < 10 ? updatedList.length : 10;
    const offset = (pageNumber - 1) * PAGESIZE;
    currentPagesize.update(PAGESIZE);
    totalRec.update(updatedList.length);
    const licenceList = updatedList.map((licence) => ({
        _id: licence.tradeLicenseNumber,
        licenceNumber: licence.tradeLicenseNumber,
        companyName: locale === 'en' ? licence.businessNameEng : licence.businessNameArb,
        selected: licence.tradeLicenseNumber === selectedLicenceNumber ? true : false,
    }));
    return licenceList.length
        ? licenceList.slice(offset, pageNumber * PAGESIZE)
        : [];
};
const returnCamundaMessage = (response, props) => {
    let errorMessage = '';
    let redirectFlag = false;
    if (response.success && response.message === 'Success') {
        errorMessage = '';
    }
    else if (response.message && response.message === 'Unauthorized') {
        errorMessage = props.i18n('timeoutMessage');
        redirectFlag = true;
    }
    else {
        errorMessage = props.i18n('somethingWentWrongTitle');
    }
    props.actions.camundaMessage.update(errorMessage);
    // if (errorMessage && redirectFlag) {
    //   setTimeout(() => {
    //     localStorage.setItem('forceRedirect', window.location.href);
    //     window.location.href = '/login';
    //   }, 5000);
    // }
    return errorMessage;
};
const getDashboardUrl = () => {
    let protocol = location.protocol;
    const slashes = protocol.concat('//');
    const host = slashes.concat(window.location.hostname);
    return `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/EconomicLicences/requestforatruecopyofeconomiclicence`;
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

      /***/
    },
    /* 7 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'filteredLicenceList',
        function () {
          return filteredLicenceList;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getDateFromTimeStamp',
        function () {
          return getDateFromTimeStamp;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'formatValue',
        function () {
          return formatValue;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'returnCamundaMessage',
        function () {
          return returnCamundaMessage;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getDashboardUrl',
        function () {
          return getDashboardUrl;
        },
      );
      const getDateFromTimeStamp = (timestamp, locale) => {
        const date = new Date(timestamp);
        const monthsArr = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const monthsArabic = [
          'يناير',
          'فبراير',
          'مارس',
          'أبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر',
        ];
        const year = date.getFullYear(); // Year
        const month = monthsArr[date.getMonth()]; // Month
        const monthArabic = monthsArabic[date.getMonth()]; // Month
        const day = date.getDate(); // Day
        return locale === 'ar'
          ? `${day} ${monthArabic}, ${year}`
          : `${day} ${month}, ${year}`;
      };
      const formatValue = value => {
        return typeof value === 'number'
          ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
          : value;
      };
      const filteredLicenceList = (
        data,
        locale,
        search = '',
        pageNumber = 1,
        totalRec,
        selectedLicenceNumber,
        currentPagesize,
      ) => {
        let updatedList = data || [];
        const localeKey = locale === 'en' ? 'Eng' : 'Arb';
        if (search) {
          updatedList = updatedList.filter(item => {
            return (
              item.tradeLicenseNumber
                .toLowerCase()
                .search(search.toLowerCase()) >= 0 ||
              (item[`businessName${localeKey}`] || '')
                .toString()
                .toLowerCase()
                .search(search.toLowerCase()) > -1
            );
          });
        }
        const PAGESIZE = updatedList.length < 10 ? updatedList.length : 10;
        const offset = (pageNumber - 1) * PAGESIZE;
        currentPagesize.update(PAGESIZE);
        totalRec.update(updatedList.length);
        const licenceList = updatedList.map(licence => ({
          _id: licence.tradeLicenseNumber,
          licenceNumber: licence.tradeLicenseNumber,
          companyName:
            locale === 'en' ? licence.businessNameEng : licence.businessNameArb,
          selected:
            licence.tradeLicenseNumber === selectedLicenceNumber ? true : false,
        }));
        return licenceList.length
          ? licenceList.slice(offset, pageNumber * PAGESIZE)
          : [];
      };
      const returnCamundaMessage = (response, props) => {
        let errorMessage = '';
        let redirectFlag = false;
        if (response.success && response.message === 'Success') {
          errorMessage = '';
        } else if (response.message && response.message === 'Unauthorized') {
          errorMessage = props.i18n('timeoutMessage');
          redirectFlag = true;
        } else {
          errorMessage = props.i18n('somethingWentWrongTitle');
        }
        props.actions.camundaMessage.update(errorMessage);
        // if (errorMessage && redirectFlag) {
        //   setTimeout(() => {
        //     localStorage.setItem('forceRedirect', window.location.href);
        //     window.location.href = '/login';
        //   }, 5000);
        // }
        return errorMessage;
      };
      const getDashboardUrl = () => {
        let protocol = location.protocol;
        const slashes = protocol.concat('//');
        const host = slashes.concat(window.location.hostname);
        return `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/EconomicLicences/requestforatruecopyofeconomiclicence`;
      };

      /***/
    },
    /* 8 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getSteps',
        function () {
          return getSteps;
        },
      );
      const getSteps = (i18n, cStep, cSubStep) => {
        const stepsList = [
          {
            id: 'step_selectLicence',
          },
          {
            id: 'step_enterContactDetails',
          },
          {
            id: 'step_makePayment',
            substeps: [
              {
                id: 'subStep_requestConfirmation',
              },
              {
                id: 'subStep_payAmount',
                status: 'process',
              },
            ],
          },
          {
            id: 'step_downloadCertificate',
          },
        ];
        let stepFinish = false;
        let subStepFinish = false;
        const steps = stepsList.map(step => {
          let subSteps = [];
          if (cStep.id === step.id) {
            stepFinish = true;
          }
          if (step.substeps) {
            subSteps = step.substeps.map(subStep => {
              if (cSubStep.id === subStep.id) {
                subStepFinish = true;
              }
              return {
                label: i18n(subStep.id),
                status: subStepFinish
                  ? cSubStep.id === subStep.id
                    ? cSubStep.status
                    : ''
                  : !stepFinish || cStep.id === step.id
                  ? 'finish'
                  : '',
              };
            });
          }
          return {
            ...(subSteps.length ? { substeps: subSteps } : {}),
            link: '',
            label: i18n(step.id),
            status: stepFinish
              ? cStep.id === step.id
                ? cStep.status
                : ''
              : 'finish',
          };
        });
        return steps;
      };

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLicenceList", function() { return getLicenceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmailNotification", function() { return sendEmailNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaDataFromAdlocker", function() { return getMetaDataFromAdlocker; });
const removeDuplicate = (listLicense) => {
    const obj = {};
    return Array.isArray(listLicense)
        ? Object.keys(listLicense.reduce((prev, next) => {
            if (!obj[next.tradeLicenseNumber])
                obj[next.tradeLicenseNumber] = next;
            return obj;
        }, obj)).map((i) => obj[i])
        : [];
};
const getLicenceList = async (props) => {
    let licenceList = await props
        .fetch('/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/listTradeLicensesV3', 'POST'
    // {
    //   emiratesIdNumber: props.user.IDN, // '784198958090718', //props.user.IDN // '784198958090718', //props.user.IDN, //'784198505249585', // || ,
    // }
    )
        .then((response) => response.data)
        .catch((err) => err);
    let filteredList = [];
    if (licenceList &&
        licenceList.TradeLicensesList &&
        Object.values(licenceList.TradeLicensesList.contents).length) {
        licenceList = Array.isArray(licenceList.TradeLicensesList.contents)
            ? licenceList.TradeLicensesList.contents
            : [licenceList.TradeLicensesList.contents];
        const newLicenceList = removeDuplicate(licenceList);
        filteredList = newLicenceList.filter((item) => item.tradeLicenseNumber.toLowerCase().search('in') >= 0);
    }
    return filteredList;
    //return dummylicenceList;
};
const downloadFile = async (instanceId, certificateName, props) => {
    let response = {};
    const certificatetype = 'industrialLicence';
    response = await props.fetch(`/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/businessCertificate?instanceId=${instanceId}&type=${certificatetype}&certificateName=${certificateName}`, 'POST', {
        emiratesId: '{{user.IDN}}',
    });
    if (response && response.data && response.data.fileContent) {
        const file = response.data.fileContent;
        const newBlob = new Blob([file], {
            type: 'application/pdf',
          });
          // IE doesn't allow using a blob object directly as link href
          // instead it is necessary to use msSaveOrOpenBlob
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
          }
          // For other browsers:
          // Create a link pointing to the ObjectURL containing the blob.
          const data = window.URL.createObjectURL(newBlob);
          let link = document.createElement('a');
          link.href = data;
          link.target = '_blank';
          link.download = certificateName + '.pdf';
          link.click();
          setTimeout(function () {
            // For Firefox it is necessary to delay revoking the ObjectURL
            window.URL.revokeObjectURL(data);
          }, 100);
          return response.data;
        }
        return response;
      };
      const sendEmailNotification = async (emailType, props) => {
        try {
          const result = await props
            .fetch(
              '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/sendEmailNotification',
              'POST',
              {
                instanceId: props.instanceId,
                emailType,
              },
            )
            .then(response => response.data)
            .catch(err => err);
          return result;
        } catch (error) {
          return `unable to send notification email ${error}`;
        }
      };
      const getMetaDataFromAdlocker = async (props, ApplicationID) => {
        const response = await props
          .fetch(
            '/api/proxy/ms-call/gateway/TammJourneyAdl-services-in-progress/1.0/retrieve/getid',
            'POST',
            {
              body: {
                header: {
                  UUID: props.user.IDN,
                  language: props.locale.toUpperCase(),
                },
                body: { data: { ApplicationID } },
              },
            },
          )
          .then(response => response.data)
          .catch(err => err);
        let { businessKey, instanceId } = response.Metadata;
        return { businessKey, instanceId };
      };

      /***/
    },
    /* 10 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      const customRequires = props => {
        const user = props.user;
        const pass =
          user &&
          (user.Type === 'SOP3' ||
            (user.provider === 'uaepass' && user.Type === 'SOP2'));
        return {
          pass,
          redirectTo: `/account-upgrade`,
        };
      };
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = customRequires;

      /***/
    },
    /* 11 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        12,
      );

      const pageConfig = [
        {
          title: 'Contact Details',
          pageId: 'W7Tf4YcGGlfEDOPGjECW6',
          expanded: true,
          path: '/application-submit',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'H64V42_INbPa40YhyY_kE',
                type: 'text',
                props: {
                  variant: 'h3',
                  content: "i18n('applicantDetailsTitle')",
                  displayAsHtml: false,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'VhPUpHEGXaG4juoSxeSQh',
                type: 'text',
                props: {
                  variant: 'p',
                  content: "i18n('applicantDetailsDescription')",
                  displayAsHtml: false,
                  space: {
                    marginBottom: 'lg',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'SYedwrs1XyCWThYShj7Xm',
                type: 'form',
                props: {
                  definitions: [
                    {
                      componentId: 'x4aSEdWUiv_Dx6ylJFMPW',
                      symbolTitle: 'Symbol 1',
                      type: 'symbol',
                      props: {
                        symbol: '9D0MQ6LCSJOtHaHem5NP5',
                      },
                      layout: 'base',
                    },
                  ],
                  description: '',
                  title: '',
                  formValues: '',
                  btnSubmitLabel: "i18n('globalNext')",
                  includeCancelButton: true,
                  includeBackButton: true,
                  btnBackLabel: "i18n('globalBack')",
                  validateStatus: {
                    valid: true,
                    message: '',
                  },
                  btnSubmitArrow: 'end',
                  btnBackArrow: 'start',
                  btnCancelClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'f1_btnCancelClick'
                    ],
                  btnBackClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f2_btnBackClick'],
                  btnSubmitClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'f3_btnSubmitClick'
                    ],
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'history',
                  'actions',
                  'bpm',
                  'analytics',
                  'contactDetailsName',
                  'nameValidateStatus',
                  'contactDetailsMobile',
                  'contactDetailsEmail',
                  'licenceNumber',
                  'user',
                  '',
                  'actions',
                ],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
              {
                id: '9D0MQ6LCSJOtHaHem5NP5',
                name: 'Application Details',
                definitions: [
                  {
                    componentId: 'x8NzMMR4useFQBHrXKDV0',
                    type: 'checkbox',
                    props: {
                      name: '',
                      id: '',
                      tabIndex: 0,
                      autoFocus: false,
                      readOnly: false,
                      label: "i18n('applicantDetailsCheckboxContact')",
                      disabled: false,
                      uiType: '',
                      description: '',
                      validateStatus: '',
                      meta: '',
                      space: {
                        marginBottom: 'lg',
                      },
                      onClick: {
                        type: 'func',
                        actions: [],
                      },
                      onChange: {
                        type: 'func',
                        actions: [
                          {
                            type: 'customCode',
                            code:
                              "{\"code\":\"  const { locale } = props;\\n  return (value: any) => {\\n    props.actions.camundaMessage.update('');\\n    const checkBoxState = props.state.contactDetailsFlag ? false : true;\\n    props.actions.contactDetailsFlag.update(checkBoxState);\\n    if (checkBoxState) {\\n      const name =\\n        locale === 'en'\\n          ? `${props.state.user['First Name EN']} ${props.state.user['Last Name EN']}`\\n          : props.state.user['Full Name AR'];\\n      props.actions.contactDetailsName.update(name);\\n      props.actions.contactDetailsMobile.update(props.state.user.Mobile);\\n      props.actions.contactDetailsEmail.update(props.state.user['User Email']);\\n    } else {\\n      props.actions.contactDetailsName.update('');\\n      props.actions.contactDetailsMobile.update('');\\n      props.actions.contactDetailsEmail.update('');\\n    }\\n    props.actions.nameValidateStatus.update('');\\n    props.actions.nameValidateHelp.update('');\\n    props.actions.mobileValidateStatus.update('');\\n    props.actions.mobileValidateHelp.update('');\\n    props.actions.emailValidateStatus.update('');\\n    props.actions.emailValidateHelp.update('');\\n  };\",\"shouldCallCustomCode\":true}",
                          },
                        ],
                      },
                      checked: '${state.contactDetailsFlag}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'actions',
                      'contactDetailsFlag',
                      'user',
                      'actions',
                    ],
                  },
                  {
                    componentId: 'GEzYxD1nNaqiuEuCint5u',
                    type: 'grid',
                    props: {
                      columns: 2,
                      flexColumns: {
                        xl: 2,
                        lg: 2,
                        md: 2,
                        sm: 1,
                      },
                      space: {
                        marginTop: '',
                      },
                      visible: '{"code":"  "}',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: 'k4kDHPtQlLBE_fs1zZBWb',
                        type: 'input',
                        props: {
                          label: "i18n('applicantDetailsNameField')",
                          value: '${state.contactDetailsName}',
                          defaultValue: '',
                          'aria-label': "i18n('applicantDetailsNameField')",
                          validateStatus: '${state.nameValidateStatus}',
                          disabled: '${state.contactDetailsFlag}',
                          readonly: false,
                          help: '${state.nameValidateHelp}',
                          placeholder: '',
                          size: 'default',
                          textDirection: 'ltr',
                          name: '',
                          type: 'text',
                          tabIndex: 0,
                          space: {
                            marginBottom: 'lg',
                          },
                          onChange: {
                            type: 'func',
                            actions: [
                              {
                                type: 'customCode',
                                code:
                                  "{\"code\":\"  return (value: string) => {\\n    props.actions.nameValidateStatus.update('');\\n    props.actions.nameValidateHelp.update('');\\n    if (!props.state.contactDetailsFlag && value.length < 5) {\\n      props.actions.nameValidateStatus.update('error');\\n      props.actions.nameValidateHelp.update(props.i18n('nameValidation'));\\n    }\\n    props.actions.contactDetailsName.update(value);\\n  };\",\"shouldCallCustomCode\":true}",
                              },
                            ],
                          },
                          visible: '',
                        },
                        layout: 'base',
                        columnIndex: 0,
                        sharedProps: [
                          'i18n',
                          'locale',
                          'actions',
                          'contactDetailsFlag',
                          'contactDetailsName',
                          'nameValidateStatus',
                          'nameValidateHelp',
                          'actions',
                        ],
                      },
                      {
                        componentId: 'RqPbZXaLXOeHlhnwz02ab',
                        type: 'input',
                        props: {
                          label: "i18n('applicantDetailsEmailField')",
                          value: '${state.contactDetailsEmail}',
                          defaultValue: '',
                          'aria-label': "i18n('applicantDetailsEmailField')",
                          validateStatus: '${state.emailValidateStatus}',
                          disabled: '${state.contactDetailsFlag}',
                          readonly: false,
                          help: '${state.emailValidateHelp}',
                          placeholder: '',
                          size: 'default',
                          textDirection: 'ltr',
                          name: '',
                          type: 'text',
                          space: {
                            marginTop: '',
                            marginBottom: 'lg',
                          },
                          tabIndex: 0,
                          onChange: {
                            type: 'func',
                            actions: [
                              {
                                type: 'customCode',
                                code:
                                  '{"code":"  return (value: string) => {\\n    props.actions.emailValidateStatus.update(\'\');\\n    props.actions.emailValidateHelp.update(\'\');\\n    props.actions.contactDetailsEmail.update(value);\\n  };","shouldCallCustomCode":true}',
                              },
                            ],
                          },
                          visible: '',
                        },
                        layout: 'base',
                        columnIndex: 0,
                        sharedProps: [
                          'i18n',
                          'locale',
                          'actions',
                          'contactDetailsEmail',
                          'emailValidateStatus',
                          'contactDetailsFlag',
                          'emailValidateHelp',
                          'actions',
                        ],
                      },
                      {
                        componentId: 'a3tmA1HJd2PoVrhELaOF5',
                        type: 'inputTelephone',
                        props: {
                          i18n: '',
                          help: '${state.mobileValidateHelp}',
                          validateStatus: '${state.mobileValidateStatus}',
                          label: "i18n('applicantDetailsNumberField')",
                          'aria-label': "i18n('applicantDetailsNumberField')",
                          disabled: '${state.contactDetailsFlag}',
                          value: '${state.contactDetailsMobile}',
                          code: null,
                          countries: [],
                          size: 'default',
                          defaultValue: {},
                          tabIndex: 0,
                          space: {
                            marginBottom: 'lg',
                          },
                          onSelect: {
                            type: 'func',
                            actions: [
                              {
                                type: 'customCode',
                                code:
                                  '{"code":" return (value: string) => {\\n    props.actions.mobileValidateStatus.update(\'\');\\n    props.actions.mobileValidateHelp.update(\'\');\\n    props.actions.contactDetailsMobile.update(value);\\n  };","shouldCallCustomCode":true}',
                              },
                            ],
                          },
                          visible: '',
                        },
                        layout: 'base',
                        columnIndex: 1,
                        sharedProps: [
                          'i18n',
                          'locale',
                          'actions',
                          'mobileValidateHelp',
                          'mobileValidateStatus',
                          'contactDetailsFlag',
                          'contactDetailsMobile',
                          'actions',
                        ],
                      },
                    ],
                  },
                  {
                    componentId: 'zTQtz7Bm5KbcT0pffQ2Lq',
                    type: 'alert',
                    props: {
                      status: 'error',
                      message: '${state.camundaMessage}',
                      onClose: null,
                      space: {
                        marginBottom: '',
                      },
                      visible:
                        '{"code":"  return props.state.camundaMessage ? true : false;"}',
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale', 'camundaMessage'],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          customPath: true,
          requires: [
            {
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          state: {
            mapState: [
              'user',
              'loggedIn',
              'contactDetailsFlag',
              'camundaMessage',
              'contactDetailsName',
              'nameValidateStatus',
              'nameValidateHelp',
              'contactDetailsEmail',
              'emailValidateStatus',
              'emailValidateHelp',
              'mobileValidateHelp',
              'mobileValidateStatus',
              'contactDetailsMobile',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'licenceNumber',
              '',
            ],
            mapDispatch: [
              'contactDetailsName',
              'contactDetailsMobile',
              'contactDetailsEmail',
              'nameValidateStatus',
              'nameValidateHelp',
              'mobileValidateStatus',
              'mobileValidateHelp',
              'emailValidateStatus',
              'emailValidateHelp',
              'showSideBar',
              'currentStepIndex',
              'pageLoader',
              'expandedStepIndexes',
              'steps',
              'camundaMessage',
              'contactDetailsFlag',
              'loading',
              'instanceId',
              'businessKey',
              '',
            ],
            "mapDispatch": [
                "contactDetailsName",
                "contactDetailsMobile",
                "contactDetailsEmail",
                "nameValidateStatus",
                "nameValidateHelp",
                "mobileValidateStatus",
                "mobileValidateHelp",
                "emailValidateStatus",
                "emailValidateHelp",
                "showSideBar",
                "currentStepIndex",
                "pageLoader",
                "expandedStepIndexes",
                "steps",
                "camundaMessage",
                "contactDetailsFlag",
                "loading",
                "instanceId",
                "businessKey",
                ""
            ]
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;


async function init(props) {
    props.actions.contactDetailsName.update('');
    props.actions.contactDetailsMobile.update('');
    props.actions.contactDetailsEmail.update('');
    props.actions.nameValidateStatus.update('');
    props.actions.nameValidateHelp.update('');
    props.actions.mobileValidateStatus.update('');
    props.actions.mobileValidateHelp.update('');
    props.actions.emailValidateStatus.update('');
    props.actions.emailValidateHelp.update('');
    props.actions.showSideBar.update(true);
    props.actions.currentStepIndex.update(1);
    props.actions.pageLoader.update(false);
    props.actions.expandedStepIndexes.update([]);
    const cStep = { id: 'step_enterContactDetails', status: '' };
    const cSubStep = { id: '', status: '' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_3__["getSteps"])(props.i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    props.actions.camundaMessage.update('');
    if (props.contactDetailsFlag) {
        const name = props.locale === 'en'
            ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
            : props.user['Full Name AR'];
        props.actions.contactDetailsName.update(name);
        props.actions.contactDetailsMobile.update(props.user.Mobile);
        props.actions.contactDetailsEmail.update(props.user['User Email']);
    }
}
async function onPageInit(props) {
    if (props.responseDescription) {
        props.actions.camundaMessage.update(props.responseDescription);
    }
}
async function f1_btnCancelClick(props, formValues) {
    props.history.push('/');
}
async function f2_btnBackClick(props, formValues) {
    props.history.push('/select-licence');
}
async function f3_btnSubmitClick(props, formValues) {
    const { i18n } = props;
    let validateStatus = true;
    if (props.contactDetailsName.trim() === '') {
        validateStatus = false;
        props.actions.nameValidateStatus.update('error');
        props.actions.nameValidateHelp.update(i18n('errorContactName'));
    }
    if (props.nameValidateStatus) {
        validateStatus = false;
    }
    if (props.contactDetailsMobile.trim() === '' ||
        !Object(_sharedFunctions_validation__WEBPACK_IMPORTED_MODULE_0__["isMobile"])(props.contactDetailsMobile)) {
        validateStatus = false;
        props.actions.mobileValidateStatus.update('error');
        props.actions.mobileValidateHelp.update(i18n('errorContactMobile'));
    }
    if (props.contactDetailsEmail.trim() === '' ||
        !Object(_sharedFunctions_validation__WEBPACK_IMPORTED_MODULE_0__["isEmail"])(props.contactDetailsEmail)) {
        validateStatus = false;
        props.actions.emailValidateStatus.update('error');
        props.actions.emailValidateHelp.update(i18n('errorContactEmail'));
    }
    if (validateStatus) {
        props.actions.loading.update(true);
        const data = await props.bpm.startProcess({
            licenceNo: props.licenceNumber,
            serviceName: 'Original License Copy Stamp',
            proName: props.contactDetailsName,
            proEmail: props.contactDetailsEmail,
            proMobileNumber: props.contactDetailsMobile,
            mock: false,
          });
          if (
            data.success &&
            data.data &&
            data.data.businessKey &&
            data.data.id
          ) {
            props.actions.instanceId.update(data.data.id);
            props.actions.businessKey.update(data.data.businessKey);
            const serviceNameEn = 'Original License Copy Stamp';
            const serviceNameAr = 'ختم نسخة الرخصة الأصلية';
            const paymentSuccessEn = `Thank you for making a payment on TAMM for ${serviceNameEn} application.The transaction receipt is attached in this email.`;
            const paymentSuccessAr = `<span dir='rtl'>نشكرك على دفع رسوم خدمة رخصة اقتصادية طبق الأصل عبر منصة تـــم. مرفق طيه إيصال الدفع. </span>`;
            const applicationSuccessEn = `Your True Copy of Economic Licence ${props.licenceNumber} has been issued. Please find the true copy of economic licence attached in this email.`;
            const applicationSuccessAr = `<span dir='rtl'>صدرت رخصة اقتصادية طبق الأصل رقم  بنجاح. </span>
<span dir='rtl'>${props.licenceNumber}</span>
<span dir='rtl'>الشهادة مرفقة طيّ هذا البريد الإلكتروني. </span>`;
            const emailTokens = [
              {
                subject: `${serviceNameEn} - ${serviceNameAr}`,
                enText: paymentSuccessEn,
                arText: paymentSuccessAr,
                docType: 'receipt',
                emailType: 'payment-success',
              },
              {
                subject: `${serviceNameEn} - ${serviceNameAr}`,
                enText: applicationSuccessEn,
                arText: applicationSuccessAr,
                docType: 'certificate',
                emailType: 'application-success',
              },
            ];
            const response = await props.bpm.sendMessage({
              businessKey: data.data.businessKey,
              messageName: 'onSubmit',
              variables: {
                isSubmit: 'yes',
                businessKey: data.data.businessKey,
                instanceId: data.data.id,
                emiratesId: props.user['IDN'],
                emailTokens: JSON.stringify(emailTokens),
                serviceNameEn,
                serviceNameAr,
              },
            });
            Object(
              _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__[
                'addAnalyticsEvent'
              ],
            )(props, 'TRA');
            Object(
              _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__[
                'returnCamundaMessage'
              ],
            )(response, props);
          } else {
            Object(
              _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__[
                'returnCamundaMessage'
              ],
            )(data, props);
          }
          // props.actions.loading.update(false);
        }
      }

      /***/
    },
    /* 13 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isEmail',
        function () {
          return isEmail;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isMobile',
        function () {
          return isMobile;
        },
      );
      const isEmail = value => {
        if (!value) {
          return false;
        }
        return !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      };
      const isMobile = value => {
        if (!value) {
          return false;
        }
        const withOutSpace = value.split(' ').join('');
        const PHONE_REGEX = /^(\+|0+)?9715\d{8}$/i;
        return !!withOutSpace.match(PHONE_REGEX);
      };

      /***/
    },
    /* 14 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'addAnalyticsEvent',
        function () {
          return addAnalyticsEvent;
        },
      );
      const addAnalyticsEvent = (
        props,
        eventKeyValue,
        serviceStatusValue,
        amount,
        applicationStatusValue,
      ) => {
        props.analytics.addEvent({
          eventKey: eventKeyValue || '',
          ...(amount ? { sum: amount } : {}),
          additionalData: {
            adgeName: props.adgeName,
            serviceName: props.serviceCode,
            productName: props.productName,
            serviceStatus: serviceStatusValue || '',
            ...(applicationStatusValue
              ? { applicationStatus: applicationStatusValue }
              : {}),
          },
        });
      };

      /***/
    },
    /* 15 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        16,
      );

      const pageConfig = [
        {
          title: 'Application in progress',
          pageId: 'hmEEYreyyRZ32MaU86Vs4',
          expanded: true,
          path: '/application-waiting',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'VvUXLlTUjNLLGlG-s1IcB',
                type: 'notice',
                props: {
                  status: 'inProgress',
                  icon: null,
                  title: "i18n('waitingApprovalTitle')",
                  tags: [],
                  content: '',
                  buttons: [],
                  classNames: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'J91mfsD7wQW2qfYsLgDxo',
                type: 'highlightLoader',
                props: {
                  delay: 1,
                  countdown: null,
                  description: "i18n('waitingApprovalWaitingMessage')",
                  space: {
                    marginBottom: 'md',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: '-nY8xr5vU1NaAGcZFG5Wn',
                type: 'text',
                props: {
                  variant: 'p',
                  content: '${state.waitingApprovalDescription}',
                  displayAsHtml: true,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'waitingApprovalDescription'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          requires: [
            {
                "type": "REQUIRES_LOGIN",
                "redirectTo": "/login"
            }
        ],
        "customPath": true,
        "state": {
            "mapState": [
                "user",
                "loggedIn",
                "businessKey",
                "instanceId",
                "showSideBar",
                "steps",
                "expandedStepIndexes",
                "currentStepIndex",
                "currentSubStepIndex",
                "waitingApprovalDescription"
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'currentStepIndex',
              'currentSubStepIndex',
              'expandedStepIndexes',
              'steps',
              'waitingApprovalDescription',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
        },
        "init": _functions__WEBPACK_IMPORTED_MODULE_0__["init"],
        "onPageInit": _functions__WEBPACK_IMPORTED_MODULE_0__["onPageInit"]
    }];
/* harmony default export */ __webpack_exports__["default"] = (pageConfig);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageInit", function() { return onPageInit; });
/* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



async function init(props) {
    if (!props.businessKey || !props.instanceId) {
        window.location.href = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["getDashboardUrl"])();
    }
    props.actions.showSideBar.update(true);
    props.actions.loading.update(false);
    props.actions.currentStepIndex.update(2);
    props.actions.currentSubStepIndex.update(0);
    props.actions.expandedStepIndexes.update([2]);
    const cStep = { id: 'step_makePayment', status: '' };
    const cSubStep = { id: 'subStep_requestConfirmation', status: '' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__["getSteps"])(props.i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    const protocol = location.protocol;
    const slashes = protocol.concat('//');
    const host = slashes.concat(window.location.hostname);
    const visitDashBoardURL = `${host}/${props.locale}/mylocker`;
    const description = props.locale === 'en'
        ? `Please wait while we contact the Department of Economic Development to initiate this payment. This can take up to 5 minutes. This page will refresh once your reference number has been generated. You will be notified about changes to your application's status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the <a href='${visitDashBoardURL}'>Dashboard</a>.`
        : `يرجى الانتظار بينما يحدث الاتصال بدائرة التنمية الاقتصادية لبدء عملية الدفع. قد يستغرق هذا مدة تصل إلى 5 دقائق. سيتم تحديث هذه الصفحة بمجرد صدور الرقم المرجعي الخاص بك. سيتم إخطارك بالتغييرات التي تطرأ على حالة طلبك على عنوان البريد الإلكتروني ورقم الهاتف المحمول المسجلين. يمكنك أيضًا التحقق من حالة طلبك في أي وقت عن طريق زيارة <a href='${visitDashBoardURL}'>لوحة التحكم</a> الخاصة بك.`;
    props.actions.waitingApprovalDescription.update(description);
}
async function onPageInit(props) {
    Object(_sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__["addAnalyticsEvent"])(props, 'SLA', 'success', 0, 'Open');
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

      /***/
    },
    /* 16 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'onPageInit',
        function () {
          return onPageInit;
        },
      );
      /* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8,
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        14,
      );

      async function init(props) {
        if (!props.businessKey || !props.instanceId) {
          window.location.href = Object(
            _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
              'getDashboardUrl'
            ],
          )();
        }
        props.actions.showSideBar.update(true);
        props.actions.loading.update(false);
        props.actions.currentStepIndex.update(2);
        props.actions.currentSubStepIndex.update(0);
        props.actions.expandedStepIndexes.update([2]);
        const cStep = { id: 'step_makePayment', status: '' };
        const cSubStep = { id: 'subStep_requestConfirmation', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        const protocol = location.protocol;
        const slashes = protocol.concat('//');
        const host = slashes.concat(window.location.hostname);
        const visitDashBoardURL = `${host}/${props.locale}/mylocker`;
        const description =
          props.locale === 'en'
            ? `Please wait while we contact the Department of Economic Development to initiate this payment. This can take up to 5 minutes. This page will refresh once your reference number has been generated. You will be notified about changes to your application's status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the <a href='${visitDashBoardURL}'>Dashboard</a>.`
            : `يرجى الانتظار بينما يحدث الاتصال بدائرة التنمية الاقتصادية لبدء عملية الدفع. قد يستغرق هذا مدة تصل إلى 5 دقائق. سيتم تحديث هذه الصفحة بمجرد صدور الرقم المرجعي الخاص بك. سيتم إخطارك بالتغييرات التي تطرأ على حالة طلبك على عنوان البريد الإلكتروني ورقم الهاتف المحمول المسجلين. يمكنك أيضًا التحقق من حالة طلبك في أي وقت عن طريق زيارة <a href='${visitDashBoardURL}'>لوحة التحكم</a> الخاصة بك.`;
        props.actions.waitingApprovalDescription.update(description);
      }
      async function onPageInit(props) {
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__[
            'addAnalyticsEvent'
          ],
        )(props, 'SLA', 'success', 0, 'Open');
      }

      /***/
    },
    /* 17 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        18,
      );

      const pageConfig = [
        {
          title: 'Payment Summary',
          pageId: 'P2hnF498qLkRhc1ODZ6hs',
          expanded: true,
          path: '/payment-summary',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'VvUXLlTUjNLLGlG-s1IcB',
                type: 'notice',
                props: {
                  status: 'success',
                  icon: null,
                  title: "i18n('paymentSummaryTitle')",
                  tags: '${state.paymentTag}',
                  content: "i18n('paymentSummaryDescription')",
                  buttons: [],
                  classNames: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentTag'],
              },
              {
                componentId: 'ZTbzkuODj6yGSQwb-jM6o',
                type: 'table',
                props: {
                  size: 'default',
                  selectable: false,
                  clickable: true,
                  columns: '${state.paymentTableColumns}',
                  items: '${state.paymentTableRows}',
                  title: "i18n('paymentSummaryTableTitle')",
                  space: {
                    marginTop: 'xl',
                    marginBottom: 'md',
                  },
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'paymentTableColumns',
                  'paymentTableRows',
                ],
              },
              {
                componentId: 'bUYXbbzOv6QWuonl6xj4c',
                type: 'total',
                props: {
                  unit: "i18n('aed')",
                  isValueFirst: false,
                  isButtonVisible: false,
                  onClick: 'nop()',
                  buttonDisabled: false,
                  value: '${state.paymentTotal}',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentTotal'],
              },
              {
                componentId: 'xZYrFg9aw4EpiaNO97txD',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginBottom: '',
                    marginTop: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'e1sdz93i2wz0M_CIC18JA',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('paymentSummaryPayButton')",
                  type: 'button',
                  uiType: 'primary',
                  disabled: false,
                  'aria-label': "i18n('paymentSummaryPayButton')",
                  size: 'default',
                  icon: null,
                  alignIcon: 'end',
                  withArrow: true,
                  active: false,
                  hidden: false,
                  iconTooltip: '',
                  applyAutoWidth: false,
                  space: {
                    marginTop: 'lg',
                    marginBottom: 'xl',
                  },
                  onClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'actions',
                  'bpm',
                  'analytics',
                  'businessKey',
                  'paymentTotal',
                  'paymentURL',
                  'actions',
                ],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          templateId: '249',
          templateName: 'Payment Summary',
          requires: [
            {
                "type": "REQUIRES_LOGIN",
                "redirectTo": "/login"
            }
        ],
        "state": {
            "mapState": [
                "user",
                "loggedIn",
                "businessKey",
                "instanceId",
                "showSideBar",
                "steps",
                "expandedStepIndexes",
                "currentStepIndex",
                "currentSubStepIndex",
                "paymentTag",
                "paymentTableColumns",
                "paymentTableRows",
                "paymentTotal",
                "camundaMessage",
                "paymentURL"
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: [
              'submitDate',
              'feeDetails',
              'apTransactionNumber',
              'paymentLink',
            ],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;


async function init(props) {
    const { i18n } = props;
    if (!props.businessKey || !props.instanceId) {
        window.location.href = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["getDashboardUrl"])();
    }
    props.actions.showSideBar.update(true);
    props.actions.loading.update(false);
    props.actions.currentStepIndex.update(2);
    props.actions.currentSubStepIndex.update(1);
    props.actions.expandedStepIndexes.update([2]);
    const cStep = { id: 'step_makePayment', status: '' };
    const cSubStep = { id: 'subStep_payAmount', status: '' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_2__["getSteps"])(props.i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    const tableHeaders = [
        {
            id: 'description',
            title: i18n('paymentSummaryDescriptionColumn'),
          },
          {
            id: 'price',
            title: i18n('paymentSummaryPriceColumn'),
          },
        ];
        props.actions.paymentTableColumns.update(tableHeaders);
        /**
         * Dont delete props.actions.paymentTag.update()
         */
        // props.actions.paymentTag.update(tags);
        //props.actions.paymentTableRows.update(paymentRow);
        //props.actions.paymentTotal.update(totalFees);
        //props.actions.camundaMessage.update('');
        // props.actions.paymentURL.update('');
      }
      async function onPageInit(props) {
        const { i18n, locale } = props;
        const tags = [
          { label: i18n('globalReference'), value: props.apTransactionNumber },
          {
            label: i18n('globalSubmitted'),
            value: Object(
              _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
                'getDateFromTimeStamp'
              ],
            )(props.submitDate, locale),
          },
        ];
        props.actions.paymentTag.update(tags);
        let feeDetails = props.feeDetails;
        feeDetails =
          feeDetails && feeDetails !== 'null' ? JSON.parse(feeDetails) : {};
        console.log('feeDetails', feeDetails);
        let licenceFees = [];
        licenceFees.push(feeDetails);
        if (!licenceFees[0].FeeAmount) {
          props.history.push('/application-error');
        }
        const paymentRow =
          licenceFees.length > 0
            ? licenceFees.map((value, index) => ({
                id: `${index}`,
                description:
                  locale === 'en' ? value.feeDescEn : value.feeDescAr,
                price:
                  locale === 'en'
                    ? `AED ${Object(
                        _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
                          'formatValue'
                        ],
                      )(value.FeeAmount)}`
                    : `${Object(
                        _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
                          'formatValue'
                        ],
                      )(value.FeeAmount)} درهم`,
              }))
            : [{ id: '0', description: '', price: 0 }];
        const totalFees =
          licenceFees.length > 0
            ? licenceFees.reduce((a, b) => {
                return a + b.FeeAmount;
              }, 0)
            : 0;
        props.actions.paymentTableRows.update(paymentRow);
        props.actions.paymentTotal.update(totalFees);
        props.actions.camundaMessage.update('');
        props.actions.paymentURL.update(props.paymentLink);
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__[
            'addAnalyticsEvent'
          ],
        )(props, 'PAY1', 'success');
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        props.actions.loading.update(true);
        const data = await props.bpm.sendMessage({
          businessKey: props.businessKey,
          messageName: 'onPay',
          variables: {},
        });
        await Object(
          _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
            'returnCamundaMessage'
          ],
        )(data, props);
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__[
            'addAnalyticsEvent'
          ],
        )(props, 'PAY1', 'success', props.paymentTotal);
        if (props.paymentURL) window.location.href = props.paymentURL;
        props.actions.loading.update(false);
      }

      /***/
    },
    /* 19 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        20,
      );

      const pageConfig = [
        {
          title: 'Payment Confirmation',
          pageId: 'GZ4XnYEhFeiS5b-kRag4B',
          expanded: true,
          path: '/payment-waiting',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'VvUXLlTUjNLLGlG-s1IcB',
                type: 'notice',
                props: {
                  status: 'inProgress',
                  icon: null,
                  title: "i18n('paymentWaitingTitle')",
                  tags: '${state.paymentTag}',
                  content: '',
                  buttons: [],
                  classNames: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentTag'],
              },
              {
                componentId: 'zHzCPnQn76LANz6o_5Nfp',
                type: 'text',
                props: {
                  variant: 'p',
                  content: '${state.paymentLinkString}',
                  displayAsHtml: true,
                  space: {
                    marginTop: 'md',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentLinkString'],
              },
              {
                componentId: '-j-2VkLSuDPPp2R3x7Vw6',
                type: 'text',
                props: {
                  variant: 'p',
                  content: "i18n('paymentWaitingDescription')",
                  displayAsHtml: false,
                  space: {
                    marginTop: 'md',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          templateId: '250',
          templateName: 'Apporval page',
          requires: [
            {
                "type": "REQUIRES_LOGIN",
                "redirectTo": "/login"
            }
        ],
        "customPath": true,
        "state": {
            "mapState": [
                "user",
                "loggedIn",
                "businessKey",
                "instanceId",
                "showSideBar",
                "steps",
                "expandedStepIndexes",
                "currentStepIndex",
                "currentSubStepIndex",
                "paymentTag",
                "paymentLinkString"
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: ['apTransactionNumber', 'submitDate', 'paymentLink'],
          },
        },
        "init": _functions__WEBPACK_IMPORTED_MODULE_0__["init"],
        "onPageInit": _functions__WEBPACK_IMPORTED_MODULE_0__["onPageInit"],
        "fromProcessState": {
            "processName": "workbench",
            "variables": [
                "apTransactionNumber",
                "submitDate",
                "paymentLink"
            ]
        }
    }];
/* harmony default export */ __webpack_exports__["default"] = (pageConfig);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageInit", function() { return onPageInit; });
/* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


async function init(props) {
    const { i18n } = props;
    if (!props.businessKey || !props.instanceId) {
        window.location.href = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["getDashboardUrl"])();
    }
    props.actions.showSideBar.update(true);
    props.actions.loading.update(false);
    props.actions.currentStepIndex.update(2);
    props.actions.currentSubStepIndex.update(999);
    props.actions.expandedStepIndexes.update([2]);
    const cStep = { id: 'step_makePayment', status: '' };
    const cSubStep = { id: 'subStep_payAmount', status: 'process' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__["getSteps"])(i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    // props.actions.paymentTag.update(tags);
    // props.actions.paymentLinkString.update();
}
async function onPageInit(props) {
    const { i18n, locale } = props;
    const tags = [
        { label: i18n('globalReference'), value: props.apTransactionNumber },
        {
            label: i18n('globalSubmitted'),
            value: Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["getDateFromTimeStamp"])(props.submitDate, locale),
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'onPageInit',
        function () {
          return onPageInit;
        },
      );
      /* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8,
      );

      async function init(props) {
        const { i18n } = props;
        if (!props.businessKey || !props.instanceId) {
          window.location.href = Object(
            _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
              'getDashboardUrl'
            ],
          )();
        }
        props.actions.showSideBar.update(true);
        props.actions.loading.update(false);
        props.actions.currentStepIndex.update(2);
        props.actions.currentSubStepIndex.update(999);
        props.actions.expandedStepIndexes.update([2]);
        const cStep = { id: 'step_makePayment', status: '' };
        const cSubStep = { id: 'subStep_payAmount', status: 'process' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__['getSteps'],
        )(i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // props.actions.paymentTag.update(tags);
        // props.actions.paymentLinkString.update();
      }
      async function onPageInit(props) {
        const { i18n, locale } = props;
        const tags = [
          { label: i18n('globalReference'), value: props.apTransactionNumber },
          {
            label: i18n('globalSubmitted'),
            value: Object(
              _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
                'getDateFromTimeStamp'
              ],
            )(props.submitDate, locale),
          },
        ];
        props.actions.paymentTag.update(tags);
        const message =
          locale === 'en'
            ? `Your payment confirmation is in progress. If this does not open automatically, please <a href='${props.paymentLink}' target='_self'>click here.</a>`
            : `جاري تأكيد عملية الدفع. إن لم تفتح النافذة بشكل تلقائي، يرجى  <a href='${props.paymentLink}' target='_self'> النقر هنا. </a>`;
        const paymentLinkMessage = props.paymentLink ? message : '';
        // if(props.paymentLink)
        //   window.location.href = props.paymentLink;
        props.actions.paymentLinkString.update(paymentLinkMessage);
      }

      /***/
    },
    /* 21 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        22,
      );

      const pageConfig = [
        {
          title: 'Payment Failed',
          pageId: 'TttUaxNR9xNa-G6sU0agi',
          expanded: true,
          path: '/payment-error',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'VvUXLlTUjNLLGlG-s1IcB',
                type: 'notice',
                props: {
                  status: 'actionRequired',
                  icon: null,
                  title: "i18n('paymentFailedTitle')",
                  tags: '${state.paymentTag}',
                  content: "i18n('paymentFailedDescription')",
                  buttons: [],
                  classNames: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentTag'],
              },
              {
                componentId: '-jSmY8VJWf4wUyTMiMlJe',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginBottom: 'md',
                    marginTop: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                {
                    "componentId": "Kxr4jnjgOTHw8_9QFT8ma",
                    "type": "button",
                    "props": {
                        "locale": "en",
                        "label": "i18n('tryAgain')",
                        "type": "button",
                        "uiType": "primary",
                        "disabled": false,
                        "aria-label": "i18n('tryAgain')",
                        "size": "default",
                        "icon": null,
                        "alignIcon": "start",
                        "withArrow": false,
                        "active": false,
                        "hidden": false,
                        "iconTooltip": "",
                        "applyAutoWidth": false,
                        "space": {
                            "marginTop": "xl",
                            "marginBottom": "xl"
                        },
                        "onClick": _functions__WEBPACK_IMPORTED_MODULE_0__["f2_onClick"]
                    },
                    "layout": "base",
                    "sharedProps": [
                        "i18n",
                        "locale",
                        "actions",
                        "bpm",
                        "businessKey",
                        "actions"
                    ]
                }
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          requires: [
            {
                "type": "REQUIRES_LOGIN",
                "redirectTo": "/login"
            }
        ],
        "customPath": true,
        "state": {
            "mapState": [
                "user",
                "loggedIn",
                "showSideBar",
                "steps",
                "expandedStepIndexes",
                "currentStepIndex",
                "currentSubStepIndex",
                "paymentTag",
                "camundaMessage",
                "businessKey"
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'camundaMessage',
              'currentStepIndex',
              'currentSubStepIndex',
              'expandedStepIndexes',
              'steps',
              'paymentTag',
              'pageLoader',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: ['apTransactionNumber', 'submitDate'],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageInit", function() { return onPageInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f1_visible", function() { return f1_visible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f2_onClick", function() { return f2_onClick; });
/* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



async function init(props) {
    const { i18n } = props;
    props.actions.showSideBar.update(true);
    props.actions.loading.update(false);
    props.actions.camundaMessage.update('');
    props.actions.currentStepIndex.update(2);
    props.actions.currentSubStepIndex.update(1);
    props.actions.expandedStepIndexes.update([2]);
    const cStep = { id: 'step_makePayment', status: '' };
    const cSubStep = { id: 'subStep_payAmount', status: '' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__["getSteps"])(i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    // props.actions.paymentTag.update(tags);
}
async function onPageInit(props) {
    const { i18n, locale } = props;
    const tags = [
        { label: i18n('globalReference'), value: props.apTransactionNumber },
        {
            label: i18n('globalSubmitted'),
            value: Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["getDateFromTimeStamp"])(props.submitDate, locale),
        },
    ];
    props.actions.paymentTag.update(tags);
    Object(_sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__["addAnalyticsEvent"])(props, 'PAY2', 'fail');
}
function f1_visible(props) {
    return props.camundaMessage ? true : false;
}
async function f2_onClick(props) {
    props.actions.pageLoader.update(true);
    const data = await props.bpm.sendMessage({
        businessKey: props.businessKey,
        messageName: 'onPaymentError',
    });
    await Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["returnCamundaMessage"])(data, props);
    props.actions.pageLoader.update(false);
    // props.actions.camundaMessage.update(errorMessage);
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

const pageConfig = [{
        "title": "Application Success",
        "pageId": "nJdZwtxr9ceIE746QXyL_",
        "expanded": true,
        "path": "/application-success",
        "template": "custom",
        "props": {
            "definitions": [
                {
                    "componentId": "VvUXLlTUjNLLGlG-s1IcB",
                    "type": "notice",
                    "props": {
                        "status": "success",
                        "icon": null,
                        "title": "i18n('applicationApprovedTitle')",
                        "tags": "${state.paymentTag}",
                        "content": "${state.applicationIssuedDescription}",
                        "buttons": [],
                        "classNames": ""
                    },
                    "layout": "base",
                    "sharedProps": [
                        "i18n",
                        "locale",
                        "paymentTag",
                        "applicationIssuedDescription"
                    ]
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'paymentTag',
                  'applicationIssuedDescription',
                ],
              },
              {
                componentId: 'sErpagxnCqt5ULRHoaKSL',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginBottom: '',
                    marginTop: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'Ir_6JRtYzfkgN_PHkn3mY',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginTop: 'lg',
                    marginBottom: 'xl',
                  },
                  classNames: 'button-wrapper',
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'b12lMDSHylyL5K1BixqAb',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('applicationApprovedDownloadCertificate')",
                      type: 'button',
                      uiType: 'primary',
                      disabled: false,
                      'aria-label':
                        "i18n('applicationApprovedDownloadCertificate')",
                      size: 'default',
                      icon: null,
                      alignIcon: 'end',
                      withArrow: false,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      applyAutoWidth: false,
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                    },
                    columnIndex: 1,
                    layout: 'base',
                    parentComponentId: 'kAAzK8MrdKtX-phVmKE29',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'actions',
                      'fetch',
                      'instanceId',
                      'actions',
                    ],
                  },
                  {
                    componentId: 'JHipL8HImLMAJ_EZCcNb9',
                    type: 'button',
                    props: {
                      label: "i18n('applicationApprovedDownloadReceipt')",
                      type: 'button',
                      uiType: 'secondary',
                      disabled: false,
                      'aria-label':
                        "i18n('applicationApprovedDownloadReceipt')",
                      size: 'default',
                      icon: null,
                      alignIcon: 'start',
                      withArrow: false,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f3_onClick'],
                      space: {
                        marginRight: 'md',
                        marginLeft: 'md',
                      },
                    },
                    columnIndex: 0,
                    layout: 'base',
                    parentComponentId: 'kAAzK8MrdKtX-phVmKE29',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'actions',
                      'fetch',
                      'instanceId',
                      'actions',
                    ],
                  },
                  {
                    componentId: 'csSbqsGdORIXTrKN3C4-u',
                    type: 'button',
                    props: {
                      label: "i18n('applicationApprovedVisitDashboard')",
                      type: 'button',
                      uiType: 'secondary',
                      disabled: false,
                      'aria-label':
                        "i18n('applicationApprovedDownloadReceipt')",
                      size: 'default',
                      icon: null,
                      alignIcon: 'start',
                      withArrow: false,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f4_onClick'],
                      space: {
                        marginRight: '',
                        marginLeft: '',
                      },
                    },
                    columnIndex: 0,
                    layout: 'base',
                    parentComponentId: 'kAAzK8MrdKtX-phVmKE29',
                    sharedProps: ['i18n', 'locale'],
                  },
                ],
              },
              {
                componentId: 'XzBGmIYV-PIKgEfP71wk6',
                type: 'customerSatisfaction',
                props: {
                  i18n: '',
                  status: 'idle',
                  emotion: '',
                  onSubmit: '',
                  rates: [
                    {
                      value: 0,
                      starsCount: 5,
                      min: 1,
                      max: 5,
                      step: 5,
                      id: 'kcd4pffz',
                    },
                  ],
                  withComment: true,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          requires: [
            {
                "type": "REQUIRES_LOGIN",
                "redirectTo": "/login"
            }
        ],
        "state": {
            "mapState": [
                "user",
                "loggedIn",
                "businessKey",
                "instanceId",
                "licenceNumber",
                "showSideBar",
                "steps",
                "expandedStepIndexes",
                "currentStepIndex",
                "currentSubStepIndex",
                "paymentTag",
                "applicationIssuedDescription",
                "camundaMessage"
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'currentStepIndex',
              'currentSubStepIndex',
              'expandedStepIndexes',
              'steps',
              'camundaMessage',
              'paymentTag',
              'applicationIssuedDescription',
              'apTransactionNo',
              'capId',
              'instanceId',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: [
              'apTransactionNumber',
              'submitDate',
              'capId',
              'instanceId',
            ],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageInit", function() { return onPageInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f1_visible", function() { return f1_visible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f2_onClick", function() { return f2_onClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f3_onClick", function() { return f3_onClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f4_onClick", function() { return f4_onClick; });
/* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



async function init(props) {
    const { i18n, locale } = props;
    if (!props.businessKey || !props.instanceId) {
        window.location.href = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__["getDashboardUrl"])();
    }
    props.actions.showSideBar.update(true);
    props.actions.loading.update(false);
    props.actions.currentStepIndex.update(3);
    props.actions.currentSubStepIndex.update(999);
    props.actions.expandedStepIndexes.update([]);
    const cStep = { id: 'step_downloadCertificate', status: '' };
    const cSubStep = { id: '', status: '' };
    const steps = Object(_sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__["getSteps"])(i18n, cStep, cSubStep);
    props.actions.steps.update(steps);
    props.actions.camundaMessage.update('');
    // props.actions.paymentTag.update(tags);
    const message = locale === 'en'
        ? `True Copy of Economic Licence - Industrial has been generated for the licence number ${props.licenceNumber}. You can download the relevant documents below.`
        : `صدرت نسخة طبق الأصل عن رخصتك الاقتصادية رقم ${props.licenceNumber} . بإمكانك إصدار الرخصة وتنزيل الملف أدناه. `;
    props.actions.applicationIssuedDescription.update(message);
    // props.actions.apTransactionNo.update();
    // props.actions.capId.update();
    // props.actions.instanceId.update();
}
async function onPageInit(props) {
    const { i18n, locale } = props;
    const tags = [
        { label: i18n('globalReference'), value: props.apTransactionNumber },
        {
            label: i18n('globalSubmitted'),
            value: Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__["getDateFromTimeStamp"])(props.submitDate, locale),
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'onPageInit',
        function () {
          return onPageInit;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_visible',
        function () {
          return f1_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f2_onClick',
        function () {
          return f2_onClick;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f3_onClick',
        function () {
          return f3_onClick;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f4_onClick',
        function () {
          return f4_onClick;
        },
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        8,
      );
      /* harmony import */ var _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        9,
      );
      /* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        7,
      );

      async function init(props) {
        const { i18n, locale } = props;
        if (!props.businessKey || !props.instanceId) {
          window.location.href = Object(
            _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__[
              'getDashboardUrl'
            ],
          )();
        }
        props.actions.showSideBar.update(true);
        props.actions.loading.update(false);
        props.actions.currentStepIndex.update(3);
        props.actions.currentSubStepIndex.update(999);
        props.actions.expandedStepIndexes.update([]);
        const cStep = { id: 'step_downloadCertificate', status: '' };
        const cSubStep = { id: '', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__['getSteps'],
        )(i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        props.actions.camundaMessage.update('');
        // props.actions.paymentTag.update(tags);
        const message =
          locale === 'en'
            ? `True Copy of Economic Licence - Industrial has been generated for the licence number ${props.licenceNumber}. You can download the relevant documents below.`
            : `صدرت نسخة طبق الأصل عن رخصتك الاقتصادية رقم ${props.licenceNumber} . بإمكانك إصدار الرخصة وتنزيل الملف أدناه. `;
        props.actions.applicationIssuedDescription.update(message);
        // props.actions.apTransactionNo.update();
        // props.actions.capId.update();
        // props.actions.instanceId.update();
      }
      async function onPageInit(props) {
        const { i18n, locale } = props;
        const tags = [
          { label: i18n('globalReference'), value: props.apTransactionNumber },
          {
            label: i18n('globalSubmitted'),
            value: Object(
              _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__[
                'getDateFromTimeStamp'
              ],
            )(props.submitDate, locale),
          },
        ];
        props.actions.paymentTag.update(tags);
        // props.actions.apTransactionNumber.update(props.apTransactionNumber);
        // props.actions.capId.update(props.capId);
        props.actions.instanceId.update(props.instanceId);
        await Object(
          _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__[
            'sendEmailNotification'
          ],
        )('payment-success', props);
        await Object(
          _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__[
            'sendEmailNotification'
          ],
        )('application-success', props);
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        props.actions.loading.update(true);
        const cStep = { id: 'step_downloadCertificate', status: 'finish' };
        const cSubStep = { id: '', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // const fetch = props.fetch;
        const data = await Object(
          _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__[
            'downloadFile'
          ],
        )(props.instanceId, 'certificate', props);
        props.actions.loading.update(false);
        if (!data || !data.fileContent) {
          await Object(
            _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__[
              'returnCamundaMessage'
            ],
          )(data, props);
        }
      }
      async function f3_onClick(props) {
        props.actions.loading.update(true);
        const cStep = { id: 'step_downloadCertificate', status: 'finish' };
        const cSubStep = { id: '', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // const fetch = props.fetch;
        const data = await Object(
          _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__[
            'downloadFile'
          ],
        )(props.instanceId, 'receipt', props);
        props.actions.loading.update(false);
        if (!data || !data.fileContent) {
          await Object(
            _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_2__[
              'returnCamundaMessage'
            ],
          )(data, props);
        }
      }
      async function f4_onClick(props) {
        let protocol = location.protocol;
        const slashes = protocol.concat('//');
        const host = slashes.concat(window.location.hostname);
        window.location.href = `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/EconomicLicences/requestforatruecopyofeconomiclicence`;
      }

      /***/
    },
    /* 25 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        26,
      );

      const pageConfig = [
        {
          title: 'Went Wrong',
          pageId: 'mU_EyZTBvnwmb8gp75S1v',
          path: '/application-error',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'dG0c57seTBNOhDpRq86L1',
                type: 'notice',
                props: {
                  status: 'failure',
                  icon: null,
                  title: "i18n('somethingWentWrongTitle')",
                  tags: [],
                  content: "i18n('somethingWentWrongDescription')",
                  buttons: [],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'f5mXmKzBo-kP28AeeLnVo',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginBottom: 'md',
                    marginTop: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'Kq2G-y2rSnYV2AzQHEmKh',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('globalBack')",
                  type: 'button',
                  uiType: 'secondary',
                  disabled: false,
                  'aria-label': "i18n('globalBack')",
                  size: 'default',
                  icon: null,
                  alignIcon: 'start',
                  withArrow: true,
                  active: false,
                  hidden: false,
                  iconTooltip: '',
                  applyAutoWidth: false,
                  space: {
                    marginTop: 'xl',
                    marginBottom: 'xl',
                  },
                  onClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'history'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          requires: [
            {
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          customPath: true,
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'camundaMessage',
            ],
            mapDispatch: ['camundaMessage', 'showSideBar', 'loading'],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: ['getFeesDetail'],
          },
        },
        "init": _functions__WEBPACK_IMPORTED_MODULE_0__["init"],
        "onPageInit": _functions__WEBPACK_IMPORTED_MODULE_0__["onPageInit"],
        "fromProcessState": {
            "processName": "workbench",
            "variables": [
                "getFeesDetail"
            ]
        }
    }];
/* harmony default export */ __webpack_exports__["default"] = (pageConfig);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageInit", function() { return onPageInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f1_visible", function() { return f1_visible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f2_onClick", function() { return f2_onClick; });
/* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);


async function init(props) {
    props.actions.camundaMessage.update('');
    props.actions.showSideBar.update(false);
    props.actions.loading.update(false);
}
async function onPageInit(props) {
    Object(_sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__["addAnalyticsEvent"])(props, 'SLA', 'fail', 0, '');
}
function f1_visible(props) {
    return props.camundaMessage ? true : false;
}
async function f2_onClick(props) {
    window.location.href = Object(_sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__["getDashboardUrl"])();
    props.history.push('/select-licence');
}

      /***/
    },
    /* 26 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'onPageInit',
        function () {
          return onPageInit;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_visible',
        function () {
          return f1_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f2_onClick',
        function () {
          return f2_onClick;
        },
      );
      /* harmony import */ var _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        14,
      );

      async function init(props) {
        props.actions.camundaMessage.update('');
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
      }
      async function onPageInit(props) {
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__[
            'addAnalyticsEvent'
          ],
        )(props, 'SLA', 'fail', 0, '');
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        window.location.href = Object(
          _sharedFunctions_utils__WEBPACK_IMPORTED_MODULE_0__[
            'getDashboardUrl'
          ],
        )();
        props.history.push('/select-licence');
      }

      /***/
    },
    /* 27 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        28,
      );

      const pageConfig = [
        {
          title: 'No information',
          pageId: 'DriOUEcRwZA9sopR2RN26',
          expanded: true,
          path: '/application-no-information',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: '3XsICui15nEbenmUsDR-f',
                type: 'notice',
                props: {
                  status: 'actionRequired',
                  icon: null,
                  title: "i18n('NoInformationFoundTitle')",
                  tags: [],
                  content: "i18n('NoInformationFoundDescription')",
                  buttons: [],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'b25Xzl98CEH_iv6YUVa1q',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginBottom: 'md',
                    marginTop: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'QFlmrfJ9B4qqQpCJuQAK0',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('globalBack')",
                  type: 'button',
                  uiType: 'secondary',
                  disabled: false,
                  'aria-label': "i18n('globalBack')",
                  size: 'default',
                  icon: null,
                  alignIcon: 'start',
                  withArrow: true,
                  active: false,
                  hidden: false,
                  iconTooltip: '',
                  applyAutoWidth: false,
                  space: {
                    marginTop: 'xl',
                    marginBottom: 'xl',
                  },
                  onClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'history',
                  'bpm',
                  'businessKey',
                ],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          customPath: true,
          requires: [
            {
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'camundaMessage',
              'businessKey',
            ],
            mapDispatch: ['showSideBar', 'loading', 'camundaMessage'],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 28 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_visible',
        function () {
          return f1_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f2_onClick',
        function () {
          return f2_onClick;
        },
      );
      async function init(props) {
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
        props.actions.camundaMessage.update('');
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        await props.bpm.sendMessage({
          businessKey: props.businessKey,
          messageName: 'onNoInformation',
          variables: {},
        });
        props.history.push('select-licence');
      }

      /***/
    },
    /* 29 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        30,
      );

      const pageConfig = [
        {
          title: 'No Active Licence',
          pageId: 'pNoyjituNUyazFQm7_47M',
          expanded: true,
          path: '/no-active-licence',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'g8bGD5RQkvmChkovoX3bc',
                type: 'notice',
                props: {
                  status: 'actionRequired',
                  icon: null,
                  title: "i18n('noActiveLicenceTitle')",
                  tags: [],
                  content: "i18n('noActiveLicenceDescription')",
                  buttons: [],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'Kxr4jnjgOTHw8_9QFT8ma',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('globalBack')",
                  type: 'button',
                  uiType: 'secondary',
                  disabled: false,
                  'aria-label': "i18n('tryAgain')",
                  size: 'default',
                  icon: null,
                  alignIcon: 'start',
                  withArrow: true,
                  active: false,
                  hidden: false,
                  iconTooltip: '',
                  applyAutoWidth: false,
                  space: {
                    marginTop: 'xl',
                    marginBottom: 'xl',
                  },
                  onClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_onClick'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'history'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          requires: [
            {
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          customPath: true,
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
            ],
            mapDispatch: ['showSideBar', 'loading'],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: ['apTransactionNumber', 'submitDate'],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 30 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'onPageInit',
        function () {
          return onPageInit;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_onClick',
        function () {
          return f1_onClick;
        },
      );
      async function init(props) {
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
      }
      async function onPageInit(props) {}
      async function f1_onClick(props) {
        props.history.push('/');
      }

      /***/
    },
    /* 31 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        32,
      );

      const pageConfig = [
        {
          title: 'Continue process',
          pageId: '0hQBCe0dQJz6JtvjWMeqO',
          path: '/continue-process',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'OLzx1j8q7dZIpKB73HiqM',
                type: 'notice',
                props: {
                  status: 'inProgress',
                  icon: null,
                  title: "i18n('continueProcessTitle')",
                  content: "i18n('continueProcessDescription')",
                  buttons: [],
                  classNames: '',
                  space: {
                    marginBottom: 'lg',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          customPath: true,
          requires: [
            {
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'businessKey',
              'instanceId',
              'licenceNumber',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 32 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony import */ var _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        9,
      );

      async function init(props) {
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
        const queryString = props.history.location.search;
        const urlParams = new URLSearchParams(queryString);
        let instanceId = urlParams.get('instanceId');
        let businessKey = urlParams.get('businessKey');
        const appId = urlParams.get('adlAppId');
        if (appId) {
          // const fetch = props.fetch;
          try {
            const resp = await Object(
              _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_0__[
                'getMetaDataFromAdlocker'
              ],
            )(props, appId);
            if (resp && resp.businessKey && resp.instanceId) {
              businessKey = resp.businessKey;
              instanceId = resp.instanceId;
              props.actions.businessKey.update(resp.businessKey);
              props.actions.instanceId.update(resp.instanceId);
            }
          } catch (exception) {}
        }
        if (instanceId && businessKey) {
          try {
            const processName = 'workbench';
            const data = await props.bpm.state(processName, instanceId);
            if (data) {
              const variables = await props.bpm.getVariables(instanceId, {
                processName,
                variables: ['emiratesId', 'licenceNo'],
              });
              let emiratesId;
              if (variables) {
                emiratesId = variables.data.emiratesId
                  ? variables.data.emiratesId.value
                  : '';
              }
              if (props.user.IDN === emiratesId) {
                props.actions.businessKey.update(businessKey);
                props.actions.instanceId.update(instanceId);
                props.actions.licenceNumber.update(
                  variables.data.licenceNo.value,
                );
                props.history.push(data.data.value);
              } else {
                props.actions.businessKey.update('');
                props.actions.instanceId.update('');
              }
            }
          } catch (exception) {}
        }
      }

      /***/
    },
    /* 33 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        34,
      );

      const pageConfig = [
        {
          title: 'Account upgrade',
          pageId: 'Q29XXvQG66SDhECw_KFAn',
          path: '/account-upgrade',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'CXt7HvvI8kh02TDOCM7Me',
                type: 'text',
                props: {
                  variant: 'h3',
                  content: "i18n('accountUpgradeRequired')",
                  displayAsHtml: false,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'W0rVz9RRaIFHwKkz89JVm',
                type: 'icon',
                props: {
                  className: '${state.alertTriangle}',
                  source: null,
                  'data-key': '',
                  tooltip: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'alertTriangle'],
              },
              {
                componentId: 'xYXkxudJTQ_Ba8DS7ejek',
                type: 'text',
                props: {
                  variant: 'p',
                  content: "i18n('accountUpgradeDes')",
                  displayAsHtml: false,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'JqcU5mW3CcWOCXIgH5jnH',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginBottom: 'md',
                  },
                },
                layout: 'base',
                children: [
                  {
                    componentId: '9k1sFtkJslyEBqWhXXP_c',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('upgradeYourAccount')",
                      type: 'button',
                      uiType: 'secondary',
                      disabled: false,
                      'aria-label': 'button',
                      size: 'default',
                      icon: null,
                      alignIcon: 'end',
                      withArrow: false,
                      active: false,
                      hidden: false,
                      applyAutoWidth: false,
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f1_onClick'],
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale'],
                  },
                ],
              },
            ],
            symbols: [
              {
                id: 'LRdpV5hJYYHXEeQXvW572',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: 'x02R_vTEPQV7EuW80B8-y',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'showSideBar',
                      'steps',
                      'expandedStepIndexes',
                      'currentStepIndex',
                      'currentSubStepIndex',
                    ],
                  },
                  {
                    columnIndex: 0,
                    componentId: 'bx_ewe29IC5HCtaVmJhKJ',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevantEntity')",
                      entities: [
                        {
                          logo:
                            'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                          address: "i18n('address')",
                          phones: [],
                          website: 'www.adeconomy.ae',
                          email: 'email@domain.com',
                        },
                      ],
                      closedAll: false,
                      space: {
                        marginTop: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'SpZNRSS1hcBXpPT30yok2',
                name: 'Header',
                definitions: [
                  {
                    componentId: 'ZubPbXDHOtVDemU26pYRi',
                    type: 'flexbox',
                    props: {
                      flexWrap: true,
                      flexDirection: 'column',
                      justifyContent: 'initial',
                      alignItems: 'initial',
                      alignContent: 'initial',
                      classNames: 'container',
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '7vJvGWTue3wJJTCS3mfAX',
                        type: 'breadcrumb',
                        props: {
                          space: {
                            marginBottom: 'md',
                            marginTop: 'lg',
                          },
                          items: [
                            {
                              id: 'kdmsxtik',
                              label: "i18n('bc_home')",
                              linkTarget: '_self',
                              link: '/',
                            },
                            {
                              id: 'kdmsyjm9',
                              label: "i18n('bc_digitalServices')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services',
                              linkTarget: '_self',
                            },
                            {
                              id: 'kdmszcbw',
                              label: "i18n('bc_DED')",
                              link:
                                'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                              linkTarget: '_self',
                            },
                          ],
                        },
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                      {
                        componentId: '4wTDq9dCLSvn6yueeb1LJ',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCardServicename')",
                          displayAsHtml: false,
                        },
                        layout: 'base',
                        parentComponentId: 'no_parent',
                        sharedProps: ['i18n', 'locale'],
                      },
                    ],
                  },
                ],
              },
            ],
            sharedFunctions: {},
          },
          layout: 'sidebar',
          customPath: true,
          state: {
            mapState: [
              'user',
              'loggedIn',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'alertTriangle',
            ],
            mapDispatch: ['loading'],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 34 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'init',
        function () {
          return init;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_onClick',
        function () {
          return f1_onClick;
        },
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        14,
      );

      async function init(props) {
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_0__[
            'addAnalyticsEvent'
          ],
        )(props, 'USE');
        props.actions.loading.update(false);
      }
      async function f1_onClick(props) {
        window.open(
          'https://smartpass.government.ae/index-en.html/how_to',
          '_blank',
        );
      }

      /***/
    },
    /* 35 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */ __webpack_exports__['default'] = {
        serviceCardServicename: 'Request for a True Copy of Economic Licence',
        process: 'Process',
        selectLicenceTitle: 'Select Licence',
        selectLicenceDescription:
          'Please select a valid Industrial Licence to get a true copy of the licence.',
        globalNext: 'Next',
        globalCancel: 'Cancel',
        paymentSummaryPayButton: 'pay',
        bc_home: 'Home',
        bc_digitalServices: 'Digital Services',
        pleaseLogIn: 'Please Login',
        bc_DED: 'Department of Economic Development',
        applicantDetailsCheckboxContact:
          'I am the contact person for this application.',
        applicantDetailsNameField: 'NAME',
        applicantDetailsNumberField: 'MOBILE NUMBER',
        applicantDetailsEmailField: 'EMAIL ADDRESS',
        errorContactName: 'This field is required',
        errorContactEmail:
          'This field is required and must be an email address',
        errorContactMobile:
          'This field is required and must be a mobile number',
        errorLicenceNotSelected: 'Select at least one Licence',
        applicantDetailsTitle: 'Application Contact',
        applicantDetailsDescription:
          'Please provide the details below. These contact details will be used for any future correspondences related to this application.  ',
        globalBack: 'Back',
        applicationApprovedDownloadCertificate: 'DOWNLOAD LICENCE',
        applicationApprovedDownloadReceipt: 'DOWNLOAD RECEIPT',
        visitDashboard: 'Visit Dashboard',
        paymentSummaryTitle: 'Your Application Has Been Approved',
        paymentSummaryDescription:
          'The Department of Economic Development has generated a reference number for this transaction. You will be receiving all updates related to this application on the registered email and mobile number. Please proceed with your payment here.',
        paymentSummaryTableTitle: 'Payment Summary',
        globalReference: 'Reference number:',
        globalSubmitted: 'Submitted on:',
        waitingApprovalDescription:
          'Please wait while we contact the Department of Economic Development to initiate this payment. This can take up to 5 minutes. This page will refresh once your reference number has been generated. You will be notified about changes to your application’s status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the Manage Your Business.',
        waitingApprovalTitle: 'Confirming Your Request',
        requestingConfirmationTitle: 'Confirming Request',
        requestingConfirmationContent:
          'Please wait while we contact the Department of Economic Development to initiate this payment. This can take upto 5 minutes. This page will refresh once your reference number is generated. You will be notified about changes to your application’s status on the registered email address & via SMS on the registered phone number. You may also check the status of your application at any time by visiting your dashboard.',
        paymentFailedTitle: 'Your Payment was Unsuccessful',
        paymentFailedDescription:
          'Unfortunately, the payment could not be processed. You can try again or come back later. If you encountered any error, please report this issue. ',
        tryAgain: 'Try Again',
        somethingWentWrongTitle: 'Something Went Wrong',
        somethingWentWrongDescription:
          'An error occurred while trying to complete your request. Please try again.',
        NoInformationFoundTitle: 'No Information was Found',
        NoInformationFoundDescription:
          'We were unable to find any details with the information provided. Please try again.',
        step_selectLicence: 'Select Licence',
        step_enterContactDetails: 'Application Contact',
        step_makePayment: 'Make Payment',
        subStep_requestConfirmation: 'Request Confirmation',
        subStep_payAmount: 'Pay Amount',
        step_downloadCertificate: 'Download Certificate',
        timeoutMessage: 'Session timed out. The page will be reloaded shortly',
        applicationApprovedTitle:
          'Your True Copy of Economic Licence Has Been Issued',
        selectLicenceTableTitle: 'My Licences',
        accountUpgrade: 'Account upgrade required',
        accountUpgradeDes:
          'Your log in credentials need to be upgraded before you can proceed with this service. Please follow the link to complete the process.',
        upgradeYourAccount: 'Upgrade Your Account',
        selectLicenceLicenceColumn: 'Licence Number',
        selectLicenceCompanyColumn: 'Company Name',
        paymentSummaryDescriptionColumn: 'Description',
        paymentSummaryPriceColumn: 'Fees',
        paymentWaitingTitle: 'Awaiting Payment Confirmation',
        paymentWaitingDescription:
          'This page will refresh once your payment is processed. You will be notified about changes to your application’s status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the Manage Your Business dashboard.',
        relevantEntity: 'Relevant Entity',
        paymentWaitingWaitingMessageDescription:
          'If this does not open automatically, please click here.',
        waitingApprovalWaitingMessage: 'Please wait for more information.',
        paymentWaitingWaitingMessage:
          'Your payment gateway will now open on a new tab.',
        noActiveLicenceTitle: 'No active licences',
        noActiveLicenceDescription:
          'You seem to have no active licences linked to this account',
        continueProcessTitle: 'You will be redirected shortly',
        continueProcessDescription:
          'Please be patient while we identify your application',
        applicationApprovedVisitDashboard: 'Visit Dashboard',
        accountUpgradeRequired: 'Account upgrade required',
        start: 'Start',
        address:
          'Baniyas Towers, Al Falah Street - Fatima bint Mubarak St 6, Abu Dhabi',
        aed: 'AED',
        nameValidation: 'Name field should contain at least 5 characters.',
      };

      /***/
    },
    /* 36 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */ __webpack_exports__['default'] = {
        serviceCardServicename: 'طلب إصدار رخصة اقتصادية طبق الأصل',
        process: 'العملية',
        selectLicenceTitle: 'اختر الرخصة ',
        selectLicenceDescription:
          'يُرجى اختيار رخصة اقتصادية سارية للحصول على نسخة من الرخصة.',
        globalNext: 'التالي',
        globalCancel: 'إلغاء',
        paymentSummaryPayButton: 'ادفع',
        bc_home: 'الصفحة الرئيسية',
        bc_digitalServices: 'الخدمات الرقمية',
        pleaseLogIn: 'يُرجى تسجيل الدخول',
        bc_DED: 'دائرة التنمية الاقتصادية',
        applicantDetailsCheckboxContact: 'أنا مسؤول الاتصال لهذا الطلب.',
        applicantDetailsNameField: 'الاسم ',
        applicantDetailsNumberField: 'رقم الهاتف المحمول',
        applicantDetailsEmailField: 'عنوان البريد الإلكتروني ',
        errorContactName: 'هذه الخانة مطلوبة\t',
        errorContactEmail:
          'هذا الخانة مطلوبة ويجب أن تحتوي على عنوان بريد إلكتروني.',
        errorContactMobile:
          'هذه الخانة مطلوبة ويجب أن تحتوي على رقم هاتف محمول',
        errorLicenceNotSelected: 'الرجاء اختيار رخصة ',
        applicantDetailsTitle: 'بيانات الاتصال لصاحب الطلب',
        applicantDetailsDescription:
          'يُرجى تقديم بيانات الاتصال أدناه، والتي ستُسخدم لغايات التواصل معك بشأن طلبك.',
        globalBack: 'الرجوع',
        applicationApprovedDownloadCertificate: 'إصدار الرخصة',
        applicationApprovedDownloadReceipt: 'تنزيل الإيصال',
        visitDashboard: 'زر لوحة التحكم',
        paymentSummaryTitle: 'تمت الموافقة على طلبك',
        paymentSummaryDescription:
          'أصدرت دائرة التنمية الاقتصادية رقماً مرجعياً لهذه المعاملة. ستصلك التحديثات عن طلبك على البريد الإلكتروني ورقم الهاتف المحمول المسجلين. يرجى متابعة عملية الدفع هنا. ',
        paymentSummaryTableTitle: 'ملخص المدفوعات',
        globalReference: 'ملخص المدفوعات',
        globalSubmitted: 'تاريخ التقديم:',
        waitingApprovalDescription:
          'يرجى الانتظار بينما يحدث الاتصال بدائرة التنمية الاقتصادية لبدء عملية الدفع. قد يستغرق هذا مدة تصل إلى 5 دقائق. سيتم تحديث هذه الصفحة بمجرد صدور الرقم المرجعي الخاص بك. سيتم إخطارك بالتغييرات التي تطرأ على حالة طلبك على عنوان البريد الإلكتروني ورقم الهاتف المحمول المسجلين. يمكنك أيضًا التحقق من حالة طلبك في أي وقت عن طريق زيارة لوحة التحكم الخاصة بك.',
        waitingApprovalTitle: 'تأكيد الطلب',
        requestingConfirmationTitle: 'تأكيد الطلب',
        requestingConfirmationContent:
          'يرجى الانتظار بينما يحدث الاتصال بدائرة التنمية الاقتصادية لبدء عملية الدفع. قد يستغرق هذا حتى 5 دقائق. سيتم تحديث هذه الصفحة بمجرد صدور الرقم المرجعي الخاص بك. سيتم إخطارك بالتغييرات التي تطرأ على حالة طلبك على عنوان البريد الإلكتروني المسجل ورقم الهاتف المتحرك. يمكنك أيضًا التحقق من حالة طلبك في أي وقت عن طريق زيارة لوحة التحكم الخاصة بك.',
        paymentFailedTitle: 'فشلت عملية الدفع',
        paymentFailedDescription:
          'عذرًا، لم تنجح عملية الدفع. يمكنك المحاولة مرة أخرى في وقت لاحق. إذا واجهتك أي مشكلة، يُرجى الإبلاغ عنها.',
        tryAgain: 'حاول مرة أخرى',
        somethingWentWrongTitle: 'حدث خطأ ما ',
        somethingWentWrongDescription:
          'حدث خطأ ما أثناء معالجة طلبك. يُرجى المحاولة مرة أخرى.',
        NoInformationFoundTitle: 'لا تتوفر أية معلومات ',
        NoInformationFoundDescription:
          'لم نتكمن من العثور على تفاصيل متعلقة بالمعلومات المذكورة هنا. يُرجى المحاولة مرة أخرى. ',
        step_selectLicence: 'اختر الرخصة ',
        step_enterContactDetails: 'بيانات الاتصال لصاحب الطلب',
        step_makePayment: 'ادفع',
        subStep_requestConfirmation: 'طلب تأكيد',
        subStep_payAmount: 'ادفع الرسوم',
        step_downloadCertificate: 'إصدار الرخصة',
        timeoutMessage: 'انتهت الجلسة. يرجى إعادة التحميل لتحديثها مرة أخرى',
        applicationApprovedTitle: 'صدرت نسخة طبق الأصل من رختصك الاقتصادية ',
        selectLicenceTableTitle: 'جميع رُخصي',
        accountUpgrade: 'يرجى تحديث حسابك',
        accountUpgradeDes:
          'يجب ترقية حسابك، لتتمكن من الحصول على الخدمة، لترقية الحساب، اضغط على الرابط.',
        upgradeYourAccount: 'يرجى تحديث حسابك',
        selectLicenceLicenceColumn: 'رقم الرخصة ',
        selectLicenceCompanyColumn: 'اسم الشركة ',
        paymentSummaryDescriptionColumn: 'الوصف',
        paymentSummaryPriceColumn: 'السعر',
        paymentWaitingTitle: 'بانتظار تأكيد الدفع',
        paymentWaitingDescription:
          'سيتم تحديث بيانات الصفحة فور تمام عملية الدفع. سيتم إخطارك بالتحديثات على الطلب من خلال البريد الإلكتروني أو الرسائل النصية القصيرة لرقم الهاتف المحمول المسجل. كما يمكنك مراجعة حالة الطلب بنفسك  في أي وقت من خلال لوحة التحكم "أدِر شركتك".',
        relevantEntity: 'الجهة الحكومية ذات الصلة',
        paymentWaitingWaitingMessageDescription:
          'إن لم تفتح نافذة الدفع بشكل تلقائي، يُرجى الضغط هنا.',
        waitingApprovalWaitingMessage:
          'الرجاء الانتظار للحصول على معلومات إضافية.\t',
        paymentWaitingWaitingMessage:
          'ستظهر بوابة الدفع تلقائياً في نافذة جديدة.',
        noActiveLicenceTitle: ' لا يوجد أي رخص فعّالة',
        noActiveLicenceDescription: 'لا تظهر أي رخصة مرتبطة بحسابك.',
        continueProcessTitle: 'سيتم الانتقال للصفحة المطلوبة سريعًا',
        continueProcessDescription: 'يرجى الانتظار قليلاً لحين التحقق من طلبك.',
        applicationApprovedVisitDashboard: 'عرض لوحة التحكم',
        accountUpgradeRequired: 'مطلوب تحديث الحساب',
        start: 'ابدأ',
        address: 'أبراج بني ياس، شارع الفلاح - شارع 6 فاطمة بنت مبارك، أبوظبي',
        aed: 'درهم',
        nameValidation: 'هذا الحقل إجباري ويجب أن يحتوي على 5 أحرف على الأقل',
      };

      /***/
    },
    /* 37 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        38,
      );

      const symbolConfig = [
        {
          id: 'LRdpV5hJYYHXEeQXvW572',
          name: 'Sidebar',
          definitions: [
            {
              componentId: 'x02R_vTEPQV7EuW80B8-y',
              type: 'stepTracker',
              props: {
                title: "i18n('process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'showSideBar',
                'steps',
                'expandedStepIndexes',
                'currentStepIndex',
                'currentSubStepIndex',
              ],
            },
            {
              columnIndex: 0,
              componentId: 'bx_ewe29IC5HCtaVmJhKJ',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: "i18n('relevantEntity')",
                entities: [
                  {
                    logo:
                      'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                    address: "i18n('address')",
                    phones: [],
                    website: 'www.adeconomy.ae',
                    email: 'email@domain.com',
                  },
                ],
                closedAll: false,
                space: {
                  marginTop: 'xl',
                },
                visible: _functions__WEBPACK_IMPORTED_MODULE_0__['f2_visible'],
              },
              sharedProps: ['i18n', 'locale', 'showSideBar'],
            },
          ],
        },
      ];
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = symbolConfig;

      /***/
    },
    /* 38 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_visible',
        function () {
          return f1_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f2_visible',
        function () {
          return f2_visible;
        },
      );
      function f1_visible(props) {
        return props.showSideBar;
      }
      function f2_visible(props) {
        return props.showSideBar;
      }

      /***/
    },
    /* 39 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      const symbolConfig = [
        {
          id: 'SpZNRSS1hcBXpPT30yok2',
          name: 'Header',
          definitions: [
            {
              componentId: 'ZubPbXDHOtVDemU26pYRi',
              type: 'flexbox',
              props: {
                flexWrap: true,
                flexDirection: 'column',
                justifyContent: 'initial',
                alignItems: 'initial',
                alignContent: 'initial',
                classNames: 'container',
              },
              layout: 'base',
              children: [
                {
                  componentId: '7vJvGWTue3wJJTCS3mfAX',
                  type: 'breadcrumb',
                  props: {
                    space: {
                      marginBottom: 'md',
                      marginTop: 'lg',
                    },
                    items: [
                      {
                        id: 'kdmsxtik',
                        label: "i18n('bc_home')",
                        linkTarget: '_self',
                        link: '/',
                      },
                      {
                        id: 'kdmsyjm9',
                        label: "i18n('bc_digitalServices')",
                        link: 'https://www.tamm.abudhabi/tamm-centers-services',
                        linkTarget: '_self',
                      },
                      {
                        id: 'kdmszcbw',
                        label: "i18n('bc_DED')",
                        link:
                          'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                        linkTarget: '_self',
                      },
                    ],
                  },
                  parentComponentId: 'no_parent',
                  sharedProps: ['i18n', 'locale'],
                },
                {
                  componentId: '4wTDq9dCLSvn6yueeb1LJ',
                  type: 'text',
                  props: {
                    variant: 'h1',
                    content: "i18n('serviceCardServicename')",
                    displayAsHtml: false,
                  },
                  layout: 'base',
                  parentComponentId: 'no_parent',
                  sharedProps: ['i18n', 'locale'],
                },
              ],
            },
          ],
        },
      ];
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = symbolConfig;

      /***/
    },
    /* 40 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        41,
      );

      const symbolConfig = [
        {
          id: '9D0MQ6LCSJOtHaHem5NP5',
          name: 'Application Details',
          definitions: [
            {
              componentId: 'x8NzMMR4useFQBHrXKDV0',
              type: 'checkbox',
              props: {
                name: '',
                id: '',
                tabIndex: 0,
                autoFocus: false,
                readOnly: false,
                label: "i18n('applicantDetailsCheckboxContact')",
                disabled: false,
                uiType: '',
                description: '',
                validateStatus: '',
                meta: '',
                space: {
                  marginBottom: 'lg',
                },
                onClick: _functions__WEBPACK_IMPORTED_MODULE_0__['f1_onClick'],
                onChange:
                  _functions__WEBPACK_IMPORTED_MODULE_0__['call_f2_onChange'],
                checked: '${state.contactDetailsFlag}',
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'contactDetailsFlag',
                'user',
                'actions',
              ],
            },
            {
              componentId: 'GEzYxD1nNaqiuEuCint5u',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 2,
                  sm: 1,
                },
                space: {
                  marginTop: '',
                },
                visible: _functions__WEBPACK_IMPORTED_MODULE_0__['f3_visible'],
              },
              layout: 'base',
              children: [
                {
                  componentId: 'k4kDHPtQlLBE_fs1zZBWb',
                  type: 'input',
                  props: {
                    label: "i18n('applicantDetailsNameField')",
                    value: '${state.contactDetailsName}',
                    defaultValue: '',
                    'aria-label': "i18n('applicantDetailsNameField')",
                    validateStatus: '${state.nameValidateStatus}',
                    disabled: '${state.contactDetailsFlag}',
                    readonly: false,
                    help: '${state.nameValidateHelp}',
                    placeholder: '',
                    size: 'default',
                    textDirection: 'ltr',
                    name: '',
                    type: 'text',
                    tabIndex: 0,
                    space: {
                      marginBottom: 'lg',
                    },
                    onChange:
                      _functions__WEBPACK_IMPORTED_MODULE_0__[
                        'call_f4_onChange'
                      ],
                    visible: '',
                  },
                  layout: 'base',
                  columnIndex: 0,
                  sharedProps: [
                    'i18n',
                    'locale',
                    'actions',
                    'contactDetailsFlag',
                    'contactDetailsName',
                    'nameValidateStatus',
                    'nameValidateHelp',
                    'actions',
                  ],
                },
                {
                  componentId: 'RqPbZXaLXOeHlhnwz02ab',
                  type: 'input',
                  props: {
                    label: "i18n('applicantDetailsEmailField')",
                    value: '${state.contactDetailsEmail}',
                    defaultValue: '',
                    'aria-label': "i18n('applicantDetailsEmailField')",
                    validateStatus: '${state.emailValidateStatus}',
                    disabled: '${state.contactDetailsFlag}',
                    readonly: false,
                    help: '${state.emailValidateHelp}',
                    placeholder: '',
                    size: 'default',
                    textDirection: 'ltr',
                    name: '',
                    type: 'text',
                    space: {
                      marginTop: '',
                      marginBottom: 'lg',
                    },
                    tabIndex: 0,
                    onChange:
                      _functions__WEBPACK_IMPORTED_MODULE_0__[
                        'call_f5_onChange'
                      ],
                    visible: '',
                  },
                  layout: 'base',
                  columnIndex: 0,
                  sharedProps: [
                    'i18n',
                    'locale',
                    'actions',
                    'contactDetailsEmail',
                    'emailValidateStatus',
                    'contactDetailsFlag',
                    'emailValidateHelp',
                    'actions',
                  ],
                },
                {
                  componentId: 'a3tmA1HJd2PoVrhELaOF5',
                  type: 'inputTelephone',
                  props: {
                    i18n: '',
                    help: '${state.mobileValidateHelp}',
                    validateStatus: '${state.mobileValidateStatus}',
                    label: "i18n('applicantDetailsNumberField')",
                    'aria-label': "i18n('applicantDetailsNumberField')",
                    disabled: '${state.contactDetailsFlag}',
                    value: '${state.contactDetailsMobile}',
                    code: null,
                    countries: [],
                    size: 'default',
                    defaultValue: {},
                    tabIndex: 0,
                    space: {
                      marginBottom: 'lg',
                    },
                    onSelect:
                      _functions__WEBPACK_IMPORTED_MODULE_0__[
                        'call_f6_onSelect'
                      ],
                    visible: '',
                  },
                  layout: 'base',
                  columnIndex: 1,
                  sharedProps: [
                    'i18n',
                    'locale',
                    'actions',
                    'mobileValidateHelp',
                    'mobileValidateStatus',
                    'contactDetailsFlag',
                    'contactDetailsMobile',
                    'actions',
                  ],
                },
              ],
            },
            {
              componentId: 'zTQtz7Bm5KbcT0pffQ2Lq',
              type: 'alert',
              props: {
                status: 'error',
                message: '${state.camundaMessage}',
                onClose: null,
                space: {
                  marginBottom: '',
                },
                visible: _functions__WEBPACK_IMPORTED_MODULE_0__['f7_visible'],
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale', 'camundaMessage'],
            },
          ],
        },
      ];
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = symbolConfig;

      /***/
    },
    /* 41 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f1_onClick',
        function () {
          return f1_onClick;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f2_onChange',
        function () {
          return call_f2_onChange;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f3_visible',
        function () {
          return f3_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f4_onChange',
        function () {
          return call_f4_onChange;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f5_onChange',
        function () {
          return call_f5_onChange;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f6_onSelect',
        function () {
          return call_f6_onSelect;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f7_visible',
        function () {
          return f7_visible;
        },
      );
      async function f1_onClick(props) {}
      function call_f2_onChange(props) {
        const { locale } = props;
        return value => {
          props.actions.camundaMessage.update('');
          const checkBoxState = props.contactDetailsFlag ? false : true;
          props.actions.contactDetailsFlag.update(checkBoxState);
          if (checkBoxState) {
            const name =
              locale === 'en'
                ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
                : props.user['Full Name AR'];
            props.actions.contactDetailsName.update(name);
            props.actions.contactDetailsMobile.update(props.user.Mobile);
            props.actions.contactDetailsEmail.update(props.user['User Email']);
          } else {
            props.actions.contactDetailsName.update('');
            props.actions.contactDetailsMobile.update('');
            props.actions.contactDetailsEmail.update('');
          }
          props.actions.nameValidateStatus.update('');
          props.actions.nameValidateHelp.update('');
          props.actions.mobileValidateStatus.update('');
          props.actions.mobileValidateHelp.update('');
          props.actions.emailValidateStatus.update('');
          props.actions.emailValidateHelp.update('');
        };
      }
      function f3_visible(props) {}
      function call_f4_onChange(props) {
        return value => {
          props.actions.nameValidateStatus.update('');
          props.actions.nameValidateHelp.update('');
          if (!props.contactDetailsFlag && value.length < 5) {
            props.actions.nameValidateStatus.update('error');
            props.actions.nameValidateHelp.update(props.i18n('nameValidation'));
          }
          props.actions.contactDetailsName.update(value);
        };
      }
      function call_f5_onChange(props) {
        return value => {
          props.actions.emailValidateStatus.update('');
          props.actions.emailValidateHelp.update('');
          props.actions.contactDetailsEmail.update(value);
        };
      }
      function call_f6_onSelect(props) {
        return value => {
          props.actions.mobileValidateStatus.update('');
          props.actions.mobileValidateHelp.update('');
          props.actions.contactDetailsMobile.update(value);
        };
      }
      function f7_visible(props) {
        return props.camundaMessage ? true : false;
      }

      /***/
    },
    /******/
  ],
).default;
