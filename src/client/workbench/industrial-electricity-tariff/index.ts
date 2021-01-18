import page1 from './pages/login';
import page2 from './pages/select-licence';
import page3 from './pages/entity-details';
import page4 from './pages/upload-document';
import page5 from './pages/contact-details';
import page6 from './pages/application-inprogress';
import page7 from './pages/review-quotations';
import page8 from './pages/application-returned';
import page9 from './pages/licence-issued';
import page10 from './pages/error';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/eauqjPZrppIH9ngzoQH_1';
import symbol2 from './symbols/Tvqi6M5rKJu4JAS3soD9-';
import symbol3 from './symbols/zq9vkdjX1HVpzHE4Jcn5k';
import symbol4 from './symbols/_yXTD_hRr98et9R1OspXM';
import symbol5 from './symbols/3hUcXdivV2rAoRRsJ3pd8';
import symbol6 from './symbols/8LINI-LpO_wRsPTAq3_86';
import symbol7 from './symbols/FoviLkTxM5ejYht7kzXYY';
import symbol8 from './symbols/5xF4WpaHijH9pKvymPV0O';
import symbol9 from './symbols/cZR2gZ4fMS0tyRreVcYvc';
import symbol10 from './symbols/_fKRatH62UIjfyCmEg4_8';
import symbol11 from './symbols/V-yVgnSPmczj86P4we-0G';
import symbol12 from './symbols/UEf-I4uyEmhhoyFPWfI3U';
import symbol13 from './symbols/EjPOVaCv-3xQGRvwUsIEV';

