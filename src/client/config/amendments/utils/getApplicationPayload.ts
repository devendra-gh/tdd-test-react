/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import { AMENDMENT_TYPES as types } from 'client/config/amendments/constants/amendmentObjects';
import REPRESENTATIVE_TYPE, {
  OWNER,
} from 'client/config/amendments/constants/representativeType';
import {
  ADD,
  DELETE,
  UPDATE,
  residenceTypes,
  profileTypes,
} from 'client/config/amendments/constants';
import getAmendmentsMade from 'client/config/amendments/utils/getAmendmentsMade';

const apiTypeCodes: IVariables = {
  [types.LEGAL_FORM]: 'Legal_Form',
  [types.LICENCE_TYPE]: 'License_Type',
  [types.PARTNERS]: 'Partners',
  [types.PARTNER_NATIONALITY]: 'Partners_Nationality',
  [types.PARTNER_SHARE]: 'Partners_Shares',
  [types.HEIRS]: 'Partners',
  [types.MANAGERS]: 'Manager',
  [types.REPRESENTATIVES]: 'Partners',
  [types.LOCAL_AGENT]: 'Sponsor',
  [types.LOCATION]: 'Location',
  [types.COUNTRY]: 'Country',
  [types.TRADE_NAME]: 'Trade_Name',
  [types.ACTIVITIES]: 'Activity_Replacement',
  [types.PAID_UP_CAPITAL]: 'Capital',
};

const makeRepItem = (
  repItem: IVariables,
  action: string,
  type: string,
  partnerIsOwner: boolean,
) => {
  let structure: IVariables = {};
  if (action === ADD) {
    let repType = REPRESENTATIVE_TYPE[repItem.representativeTypeEng];
    if (types.PARTNERS === type && partnerIsOwner) {
      repType = OWNER;
    }
    const profileType = repItem.profileType || profileTypes.INDIVIDUAL;

    structure = {
      Action: 'Add',
      RepresentativeType: repType,
      ShareHolding:
        type === types.PARTNERS ? String(repItem.sharePercentage) : '0',
    };
    if (profileType === profileTypes.COMPANY) {
      structure.Type = repItem.companyType;
      structure.licenseNo = repItem.licenceNo;
      structure.Nationality = repItem.domicile;
    } else {
      structure.Type = profileType;
      structure.IDType =
        repItem.type === residenceTypes.VISITOR && repItem.moiID
          ? 'MOI'
          : 'EID';
      structure.IDNumber =
        repItem.type === residenceTypes.VISITOR && repItem.moiID
          ? repItem.moiID
          : repItem.emiratesId || '';
    }
  } else if (action === DELETE) {
    structure = {
      Action: 'Delete',
      ReferenceContactId: repItem.referenceContactId,
    };
  } else if (action === UPDATE) {
    let updateData: IVariables = {};
    if (types.PARTNER_SHARE === type) {
      updateData = { PartnerSharePercentage: String(repItem.sharePercentage) };
    } else if (types.PARTNER_NATIONALITY === type) {
      updateData = { Nationality: repItem.nationality };
    }
    structure = {
      Action: 'update',
      ReferenceContactId: repItem.referenceContactId,
      ...updateData,
    };
  }
  return structure;
};

const getApplicationPayload = (props: IVariables) => {
  const {
    licenceDetails: { contactInfo, [types.PARTNERS]: prtnerList },
    licenseNo,
    capID,
  } = props;
  const amendmentsMade = getAmendmentsMade(props, true);
  const amendmentTypes: IVariables = {};
  let amendmentFields: IVariables = {};
  let partners: IVariables[] = [];
  let activityCode: IVariables = {};
  const partnerIsOwner =
    prtnerList &&
    prtnerList.filter((partner: IVariables) => partner.status !== DELETE)
      .length === 1;
  Object.values(amendmentsMade).forEach((category: IVariables) => {
    Object.keys(category).forEach((type: string) => {
      amendmentTypes[apiTypeCodes[type]] = 'Yes';
      Object.keys(category[type]).forEach((action: string) => {
        const values = category[type][action];
        if (Array.isArray(values)) {
          // these are goes into partners array
          const repItems = values.map((partner: IVariables) =>
            makeRepItem(partner, action, type, partnerIsOwner),
          );
          partners = partners.concat(repItems);
        } else if (type === types.ACTIVITIES) {
          activityCode = values;
        } else {
          amendmentFields = { ...amendmentFields, ...values };
        }
      });
    });
  });

  const authPayload = {
    CNNumber: licenseNo,
    CAPID: capID,
    ProName: contactInfo.name,
    ProEmail: contactInfo.email,
    ProMobileNumber: contactInfo.phone,
    RevenuesSales: contactInfo.revenueApprox,
    PaidCapital: contactInfo.paidupCapital,
    AmendmentType: [amendmentTypes],
    ...(Object.keys(amendmentFields).length
      ? { AmendmentFields: [amendmentFields] }
      : {}),
    ...(partners.length ? { Partner: partners } : {}),
    ...activityCode,
  };
  return authPayload;
};

export default getApplicationPayload;
