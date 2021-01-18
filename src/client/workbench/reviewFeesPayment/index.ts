import page1 from './pages/start';
import page2 from './pages/login';
import page3 from './pages/selectlicences';
import page4 from './pages/applicant-details';
import page5 from './pages/application-confirmation';
import page6 from './pages/payment-summary';
import page7 from './pages/payment-confirmation';
import page8 from './pages/paymentsuccess';
import page9 from './pages/payment-failure';
import page10 from './pages/went-wrong';
import page11 from './pages/no-information-found';
import page12 from './pages/account-upgrade';
import page13 from './pages/no-active-licence';
import page14 from './pages/continue-process';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/XPuuzzSsc1PM7KGrp2LDX';
import symbol2 from './symbols/zUb_2ox3pxzJj2-JHqAh1';
import symbol3 from './symbols/Tg2IHCN6ziC51qE0aPQ4n';

const config = {
  version: '698',
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
  symbols: [...symbol1, ...symbol2, ...symbol3],
  dictionary: {
    en: dictEn,
    ar: dictAr,
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
    ...page1,
    ...page2,
    ...page3,
    ...page4,
    ...page5,
    ...page6,
    ...page7,
    ...page8,
    ...page9,
    ...page10,
    ...page11,
    ...page12,
    ...page13,
    ...page14,
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

export default config;
