import { IVariables } from '@tamm/app-composer';
import { find, includes } from 'lodash';
import { getSmartpassData } from 'client/utils/appData';
import { UAE } from './gcc';

const loggedInUser = getSmartpassData();

const CATEGORIES = [
  {
    nameEn: 'Services',
    nameAr: 'الخدمات',
    value: 'services',
  },
  {
    nameEn: 'Contracting',
    nameAr: 'المقاولات',
    value: 'contracting',
  },
  {
    nameEn: 'Consulting',
    nameAr: 'الاستشارات',
    value: 'consulting',
  },
  {
    nameEn: 'Trading',
    nameAr: 'التجارة',
    value: 'trading',
  },
  {
    nameEn: 'Agriculture',
    nameAr: 'الزراعة',
    value: 'agriculture',
  },
  {
    nameEn: 'Industry',
    nameAr: 'الصناعة',
    value: 'industry',
  },
  {
    nameEn: 'Oil & Gas',
    nameAr: 'النفط والغاز',
    value: 'oilAndGas',
  },
  {
    nameEn: 'Tourism',
    nameAr: 'السياحة',
    value: 'tourism',
  },
  {
    nameEn: 'Craft',
    nameAr: 'الحرفية',
    value: 'craft',
  },
  {
    nameEn: 'Technology',
    nameAr: 'التكنولوجيا',
    value: 'technology',
  },
];

const EMIRATES = [
  {
    id: '2',
    nameEn: 'Dubai',
    nameAr: 'دبي',
  },
  {
    id: '3',
    nameEn: 'Sharjah',
    nameAr: 'الشارقة',
  },
  {
    id: '4',
    nameEn: 'Ajman',
    nameAr: 'عجمان',
  },
  {
    id: '5',
    nameEn: 'Umm Al Quwain',
    nameAr: 'أم القيوين',
  },
  {
    id: '6',
    nameEn: 'Ras Al-Khaimah',
    nameAr: 'رأس الخيمة',
  },
  {
    id: '7',
    nameEn: 'Fujairah',
    nameAr: 'الفجيرة',
  },
];

const BRANCHES = [
  {
    id: 'branchAD',
    name: 'licenceType.branchAD',
    partnerType: '11',
  },
  {
    id: 'branchFZ',
    name: 'licenceType.branchFZ',
    partnerType: '104',
  },
  {
    id: 'branchUAE',
    name: 'licenceType.branchUAE',
    partnerType: '100',
  },
  {
    id: 'branchGCC',
    name: 'licenceType.branchGCC',
    partnerType: '12',
  },
  {
    id: 'branchForeign',
    name: 'licenceType.branchForeign',
    partnerType: '12',
  },
];

const LEGAL_FORMS = [
  {
    code: '1',
    id: 'establishment',
    nameEn: 'Establishments',
    nameAr: 'مؤسسة فردية',
  },
  {
    code: '34',
    id: 'soleProprietorshipLLC',
    nameEn: 'Sole Proprietorship LLC',
    nameAr: 'شركة الشخص الواحد ش.ش.و',
  },
  {
    code: '3',
    id: 'limitedLiabilityCompanyLLC',
    nameEn: 'Limited Liability Company LLC',
    nameAr: 'شركة ذات مسؤولية محدودة',
  },
  {
    code: '17',
    id: 'PJSCPrivate',
    nameEn: 'PJSC - Private',
    nameAr: 'شركة مساهمة خاصة',
  },
  {
    code: '18',
    id: 'PJSCPublic',
    nameEn: 'PJSC - Public',
    nameAr: 'شركة مساهمة عامة',
  },
  {
    code: '20',
    id: 'PJSCSoleProp',
    nameEn: 'PJSC - Sole Prop',
    nameAr: 'شركة الشخص الواحد ش.م.خ',
  },
];

