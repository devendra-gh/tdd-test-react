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
import page12 from './pages/no-active-licence';
import page13 from './pages/continue-process';
import page14 from './pages/account-upgrade';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/LRdpV5hJYYHXEeQXvW572';
import symbol2 from './symbols/SpZNRSS1hcBXpPT30yok2';
import symbol3 from './symbols/9D0MQ6LCSJOtHaHem5NP5';

const config = {
  version: '738',
  appName: 'Adu-business-SAS-TrueEconomyLicence- DROP 1',
  defaults: {
    title: 'Adu-business-SAS-TrueEconomyLicence- DROP 1',
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
  symbols: [...symbol1, ...symbol2, ...symbol3],
  dictionary: {
    en: dictEn,
    ar: dictAr,
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

export default config;
