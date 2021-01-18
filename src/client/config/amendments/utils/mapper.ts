import { IVariables } from '@tamm/app-composer';
import representativeStructure from 'client/config/amendments/configs/representativeStructure';
import { generateProfileKey } from 'client/config/amendments/utils/functions';
import { isEmiratesId } from 'client/config/amendments/utils/validations';
import moment from 'moment';
import { residenceTypes } from 'client/config/amendments/constants';
import REPRESENTATIVE_TYPE, { OWNER } from '../constants/representativeType';
import { AMENDMENT_TYPES as types } from '../constants/amendmentObjects';

interface Items {
  firstNameEn: string;
  firstNameAr: string;
  lastNameEn: string;
  lastNameAr: string;
  type?: string;
  profileType?: string;
  typeArb?: string;
  referenceContactId: string;
  emiratesId: string;
  passportNumber: string;
  partnerSharePercentage: string;
  representativeTypeEng: string;
  representativeTypeArb: string;
  pEmail: string;
  bDate: string;
  phoneNumber: string;
  nationalityAr: string;
  nationality: string;
  contactId: string;
  licenceNo: string;
  companyNameEn: string;
  companyNameAr: string;
}

const refineRepresentative = (item: IVariables, type: string) => {
  // todo: finding idNumber is EID or MOI
  // find type value from idType
  // populate values for company type partner
  const isEID = isEmiratesId(item.idNumber);
  return {
    ...representativeStructure[type],
    nameEn: item.NameEn,
    nameAr: item.NameAr,
    firstNameEn: item.FNameEn,
    firstNameAr: item.FNameAr,
    lastNameEn: item.LNameEn,
    lastNameAr: item.LNameAr,
    type: isEID ? residenceTypes.RESIDENT_CITIZEN : residenceTypes.VISITOR,
    profileType: item.typeEng,
    profileTypeArb: item.typeArb,
    referenceContactId: item.referenceContactId,
    emiratesId: isEID ? item.idNumber : '',
    moiID: isEID ? '' : item.idNumber,
    sharePercentage: item.partnerSharePercentage,
    sharePercentageLog: item.partnerSharePercentage,
    representativeTypeEng: type,
    representativeTypeArb: item.representativeTypeArb,
    pEmail: item.pEmail.trim(),
    bDate: moment(item.bDate, 'DD-MM-YYYY'),
    phoneNumber: item.phoneNumber.trim(),
    passportNumber: '',
    nationalityAr: item.nationalityAr,
    nationality: item.nationalityEn,
    nationalityLog: item.nationalityEn,
    contactId: item.contactId,
    status: null,
    referenceKey: generateProfileKey(),
  };
};

const getPartnerType = (
  partnerTypes: IVariables[],
  repType: string,
  type: string,
) => {
  const items = partnerTypes
    .filter(item =>
      type === types.PARTNERS
        ? item.representativeTypeEng === REPRESENTATIVE_TYPE[types.PARTNERS] ||
          item.representativeTypeEng === OWNER
        : repType === item.representativeTypeEng,
    )
    .map((item: IVariables) => refineRepresentative(item, type));
  return items.length ? items : [];
};

const licenceDetailMapper = (data: IVariables) => {
  const response = data ? data[0] : [];

  const obj = {
    licenseNo: response.licenseNo,
    licenceType: {
      eng: response.clasification_en,
      arb: response.clasification_ar,
    },
    legalForm: { eng: response.legalFormEng, arb: response.legalFormArb },
    [types.PARTNERS]: getPartnerType(
      response.partners,
      REPRESENTATIVE_TYPE[types.PARTNERS],
      types.PARTNERS,
    ),
    [types.MANAGERS]: getPartnerType(
      response.partners,
      REPRESENTATIVE_TYPE[types.MANAGERS],
      types.MANAGERS,
    ),
    [types.REPRESENTATIVES]: getPartnerType(
      response.partners,
      REPRESENTATIVE_TYPE[types.REPRESENTATIVES],
      types.REPRESENTATIVES,
    ),
    [types.LOCAL_AGENT]: getPartnerType(
      response.partners,
      REPRESENTATIVE_TYPE[types.LOCAL_AGENT],
      types.LOCAL_AGENT,
    ),
    [types.HEIRS]: getPartnerType(
      response.partners,
      REPRESENTATIVE_TYPE[types.HEIRS],
      types.HEIRS,
    ),
    [types.ACTIVITIES]: response.activities,
    [types.TRADE_NAME]: {
      number: response.tradeNameNo,
      eng: response.businessNameEng,
      arb: response.businessNameArb,
      exceptionTradeName: response.exceptionTradeName,
    },
    [types.LOCATION]: {
      tawtheeqNum: response.tawtheeqNum,
      arb: response.businessAddress,
      businessLicCity: response.businessLicCity,
      eng: response.BusinessAddressEN,
      CoordinateX: response.CoordinateX,
      CoordinateY: response.CoordinateY,
      tawtheeqCurrentNumber: '',
    },
    [types.COUNTRY]: {
      countryOfOrigin: response.countryOriginAr,
      countryOfOriginAr: response.countryOriginAn,
      amendedCountryOfOrigin: response.countryOriginAr,
      //   eng: response.countryOriginAr,
      //   arb: response.countryOriginAn,
      // },
    },
    [types.PAID_UP_CAPITAL]: {
      paidCapital: response.paidCapital,
      revenuesSales: response.revenuesSales,
      paidUpCapital: response.capital,
      amendedCapital: '',
    },
    contactInfo: {
      name: '',
      phone: '',
      email: '',
    },
    issuePlace: { eng: response.issuePlaceEng, arb: response.issuePlaceArb },
    officialEmail: response.officialEmail,
    officialMobile: response.officialMobile,
    officialDisclaimer: response.officialDisclaimer,
    trackingNo: response.trackingNo,
    issueDate: response.issueDate,
    expiryDate: response.expiryDate,
    adcciNo: response.adcciNo,
    mohreNo: response.mohreNo,
    gdrfaNo: response.gdrfaNo,
    quickLicense: response.quickLicense,
    moiEstablishmentNo: response.moiEstablishmentNo,
    gdrfaEstablishmentNo: response.gdrfaEstablishmentNo,
    isSuspended: response.isSuspended,
    isbranch: response.isbranch,
    branchTypeEn: response.branch_type_en,
    branchTypeAr: response.branch_type_ar,
  };

  return obj;
};

export { licenceDetailMapper };