const PAID_CAPITAL_AND_REVENUES_SALES = [
  {
    nameEn: 'A. Less than AED 1 Million',
    nameAr: 'أقل من مليون درهم',
  },
  {
    nameEn: 'B. From AED 1 Million up to AED 5 Million',
    nameAr: 'من 1 مليون – أقل من 5 مليون درهم',
  },
  {
    nameEn: 'C. From AED 5 Million up to AED 15 Million',
    nameAr: 'من 5 مليون – أقل من 15 مليون درهم',
  },
  {
    nameEn: 'D. From AED 15 Million up to AED 50 Million',
    nameAr: 'من 15 مليون – أقل من 50 مليون درهم',
  },
  {
    nameEn: 'E. From AED 50 Million up to AED 250 Million',
    nameAr: 'من 50 مليون – أقل من 250 مليون درهم',
  },
  {
    nameEn: 'F. More than AED 250 Million',
    nameAr: '250 مليون درهم فاكثر',
  },
];

const REPRESENTATIVE_TYPES = {
  OWNER: {
    code: '1',
    name: 'Owner',
  },
  PARTNER: {
    code: '2',
    name: 'Partner',
  },
  MANAGER: {
    code: '4',
    name: 'Manager',
  },
  REPRESENTATIVE: {
    code: '5',
    name: 'representative',
  },
  SPONSOR: {
    code: '3',
    name: 'sponsor',
  },
};

const PARTNER_TYPES = {
  INDIVIDUAL: {
    code: '10',
  },
  NON_LOCAL_COMPANY: {
    code: '100',
  },
  ORGANIZATION: {
    code: '101',
  },
  COMPANY_SHAREHOLDERS: {
    code: '103',
  },
  LOCAL_COMPANY: {
    code: '11',
  },
  FOREIGN_COMPANY: {
    code: '12',
  },
  FREE_ZONE: {
    code: '104',
  },
};

const NAME_RESERVATION_PERIOD = [
  {
    id: '03',
    nameEn: '3 Months',
    nameAr: 'أشهر 3',
  },
  {
    id: '06',
    nameEn: '6 Months',
    nameAr: 'أشهر 6',
  },
  {
    id: '09',
    nameEn: '9 Months',
    nameAr: 'أشهر 9',
  },
  {
    id: '12',
    nameEn: '12 Months',
    nameAr: 'أشهر 12',
  },
];

