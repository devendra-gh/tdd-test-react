import { IVariables } from '@tamm/app-composer';

const LEGAL_FORMS: IVariables = {
  ESTABLISHMENT: 'establishment',
  SOLE_LLC: 'soleProprietorshipLLC',
  LLC: 'limitedLiabilityCompanyLLC',
  PJSC_PRIVATE: 'PJSCPrivate',
  PJSC_PUBLIC: 'PJSCPublic',
  PJSC_SOLE_PROP: 'PJSCSoleProp',
  BRANCH: 'adBranch',
  FREEZONE_BRANCH: 'freezoneBranch',
  UAE_BRANCH: 'uaeBranch',
  GCC_BRANCH: 'gccBranch',
  FOREIGN_BRANCH: 'foreignBranch',
};

export const BRANCH_MAPPINGS: IVariables = {
  'Branch of a Local Establshment': LEGAL_FORMS.BRANCH,
  'Establshmnt from anthr Emirate': LEGAL_FORMS.UAE_BRANCH,
  'Branch of Free Zone': LEGAL_FORMS.FREEZONE_BRANCH,
  'Branch of GCC': LEGAL_FORMS.GCC_BRANCH, // todo: find correct value for this
  'Branch of a Foreign Company': LEGAL_FORMS.FOREIGN_BRANCH,
};

export const LEGAL_FORMS_LIST: IVariables = {
  [LEGAL_FORMS.ESTABLISHMENT]: {
    code: '1',
    id: LEGAL_FORMS.ESTABLISHMENT,
    nameEn: 'Establishment',
    nameAr: 'مؤسسة فردية',
  },
  [LEGAL_FORMS.SOLE_LLC]: {
    code: '34',
    id: LEGAL_FORMS.SOLE_LLC,
    nameEn: 'Sole Proprietorship L.L.C.',
    nameAr: 'شركة الشخص الواحد ش.ش.و',
  },
  [LEGAL_FORMS.LLC]: {
    code: '3',
    id: LEGAL_FORMS.LLC,
    nameEn: 'Limited Liability Company',
    nameAr: 'شركة ذات مسؤولية محدودة',
  },
  [LEGAL_FORMS.PJSC_PRIVATE]: {
    code: '17',
    id: LEGAL_FORMS.PJSC_PRIVATE,
    nameEn: 'PJSC - Private',
    nameAr: 'شركة مساهمة خاصة',
  },
  [LEGAL_FORMS.PJSC_PUBLIC]: {
    code: '18',
    id: LEGAL_FORMS.PJSC_PUBLIC,
    nameEn: 'PJSC - Public',
    nameAr: 'شركة مساهمة عامة',
  },
  [LEGAL_FORMS.PJSC_SOLE_PROP]: {
    code: '20',
    id: LEGAL_FORMS.PJSC_SOLE_PROP,
    nameEn: 'PJSC - Sole Prop',
    nameAr: 'شركة الشخص الواحد ش.م.خ',
  },
  [LEGAL_FORMS.BRANCH]: {
    code: '99',
    id: LEGAL_FORMS.BRANCH,
    nameEn: 'Branch',
    nameAr: '',
  },
  [LEGAL_FORMS.FREEZONE_BRANCH]: {
    code: '99',
    id: LEGAL_FORMS.FREEZONE_BRANCH,
    nameEn: 'Freezone Branch',
    nameAr: '',
  },
  [LEGAL_FORMS.UAE_BRANCH]: {
    code: '99',
    id: LEGAL_FORMS.UAE_BRANCH,
    nameEn: 'UAE Branch',
    nameAr: '',
  },
  [LEGAL_FORMS.GCC_BRANCH]: {
    code: '99',
    id: LEGAL_FORMS.GCC_BRANCH,
    nameEn: 'GCC Branch',
    nameAr: '',
  },
  [LEGAL_FORMS.FOREIGN_BRANCH]: {
    code: '99',
    id: LEGAL_FORMS.FOREIGN_BRANCH,
    nameEn: 'Foreign Branch',
    nameAr: '',
  },
};

export default LEGAL_FORMS;
