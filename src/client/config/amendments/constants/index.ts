/* Constants */
export const PROCESS_NAME = 'amendments';

export const GCC_COUNTRIES = {
  gcc: ['BAHRAIN', 'KUWAIT', 'OMAN', 'QATAR', 'SAUDI ARABIA'],
  emirati: ['UNITED ARAB EMIRATES'],
};
export const GCC = 'GCC';
export const UAE = 'United Arab Emirates';
export const OTHER = 'Expat';

export const ADD = 'add';
export const DELETE = 'delete';
export const UPDATE = 'update';
export const LocalCompany = 'Local Company';
export const GovernmentEnity = 'Governmental Entity';
export const NonLocalCompany = 'Non-Local Company';
export const fetchVariableError = 'Failed to get process variables';
export const SOMETHING_WENT_WRONG = 'something_went_wrong';

// number of documents to be added in one chunk of document variable of camunda
export const DOCUMENT_CHUNK_LIMIT = 8;
// max number of chunks that will be sent to camunda
// If any change made here, update the variable name validation in ADU-MS as well (documents1...5)
export const TOTAL_CHUNKS_COUNT = 5;

export const PAID_CAPITAL_AND_REVENUES_SALES = [
  {
    id: 'Less than AED 1 million',
    nameEn: 'A. Less than AED 1 million',
    nameAr: 'أقل من مليون درهم',
  },
  {
    id: 'From AED 1 million up to AED 5 million',
    nameEn: 'B. From AED 1 million up to AED 5 million',
    nameAr: 'من 1 مليون – اقل من 5 مليون درهم',
  },
  {
    id: 'From AED 5 million up to AED 15 million',
    nameEn: 'C. From AED 5 million up to AED 15 million',
    nameAr: 'من 5 مليون – اقل من 15 مليون درهم',
  },
  {
    id: 'From AED 15 million up to AED 50 million',
    nameEn: 'D. From AED 15 million up to AED 50 million',
    nameAr: 'من 15 مليون – اقل من 50 مليون درهم',
  },
  {
    id: 'From AED 50 million up to AED 250 million',
    nameEn: 'E. From AED 50 million up to AED 250 million',
    nameAr: 'من 50 مليون – اقل من 250 مليون درهم',
  },
  {
    id: 'More than AED 250 million',
    nameEn: 'F. More than AED 250 million',
    nameAr: '250 مليون درهم فاكثر',
  },
];

export const companyTypes = [
  {
    id: 'Local Company',
    label: 'localCompany',
  },
  {
    id: 'Non-Local Company',
    label: 'nonLocalCompany',
  },
  {
    id: 'Free Zone company',
    label: 'freeZoneCompany',
  },
  {
    id: 'Governmental Entity',
    label: 'governmentalEntity',
  },
  {
    id: 'Foreign Company',
    label: 'foreignCompany',
  },
];

export const profileTypes = {
  INDIVIDUAL: 'Individual',
  COMPANY: 'Company',
};

export const residenceTypes = {
  RESIDENT_CITIZEN: 'Resident/Citizen',
  VISITOR: 'Visitor',
};

export const mapStateCommonForAll = [
  'businessKey',
  'licenseNo',
  'capID',
  'legalForm',
  'prevLegalForm',
  'licenseType',
  'prevLicenseType',
  'amendmentCategories',
  'licenceDetails',
  'initialValues',
  'tradeName',
  'activity',
  'tawtheeqDetails',
  'amendmentServerError',
];