const LOCATION_MATRIX: IVariables = {
  'abu-dhabi-free-zones': [
    {
      id: 'abu_dhabi_airports_free_zone',
      nameEn: 'Abu Dhabi Airports Free Zone',
      nameAr: 'المنطقة الحرة لمطارات أبو ظبي',
      issuePlaceCode: '950',
    },
    {
      id: 'two_four_54',
      nameEn: 'TwoFour54',
      nameAr: 'هيئة المنطقة الإعلامية أبوظبي',
      issuePlaceCode: '954',
    },
    {
      id: 'khalifa_industrial_zone_abu_dhabi',
      nameEn: 'Khalifa Industrial Zone Abu Dhabi (KIZAD)',
      nameAr: 'مدينة خليفة الصناعية',
      issuePlaceCode: '952',
    },
    {
      id: 'masdar',
      nameEn: 'Masdar',
      nameAr: 'مصدر',
      issuePlaceCode: '953',
    },
    {
      id: 'abu_dhabi_global_market_square',
      nameEn: 'Abu Dhabi Global Market Square',
      nameAr: 'سوق أبو ظبي العالمي',
      issuePlaceCode: '951',
    },
  ],
  'abu-dhabi-investment-areas': [
    {
      id: 'break_water',
      nameEn: 'Break Water',
      nameAr: 'كاسر الامواج',
      issuePlaceCode: 'Break Water',
    },
    {
      id: 'sih_sdeira',
      nameEn: 'Sih Sdeira',
      nameAr: 'سيح السديرة',
      issuePlaceCode: 'Sih Sdeira',
    },
    {
      id: 'nuray_island',
      nameEn: 'Nuray Island',
      nameAr: 'جزيرة نوراي',
      issuePlaceCode: 'Nuray Island',
    },
    {
      id: 'al_maryah_island',
      nameEn: 'Al Maryah Island',
      nameAr: 'جزيرة المارية',
      issuePlaceCode: 'Al Maryah Island',
    },
    {
      id: 'saadiyat_island',
      nameEn: 'Saadiyat Island',
      nameAr: 'جزيرة السعديات',
      issuePlaceCode: 'Saadiyat Island',
    },
    {
      id: 'al_jbil_island',
      nameEn: 'Al Jbil Island',
      nameAr: 'جزيرة الجبيل',
      issuePlaceCode: 'Al Jbil Island',
    },
    {
      id: 'investment_zone_(higher_authority_of_specialized_economic_zones)',
      nameEn:
        'Investment Zone (Higher Authority of Specialized Economic Zones)',
      nameAr: 'المؤسسة العليا للمناطق الاقتصادية المتخصصة',
      issuePlaceCode:
        'Investment Zone (Higher Authority of Specialized Economic Zones)',
    },
    {
      id: 'masdar_city',
      nameEn: 'Masdar City',
      nameAr: 'مدينة مصدر',
      issuePlaceCode: '953',
    },
    {
      id: 'al_shamkha',
      nameEn: 'Al Shamkha',
      nameAr: 'الشامخة',
      issuePlaceCode: 'Al Shamkha',
    },
    {
      id: 'investment_zone_allocated_to_abu_dhabi_ports_company',
      nameEn: 'Investment Zone (Allocated to Abu Dhabi Ports Company)',
      nameAr: 'منطقة استثمارية (مخصصة لشركة أبوظبي للموانئ)',
      issuePlaceCode: 'Investment Zone (Allocated to Abu Dhabi Ports Company)',
    },
    {
      id: 'raha_beach_reem_island',
      nameEn: 'Raha Beach, Reem Island',
      nameAr: 'شاطئ الراحة، جزيرة الريم',
      issuePlaceCode: 'Raha Beach, Reem Island',
    },
    {
      id: 'al_jorf_plot',
      nameEn: 'Al Jorf Plot',
      nameAr: 'حوض الجرف',
      issuePlaceCode: 'Al Jorf Plot',
    },
    {
      id: 'al_reef',
      nameEn: 'Al Reef',
      nameAr: 'منطقة الريف',
      issuePlaceCode: 'Al Reef',
    },
    {
      id: 'fahed_island',
      nameEn: 'Fahed Island',
      nameAr: 'جزيرة فاهد',
      issuePlaceCode: 'Fahed Island',
    },
    {
      id: 'investment_zone_allocated_to_abu_dhabi_airports_company',
      nameEn: 'Investment Zone (Allocated to Abu Dhabi Airports Company)',
      nameAr: 'منطقة استثمارية (مخصصة لشركة أبوظبي للمطارات)',
      issuePlaceCode:
        'Investment Zone (Allocated to Abu Dhabi Airports Company)',
    },
    {
      id: 'al_falah_sector_7',
      nameEn: 'Al Falah Sector 7',
      nameAr: '7 حوض الفلاح',
      issuePlaceCode: 'Al Falah Sector 7',
    },
    {
      id: 'hiid_saadiyat',
      nameEn: 'Hiid Saadiyat',
      nameAr: 'حد السعديات',
      issuePlaceCode: 'Hiid Saadiyat',
    },
  ],
  'emirate-abu-dhabi': [
    {
      id: 'al_ain',
      nameEn: 'Al Ain',
      nameAr: 'العين',
      issuePlaceCode: '2',
    },
    {
      id: 'abu_dhabi',
      nameEn: 'Abu Dhabi',
      nameAr: 'أبو ظبي',
      issuePlaceCode: '1',
    },
    {
      id: 'al_dhafra',
      nameEn: 'Al Dhafra',
      nameAr: 'الظفرة',
      issuePlaceCode: '95',
    },
  ],
};

