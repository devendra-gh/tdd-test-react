export default /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _pages_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1,
      );
      /* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        3,
      );
      /* harmony import */ var _pages_selectlicences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        5,
      );
      /* harmony import */ var _pages_applicant_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        11,
      );
      /* harmony import */ var _pages_application_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        15,
      );
      /* harmony import */ var _pages_payment_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        17,
      );
      /* harmony import */ var _pages_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        19,
      );
      /* harmony import */ var _pages_paymentsuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        21,
      );
      /* harmony import */ var _pages_payment_failure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        23,
      );
      /* harmony import */ var _pages_went_wrong__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        25,
      );
      /* harmony import */ var _pages_no_information_found__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        27,
      );
      /* harmony import */ var _pages_account_upgrade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        29,
      );
      /* harmony import */ var _pages_no_active_licence__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        31,
      );
      /* harmony import */ var _pages_continue_process__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        33,
      );
      /* harmony import */ var _localization_en__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        35,
      );
      /* harmony import */ var _localization_ar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        36,
      );
      /* harmony import */ var _symbols_XPuuzzSsc1PM7KGrp2LDX__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        37,
      );
      /* harmony import */ var _symbols_zUb_2ox3pxzJj2_JHqAh1__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        39,
      );
      /* harmony import */ var _symbols_Tg2IHCN6ziC51qE0aPQ4n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        40,
      );

      const config = {
        version: '682',
        appName: 'Adu-business-SAS-EHSMS-ReviewingFeesPayment - DROP 1',
        defaults: {
          title: 'Adu-business-SAS-EHSMS-ReviewingFeesPayment - DROP 1',
        },
        initialState: {
          table_column: [
            {
              id: 'licenceNumber',
              title: 'Licence Number',
            },
            {
              id: 'companyName',
              title: 'Company Name',
            },
          ],
          table_row: [],
          licenceFilter: '',
          totalRecords: 0,
          currentIndex: 0,
          actualLicenceList: [],
          table_row_copy: [],
          licenceNo: '',
          alertFlag: false,
          feeAmount: '',
          contactName: '',
          contactNumber: '',
          contactEmail: '',
          helpFeeAmount: '',
          validateStatus_Fee: '',
          help_contact_name: '',
          validateStatus_contact_name: '',
          help_phone_no: '',
          validateStatus_phone: '',
          help_email: '',
          validateStatus_email: '',
          hideContactDetails: false,
          paymentTag: [
            {
              label: "i18n('global-reference')",
              value: '',
            },
            {
              label: "i18n('global-submitted')",
              value: '',
            },
          ],
          payment_table_columns: [
            {
              id: 'description',
              title: "i18n('paymentSummary-descriptionColumn')",
            },
            {
              id: 'price',
              title: "i18n('paymentSummary-priceColumn')",
            },
          ],
          payment_table_rows: [],
          steps: [
            {
              id: 'Select Licence',
              label: "i18n('step_selectLicence-title')",
              link: '',
              status: '',
            },
            {
              id: 'Enter contact details',
              label: "i18n('step_applicantDetails-title')",
              link: '',
              status: '',
            },
            {
              id: 'Make Payment',
              label: "i18n('step_paymentSummary-tabletitle')",
              link: '',
              status: '',
            },
            {
              id: 'Download Receipt',
              label: "i18n('step_applicationApproved-downloadButton')",
              link: '',
              status: '',
            },
          ],
          customerSatisfaction: [],
          contactDetailsFlag: true,
          paymentTotal: 0,
          currentStepIndex: 0,
          currentSubStepIndex: 0,
          expandedStepIndexes: [],
          radioValue: true,
          disableContactName: false,
          disableContactNo: false,
          disableContactEmail: false,
          camundaMessage: '',
          businessKey: '',
          instanceId: '',
          showSideBar: false,
          alertTriangle: 'AlertTriangle',
          pageLoader: false,
          apTransactionNo: '',
          capId: '',
          paymentURL: '',
          downloadFailureFlag: false,
          downloadErrorMsg: '',
          applicationIssuedDescription: '',
          paymentLinkString: '',
          smartPassURL: '',
          uaePassURL: '',
          adgeName: 'DED',
          serviceCode: 'DED_022',
          productName: 'NOP',
          currentPageSize: 0,
          process_steps: [],
          tables_efefbffdbc: [
            {
              size: '',
              selectable: false,
              clickable: false,
              headerHidden: false,
              disabledSelectionVisible: false,
              title: '',
            },
          ],
          tables_abecddacea: [
            {
              size: '',
              selectable: false,
              clickable: false,
              headerHidden: false,
              disabledSelectionVisible: false,
              title: '',
            },
          ],
          process_ffdfdcafea: '',
          startLogin_steps: {},
          loading: false,
          waitingApprovalDescription: '',
        },
        persistStates: [],
        symbols: [
          ..._symbols_XPuuzzSsc1PM7KGrp2LDX__WEBPACK_IMPORTED_MODULE_16__[
            'default'
          ],
          ..._symbols_zUb_2ox3pxzJj2_JHqAh1__WEBPACK_IMPORTED_MODULE_17__[
            'default'
          ],
          ..._symbols_Tg2IHCN6ziC51qE0aPQ4n__WEBPACK_IMPORTED_MODULE_18__[
            'default'
          ],
        ],
        dictionary: {
          en: _localization_en__WEBPACK_IMPORTED_MODULE_14__['default'],
          ar: _localization_ar__WEBPACK_IMPORTED_MODULE_15__['default'],
        },
        skipFetchState: [
          '/login',
          '/selectlicences',
          '/application-error',
          '/account-upgrade',
          '/no-active-licence',
          '/continue-process',
        ],
        pages: [
          ..._pages_start__WEBPACK_IMPORTED_MODULE_0__['default'],
          ..._pages_login__WEBPACK_IMPORTED_MODULE_1__['default'],
          ..._pages_selectlicences__WEBPACK_IMPORTED_MODULE_2__['default'],
          ..._pages_applicant_details__WEBPACK_IMPORTED_MODULE_3__['default'],
          ..._pages_application_confirmation__WEBPACK_IMPORTED_MODULE_4__[
            'default'
          ],
          ..._pages_payment_summary__WEBPACK_IMPORTED_MODULE_5__['default'],
          ..._pages_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          ..._pages_paymentsuccess__WEBPACK_IMPORTED_MODULE_7__['default'],
          ..._pages_payment_failure__WEBPACK_IMPORTED_MODULE_8__['default'],
          ..._pages_went_wrong__WEBPACK_IMPORTED_MODULE_9__['default'],
          ..._pages_no_information_found__WEBPACK_IMPORTED_MODULE_10__[
            'default'
          ],
          ..._pages_account_upgrade__WEBPACK_IMPORTED_MODULE_11__['default'],
          ..._pages_no_active_licence__WEBPACK_IMPORTED_MODULE_12__['default'],
          ..._pages_continue_process__WEBPACK_IMPORTED_MODULE_13__['default'],
        ],
        states: {
          initialState: {
            table_column: [
              {
                id: 'licenceNumber',
                title: 'Licence Number',
              },
              {
                id: 'companyName',
                title: 'Company Name',
              },
            ],
            table_row: [],
            licenceFilter: '',
            totalRecords: 0,
            currentIndex: 0,
            actualLicenceList: [],
            table_row_copy: [],
            licenceNo: '',
            alertFlag: false,
            feeAmount: '',
            contactName: '',
            contactNumber: '',
            contactEmail: '',
            helpFeeAmount: '',
            validateStatus_Fee: '',
            help_contact_name: '',
            validateStatus_contact_name: '',
            help_phone_no: '',
            validateStatus_phone: '',
            help_email: '',
            validateStatus_email: '',
            hideContactDetails: false,
            paymentTag: [
              {
                label: "i18n('global-reference')",
                value: '',
              },
              {
                label: "i18n('global-submitted')",
                value: '',
              },
            ],
            payment_table_columns: [
              {
                id: 'description',
                title: "i18n('paymentSummary-descriptionColumn')",
              },
              {
                id: 'price',
                title: "i18n('paymentSummary-priceColumn')",
              },
            ],
            payment_table_rows: [],
            steps: [
              {
                id: 'Select Licence',
                label: "i18n('step_selectLicence-title')",
                link: '',
                status: '',
              },
              {
                id: 'Enter contact details',
                label: "i18n('step_applicantDetails-title')",
                link: '',
                status: '',
              },
              {
                id: 'Make Payment',
                label: "i18n('step_paymentSummary-tabletitle')",
                link: '',
                status: '',
              },
              {
                id: 'Download Receipt',
                label: "i18n('step_applicationApproved-downloadButton')",
                link: '',
                status: '',
              },
            ],
            customerSatisfaction: [],
            contactDetailsFlag: true,
            paymentTotal: 0,
            currentStepIndex: 0,
            currentSubStepIndex: 0,
            expandedStepIndexes: [],
            radioValue: true,
            disableContactName: false,
            disableContactNo: false,
            disableContactEmail: false,
            camundaMessage: '',
            businessKey: '',
            instanceId: '',
            showSideBar: false,
            alertTriangle: 'AlertTriangle',
            pageLoader: false,
            apTransactionNo: '',
            capId: '',
            paymentURL: '',
            downloadFailureFlag: false,
            downloadErrorMsg: '',
            applicationIssuedDescription: '',
            paymentLinkString: '',
            smartPassURL: '',
            uaePassURL: '',
            adgeName: 'DED',
            serviceCode: 'DED_022',
            productName: 'NOP',
            currentPageSize: 0,
            process_steps: [],
            tables_efefbffdbc: [
              {
                size: '',
                selectable: false,
                clickable: false,
                headerHidden: false,
                disabledSelectionVisible: false,
                title: '',
              },
            ],
            tables_abecddacea: [
              {
                size: '',
                selectable: false,
                clickable: false,
                headerHidden: false,
                disabledSelectionVisible: false,
                title: '',
              },
            ],
            process_ffdfdcafea: '',
            startLogin_steps: {},
            loading: false,
            waitingApprovalDescription: '',
          },
          persistStates: [],
        },
        hero: [
          {
            type: 'symbol',
            props: {
              symbol: 'zUb_2ox3pxzJj2-JHqAh1',
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
              symbol: 'XPuuzzSsc1PM7KGrp2LDX',
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
          title: 'Start',
          pageId: 'rtnswriguq9BAfb7MAQBf',
          path: '/',
          template: 'custom',
          props: {
            definitions: [],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
        if (props.loggedIn) {
          props.history.push('/selectlicences');
        } else {
          props.history.push('/login');
        }
      }
      async function onPageInit(props) {}

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
          title: 'Login',
          pageId: 'ikVy6BDca6MPvusUPAANq',
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
                  content: "<p>i18n('pleaseLogIn')</p>",
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
                    linkTarget: '_self',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'smartPassURL', 'uaePassURL'],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
          props.history.push('/selectlicences');
        }
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
          title: 'SelectLicences',
          pageId: 'Nnqi8j_C5CR7M67tQk-aI',
          expanded: true,
          path: '/selectlicences',
          template: 'custom',
          layout: 'sidebar',
          props: {
            definitions: [
              {
                componentId: 'hBaUjDsYlFjYWype3hF5A',
                type: 'text',
                props: {
                  variant: 'h3',
                  content: "i18n('selectLicence-title')",
                  displayAsHtml: false,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'XlAMig-Wnr7986pX2QYCQ',
                type: 'text',
                props: {
                  variant: 'p',
                  content: "i18n('selectLicence-description')",
                  displayAsHtml: false,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'r5LyTW87RpC7_wBY3ZhmT',
                type: 'table',
                props: {
                  size: 'default',
                  rowVerticalAlign: 'top',
                  selectable: true,
                  editable: false,
                  searchable: true,
                  headerHidden: false,
                  disabledSelectionVisible: false,
                  clickable: false,
                  isSingleSelect: true,
                  columns: '${state.table_column}',
                  items: '${state.table_row}',
                  title: "i18n('selectLicence-tableTitle')",
                  onSelectionChange:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'call_f1_onSelectionChange'
                    ],
                  total: '${state.totalRecords}',
                  currPage: '${state.currentIndex}',
                  pageSize: '${state.currentPageSize}',
                  onSearch:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['call_f2_onSearch'],
                  onPageTurn:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'call_f3_onPageTurn'
                    ],
                  pageResizeOptions: [],
                  search: '${state.licenceFilter}',
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'actions',
                  'table_row',
                  'actualLicenceList',
                  'licenceNo',
                  'licenceFilter',
                  'table_column',
                  'totalRecords',
                  'currentIndex',
                  'currentPageSize',
                  'actions',
                ],
              },
              {
                componentId: 'q0V-DvsswsCoFa_D1KYXE',
                type: 'alert',
                props: {
                  status: 'error',
                  message: "i18n('error_msg')",
                  onClose: null,
                  space: {
                    marginTop: 'md',
                    marginBottom: 'sm',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f4_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'alertFlag'],
              },
              {
                componentId: 'k89ANxAR2xHMVu0xeMspb',
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
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f5_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'h6WuKM-7XqpzZgsGjpET5',
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
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'MnANuJnfyIqJnyEIpu9zO',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('global-next')",
                      type: 'button',
                      uiType: 'primary',
                      disabled: false,
                      'aria-label': 'button',
                      size: 'default',
                      icon: null,
                      alignIcon: 'end',
                      withArrow: true,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      applyAutoWidth: false,
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f6_onClick'],
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'history',
                      'actions',
                      'bpm',
                      'licenceNo',
                      'actions',
                    ],
                  },
                  {
                    componentId: 'hYj8WlOyiNUSCuJydZuiu',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('button_cancel')",
                      type: 'button',
                      uiType: 'text-link',
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
                      space: {
                        marginRight: 'md',
                      },
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f7_onClick'],
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale', 'history'],
                  },
                ],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              codeId: '1593585945432',
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
              'table_row',
              'actualLicenceList',
              'licenceNo',
              'licenceFilter',
              'table_column',
              'totalRecords',
              'currentIndex',
              'currentPageSize',
              'alertFlag',
              'camundaMessage',
            ],
            mapDispatch: [
              'businessKey',
              'instanceId',
              'licenceNo',
              'licenceFilter',
              'showSideBar',
              'camundaMessage',
              'loading',
              'alertFlag',
              'currentStepIndex',
              'expandedStepIndexes',
              'steps',
              'currentPageSize',
              'table_row',
              'currentIndex',
              'totalRecords',
              'actualLicenceList',
              'table_column',
              'totalLicenceList',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 6 */
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
        'call_f1_onSelectionChange',
        function () {
          return call_f1_onSelectionChange;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f2_onSearch',
        function () {
          return call_f2_onSearch;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f3_onPageTurn',
        function () {
          return call_f3_onPageTurn;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f4_visible',
        function () {
          return f4_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f5_visible',
        function () {
          return f5_visible;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f6_onClick',
        function () {
          return f6_onClick;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f7_onClick',
        function () {
          return f7_onClick;
        },
      );
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8,
      );
      /* harmony import */ var _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        9,
      );

      async function init(props) {
        props.actions.businessKey.update('');
        props.actions.instanceId.update('');
        props.actions.licenceNo.update('');
        props.actions.licenceFilter.update('');
        props.actions.showSideBar.update(true);
        props.actions.camundaMessage.update('');
        props.actions.loading.update(false);
        props.actions.alertFlag.update('');
        props.actions.currentStepIndex.update(0);
        props.actions.expandedStepIndexes.update([]);
        const cStep = { id: 'step_selectLicence', status: '' };
        const cSubStep = { id: '', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        props.actions.currentPageSize.update(10);
        //  props.actions.table_row.update('');
        // props.actions.currentIndex.update('');
        // props.actions.totalRecords.update('');
        // props.actions.camundaMessage.update('');
        // props.actions.currentPageSize.update('');
        // props.actions.actualLicenceList.update('');
        //props.actions.table_column.update('');
      }
      async function onPageInit(props) {
        if (
          props.user &&
          (props.user.Type === 'SOP3' ||
            (props.user.provider === 'uaepass' && props.user.Type === 'SOP2'))
        ) {
          const data = await Object(
            _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_2__[
              'getLicenceList'
            ],
          )(props);
          if (data.length === 0) {
            props.history.push('/no-active-licence');
          }
          props.actions.actualLicenceList.update(data);
          props.actions.currentPageSize.update(10);
          const filteredData = Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
              'filteredLicenceList'
            ],
          )(
            data,
            props.locale,
            props.licenceFilter || '',
            1,
            props.actions.totalRecords,
            props.licenceNo,
            props.actions.currentPageSize,
          );
          props.actions.table_row.update(filteredData);
          props.actions.currentIndex.update(1);
          props.actions.totalRecords.update(data.length);
          props.actions.camundaMessage.update('');
          const tableHeaders = [
            {
              id: 'licenceNumber',
              title: props.i18n('selectLicence-licenceColumn'),
              sortable: true,
            },
            {
              id: 'companyName',
              title: props.i18n('selectLicence-companyColumn'),
              sortable: true,
            },
          ];
          props.actions.table_column.update(tableHeaders);
        }
      }
      function call_f1_onSelectionChange(props) {
        return value => {
          props.actions.licenceNo.update(value[0] || '');
          props.actions.alertFlag.update(false);
          const updatedItems = props.table_row.map(item => ({
            ...item,
            selected: !!value.find(id => item._id == id),
          }));
          props.actions.table_row.update(updatedItems);
        };
      }
      function call_f2_onSearch(props) {
        return value => {
          props.actions.licenceFilter.update(value);
          const pagedItems = Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
              'filteredLicenceList'
            ],
          )(
            props.actualLicenceList,
            props.locale,
            value,
            1,
            props.actions.totalRecords,
            props.licenceNo,
            props.actions.currentPageSize,
          );
          props.actions.table_row.update(pagedItems);
          props.actions.currentIndex.update(1);
          // props.actions.licenceNo.update('');
        };
      }
      function call_f3_onPageTurn(props) {
        return pageNumber => {
          props.actions.table_row.reset();
          const pagedItems = Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
              'filteredLicenceList'
            ],
          )(
            props.actualLicenceList,
            props.locale,
            props.licenceFilter,
            pageNumber,
            props.actions.totalRecords,
            props.licenceNo,
            props.actions.currentPageSize,
          );
          props.actions.table_row.update(pagedItems);
          props.actions.currentIndex.update(pageNumber);
          // props.actions.totalLicenceList.update(data.length);
          props.actions.licenceNo.update('');
        };
      }
      function f4_visible(props) {
        return !!props.alertFlag;
      }
      function f5_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f6_onClick(props) {
        props.actions.alertFlag.update(false);
        if (props.licenceNo) {
          // const data = await props.bpm.startProcess({
          //   informationFound: 'yes',
          //   successSubmission: 'yes',
          //   paymentSuccess: 'yes',
          //   successPayment: 'yes',
          // });
          // if (data.success && data.data && data.data.businessKey && data.data.id) {
          //   props.actions.instanceId.update(data.data.id);
          //   props.actions.businessKey.update(data.data.businessKey);
          // }
          // returnCamundaMessage(data, props);
          props.actions.licenceFilter.update('');
          props.actions.currentPageSize.update(10);
          props.history.push('/application-submit');
        } else {
          props.actions.alertFlag.update(true);
        }
      }
      async function f7_onClick(props) {
        props.history.push('/');
      }

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
          errorMessage = props.i18n('somethingWentWrong-title');
        }
        props.actions.camundaMessage.update(errorMessage);
        if (errorMessage && redirectFlag) {
          setTimeout(() => {
            localStorage.setItem('forceRedirect', window.location.href);
            window.location.href = '/login';
          }, 5000);
        }
        return errorMessage;
      };
      const getDashboardUrl = () => {
        let protocol = location.protocol;
        const slashes = protocol.concat('//');
        const host = slashes.concat(window.location.hostname);
        return `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/EHSMSReviewingFeesPayment`;
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

      /***/
    },
    /* 9 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getGspContent',
        function () {
          return getGspContent;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getLicenceList',
        function () {
          return getLicenceList;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'downloadFile',
        function () {
          return downloadFile;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'sendEmailNotification',
        function () {
          return sendEmailNotification;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getMetaDataFromAdlocker',
        function () {
          return getMetaDataFromAdlocker;
        },
      );
      const getLicenceList = async props => {
        let licenceList = await props
          .fetch(
            '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/listTradeLicensesV3',
            'POST',
            // {
            //   emiratesIdNumber: props.user.IDN, // '784198958090718', //props.user.IDN // '784198958090718', //props.user.IDN, //'784198505249585', // || ,
            // }
          )
          .then(response => response.data)
          .catch(err => err);
        let filteredList = [];
        if (
          licenceList &&
          licenceList.TradeLicensesList &&
          Object.values(licenceList.TradeLicensesList.contents).length
        ) {
          licenceList = Array.isArray(licenceList.TradeLicensesList.contents)
            ? licenceList.TradeLicensesList.contents
            : [licenceList.TradeLicensesList.contents];
          const newLicenceList = removeDuplicate(licenceList);
          filteredList = newLicenceList.filter(
            item => item.tradeLicenseNumber.toLowerCase().search('in') >= 0,
          );
        }
        return filteredList;
        //return dummylicenceList;
      };
      const removeDuplicate = listLicense => {
        const obj = {};
        return Array.isArray(listLicense)
          ? Object.keys(
              listLicense.reduce((prev, next) => {
                if (!obj[next.tradeLicenseNumber])
                  obj[next.tradeLicenseNumber] = next;
                return obj;
              }, obj),
            ).map(i => obj[i])
          : [];
      };
      const getDEDToken = async props => {
        const token = await props
          .fetch(
            '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/authenticateUser',
            'POST',
            {
              agency: '{{configVars.ded.agency}}',
              password: '{{configVars.ded.password}}',
              userId: '{{configVars.ded.userId}}',
            },
          )
          .then(response => response.data.result.token)
          .catch(err => err);
        return token;
      };
      const downloadFile = async (instanceId, certificateName, props) => {
        let response = {};
        const certificatetype = 'industrialLicence';
        response = await props.fetch(
          `/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/businessCertificate?instanceId=${instanceId}&type=${certificatetype}&certificateName=${certificateName}`,
          'POST',
          {
            emiratesId: '{{user.IDN}}',
          },
        );
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
                emailType: emailType,
              },
            )
            .then(response => response.data)
            .catch(err => err);
          return result;
        } catch (error) {
          return 'unable to send notification email' + error;
        }
      };
      const getGspContent = async props => {
        const serviceCardList = await props
          .fetch(
            '/pub/proxy/ms-call/gateway/TammJourneyGsp/1.0/getServiceByCode',
            'POST',
            {
              lang: 'en',
              serviceCode: 'DED/0071',
            },
          )
          .then(response => response.data)
          .catch(err => err);
        return serviceCardList;
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
                body: {
                  data: {
                    ApplicationID,
                  },
                },
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
          title: 'Applicant Details',
          pageId: 'VuBNyMXNgs6w97j9O3Far',
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
                  content: "i18n('applicantDetails-title')",
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
                  content: "i18n('contact_description')",
                  displayAsHtml: false,
                  space: {
                    marginBottom: 'lg',
                  },
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'ngXq0F5g-WE3L3ZVyahpz',
                type: 'form',
                props: {
                  definitions: [
                    {
                      componentId: 'QuSs7oAl2v-vwkCa7DCTq',
                      symbolTitle: 'Symbol 1',
                      type: 'symbol',
                      props: {
                        symbol: 'Tg2IHCN6ziC51qE0aPQ4n',
                      },
                      layout: 'base',
                    },
                  ],
                  description: '',
                  title: '',
                  formValues: '',
                  btnSubmitLabel: "i18n('global-next')",
                  includeCancelButton: true,
                  includeBackButton: true,
                  btnBackLabel: "i18n('global-back')",
                  validateStatus: {
                    valid: true,
                    message: '',
                  },
                  btnSubmitArrow: 'end',
                  btnBackArrow: 'start',
                  btnSubmitClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'f1_btnSubmitClick'
                    ],
                  btnCancelClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__[
                      'f2_btnCancelClick'
                    ],
                  btnBackClick:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f3_btnBackClick'],
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'history',
                  'actions',
                  'bpm',
                  'analytics',
                  'contactName',
                  'validateStatus_contact_name',
                  'contactNumber',
                  'contactEmail',
                  'licenceNo',
                  'instanceId',
                  'user',
                  '',
                  'actions',
                ],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
                id: 'Tg2IHCN6ziC51qE0aPQ4n',
                name: 'Application Details',
                definitions: [
                  {
                    componentId: 'LhJwRzgLi4aDXM62GnjV_',
                    type: 'checkbox',
                    props: {
                      name: '',
                      id: '',
                      tabIndex: 0,
                      autoFocus: false,
                      readOnly: false,
                      label: "i18n('applicantDetails-checkboxContact')",
                      disabled: false,
                      uiType: '',
                      description: '',
                      validateStatus: '',
                      meta: '',
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
                              "{\"code\":\"  const { locale } = props;\\n  return (value: any) => {\\n    const checkBoxState = props.state.contactDetailsFlag ? false : true;\\n    props.actions.contactDetailsFlag.update(checkBoxState);\\n    if (checkBoxState) {\\n      const name =\\n        locale === 'en'\\n          ? `${props.state.user['First Name EN']} ${props.state.user['Last Name EN']}`\\n          : props.state.user['Full Name AR'];\\n      props.actions.contactName.update(name);\\n      props.actions.contactNumber.update(props.state.user.Mobile);\\n      props.actions.contactEmail.update(props.state.user['User Email']);\\n\\n      // disable all the fields\\n\\n      props.actions.disableContactName.update(true);\\n      props.actions.disableContactNo.update(true);\\n      props.actions.disableContactEmail.update(true);\\n    } else {\\n      props.actions.contactName.update('');\\n      props.actions.contactNumber.update('');\\n      props.actions.contactEmail.update('');\\n      props.actions.disableContactName.update(false);\\n      props.actions.disableContactNo.update(false);\\n      props.actions.disableContactEmail.update(false);\\n    }\\n    props.actions.validateStatus_contact_name.update('');\\n    props.actions.help_contact_name.update('');\\n    props.actions.help_phone_no.update('');\\n    props.actions.validateStatus_phone.update('');\\n    props.actions.help_email.update('');\\n    props.actions.validateStatus_email.update('');\\n  };\",\"shouldCallCustomCode\":true}",
                          },
                        ],
                      },
                      visible: '',
                      checked: '${state.contactDetailsFlag}',
                      space: {
                        marginBottom: 'lg',
                      },
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
                    componentId: 'KDgS-N1IF9731nMY_wf0b',
                    type: 'grid',
                    props: {
                      columns: 2,
                      flexColumns: {
                        xl: 2,
                        lg: 2,
                        md: 2,
                        sm: 1,
                      },
                    },
                    layout: 'base',
                    children: [
                      {
                        componentId: '-F5Om4UcgMI1FACOCanHJ',
                        type: 'input',
                        props: {
                          label: "i18n('applicantDetails-nameField')",
                          value: '${state.contactName}',
                          defaultValue: '${state.contactName}',
                          'aria-label': 'input',
                          validateStatus:
                            '${state.validateStatus_contact_name}',
                          disabled: '${state.contactDetailsFlag}',
                          readonly: false,
                          help: '${state.help_contact_name}',
                          placeholder: '',
                          size: 'default',
                          textDirection: 'ltr',
                          name: '',
                          type: 'text',
                          tabIndex: 0,
                          space: {
                            marginBottom: 'lg',
                            marginTop: '',
                          },
                          onChange: {
                            type: 'func',
                            actions: [
                              {
                                type: 'customCode',
                                code:
                                  "{\"code\":\"  return (name: string) => {\\n    props.actions.help_contact_name.update('');\\n    props.actions.validateStatus_contact_name.update('');\\n    if (!props.state.contactDetailsFlag && name.length < 5) {\\n      props.actions.validateStatus_contact_name.update('error');\\n      props.actions.help_contact_name.update(props.i18n('nameValidation'));\\n    }\\n    props.actions.contactName.update(name);\\n  };\",\"shouldCallCustomCode\":true}",
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
                          'contactName',
                          'validateStatus_contact_name',
                          'help_contact_name',
                          'actions',
                        ],
                      },
                      {
                        componentId: 'mogeKqZmJSl3N4RYC2bXo',
                        type: 'inputTelephone',
                        props: {
                          i18n: '',
                          help: '${state.help_phone_no}',
                          validateStatus: '${state.validateStatus_phone}',
                          label: "i18n('applicantDetails-numberField')",
                          'aria-label': 'Telephone input',
                          disabled: '${state.contactDetailsFlag}',
                          value: '${state.contactNumber}',
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
                                  '{"code":"return(no:any) => {\\n  props.actions.contactNumber.update(no);\\n  props.actions.help_phone_no.update(\'\');\\n  props.actions.validateStatus_phone.update(\'\');\\n}","shouldCallCustomCode":true}',
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
                          'help_phone_no',
                          'validateStatus_phone',
                          'contactDetailsFlag',
                          'contactNumber',
                          'actions',
                        ],
                      },
                      {
                        componentId: 'b11gY1VfcmzxGoY4odcko',
                        type: 'input',
                        props: {
                          label: "i18n('applicantDetails-emailField')",
                          tabIndex: 0,
                          value: '${state.contactEmail}',
                          defaultValue: '${state.contactEmail}',
                          'aria-label': 'input',
                          validateStatus: '${state.validateStatus_email}',
                          disabled: '${state.contactDetailsFlag}',
                          readonly: false,
                          help: '${state.help_email}',
                          placeholder: '',
                          size: 'default',
                          textDirection: 'ltr',
                          name: '',
                          type: 'text',
                          onChange: {
                            type: 'func',
                            actions: [
                              {
                                type: 'customCode',
                                code:
                                  '{"code":"return(email:string ) => {\\n  props.actions.contactEmail.update(email);\\n  props.actions.help_email.update(\'\');\\n  props.actions.validateStatus_email.update(\'\');\\n}","shouldCallCustomCode":true}',
                              },
                            ],
                          },
                          space: {
                            marginTop: '',
                            marginBottom: 'lg',
                          },
                          visible: '',
                        },
                        layout: 'base',
                        columnIndex: 0,
                        sharedProps: [
                          'i18n',
                          'locale',
                          'actions',
                          'contactEmail',
                          'validateStatus_email',
                          'contactDetailsFlag',
                          'help_email',
                          'actions',
                        ],
                      },
                    ],
                  },
                  {
                    componentId: 'l1vTlmYUaaGmRDTA2K8ob',
                    type: 'alert',
                    props: {
                      status: 'error',
                      message: '${state.camundaMessage}',
                      onClose: null,
                      space: {
                        marginTop: 'sm',
                        marginBottom: 'md',
                      },
                      visible:
                        '{"code":"return props.state.camundaMessage ? true : false;"}',
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
              'contactName',
              'validateStatus_contact_name',
              'help_contact_name',
              'help_phone_no',
              'validateStatus_phone',
              'contactNumber',
              'contactEmail',
              'validateStatus_email',
              'help_email',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'licenceNo',
              'instanceId',
              '',
            ],
            mapDispatch: [
              'contactName',
              'help_contact_name',
              'validateStatus_contact_name',
              'contactNumber',
              'help_phone_no',
              'validateStatus_phone',
              'contactEmail',
              'help_email',
              'validateStatus_email',
              'showSideBar',
              'loading',
              'currentStepIndex',
              'expandedStepIndexes',
              'steps',
              'camundaMessage',
              'disableContactName',
              'disableContactNo',
              'disableContactEmail',
              'contactDetailsFlag',
              'instanceId',
              'businessKey',
              '',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: ['responseDescription'],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 12 */
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
        'f1_btnSubmitClick',
        function () {
          return f1_btnSubmitClick;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f2_btnCancelClick',
        function () {
          return f2_btnCancelClick;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f3_btnBackClick',
        function () {
          return f3_btnBackClick;
        },
      );
      /* harmony import */ var _sharedFunctions_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        13,
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        14,
      );
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        8,
      );

      async function init(props) {
        props.actions.contactName.update('');
        props.actions.help_contact_name.update('');
        props.actions.validateStatus_contact_name.update('');
        props.actions.contactNumber.update('');
        props.actions.help_phone_no.update('');
        props.actions.validateStatus_phone.update('');
        props.actions.contactEmail.update('');
        props.actions.help_email.update('');
        props.actions.validateStatus_email.update('');
        props.actions.showSideBar.update(true);
        props.actions.loading.update(false);
        props.actions.currentStepIndex.update(1);
        props.actions.expandedStepIndexes.update([]);
        const cStep = { id: 'step_enterContactDetails', status: '' };
        const cSubStep = { id: '', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_3__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        props.actions.camundaMessage.update('');
        if (props.contactDetailsFlag) {
          const name =
            props.locale === 'en'
              ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
              : props.user['Full Name AR'];
          props.actions.contactName.update(name);
          props.actions.contactNumber.update(props.user.Mobile);
          props.actions.contactEmail.update(props.user['User Email']);
          // disable all the fields
          props.actions.disableContactName.update(true);
          props.actions.disableContactNo.update(true);
          props.actions.disableContactEmail.update(true);
        }
      }
      async function onPageInit(props) {
        if (props.responseDescription) {
          props.actions.camundaMessage.update(props.responseDescription);
          Object(
            _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__[
              'addAnalyticsEvent'
            ],
          )(props, 'SLA', 'fail', 0, '');
        } else {
          props.actions.camundaMessage.update('');
        }
      }
      async function f1_btnSubmitClick(props, formValues) {
        const { i18n } = props;
        let validateStatus = true;
        if (props.contactName.trim() === '') {
          validateStatus = false;
          props.actions.help_contact_name.update(i18n('error_contactName'));
          props.actions.validateStatus_contact_name.update('error');
        }
        if (props.validateStatus_contact_name) {
          validateStatus = false;
        }
        if (
          props.contactNumber.trim() === '' ||
          !Object(
            _sharedFunctions_validation__WEBPACK_IMPORTED_MODULE_0__[
              'isMobile'
            ],
          )(props.contactNumber)
        ) {
          validateStatus = false;
          props.actions.help_phone_no.update(i18n('error_phoneNumber'));
          props.actions.validateStatus_phone.update('error');
        }
        if (
          props.contactEmail.trim() === '' ||
          !Object(
            _sharedFunctions_validation__WEBPACK_IMPORTED_MODULE_0__['isEmail'],
          )(props.contactEmail)
        ) {
          validateStatus = false;
          props.actions.help_email.update(i18n('error_email'));
          props.actions.validateStatus_email.update('error');
        }
        if (validateStatus) {
          props.actions.loading.update(true);
          const data = await props.bpm.startProcess({
            licenceNo: props.licenceNo,
            serviceName: 'EHSMS Reviewing',
            proName: props.contactName,
            proEmail: props.contactEmail,
            proMobileNumber: props.contactNumber,
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
            // const response = await props.bpm.message('workbench', {
            //   businessKey: data.data.businessKey,
            //   instanceId: props.instanceId,
            //   emiratesId: props.user['IDN'],
            //   messageName: 'onSubmit',
            //   isSubmit: 'yes',
            // });
            const serviceNameEn = 'EHSMS Reviewing Fee Payment';
            const serviceNameAr =
              'دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة';
            const paymentSuccessEn = `Thank you for making a payment on TAMM for ${serviceNameEn}. Your application has been successfully completed. The transaction receipt is attached in this email.`;
            const paymentSuccessAr = `<span dir='rtl'>نشكرك على دفع رسوم خدمة ${serviceNameAr} عبر منصة تـــم. مرفق طيه إيصال الدفع.</span>`;
            const emailTokens = [
              {
                subject: `${serviceNameEn} - ${serviceNameAr}`,
                enText: paymentSuccessEn,
                arText: paymentSuccessAr,
                docType: 'receipt',
                emailType: 'payment-success',
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
                serviceNameEn,
                serviceNameAr,
                emailTokens: JSON.stringify(emailTokens),
              },
            });
            Object(
              _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__[
                'addAnalyticsEvent'
              ],
            )(props, 'TRA');
            Object(
              _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__[
                'returnCamundaMessage'
              ],
            )(response, props);
          } else {
            Object(
              _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__[
                'returnCamundaMessage'
              ],
            )(data, props);
          }
          // props.actions.loading.update(false);
        }
      }
      async function f2_btnCancelClick(props, formValues) {
        props.history.push('/');
      }
      async function f3_btnBackClick(props, formValues) {
        props.history.push('/selectlicences');
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
          title: 'Application Confirmation',
          pageId: 'gDFXOYn71Qpgd_UEr8Ydo',
          expanded: true,
          path: '/application-waiting',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'anrDnJgYi3NcsWGAP5cOj',
                type: 'notice',
                props: {
                  status: 'inProgress',
                  icon: null,
                  title: "i18n('waitingApproval-title')",
                  tags: [],
                  content: '',
                  buttons: [],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'lCOyUsGfuKo04O0Rbxqfc',
                type: 'highlightLoader',
                props: {
                  delay: 0,
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
                componentId: 'd3HZW1fqFDwpvFMDO6UO_',
                type: 'text',
                props: {
                  variant: 'p',
                  content: '',
                  displayAsHtml: true,
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          customPath: true,
          fetchStateVariables: '',
          state: {
            mapState: [
              'user',
              'loggedIn',
              'businessKey',
              'instanceId',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
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
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

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
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
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
            ? `This page will refresh once your payment is processed. You will be notified about changes to your application's status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the <a href='${visitDashBoardURL}'>Dashboard</a>`
            : `سيتم تحديث بيانات الصفحة فور تمام عملية الدفع. سيتم إخطارك بالتحديثات على الطلب من خلال البريد الإلكتروني أو الرسائل النصية القصيرة لرقم الهاتف المحمول المسجل. كما يمكنك مراجعة حالة الطلب بنفسك  في أي وقت من خلال لوحة التحكم <a href='${visitDashBoardURL}'> أدِر شركتك  </a>.`;
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
          pageId: 'JdVSmaUb6NP-3yLnnDLVZ',
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
                  title: "i18n('paymentSummary-title')",
                  tags: '${state.paymentTag}',
                  content: "i18n('paymentSummary-description')",
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
                  columns: '${state.payment_table_columns}',
                  items: '${state.payment_table_rows}',
                  title: "i18n('paymentSummary-tabletitle')",
                  space: {
                    marginTop: 'xl',
                    marginBottom: 'md',
                  },
                },
                layout: 'base',
                sharedProps: [
                  'i18n',
                  'locale',
                  'payment_table_columns',
                  'payment_table_rows',
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
                componentId: 'lKhRcls_MP8qppJB5nhY1',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginTop: 'md',
                    marginBottom: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'loHeuFEWG2L4_YXHspaQ0',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('paymentSummary-paybutton')",
                  type: 'button',
                  uiType: 'primary',
                  disabled: false,
                  'aria-label': 'button',
                  size: 'default',
                  icon: null,
                  alignIcon: 'end',
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
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              type: 'REQUIRES_LOGIN',
              redirectTo: '/login',
            },
          ],
          state: {
            mapState: [
              'user',
              'loggedIn',
              'businessKey',
              'instanceId',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'paymentTag',
              'payment_table_columns',
              'payment_table_rows',
              'paymentTotal',
              'camundaMessage',
              'paymentURL',
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'currentStepIndex',
              'currentSubStepIndex',
              'expandedStepIndexes',
              'camundaMessage',
              'steps',
              'paymentTag',
              'payment_table_rows',
              'paymentTotal',
              'paymentURL',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: [
              'apTransactionNumber',
              'submitDate',
              'paymentLink',
              'feeDetails',
            ],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 18 */
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
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        14,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        8,
      );

      async function init(props) {
        if (!props.businessKey || !props.instanceId) {
          window.location.href = Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
              'getDashboardUrl'
            ],
          )();
        }
        props.actions.showSideBar.update(true);
        props.actions.loading.update(false);
        //const { locale, i18n } = props;
        props.actions.currentStepIndex.update(2);
        props.actions.currentSubStepIndex.update(0);
        props.actions.expandedStepIndexes.update([2]);
        props.actions.camundaMessage.update('');
        const cStep = { id: 'step_makePayment', status: '' };
        const cSubStep = { id: 'subStep_requestConfirmation', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_2__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // const camundaDate = getVariables.variables('instanceId', props.fromProcessState);
        // let licenceFees =
        //   '[{"authorityEn":"Department of Economic Development","authorityAr":"دائرة التنمية الاقتصادية","feeDescEn":"EHMS Reviewing Fees Payment(Application fees)","feeDescAr":"رسم تعديل الموقع ( العنوان )","FeeAmount":101,"TrackingNumber":"null"}]';
        // licenceFees =
        //   licenceFees && licenceFees !== 'null' ? JSON.parse(licenceFees) : [];
        // if (licenceFees.length === 0) {
        //   props.history.push('/went-wrong');
        // }
        // console.log("licenceFees",licenceFees);
        // const paymentRow =
        //   licenceFees.length > 0
        //     ? licenceFees.map((value: any, index: number) => ({
        //         id: `'${index}'`,
        //         description: locale === 'en' ? value.feeDescEn : value.feeDescAr,
        //         price:
        //           locale === 'en'
        //             ? `AED ${formatValue(value.FeeAmount)}`
        //             : `${formatValue(value.FeeAmount)} درهم`,
        //       }))
        //     : [{ id: '0', description: '', price: 0 }];
        //      console.log("paymentRowNew",paymentRow);
        // const tags = [
        //   { label: i18n('referenceNo'), value: props.apTransactionNo.value },
        //   {
        //     label: i18n('submittedon'),
        //     value: getDateFromTimeStamp(props.submitDate.value),
        //   },
        // ];
        // console.log("paymentRow",paymentRow);
        // const totalFees =
        //   licenceFees.length > 0
        //     ? licenceFees.reduce((a: any, b: any) => {
        //         return a + b.FeeAmount;
        //       }, 0)
        //     : 0;
        //  console.log("totalFees",totalFees);
        /**
         * Please dont delete line Number 56
         *
         */
        // props.actions.paymentTag.update(tags);
        //props.actions.payment_table_rows.update(paymentRow);
        //props.actions.paymentTotal.update(totalFees);
        // props.actions.paymentURL.update('');
      }
      async function onPageInit(props) {
        const { locale, i18n } = props;
        const tags = [
          { label: i18n('global-reference'), value: props.apTransactionNumber },
          {
            label: i18n('global-submitted'),
            value: Object(
              _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
                'getDateFromTimeStamp'
              ],
            )(props.submitDate, locale),
          },
        ];
        props.actions.paymentTag.update(tags);
        // const camundaDate = getVariables.variables('instanceId', props.fromProcessState);
        let feeDetails = props.feeDetails;
        feeDetails =
          feeDetails && feeDetails !== 'null' ? JSON.parse(feeDetails) : {};
        let licenceFees = [];
        licenceFees.push(feeDetails);
        if (!licenceFees[0].FeeAmount) {
          props.history.push('/application-error');
        }
        const paymentRow =
          licenceFees.length > 0
            ? licenceFees.map((value, index) => ({
                id: `'${index}'`,
                description:
                  locale === 'en' ? value.feeDescEn : value.feeDescAr,
                price:
                  locale === 'en'
                    ? `AED ${Object(
                        _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
                          'formatValue'
                        ],
                      )(value.FeeAmount)}`
                    : `${Object(
                        _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
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
        props.actions.payment_table_rows.update(paymentRow);
        props.actions.paymentTotal.update(totalFees);
        // if (props.feeErrorMessage) {
        //   props.actions.camundaMessage.update(props.feeErrorMessage);
        // } else {
        props.actions.paymentURL.update(props.paymentLink);
        // }
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
        // await returnCamundaMessage(data, props);
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
          pageId: 'WTU2tySLeuhEgzesa1EwE',
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
                  title: "i18n('paymentWaiting-title')",
                  tags: '${state.paymentTag}',
                  content: '',
                  buttons: [],
                  classNames: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentTag'],
              },
              {
                componentId: '46XCNx_2vEOc8Fxi6SqRA',
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
                componentId: 'FY5zanoXld9R55k4BQzB6',
                type: 'text',
                props: {
                  variant: 'p',
                  content: "i18n('paymentWaiting-description')",
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
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              'businessKey',
              'instanceId',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'paymentTag',
              'paymentLinkString',
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'currentStepIndex',
              'currentSubStepIndex',
              'expandedStepIndexes',
              'steps',
              'paymentTag',
              'paymentLinkString',
            ],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
          onPageInit: _functions__WEBPACK_IMPORTED_MODULE_0__['onPageInit'],
          fromProcessState: {
            processName: 'workbench',
            variables: ['apTransactionNumber', 'submitDate', 'paymentLink'],
          },
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

      /***/
    },
    /* 20 */
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
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8,
      );

      async function init(props) {
        //const { locale, i18n } = props;
        if (!props.businessKey || !props.instanceId) {
          window.location.href = Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
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
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // props.actions.paymentTag.update(tags);
        // props.actions.paymentLinkString.update();
      }
      async function onPageInit(props) {
        const { i18n, locale } = props;
        const tags = [
          { label: i18n('global-reference'), value: props.apTransactionNumber },
          {
            label: i18n('global-submitted'),
            value: Object(
              _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
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
          title: 'PaymentSuccess',
          pageId: 'kAtettx_eB9u4loDQH1nH',
          expanded: true,
          path: '/application-success',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'VvUXLlTUjNLLGlG-s1IcB',
                type: 'notice',
                props: {
                  status: 'success',
                  icon: null,
                  title: "i18n('applicationApproved-title')",
                  tags: '${state.paymentTag}',
                  content: '${state.applicationIssuedDescription}',
                  buttons: [],
                  classNames: '',
                  space: {
                    marginTop: '',
                  },
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
                componentId: 'WKYzMGLp2ZitLO0VhArzP',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginTop: 'md',
                    marginBottom: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'ExU0bOuP8d7Ij9NqWLXHs',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginTop: 'lg',
                  },
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'G2jndaFkagCpfmkY2SIvR',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('applicationApproved-downloadButton')",
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
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                      visible: '',
                    },
                    layout: 'base',
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
                    componentId: 'vnG3Xn_kI_Rxd3QxTZvnG',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('applicationApproved-dashboardButton')",
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
                      iconTooltip: '',
                      applyAutoWidth: false,
                      space: {
                        marginLeft: 'md',
                        marginRight: 'md',
                      },
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f3_onClick'],
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale'],
                  },
                ],
              },
              {
                componentId: 'cEscu3zmMRMAMbCAuMlSt',
                type: 'customerSatisfaction',
                props: {
                  i18n: '',
                  status: 'idle',
                  emotion: '',
                  onSubmit: '',
                  rates: [
                    {
                      value: '',
                      starsCount: 3,
                      min: '',
                      max: '',
                      step: '',
                      id: 'kcd0vma7',
                    },
                  ],
                  withComment: true,
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
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              'businessKey',
              'instanceId',
              'licenceNo',
              'showSideBar',
              'steps',
              'expandedStepIndexes',
              'currentStepIndex',
              'currentSubStepIndex',
              'paymentTag',
              'applicationIssuedDescription',
              'camundaMessage',
            ],
            mapDispatch: [
              'showSideBar',
              'loading',
              'currentStepIndex',
              'currentSubStepIndex',
              'expandedStepIndexes',
              'steps',
              'paymentTag',
              'downloadFailureFlag',
              'downloadErrorMsg',
              'applicationIssuedDescription',
              'camundaMessage',
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

      /***/
    },
    /* 22 */
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
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f3_onClick',
        function () {
          return f3_onClick;
        },
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        8,
      );
      /* harmony import */ var _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        9,
      );
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        14,
      );

      async function init(props) {
        const { locale } = props;
        if (!props.businessKey || !props.instanceId) {
          window.location.href = Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__[
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
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // props.actions.paymentTag.update(tags);
        props.actions.downloadFailureFlag.update(false);
        props.actions.downloadErrorMsg.update('');
        const message =
          locale === 'en'
            ? `EHMS receipt has been generated for the licence number ${props.licenceNo}. You can download the relevant documents below.`
            : `صدر إيصال دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة عن رقم الرخصة  ${props.licenceNo} . بإمكانك تنزيل جميع الملفات المطلوبة أدناه.  `;
        props.actions.applicationIssuedDescription.update(message);
      }
      async function onPageInit(props) {
        const { i18n, locale } = props;
        const tags = [
          { label: i18n('global-reference'), value: props.apTransactionNumber },
          {
            label: i18n('global-submitted'),
            value: Object(
              _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__[
                'getDateFromTimeStamp'
              ],
            )(props.submitDate, locale),
          },
        ];
        props.actions.paymentTag.update(tags);
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_3__[
            'addAnalyticsEvent'
          ],
        )(props, 'PAY1', 'success');
        await Object(
          _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__[
            'sendEmailNotification'
          ],
        )('payment-success', props);
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
        props.actions.camundaMessage.update('');
        const data = await Object(
          _sharedFunctions_services__WEBPACK_IMPORTED_MODULE_1__[
            'downloadFile'
          ],
        )(props.instanceId, 'receipt', props);
        props.actions.loading.update(false);
        if (!data || !data.fileContent) {
          await Object(
            _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_2__[
              'returnCamundaMessage'
            ],
          )(data, props);
        }
      }
      async function f3_onClick(props) {
        let protocol = location.protocol;
        const slashes = protocol.concat('//');
        const host = slashes.concat(window.location.hostname);
        window.location.href = `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/EHSMSReviewingFeesPayment`;
      }

      /***/
    },
    /* 23 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        24,
      );

      const pageConfig = [
        {
          title: 'Payment Failure',
          pageId: 'Np5dNQRjYuqd285ysQTTK',
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
                  title: "i18n('paymentFailed-title')",
                  tags: '${state.paymentTag}',
                  content: "i18n('paymentFailed-description')",
                  buttons: [],
                  classNames: '',
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'paymentTag'],
              },
              {
                componentId: 'zI2SVM-mGuJXHsmURaiv3',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginTop: 'md',
                    marginBottom: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'ExU0bOuP8d7Ij9NqWLXHs',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginTop: 'lg',
                  },
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'G2jndaFkagCpfmkY2SIvR',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('paymentFailed-tryAgainButton')",
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
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                    },
                    layout: 'base',
                    sharedProps: [
                      'i18n',
                      'locale',
                      'actions',
                      'bpm',
                      'businessKey',
                      'actions',
                    ],
                  },
                  {
                    componentId: 'vnG3Xn_kI_Rxd3QxTZvnG',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('paymentFailed-supportButton')",
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
                      iconTooltip: '',
                      applyAutoWidth: false,
                      space: {
                        marginLeft: 'md',
                        marginRight: 'md',
                      },
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale'],
                  },
                ],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              'paymentTag',
              'camundaMessage',
              'businessKey',
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

      /***/
    },
    /* 24 */
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
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );
      /* harmony import */ var _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        8,
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        14,
      );

      async function init(props) {
        // const { locale, i18n } = props;
        props.actions.showSideBar.update(true);
        props.actions.loading.update(false);
        props.actions.camundaMessage.update('');
        props.actions.currentStepIndex.update(2);
        props.actions.currentSubStepIndex.update(1);
        props.actions.expandedStepIndexes.update([2]);
        const cStep = { id: 'step_makePayment', status: '' };
        const cSubStep = { id: 'subStep_payAmount', status: '' };
        const steps = Object(
          _sharedFunctions_stepUtils__WEBPACK_IMPORTED_MODULE_1__['getSteps'],
        )(props.i18n, cStep, cSubStep);
        props.actions.steps.update(steps);
        // props.actions.paymentTag.update(tags);
      }
      async function onPageInit(props) {
        const { i18n, locale } = props;
        const tags = [
          { label: i18n('global-reference'), value: props.apTransactionNumber },
          {
            label: i18n('global-submitted'),
            value: Object(
              _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
                'getDateFromTimeStamp'
              ],
            )(props.submitDate, locale),
          },
        ];
        props.actions.paymentTag.update(tags);
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_2__[
            'addAnalyticsEvent'
          ],
        )(props, 'PAY2', 'fail');
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        const data = await props.bpm.sendMessage({
          businessKey: props.businessKey,
          messageName: 'onPaymentError',
          variables: {},
        });
        await Object(
          _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
            'returnCamundaMessage'
          ],
        )(data, props);
        // props.actions.camundaMessage.update(errorMessage);
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
          pageId: 'wUU6kDuBnXFKeYaMiqU1Y',
          expanded: true,
          path: '/application-error',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'XLI-LjnM8rQadhKyfxEQz',
                type: 'notice',
                props: {
                  status: 'failure',
                  icon: null,
                  title: "i18n('somethingWentWrong-title')",
                  tags: [],
                  content: "i18n('somethingWentWrong-description')",
                  buttons: [],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'SrX0R6kO05N9UjiLZfiej',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginTop: 'md',
                    marginBottom: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'ExU0bOuP8d7Ij9NqWLXHs',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginTop: 'lg',
                  },
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'G2jndaFkagCpfmkY2SIvR',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('global-back')",
                      type: 'button',
                      uiType: 'secondary',
                      disabled: false,
                      'aria-label': 'button',
                      size: 'default',
                      icon: null,
                      alignIcon: 'start',
                      withArrow: true,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      applyAutoWidth: false,
                      onClick:
                        _functions__WEBPACK_IMPORTED_MODULE_0__['f2_onClick'],
                    },
                    layout: 'base',
                    sharedProps: ['i18n', 'locale'],
                  },
                ],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
            ],
            mapDispatch: ['camundaMessage', 'showSideBar', 'loading'],
          },
          init: _functions__WEBPACK_IMPORTED_MODULE_0__['init'],
        },
      ];
      /* harmony default export */ __webpack_exports__['default'] = pageConfig;

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
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );

      async function init(props) {
        props.actions.camundaMessage.update('');
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        window.location.href = Object(
          _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__['getDashboardUrl'],
        )();
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
          title: 'No Information Found',
          pageId: 'Xj-E16XiZo337U5_S0UHR',
          expanded: true,
          path: '/application-no-information',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'XLI-LjnM8rQadhKyfxEQz',
                type: 'notice',
                props: {
                  status: 'actionRequired',
                  icon: null,
                  title: "i18n('noInformationFound-title')",
                  tags: [],
                  content: "i18n('noInformationFound-description')",
                  buttons: [],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale'],
              },
              {
                componentId: 'A0fxFkB67GlHF9jFVL5UA',
                type: 'alert',
                props: {
                  status: 'error',
                  message: '${state.camundaMessage}',
                  onClose: null,
                  space: {
                    marginTop: 'md',
                    marginBottom: 'md',
                  },
                  visible:
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_visible'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'camundaMessage'],
              },
              {
                componentId: 'ExU0bOuP8d7Ij9NqWLXHs',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                  space: {
                    marginTop: 'lg',
                  },
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'G2jndaFkagCpfmkY2SIvR',
                    type: 'button',
                    props: {
                      locale: 'en',
                      label: "i18n('global-back')",
                      type: 'button',
                      uiType: 'secondary',
                      disabled: false,
                      'aria-label': 'button',
                      size: 'default',
                      icon: null,
                      alignIcon: 'start',
                      withArrow: true,
                      active: false,
                      hidden: false,
                      iconTooltip: '',
                      applyAutoWidth: false,
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
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
            mapDispatch: ['camundaMessage', 'showSideBar', 'loading'],
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
      /* harmony import */ var _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7,
      );

      async function init(props) {
        props.actions.camundaMessage.update('');
        props.actions.showSideBar.update(false);
        props.actions.loading.update(false);
      }
      function f1_visible(props) {
        return props.camundaMessage ? true : false;
      }
      async function f2_onClick(props) {
        const data = await props.bpm.sendMessage({
          businessKey: props.businessKey,
          messageName: 'onNoInformation',
          variables: {},
        });
        await Object(
          _sharedFunctions_util__WEBPACK_IMPORTED_MODULE_0__[
            'returnCamundaMessage'
          ],
        )(data, props);
        props.history.push('/select-licence');
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
          title: 'Account Upgrade',
          pageId: '95VSDg6VGOaf9nwQHWynd',
          path: '/account-upgrade',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: 'yWz--wgeri78T0D4Q5v5i',
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
                componentId: 'ExCIQS4OGmnB5A6q5Vtpt',
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
                componentId: 'x8ewjEWU0D4B-kqeFQRmH',
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
                componentId: '2N9kiA5P-W77SGzp8Cpsd',
                type: 'flexbox',
                props: {
                  flexWrap: true,
                  flexDirection: 'initial',
                  justifyContent: 'initial',
                  alignItems: 'initial',
                  alignContent: 'initial',
                },
                layout: 'base',
                children: [
                  {
                    componentId: 'JOZ045bCz4pz2IKd4rMoN',
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
                      iconTooltip: '',
                      applyAutoWidth: false,
                      space: {
                        marginTop: 'md',
                      },
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
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
        'f1_onClick',
        function () {
          return f1_onClick;
        },
      );
      /* harmony import */ var _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        14,
      );

      async function init(props) {
        props.actions.loading.update(false);
        Object(
          _sharedFunctions_analytics__WEBPACK_IMPORTED_MODULE_0__[
            'addAnalyticsEvent'
          ],
        )(props, 'USE');
      }
      async function f1_onClick(props) {
        window.open(
          'https://smartpass.government.ae/index-en.html/how_to',
          '_blank',
        );
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
          title: 'No Active licence',
          pageId: 'LZJQhkysY4QcOCQyjkUmr',
          path: '/no-active-licence',
          template: 'custom',
          props: {
            definitions: [
              {
                componentId: '-iwBf_WKbYiDAP0qRXXGg',
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
                componentId: 'faq0LTxcwNEtGcEYDfuZo',
                type: 'button',
                props: {
                  locale: 'en',
                  label: "i18n('global-back')",
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
                    _functions__WEBPACK_IMPORTED_MODULE_0__['f1_onClick'],
                },
                layout: 'base',
                sharedProps: ['i18n', 'locale', 'history'],
              },
            ],
            symbols: [
              {
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
            mapDispatch: ['showSideBar', 'loading'],
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
      async function f1_onClick(props) {
        props.history.push('/');
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
          title: 'Continue process',
          pageId: 'mZXvK7XOf9ZOj15ql20La',
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
                id: 'XPuuzzSsc1PM7KGrp2LDX',
                name: 'Sidebar',
                definitions: [
                  {
                    componentId: '_7l1ujJnaZewdBciJZUoA',
                    type: 'stepTracker',
                    props: {
                      title: "i18n('process')",
                      steps: '${state.steps}',
                      expandedStepIndexes: '${state.expandedStepIndexes}',
                      currentStepIndex: '${state.currentStepIndex}',
                      i18n: '',
                      currentSubStepIndex: '${state.currentSubStepIndex}',
                      visible: '{"code":" return props.state.showSideBar;"}',
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
                    componentId: 'LlS0jKn4mVvWHElTc4DVL',
                    type: 'relevantEntity2-0-0',
                    props: {
                      i18n: '',
                      title: "i18n('relevant_entity')",
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
                        marginBottom: 'xl',
                      },
                      visible: '{"code":"  return props.state.showSideBar;"}',
                    },
                    sharedProps: ['i18n', 'locale', 'showSideBar'],
                  },
                ],
              },
              {
                id: 'zUb_2ox3pxzJj2-JHqAh1',
                name: 'Header',
                definitions: [
                  {
                    componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                        componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                        componentId: '68aenTCGP0X-L3br5r-li',
                        type: 'text',
                        props: {
                          variant: 'h1',
                          content: "i18n('serviceCard-desc')",
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
              'licenceNo',
            ],
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
                props.actions.licenceNo.update(variables.data.licenceNo.value);
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
    /* 35 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */ __webpack_exports__['default'] = {
        'serviceCard-desc': 'EHSMS Reviewing Fee Payment',
        process: 'Process',
        'selectLicence-title': 'Select Licence',
        application_contact: 'Application Contact',
        'applicationApproved-downloadButton': 'DOWNLOAD RECEIPT',
        make_payment: 'Make Payment',
        relevant_entity: 'Relevant Entity',
        'selectLicence-description':
          'Please select the valid Industrial Licence for which you wish to make a payment through the EHSMS Reviewing Fee Payment service.',
        search_licence: 'SEARCH LICENCE',
        'selectLicence-licenceColumn': 'Licence Number',
        error_msg: 'Please select a licence',
        'global-next': 'NEXT',
        link_cancel: 'Cancel',
        business_in_abudhabi: 'Business in Abu Dhabi',
        register_your_business: 'Register Your Business',
        home: 'Home',
        contact_description:
          'Please provide the details below. These contact details will be used for any clarifications or questions related to this application.',
        'applicantDetails-nameField': 'NAME',
        'applicantDetails-numberField': 'MOBILE NUMBER',
        'applicantDetails-emailField': 'EMAIL ADDRESS',
        contact_fill_details: 'Fill Details',
        fee_amount: 'Pay Amount',
        write: 'Write',
        'global-back': 'BACK',
        'applicantDetails-checkboxContact':
          'I am the contact person for this application',
        'applicationApproved-dashboardButton': 'VISIT DASHBOARD',
        'paymentFailed-tryAgainButton': 'TRY AGAIN',
        'paymentFailed-supportButton': 'CONTACT SUPPORT',
        error_contactName: 'This field is required',
        error_phoneNumber: 'This field is required and must be a mobile number',
        error_email: 'This field is required and must be an email address',
        'paymentSummary-title': 'Your Application Has Been Approved',
        'paymentSummary-description':
          'The Department of Economic Development has generated a reference number for this transaction. You will be receiving all updates related to this application on the registered email and mobile number. Please proceed with your payment here.',
        'paymentSummary-tabletitle': 'Payment Summary',
        'paymentWaiting-title': 'Awaiting Payment Confirmation',
        'paymentWaiting-description':
          "This page will refresh once your payment is processed. You will be notified about changes to your application's status on the registered email address and mobile number. You may also check the status of your application at any time by visiting the Manage Your Business.",
        payment_success_title:
          'Your payment has been received for EHMS reviewing',
        payment_success_des:
          'EHMS Reviewing Fees Payment Receipt has generated for licence number IN-1000001.You can download the relevant documents from the link below.',
        'paymentFailed-title': 'Your Payment Was Unsuccessful',
        'paymentFailed-description':
          'Unfortunately, the payment could not be processed. You can try again or come back later. If you encountered any error, please report this issue. ',
        'somethingWentWrong-title': 'Something Went Wrong',
        'somethingWentWrong-description':
          'An error occurred while trying to complete your request. Please try again.',
        no_info_title: 'No information found',
        no_info_des:
          'We are unable to find any details with the details provided. Please try again.',
        'global-reference': 'Reference number:',
        'global-submitted': 'Submitted on:',
        step_selectLicence: 'Select Licence',
        'applicantDetails-title': 'Application Contact',
        step_makePayment: 'Make Payment',
        'waitingApproval-title': 'Confirming Your Request',
        subStep_payAmount: 'Pay Amount',
        step_downloadCertificate: 'Download Receipt',
        waitingPage_title: 'Confirming Request',
        timeoutMessage: 'Session timed out. Kindly reload the page',
        somethingWentWrong: 'Something went wrong\t',
        bc_home: 'Home',
        bc_digitalServices: 'Digital Services',
        bc_DED: 'Department of Economic Development',
        accountUpgradeRequired: 'Account upgrade required',
        accountUpgradeDes:
          'Your log in credentials need to be upgraded before you can proceed with this service. Please follow the link to complete the process.',
        upgradeYourAccount: 'Upgrade Your Account',
        'selectLicence-tableTitle': 'My Licences',
        'paymentSummary-paybutton': 'PAY',
        'paymentSummary-descriptionColumn': 'Description',
        'paymentSummary-priceColumn': 'Fees',
        'selectLicence-companyColumn': 'Company Name',
        'applicationApproved-title': 'Your Payment Has Been Received',
        'applicationApproved-description':
          'EHSMS Reviewing Fees Payment Receipt has been generated for licence number IN-1000001. You can download all the relevant documents below.',
        'step_paymentSummary-tabletitle': 'Make Payment',
        'step_applicationApproved-downloadButton': 'Download Receipt',
        'paymentWaiting-waitingMessage':
          'Your payment gateway will now open on a new tab.',
        'paymentWaiting-waitingMessageDescription':
          'If this does not open automatically, please click here.',
        step_enterContactDetails: 'Application Contact',
        subStep_requestConfirmation: 'Confirming Request',
        button_cancel: 'Cancel',
        noActiveLicenceDescription:
          'You seem to have no active licences linked to this account',
        noActiveLicenceTitle: 'No active licences',
        waitingApprovalWaitingMessage: 'Please wait for more information.',
        paymentWaitingWaitingMessage:
          'Your payment gateway will now open on a new tab.',
        continueProcessTitle: 'You will be redirected shortly',
        continueProcessDescription:
          'Please be patient while we identify your application',
        start: 'Start',
        pleaseLogIn: 'Please Login',
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
        'serviceCard-desc': 'دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة',
        process: 'خطوات العملية',
        'selectLicence-title': 'اختر الرخصة ',
        application_contact: 'بيانات الاتصال لصاحب الطلب',
        'applicationApproved-downloadButton': 'تنزيل الإيصال',
        make_payment: 'إتمام عملية الدفع',
        relevant_entity: 'الجهة الحكومية ذات الصلة',
        'selectLicence-description':
          'الرجاء اختيار رخصة صناعية صالحة للحصول على نسخة صحيحة من الرخصة.',
        search_licence: 'البحث في الرُخص',
        'selectLicence-licenceColumn': 'رقم الرخصة ',
        error_msg: 'الرجاء اختيار رخصة',
        'global-next': 'التالي',
        link_cancel: 'إلغاء',
        business_in_abudhabi: 'الأعمال في أبوظبي',
        register_your_business: 'سجّل شركتك',
        home: 'الصفحة الرئيسية',
        contact_description:
          'يُرجى تقديم بيانات الاتصال أدناه، والتي ستُسخدم لغايات التواصل معك بشأن طلبك.',
        'applicantDetails-nameField': 'الاسم ',
        'applicantDetails-numberField': 'رقم الهاتف المتحرك ',
        'applicantDetails-emailField': 'عنوان البريد الإلكتروني ',
        contact_fill_details: 'Fill Details',
        fee_amount: 'ادفع الرسوم',
        write: 'اكتب',
        'global-back': 'الرجوع',
        'applicantDetails-checkboxContact':
          'أنا الشخص المتوفر للاتصال لهذا الطلب.',
        'applicationApproved-dashboardButton': 'زر لوحة التحكم',
        'paymentFailed-tryAgainButton': 'حاول مرة أخرى ',
        'paymentFailed-supportButton': 'تواصل مع خدمة العملاء',
        error_contactName: 'هذه الخانة مطلوبة\t',
        error_phoneNumber: 'هذه الخانة مطلوبة ويجب أن تحتوي على رقم هاتف محمول',
        error_email: 'هذا الخانة مطلوبة ويجب أن تحتوي على عنوان بريد إلكتروني.',
        'paymentSummary-title': 'تمت الموافقة على طلبك',
        'paymentSummary-description':
          'أصدرت دائرة التنمية الاقتصادية رقماً مرجعياً لهذه المعاملة. ستصلك التحديثات عن طلبك على البريد الإلكتروني المسجل ورقم الهاتف المتحرك. يرجى الاستمرار وإتمام الدفع هنا. ',
        'paymentSummary-tabletitle': 'ملخص المدفوعات',
        'paymentWaiting-title': 'بانتظار تأكيد الدفع',
        'paymentWaiting-description':
          'سيتم تحديث بيانات الصفحة فور تمام عملية الدفع. سيتم إخطارك بالتحديثات على الطلب من خلال البريد الإلكتروني أو الرسائل النصية القصيرة لرقم الهاتف المحمول المسجل. كما يمكنك مراجعة حالة الطلب بنفسك  في أي وقت من خلال لوحة التحكم "أدِر شركتك".',
        payment_success_title: 'تم استلام المدفوعات',
        payment_success_des:
          'صدر إيصال دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة عن رقم الرخصة  IN-1000001 . يمكنك تنزيل جميع الملفات المطلوبة أدناه. ',
        'paymentFailed-title': 'فشلت عملية الدفع',
        'paymentFailed-description':
          'نعتذر، لم تنجح عملية الدفع. بإمكانك المحاولة مرة أخرى في وقت لاحق. إذا واجهتك أي مشكلة، الرجاء الإبلاغ عنها.',
        'somethingWentWrong-title': 'حصل خطأ ما ',
        'somethingWentWrong-description':
          'حصل خطأ ما أثناء محاولة إكمال الطلب. الرجاء المحاولة مرة أخرى.',
        no_info_title: 'لم يتم العثور على أية معلومات',
        no_info_des: 'لا يمكن تعديل هذه الرخصة',
        'global-reference': 'الرقم المرجعي:',
        'global-submitted': 'تاريخ التقديم:',
        step_selectLicence: 'اختر الرخصة',
        'applicantDetails-title': 'بيانات الاتصال لصاحب الطلب',
        step_makePayment: 'السداد',
        'waitingApproval-title': 'تأكيد الطلب',
        subStep_payAmount: 'ادفع الرسوم',
        step_downloadCertificate: 'تنزيل الإيصال',
        waitingPage_title: 'تأكيد الطلب',
        timeoutMessage: 'انتهت الجلسة. يرجى إعادة التحميل لتحديثها مرة أخرى',
        somethingWentWrong: 'حدث خطأ ما ',
        bc_home: 'الصفحة الرئيسية',
        bc_digitalServices: 'الخدمات الرقمية',
        bc_DED: 'دائرة التنمية الاقتصادية',
        accountUpgradeRequired: 'مطلوب تحديث الحساب',
        accountUpgradeDes:
          'يجب ترقية حسابك، لتتمكن من الحصول على الخدمة، لترقية الحساب، اضغط على الرابط.',
        upgradeYourAccount: 'يرجى تحديث حسابك',
        'selectLicence-tableTitle': 'جميع رُخصي',
        'paymentSummary-paybutton': 'ادفع',
        'paymentSummary-descriptionColumn': 'الوصف',
        'paymentSummary-priceColumn': 'السعر',
        'selectLicence-companyColumn': 'اسم الشركة ',
        'applicationApproved-title': 'تم استلام المدفوعات',
        'applicationApproved-description':
          'صدر إيصال دفع رسوم مراجعة أنظمة البيئة والصحة والسلامة عن رقم الرخصة  IN-1000001 . بإمكانك تنزيل جميع الملفات المطلوبة أدناه. ',
        'step_paymentSummary-tabletitle': 'السداد',
        'step_applicationApproved-downloadButton': 'تنزيل الإيصال',
        'paymentWaiting-waitingMessage':
          'ستظهر لك شاشة بوابة الدفع تلقائياً في نافذة جديدة.',
        'paymentWaiting-waitingMessageDescription':
          'إن لم تفتح الشاشة بشكل تلقائي، الرجاء الضغط هنا.',
        step_enterContactDetails: 'بيانات الاتصال لصاحب الطلب',
        subStep_requestConfirmation: 'تأكيد الطلب',
        button_cancel: 'إلغاء',
        noActiveLicenceDescription: 'لا تظهر أي رخصة مرتبطة بحسابك.',
        noActiveLicenceTitle: 'لا يوجد أي رخص سارية',
        waitingApprovalWaitingMessage:
          'الرجاء الانتظار للحصول على معلومات إضافية.',
        paymentWaitingWaitingMessage:
          'ستظهر لك شاشة بوابة الدفع تلقائياً في نافذة جديدة.',
        continueProcessTitle: 'سيتم الانتقال للصفحة المطلوبة سريعًا',
        continueProcessDescription: 'يرجى الانتظار قليلاً لحين التحقق من طلبك.',
        start: 'ابدأ',
        pleaseLogIn: 'يُرجى تسجيل الدخول',
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
          id: 'XPuuzzSsc1PM7KGrp2LDX',
          name: 'Sidebar',
          definitions: [
            {
              componentId: '_7l1ujJnaZewdBciJZUoA',
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
              componentId: 'LlS0jKn4mVvWHElTc4DVL',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: "i18n('relevant_entity')",
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
                  marginBottom: 'xl',
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
          id: 'zUb_2ox3pxzJj2-JHqAh1',
          name: 'Header',
          definitions: [
            {
              componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
                  componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
                  componentId: '68aenTCGP0X-L3br5r-li',
                  type: 'text',
                  props: {
                    variant: 'h1',
                    content: "i18n('serviceCard-desc')",
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
          id: 'Tg2IHCN6ziC51qE0aPQ4n',
          name: 'Application Details',
          definitions: [
            {
              componentId: 'LhJwRzgLi4aDXM62GnjV_',
              type: 'checkbox',
              props: {
                name: '',
                id: '',
                tabIndex: 0,
                autoFocus: false,
                readOnly: false,
                label: "i18n('applicantDetails-checkboxContact')",
                disabled: false,
                uiType: '',
                description: '',
                validateStatus: '',
                meta: '',
                onClick: _functions__WEBPACK_IMPORTED_MODULE_0__['f1_onClick'],
                onChange:
                  _functions__WEBPACK_IMPORTED_MODULE_0__['call_f2_onChange'],
                visible: '',
                checked: '${state.contactDetailsFlag}',
                space: {
                  marginBottom: 'lg',
                },
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
              componentId: 'KDgS-N1IF9731nMY_wf0b',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 2,
                  sm: 1,
                },
              },
              layout: 'base',
              children: [
                {
                  componentId: '-F5Om4UcgMI1FACOCanHJ',
                  type: 'input',
                  props: {
                    label: "i18n('applicantDetails-nameField')",
                    value: '${state.contactName}',
                    defaultValue: '${state.contactName}',
                    'aria-label': 'input',
                    validateStatus: '${state.validateStatus_contact_name}',
                    disabled: '${state.contactDetailsFlag}',
                    readonly: false,
                    help: '${state.help_contact_name}',
                    placeholder: '',
                    size: 'default',
                    textDirection: 'ltr',
                    name: '',
                    type: 'text',
                    tabIndex: 0,
                    space: {
                      marginBottom: 'lg',
                      marginTop: '',
                    },
                    onChange:
                      _functions__WEBPACK_IMPORTED_MODULE_0__[
                        'call_f3_onChange'
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
                    'contactName',
                    'validateStatus_contact_name',
                    'help_contact_name',
                    'actions',
                  ],
                },
                {
                  componentId: 'mogeKqZmJSl3N4RYC2bXo',
                  type: 'inputTelephone',
                  props: {
                    i18n: '',
                    help: '${state.help_phone_no}',
                    validateStatus: '${state.validateStatus_phone}',
                    label: "i18n('applicantDetails-numberField')",
                    'aria-label': 'Telephone input',
                    disabled: '${state.contactDetailsFlag}',
                    value: '${state.contactNumber}',
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
                        'call_f4_onSelect'
                      ],
                    visible: '',
                  },
                  layout: 'base',
                  columnIndex: 1,
                  sharedProps: [
                    'i18n',
                    'locale',
                    'actions',
                    'help_phone_no',
                    'validateStatus_phone',
                    'contactDetailsFlag',
                    'contactNumber',
                    'actions',
                  ],
                },
                {
                  componentId: 'b11gY1VfcmzxGoY4odcko',
                  type: 'input',
                  props: {
                    label: "i18n('applicantDetails-emailField')",
                    tabIndex: 0,
                    value: '${state.contactEmail}',
                    defaultValue: '${state.contactEmail}',
                    'aria-label': 'input',
                    validateStatus: '${state.validateStatus_email}',
                    disabled: '${state.contactDetailsFlag}',
                    readonly: false,
                    help: '${state.help_email}',
                    placeholder: '',
                    size: 'default',
                    textDirection: 'ltr',
                    name: '',
                    type: 'text',
                    onChange:
                      _functions__WEBPACK_IMPORTED_MODULE_0__[
                        'call_f5_onChange'
                      ],
                    space: {
                      marginTop: '',
                      marginBottom: 'lg',
                    },
                    visible: '',
                  },
                  layout: 'base',
                  columnIndex: 0,
                  sharedProps: [
                    'i18n',
                    'locale',
                    'actions',
                    'contactEmail',
                    'validateStatus_email',
                    'contactDetailsFlag',
                    'help_email',
                    'actions',
                  ],
                },
              ],
            },
            {
              componentId: 'l1vTlmYUaaGmRDTA2K8ob',
              type: 'alert',
              props: {
                status: 'error',
                message: '${state.camundaMessage}',
                onClose: null,
                space: {
                  marginTop: 'sm',
                  marginBottom: 'md',
                },
                visible: _functions__WEBPACK_IMPORTED_MODULE_0__['f6_visible'],
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
        'call_f3_onChange',
        function () {
          return call_f3_onChange;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'call_f4_onSelect',
        function () {
          return call_f4_onSelect;
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
        'f6_visible',
        function () {
          return f6_visible;
        },
      );
      async function f1_onClick(props) {}
      function call_f2_onChange(props) {
        const { locale } = props;
        return value => {
          const checkBoxState = props.contactDetailsFlag ? false : true;
          props.actions.contactDetailsFlag.update(checkBoxState);
          if (checkBoxState) {
            const name =
              locale === 'en'
                ? `${props.user['First Name EN']} ${props.user['Last Name EN']}`
                : props.user['Full Name AR'];
            props.actions.contactName.update(name);
            props.actions.contactNumber.update(props.user.Mobile);
            props.actions.contactEmail.update(props.user['User Email']);
            // disable all the fields
            props.actions.disableContactName.update(true);
            props.actions.disableContactNo.update(true);
            props.actions.disableContactEmail.update(true);
          } else {
            props.actions.contactName.update('');
            props.actions.contactNumber.update('');
            props.actions.contactEmail.update('');
            props.actions.disableContactName.update(false);
            props.actions.disableContactNo.update(false);
            props.actions.disableContactEmail.update(false);
          }
          props.actions.validateStatus_contact_name.update('');
          props.actions.help_contact_name.update('');
          props.actions.help_phone_no.update('');
          props.actions.validateStatus_phone.update('');
          props.actions.help_email.update('');
          props.actions.validateStatus_email.update('');
        };
      }
      function call_f3_onChange(props) {
        return name => {
          props.actions.help_contact_name.update('');
          props.actions.validateStatus_contact_name.update('');
          if (!props.contactDetailsFlag && name.length < 5) {
            props.actions.validateStatus_contact_name.update('error');
            props.actions.help_contact_name.update(
              props.i18n('nameValidation'),
            );
          }
          props.actions.contactName.update(name);
        };
      }
      function call_f4_onSelect(props) {
        return no => {
          props.actions.contactNumber.update(no);
          props.actions.help_phone_no.update('');
          props.actions.validateStatus_phone.update('');
        };
      }
      function call_f5_onChange(props) {
        return email => {
          props.actions.contactEmail.update(email);
          props.actions.help_email.update('');
          props.actions.validateStatus_email.update('');
        };
      }
      function f6_visible(props) {
        return props.camundaMessage ? true : false;
      }

      /***/
    },
    /******/
  ],
).default;
