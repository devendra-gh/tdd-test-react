import page1 from './pages/login';
import page2 from './pages/start';
import page3 from './pages/select-licence';
import page4 from './pages/contact-details';
import page5 from './pages/application-in-progress';
import page6 from './pages/payment-summary';
import page7 from './pages/payment-confirmation';
import page8 from './pages/payment-failed';
import page9 from './pages/application-success';
import page10 from './pages/went-wrong';
import page11 from './pages/no-information';
import page12 from './pages/account-upgrade';
import page13 from './pages/no-active-licence';
import page14 from './pages/continue-process';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/LRdpV5hJYYHXEeQXvW572';
import symbol2 from './symbols/SpZNRSS1hcBXpPT30yok2';
import symbol3 from './symbols/ZkHfwnI1JLDASDvY3PAq3';

const config = {
  version: '282',
  appName: 'Adu-business-SAS-IssuingEconomicRecordCertificate-DROP 1',
  defaults: {
    title: 'Adu-business-SAS-IssuingEconomicRecordCertificate-DROP 1',
  },
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
    loading: false,
    currentPageSize: 0,
    paymentURL: '',
    apTransactionNo: '',
    capId: '',
    paymentLinkString: '',
    smartPassURL: '',
    uaePassURL: '',
    adgeName: 'DED',
    serviceCode: 'AD_DED_003',
    productName: 'NOP',
    process_step: [],
    breadcrumbs: [],
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
    '/application-error',
    '/select-licence',
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
      loading: false,
      currentPageSize: 0,
      paymentURL: '',
      apTransactionNo: '',
      capId: '',
      paymentLinkString: '',
      smartPassURL: '',
      uaePassURL: '',
      adgeName: 'DED',
      serviceCode: 'AD_DED_003',
      productName: 'NOP',
      process_step: [],
      breadcrumbs: [],
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

export default config;