const SD_TYPES: IVariables = {
  'abu-dhabi-free-zones': 'SD_FreeZone',
  'abu-dhabi-investment-areas': 'SD_InvestmentAreas',
  'emirate-abu-dhabi': 'SD_MainLand',
};

const PRIVILEGES_FACILITIES_FIELD: IVariables = {
  'abu-dhabi-free-zones': 'freeZone',
  'abu-dhabi-investment-areas': 'abuDhabiInvestmentAreas',
  'emirate-abu-dhabi': 'establishmentCardLocation',
};

const LOCATION_ACTIVITY_LOOKUP: IVariables = {
  'abu-dhabi-free-zones': 'Free Zone',
  'abu-dhabi-investment-areas': 'Investment',
  'emirate-abu-dhabi': 'Main',
};

const getLicenseType = (licenseType: string, branch: string) => {
  if (licenseType !== 'branch') {
    return licenseType;
  }
  return branch || BRANCHES[0].id;
};

const getBusinessLegalFormCode = (licenseType: string, legalFormId: string) => {
  const legalForm = find(LEGAL_FORMS, (i: IVariables) => i.id === legalFormId);

  let code = legalForm ? legalForm.code : '1';

  if (legalFormId === 'establishment') {
    switch (licenseType) {
      case 'branchGCC':
        code = '10';
        break;
      case 'branchAD':
        code = '11';
        break;
      case 'mubdia':
        code = '12';
        break;
      case 'branchUAE':
        code = '14';
        break;
      default:
        code = '1';
    }
  }

  return code;
};

const getCountry = (nationality: string, countries: IVariables[]) => {
  const country = find(countries, item => {
    return item.code === nationality;
  });

  return country ? country.name : '';
};

const partnersValidation = (
  items: IVariables[],
  minPartners: number,
  legalForm: string,
  licenceType: string,
) => {
  const TOTAL_PERCENT = 100;
  const LOCAL_PERCENT = 51;

  let totalShare = 0;
  let localShare = 0;

  items.forEach((item: IVariables) => {
    totalShare += Number(item.sharePercentage);
    if (item.nationality === UAE) {
      localShare += Number(item.sharePercentage);
    }
  });

  const requiredPass = items.length !== 0;
  const totalSharePass = totalShare === TOTAL_PERCENT;
  const localSharePass = localShare >= LOCAL_PERCENT;
  const minPartnersPass = items.length >= minPartners;

  let moaPass = true;

  if (
    includes(['tajer', 'allInOne'], licenceType) &&
    includes(['limitedLiabilityCompanyLLC'], legalForm)
  ) {
    // loop through all partners and check if IDN exists
    const findPartner = items.find(
      (partner: IVariables) => loggedInUser.IDN === partner.emiratesId,
    );
    if (!findPartner) {
      moaPass = false;
    }
  }

  return {
    requiredPass,
    totalSharePass,
    localSharePass,
    minPartnersPass,
    moaPass,
    isValid:
      requiredPass &&
      totalSharePass &&
      localSharePass &&
      minPartnersPass &&
      moaPass,
  };
};

const getLegalFormFromCode = (code: string) => {
  const obj = LEGAL_FORMS.find(i => i.code === code);
  if (obj && obj.id) {
    return obj.id;
  }
  return '';
};

export {
  getLegalFormFromCode,
  getLicenseType,
  getBusinessLegalFormCode,
  getCountry,
  partnersValidation,
  CATEGORIES,
  EMIRATES,
  BRANCHES,
  PARTNER_TYPES,
  LEGAL_FORMS,
  PAID_CAPITAL_AND_REVENUES_SALES,
  REPRESENTATIVE_TYPES,
  NAME_RESERVATION_PERIOD,
  SD_TYPES,
  LOCATION_MATRIX,
  PRIVILEGES_FACILITIES_FIELD,
  LOCATION_ACTIVITY_LOOKUP,
};