const config = {
  version: '12',
  appName: 'Request for Industrial Electricity Tariff - Final',
  defaults: {
    title: 'Request for Industrial Electricity Tariff - Final',
  },
  initialState: {
    paymentTableColumns: [],
    paymentTableRows: [],
    paymentTags: [],
    licenceList: [],
    licenceSearchValue: '',
    licenceListTableColumns: [
      {
        id: 'tradeLicenseNumber',
        title: "i18n('SelectLicence_LicenceNumberCol')",
      },
      {
        id: 'businessName',
        title: "i18n('SelectLicence_CompanyNameCol')",
      },
    ],
    filteredLicenceList: [],
    licenceNumber: '',
    isSelectLicenceNextButtonDisabled: true,
    fetchingLicencesStatus: 'loading',
    paginatedLicenceList: [],
    filteredLicenceListLength: 0,
    licenceListCurrentPage: 1,
    companyDetailsForm: {},
    isSubmitButtonDisabled: true,
    isPrivacyWaiverChecked: false,
    fileUploads: [],
    contactForm: {
      mobileNumber: '',
    },
    isContact: false,
    isUndertakingChecked: false,
    smartPassURL: '',
    uaePassURL: '',
    steps: [],
    currentStepIndex: 0,
    currentSubStepIndex: 0,
    expandedStepIndexes: [{}],
    selectedEntities: {},
    files: [],
    returnedPageTags: [
      {
        label: '',
        value: '',
      },
      {
        label: '',
        value: '',
      },
    ],
    capId: '',
    returnedSubmitDisabled: true,
    applicationStatusComments: '',
    referenceTags: [],
    quotationColumns: [
      {
        id: 'entity',
        label: "i18n('Global_EntityCol')",
        sortable: true,
      },
      {
        id: 'quotationAmount',
        label: "i18n('Global_QuotationAmountCol')",
        sortable: true,
      },
    ],
    entityQuotations: [],
    awardedEntity: '',
    isEntityNotSelected: true,
    isAllQuotationsFetched: true,
    selectedLicencesArr: [],
    selectedQuotationsArr: [],
    showSidebar: true,
    hasEntityFeedback: false,
    feedbackStatements: [],
    feedbackColumns: [
      {
        id: 'applicationStatusComments',
        label: 'applicationStatusComments',
      },
    ],
    bakertillySelected: false,
    deloitteSelected: '',
    ardentSelected: '',
    eySelected: '',
    provitiSelected: '',
    mazarsSelected: '',
    croweSelected: '',
    mbcSelected: '',
    pkfSelected: '',
    tagSelected: '',
    emailSent: false,
    loading: false,
    document0: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    document1: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    document2: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    document3: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    document4: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    document5: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    documentsUploaded: false,
    entityPayload: {},
    document6: [],
    document7: [],
    quotationSingleActions: [
      {
        id: 'download',
        label: 'Download',
      },
    ],
    files_fceebfbcbc: [
      {
        status: '',
        uploaded: 0,
      },
    ],
  },
  persistStates: [
    'emailSent',
    'files',
    'document1',
    'document1',
    'document1',
    'document0',
    'fileUploads',
    'document2',
    'document3',
    'document4',
    'document4',
    'document5',
    'documentsUploaded',
    'document6',
    'document7',
  ],
  symbols: [
    ...symbol1,
    ...symbol2,
    ...symbol3,
    ...symbol4,
    ...symbol5,
    ...symbol6,
    ...symbol7,
    ...symbol8,
    ...symbol9,
    ...symbol10,
    ...symbol11,
    ...symbol12,
    ...symbol13,
  ],
  dictionary: {
    en: dictEn,
    ar: dictAr,
  },
  skipFetchState: [],
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
  ],
  states: {
    initialState: {
      paymentTableColumns: [],
      paymentTableRows: [],
      paymentTags: [],
      licenceList: [],
      licenceSearchValue: '',
      licenceListTableColumns: [
        {
          id: 'tradeLicenseNumber',
          title: "i18n('SelectLicence_LicenceNumberCol')",
        },
        {
          id: 'businessName',
          title: "i18n('SelectLicence_CompanyNameCol')",
        },
      ],
      filteredLicenceList: [],
      licenceNumber: '',
      isSelectLicenceNextButtonDisabled: true,
      fetchingLicencesStatus: 'loading',
      paginatedLicenceList: [],
      filteredLicenceListLength: 0,
      licenceListCurrentPage: 1,
      companyDetailsForm: {},
      isSubmitButtonDisabled: true,
      isPrivacyWaiverChecked: false,
      fileUploads: [],
      contactForm: {
        mobileNumber: '',
      },
      isContact: false,
      isUndertakingChecked: false,
      smartPassURL: '',
      uaePassURL: '',
      steps: [],
      currentStepIndex: 0,
      currentSubStepIndex: 0,
      expandedStepIndexes: [{}],
      selectedEntities: {},
      files: [],
      returnedPageTags: [
        {
          label: '',
          value: '',
        },
        {
          label: '',
          value: '',
        },
      ],
      capId: '',
      returnedSubmitDisabled: true,
      applicationStatusComments: '',
      referenceTags: [],
      quotationColumns: [
        {
          id: 'entity',
          label: "i18n('Global_EntityCol')",
          sortable: true,
        },
        {
          id: 'quotationAmount',
          label: "i18n('Global_QuotationAmountCol')",
          sortable: true,
        },
      ],
      entityQuotations: [],
      awardedEntity: '',
      isEntityNotSelected: true,
      isAllQuotationsFetched: true,
      selectedLicencesArr: [],
      selectedQuotationsArr: [],
      showSidebar: true,
      hasEntityFeedback: false,
      feedbackStatements: [],
      feedbackColumns: [
        {
          id: 'applicationStatusComments',
          label: 'applicationStatusComments',
        },
      ],
      bakertillySelected: false,
      deloitteSelected: '',
      ardentSelected: '',
      eySelected: '',
      provitiSelected: '',
      mazarsSelected: '',
      croweSelected: '',
      mbcSelected: '',
      pkfSelected: '',
      tagSelected: '',
      emailSent: false,
      loading: false,
      document0: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      document1: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      document2: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      document3: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      document4: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      document5: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      documentsUploaded: false,
      entityPayload: {},
      document6: [],
      document7: [],
      quotationSingleActions: [
        {
          id: 'download',
          label: 'Download',
        },
      ],
      files_fceebfbcbc: [
        {
          status: '',
          uploaded: 0,
        },
      ],
    },
    persistStates: [
      'emailSent',
      'files',
      'document1',
      'document1',
      'document1',
      'document0',
      'fileUploads',
      'document2',
      'document3',
      'document4',
      'document4',
      'document5',
      'documentsUploaded',
      'document6',
      'document7',
    ],
  },
  hero: [
    {
      type: 'symbol',
      props: {
        symbol: 'eauqjPZrppIH9ngzoQH_1',
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
        symbol: 'Tvqi6M5rKJu4JAS3soD9-',
      },
    },
  ],
};

export default config;
