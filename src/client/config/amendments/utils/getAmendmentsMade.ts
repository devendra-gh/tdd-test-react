/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import {
  AMENDMENT_CATEGORIES as categories,
  AMENDMENT_TYPES as types,
} from 'client/config/amendments/constants/amendmentObjects';
import { ADD, DELETE, UPDATE } from 'client/config/amendments/constants';
import allRules from 'client/config/amendments/configs/rules';
import LEGAL_FORMS, { LEGAL_FORMS_LIST } from '../constants/legalForms';

const getAmendmentsMade = (props: IVariables, isPayload: boolean = false) => {
  const {
    prevLegalForm,
    legalForm,
    prevLicenseType,
    licenseType,
    licenceDetails,
    amendmentCategories,
  } = props;

  const amendmentsMade: IVariables = {};
  const amendmentStructure =
    allRules[licenseType] && allRules[licenseType][legalForm];
  let ownerPartnerChange = false;
  // set legal form change in amendments made, if user changed legal form
  if (legalForm !== prevLegalForm) {
    const dedLegalForm =
      (LEGAL_FORMS_LIST[legalForm] && LEGAL_FORMS_LIST[legalForm].nameEn) ||
      legalForm;
    amendmentsMade.legalForm = {
      legalForm: {
        [UPDATE]: {
          LegalForm: dedLegalForm,
        },
      },
    };
    if (prevLegalForm === LEGAL_FORMS.LLC || legalForm === LEGAL_FORMS.LLC) {
      // todo: here considering the change b/w LLC, Sole LLC, Establishment
      ownerPartnerChange = true;
    }
  }

  // set license type change in amendments made, if user changed license type
  if (licenseType !== prevLicenseType) {
    amendmentsMade.licenseType = {
      licenseType: {
        [UPDATE]: {
          LicenseType: licenseType,
        },
      },
    };
  }

  if (amendmentCategories && amendmentCategories.category) {
    Object.keys(amendmentCategories.category).forEach((category: string) => {
      if (
        !amendmentCategories.category[category] &&
        !amendmentCategories[categories.OWNERSHIP][category]
      ) {
        return '';
      }
      const categoryObject: IVariables = {};
      const shareAmendedPartners: IVariables[] = [];
      const nationalityAmendedPartners: IVariables[] = [];
      const amendmentTypes = amendmentStructure[category] || {};
      Object.keys(amendmentTypes).forEach((type: string) => {
        const typeData = licenceDetails[type];

        const typeObject: IVariables = {};
        // ownership category
        if (category === categories.OWNERSHIP) {
          if ((typeData || []).length) {
            typeData.forEach((typeItem: IVariables) => {
              if (typeItem.status === ADD) {
                if (typeObject[ADD]) {
                  typeObject[ADD].push(typeItem);
                } else {
                  typeObject[ADD] = [typeItem];
                }
              } else if (typeItem.status === DELETE) {
                if (typeObject[DELETE]) {
                  typeObject[DELETE].push(typeItem);
                } else {
                  typeObject[DELETE] = [typeItem];
                }
              } else if (
                isPayload &&
                ownerPartnerChange &&
                type === types.PARTNERS
              ) {
                typeObject[ADD] = typeObject[ADD] || [];
                typeObject[DELETE] = typeObject[DELETE] || [];
                typeObject[ADD] = [
                  ...typeObject[ADD],
                  { ...typeItem, status: ADD },
                ];
                typeObject[DELETE] = [
                  ...typeObject[DELETE],
                  { ...typeItem, status: DELETE },
                ];
              } else if (typeItem.status === UPDATE) {
                if (type === types.PARTNERS) {
                  if (
                    Number(typeItem.sharePercentage) !==
                    Number(typeItem.sharePercentageLog)
                  ) {
                    shareAmendedPartners.push(typeItem);
                  }
                  if (typeItem.nationality !== typeItem.nationalityLog) {
                    nationalityAmendedPartners.push(typeItem);
                  }
                }
                //  else if (typeObject[UPDATE]) {
                //   typeObject[UPDATE].push(typeItem);
                // } else {
                //   typeObject[UPDATE] = [typeItem];
                // }
              }
              return '';
            });
          }
        } else if (type === types.ACTIVITIES) {
          typeObject[UPDATE] = {
            ActivityCode: licenceDetails.activityPayload,
          };
        } else if (type === types.TRADE_NAME) {
          if (typeData && typeData.amendment)
            typeObject[UPDATE] = typeData.amendment.value;
        } else if (type === types.LOCATION) {
          if (typeData && typeData.amendment)
            typeObject[UPDATE] = { Tawtheeq: typeData.amendment };
        } else if (type === types.COUNTRY) {
          if (typeData.countryOfOrigin !== typeData.amendedCountryOfOrigin)
            typeObject[UPDATE] = {
              Country: typeData.amendedCountryOfOrigin,
            };
        } else if (type === types.PAID_UP_CAPITAL) {
          if (typeData && typeData.amendedCapital)
            typeObject[UPDATE] = {
              Capital: typeData.amendedCapital,
            };
        }

        if (Object.keys(typeObject).length) categoryObject[type] = typeObject;
      });

      // adding objects for partner share and partner nationality
      if (category === categories.OWNERSHIP) {
        if (shareAmendedPartners.length) {
          categoryObject[types.PARTNER_SHARE] = {
            [UPDATE]: shareAmendedPartners,
          };
        }
        if (nationalityAmendedPartners.length) {
          categoryObject[types.PARTNER_NATIONALITY] = {
            [UPDATE]: nationalityAmendedPartners,
          };
        }
      }

      if (Object.keys(categoryObject).length) {
        amendmentsMade[category] = categoryObject;
      }
      return '';
    });
  }

  return amendmentsMade;
};

export default getAmendmentsMade;
