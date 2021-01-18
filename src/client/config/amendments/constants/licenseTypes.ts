import { IVariables } from '@tamm/app-composer';

const LICENSE_TYPES = {
  MOBDEA: 'mobdea',
  TAJER: 'tajer',
  ECONOMIC: 'economicLicense',
  ALL_IN_ONE: 'allInOne',
  INSTANT: 'instantLicense',
  TECH: 'tech',
  BRANCH: 'branch',
};

export const LICENSE_TYPE_LIST: IVariables = {
  [LICENSE_TYPES.MOBDEA]: {
    code: '1',
    id: LICENSE_TYPES.MOBDEA,
    nameEn: 'Mobdiaa',
    nameAr: '',
  },
  [LICENSE_TYPES.TAJER]: {
    code: '2',
    id: LICENSE_TYPES.TAJER,
    nameEn: 'Abu Dhabi Trader',
    nameAr: 'رخصة تاجر أبوظبي',
  },
  [LICENSE_TYPES.ECONOMIC]: {
    code: '3',
    id: LICENSE_TYPES.ECONOMIC,
    nameEn: 'Normal',
    nameAr: '',
  },
  [LICENSE_TYPES.ALL_IN_ONE]: {
    code: '4',
    id: LICENSE_TYPES.ALL_IN_ONE,
    nameEn: 'TAMM License',
    nameAr: '',
  },
  [LICENSE_TYPES.INSTANT]: {
    code: '5',
    id: LICENSE_TYPES.INSTANT,
    nameEn: 'Instant License',
    nameAr: '',
  },
  [LICENSE_TYPES.TECH]: {
    code: '6',
    id: LICENSE_TYPES.TECH,
    nameEn: 'Tech License',
    nameAr: '',
  },
  [LICENSE_TYPES.BRANCH]: {
    code: '7',
    id: LICENSE_TYPES.BRANCH,
    nameEn: 'Normal',
    nameAr: 'عادية',
  },
};

export default LICENSE_TYPES;
