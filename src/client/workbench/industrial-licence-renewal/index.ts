import page1 from './pages/login';
import page2 from './pages/select-licence';
import page3 from './pages/enter-company-details';
import page4 from './pages/upload-document';
import page5 from './pages/application-inprogress';
import page6 from './pages/application-approved';
import page7 from './pages/awaiting-payment-page';
import page8 from './pages/licence-issued';
import page9 from './pages/service-status';
import page10 from './pages/went-wrong';
import page11 from './pages/continue-process';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/_rSFAtv4sbf3yNFwRaLhl';
import symbol2 from './symbols/u_7BA0xr8Q0oku7QtzxvE';
import symbol3 from './symbols/pOuCbjftw6l5xN5WTMEPb';
import symbol4 from './symbols/xMN4736fUZ8gSHW5TTWMb';
import symbol5 from './symbols/Ur9omc34zzbqcbRlJ69Q6';

const config = {
  version: '2139',
  appName:
    'Request for Renewal of Economic Licence - Industrial Licence(kamal-v3)(clone2)',
  defaults: {
    title:
      'Request for Renewal of Economic Licence - Industrial Licence(kamal-v3)(clone2)',
  },
  initialState: {
    categories: [
      {
        label: 'Value1',
        id: 'value1',
      },
      {
        label: 'Value2',
        id: 'value2',
      },
    ],
    divisions: [
      {
        id: 'value1',
        label: 'Value1',
      },
      {
        id: 'value2',
        label: 'Value2',
      },
    ],
    groups: [
      {
        id: 'value1',
        label: 'Value1',
      },
      {
        id: 'value2',
        label: 'Value2',
      },
    ],
    classes: [
      {
        id: 'value1',
        label: 'Value1',
      },
      {
        id: 'value2',
        label: 'Value2',
      },
    ],
    branches: [
      {
        id: 'value1',
        label: 'Value1',
      },
      {
        id: 'value2',
        label: 'Value2',
      },
    ],
    categoryValue: '',
    divisionValue: '',
    groupValue: '',
    classValue: '',
    branchValue: '',
    divisionDisabled: true,
    groupDisabled: true,
    classDisabled: true,
    branchDisabled: true,
    tableColumns: [
      {
        id: 'licenceNumber',
        title: 'Licence Number',
      },
      {
        id: 'companyName',
        title: 'Company name',
      },
    ],
    tableActivities: [],
    currentStepIndex: 0,
    currentSubStepIndex: 0,
    steps: [
      {
        id: 'step_fillApplication',
        label: 'Fill application',
        link: '',
        status: '',
      },
      {
        id: 'step_getEconomicLicence',
        label: 'Get economic licence',
        link: '',
        status: '',
      },
    ],
    expandedStepIndexes: [],
    showSidebar: true,
    individualIssuedTags: [],
    referenceNo: 'IN-12345678',
    paymentSummaryColoum: [
      {
        id: 'description',
        title: 'ApplicationApproved_TableClo1',
      },
      {
        id: 'price',
        title: 'ApplicationApproved_TableCol2',
      },
    ],
    paymentSummaryRows: [],
    paymentTotal: 0,
    listOfLegalForm: [
      {
        id: '',
        label: '',
        disabled: false,
      },
    ],
    selectedLegalFrom: '',
    industrialList: [
      {
        id: '1',
        label: 'econmic type',
        disabled: false,
      },
      {
        id: '2',
        label: 'manage',
        disabled: false,
      },
      {
        id: '3',
        label: 'test',
        disabled: false,
      },
    ],
    selectedIndustrialType: '',
    ownerDetailsColumns: [
      {
        id: 'name',
        title: 'individual_owner_label_name',
      },
      {
        id: 'idNumber',
        title: 'individual_owner_label_id_number',
      },
      {
        id: 'nationality',
        title: 'individual_owner_label_nationality',
      },
      {
        id: 'share',
        title: 'individual_owner_label_share',
      },
    ],
    ownerDetailsRow: [
      {
        _id: '1',
        exampleField: 'Example Value',
      },
    ],
    tableAllActivities: [],
    tableSearch: '',
    tableTotalRecords: 0,
    tableCurrPage: 1,
    tablePageSize: 2,
    tablePageResizeOptions: [],
    basket: [],
    licenceListColumns: [
      {
        id: 'licenceNumber',
        title: 'SelectLicence_TableColumn1',
      },
      {
        id: 'companyName',
        title: 'SelectLicence_TableColumn2',
      },
    ],
    licenceListRows: [],
    licenceSearch: '',
    licenceNumber: '',
    actualLicenceList: [
      {
        _id: '1',
        exampleField: 'Example Value',
      },
    ],
    typesOfCompanyDetails: [
      {
        name: 'EnterTawtheeqNumber',
        id: '0',
        tabIndex: 0,
        autoFocus: false,
        readOnly: false,
        label: "i18n('CompanyDetails_Radio1')",
        description: '',
        textAsSingleLine: false,
        checked: false,
        value: '',
        disabled: false,
      },
      {
        name: 'EnterLeaseDetails',
        id: '1',
        tabIndex: 0,
        autoFocus: false,
        readOnly: false,
        label: "i18n('CompanyDetails_Radio2')",
        description: '',
        textAsSingleLine: false,
        checked: false,
        value: '',
        disabled: false,
      },
    ],
    companyDetailsType: '0',
    tawtheeqNumber: '',
    tawtheeqNumberHelp: '',
    tawtheeqNumberValidateStatus: '',
    checkTawtheeqNumberdisabled: true,
    checkedTakeContactInfo: false,
    contactInfoName: '',
    contactInfoNameValidateStatus: '',
    contactInfoNameHelp: '',
    contactInfoPhNoHelp: '',
    contactInfoPhNoValidateStatus: '',
    contactInfoEmailAddress: '',
    contactInfoEmailAddressValidateStatus: '',
    contactInfoEmailAddressHelp: '',
    contactInfoPhNo: '',
    leaseAgreementDate: [],
    leaseAgreementDateHelp: '',
    leaseAgreementDateValidateStatus: '',
    leaseAgreementNumber: '',
    leaseAgreementNumberValidateStatus: '',
    leaseAgreementNumberHelp: '',
    leaseAgreementAmount: '',
    leaseAgreementAmountValidateStatus: '',
    leaseAgreementAmountHelp: '',
    newLeaseContractValidationMessage: '',
    newLeaseContractValidateStatus: '',
    newLeaseContractFiles: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    civilDefenceCertificateValidateStatus: '',
    civilDefenceCertificateValidationMessage: '',
    civilDefenceCertificateFiles: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    adEnvironmentPermitValidateStatus: '',
    adEnvironmentPermitValidationMessage: '',
    adEnvironmentPermitFiles: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    progressPageTitle: '',
    progressPageTags: [
      {
        label: '',
        value: '',
      },
    ],
    currentInProgressPage: '',
    feedBackDocumentValidateStatus: '',
    feedBackDocumentValidationMessage: '',
    feedBackDocumentFiles: [
      {
        status: '',
        uploaded: 0,
      },
    ],
    eligible: false,
    disabled_eligibility: true,
    disabled_eligible: true,
    paymentURL: '',
    download_value: '',
    renewalNumber: '',
    recordId: '',
    latitude: 0,
    longitude: 0,
    locationDetails: {},
    smartPassURL: '',
    uaePassURL: '',
    tawtheeqNumberIsValid: false,
    notificationTablecol: [
      {
        id: 'message',
        title: 'message',
      },
    ],
    notificationTableItem: [
      {
        _id: '1',
        message: 'not eligible',
      },
    ],
    notificationTableStatus: '',
    myLicenceHeaderHidden: false,
    myLicenceSearchable: true,
    myLicenceSelectable: true,
    submitDate: 0,
    latitudeHelp: '',
    latitudeValidateStatus: '',
    longitudeValidateStatus: '',
    myLicenceSelectedItems: [{}],
    adgeName: 'DED',
    serviceCode: 'DED_025',
    productName: 'NOP',
    autoSaveStatus: 'loading',
  },
  persistStates: [
    'tawtheeqNumberIsValid',
    'submitDate',
    'latitudeHelp',
    'latitudeValidateStatus',
    'longitudeValidateStatus',
    'adgeName',
    'serviceCode',
    'productName',
  ],
  symbols: [...symbol1, ...symbol2, ...symbol3, ...symbol4, ...symbol5],
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
    ...page11,
  ],
  states: {
    initialState: {
      categories: [
        {
          label: 'Value1',
          id: 'value1',
        },
        {
          label: 'Value2',
          id: 'value2',
        },
      ],
      divisions: [
        {
          id: 'value1',
          label: 'Value1',
        },
        {
          id: 'value2',
          label: 'Value2',
        },
      ],
      groups: [
        {
          id: 'value1',
          label: 'Value1',
        },
        {
          id: 'value2',
          label: 'Value2',
        },
      ],
      classes: [
        {
          id: 'value1',
          label: 'Value1',
        },
        {
          id: 'value2',
          label: 'Value2',
        },
      ],
      branches: [
        {
          id: 'value1',
          label: 'Value1',
        },
        {
          id: 'value2',
          label: 'Value2',
        },
      ],
      categoryValue: '',
      divisionValue: '',
      groupValue: '',
      classValue: '',
      branchValue: '',
      divisionDisabled: true,
      groupDisabled: true,
      classDisabled: true,
      branchDisabled: true,
      tableColumns: [
        {
          id: 'licenceNumber',
          title: 'Licence Number',
        },
        {
          id: 'companyName',
          title: 'Company name',
        },
      ],
      tableActivities: [],
      currentStepIndex: 0,
      currentSubStepIndex: 0,
      steps: [
        {
          id: 'step_fillApplication',
          label: 'Fill application',
          link: '',
          status: '',
        },
        {
          id: 'step_getEconomicLicence',
          label: 'Get economic licence',
          link: '',
          status: '',
        },
      ],
      expandedStepIndexes: [],
      showSidebar: true,
      individualIssuedTags: [],
      referenceNo: 'IN-12345678',
      paymentSummaryColoum: [
        {
          id: 'description',
          title: 'ApplicationApproved_TableClo1',
        },
        {
          id: 'price',
          title: 'ApplicationApproved_TableCol2',
        },
      ],
      paymentSummaryRows: [],
      paymentTotal: 0,
      listOfLegalForm: [
        {
          id: '',
          label: '',
          disabled: false,
        },
      ],
      selectedLegalFrom: '',
      industrialList: [
        {
          id: '1',
          label: 'econmic type',
          disabled: false,
        },
        {
          id: '2',
          label: 'manage',
          disabled: false,
        },
        {
          id: '3',
          label: 'test',
          disabled: false,
        },
      ],
      selectedIndustrialType: '',
      ownerDetailsColumns: [
        {
          id: 'name',
          title: 'individual_owner_label_name',
        },
        {
          id: 'idNumber',
          title: 'individual_owner_label_id_number',
        },
        {
          id: 'nationality',
          title: 'individual_owner_label_nationality',
        },
        {
          id: 'share',
          title: 'individual_owner_label_share',
        },
      ],
      ownerDetailsRow: [
        {
          _id: '1',
          exampleField: 'Example Value',
        },
      ],
      tableAllActivities: [],
      tableSearch: '',
      tableTotalRecords: 0,
      tableCurrPage: 1,
      tablePageSize: 2,
      tablePageResizeOptions: [],
      basket: [],
      licenceListColumns: [
        {
          id: 'licenceNumber',
          title: 'SelectLicence_TableColumn1',
        },
        {
          id: 'companyName',
          title: 'SelectLicence_TableColumn2',
        },
      ],
      licenceListRows: [],
      licenceSearch: '',
      licenceNumber: '',
      actualLicenceList: [
        {
          _id: '1',
          exampleField: 'Example Value',
        },
      ],
      typesOfCompanyDetails: [
        {
          name: 'EnterTawtheeqNumber',
          id: '0',
          tabIndex: 0,
          autoFocus: false,
          readOnly: false,
          label: "i18n('CompanyDetails_Radio1')",
          description: '',
          textAsSingleLine: false,
          checked: false,
          value: '',
          disabled: false,
        },
        {
          name: 'EnterLeaseDetails',
          id: '1',
          tabIndex: 0,
          autoFocus: false,
          readOnly: false,
          label: "i18n('CompanyDetails_Radio2')",
          description: '',
          textAsSingleLine: false,
          checked: false,
          value: '',
          disabled: false,
        },
      ],
      companyDetailsType: '0',
      tawtheeqNumber: '',
      tawtheeqNumberHelp: '',
      tawtheeqNumberValidateStatus: '',
      checkTawtheeqNumberdisabled: true,
      checkedTakeContactInfo: false,
      contactInfoName: '',
      contactInfoNameValidateStatus: '',
      contactInfoNameHelp: '',
      contactInfoPhNoHelp: '',
      contactInfoPhNoValidateStatus: '',
      contactInfoEmailAddress: '',
      contactInfoEmailAddressValidateStatus: '',
      contactInfoEmailAddressHelp: '',
      contactInfoPhNo: '',
      leaseAgreementDate: [],
      leaseAgreementDateHelp: '',
      leaseAgreementDateValidateStatus: '',
      leaseAgreementNumber: '',
      leaseAgreementNumberValidateStatus: '',
      leaseAgreementNumberHelp: '',
      leaseAgreementAmount: '',
      leaseAgreementAmountValidateStatus: '',
      leaseAgreementAmountHelp: '',
      newLeaseContractValidationMessage: '',
      newLeaseContractValidateStatus: '',
      newLeaseContractFiles: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      civilDefenceCertificateValidateStatus: '',
      civilDefenceCertificateValidationMessage: '',
      civilDefenceCertificateFiles: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      adEnvironmentPermitValidateStatus: '',
      adEnvironmentPermitValidationMessage: '',
      adEnvironmentPermitFiles: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      progressPageTitle: '',
      progressPageTags: [
        {
          label: '',
          value: '',
        },
      ],
      currentInProgressPage: '',
      feedBackDocumentValidateStatus: '',
      feedBackDocumentValidationMessage: '',
      feedBackDocumentFiles: [
        {
          status: '',
          uploaded: 0,
        },
      ],
      eligible: false,
      disabled_eligibility: true,
      disabled_eligible: true,
      paymentURL: '',
      download_value: '',
      renewalNumber: '',
      recordId: '',
      latitude: 0,
      longitude: 0,
      locationDetails: {},
      smartPassURL: '',
      uaePassURL: '',
      tawtheeqNumberIsValid: false,
      notificationTablecol: [
        {
          id: 'message',
          title: 'message',
        },
      ],
      notificationTableItem: [
        {
          _id: '1',
          message: 'not eligible',
        },
      ],
      notificationTableStatus: '',
      myLicenceHeaderHidden: false,
      myLicenceSearchable: true,
      myLicenceSelectable: true,
      submitDate: 0,
      latitudeHelp: '',
      latitudeValidateStatus: '',
      longitudeValidateStatus: '',
      myLicenceSelectedItems: [{}],
      adgeName: 'DED',
      serviceCode: 'DED_025',
      productName: 'NOP',
      autoSaveStatus: 'loading',
    },
    persistStates: [
      'tawtheeqNumberIsValid',
      'submitDate',
      'latitudeHelp',
      'latitudeValidateStatus',
      'longitudeValidateStatus',
      'adgeName',
      'serviceCode',
      'productName',
    ],
  },
  hero: [
    {
      type: 'symbol',
      props: {
        symbol: 'u_7BA0xr8Q0oku7QtzxvE',
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
        symbol: 'pOuCbjftw6l5xN5WTMEPb',
      },
    },
  ],
};

export default config;
