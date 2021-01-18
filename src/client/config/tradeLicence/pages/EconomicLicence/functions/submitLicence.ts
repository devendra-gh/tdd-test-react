import { IVariables } from '@tamm/app-composer';
import { includes, find } from 'lodash';
import { getParentLicenseSource } from 'client/config/utils/gcc';
import bpm from 'client/services/bpm';
import { getSmartpassData } from 'client/utils/appData';

import {
  getBusinessLegalFormCode,
  getCountry,
  BRANCHES,
  PARTNER_TYPES,
  REPRESENTATIVE_TYPES,
  getLicenseType,
} from 'client/config/utils/lookup';
import { getAnalyticsData } from '../../../utils/analytics';
import { PATH_SUBMIT_PROCESS } from '../../../routes';

const smartpassData = getSmartpassData();

export const getStringDate = (date: any) => {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    return date;
  }
  return date.toDate();
};

const submitLicence = async (formValues: IVariables, props: IVariables) => {
  const { locale } = props;
  props.actions.economicLicenceSubmitting.update(true);
  props.actions.economicLicenceServerError.update(false);
  getAnalyticsData('tra');
  const licenceType = getLicenseType(formValues.licenceType, formValues.branch);

  const licenceTypes = {
    QUICK: ['tajer', 'allInOne'],
    INSTANT: ['instant'],
    ECONOMIC: [
      'mubdia',
      'tech',
      'branchAD',
      'branchUAE',
      'branchFZ',
      'branchGCC',
      'branchForeign',
      'tamm',
    ],
  };

  const partners: IVariables[] = [];

  const formatPartner = (item: IVariables, restItems: IVariables) => {
    const getLicenceTypesQUICK = () => {
      const getReturnDataLicenceTypesQUICKOne = () => {
        return {
          idType: item.emiratesId ? 'EID' : 'UID',
          idNumber: item.emiratesId
            ? item.emiratesId.replace(
                /(\d{3})(\d{4})(\d{7})(\d{1})/,
                '$1-$2-$3-$4',
              )
            : '',
          shareHolding: String(
            Math.round(
              (parseInt(item.sharePercentage, 10) *
                parseInt(formValues.capital, 10)) /
                100,
            ),
          ),
          partnerSharePercentage: String(item.sharePercentage),
          profitAndLossesDistributionPercentage: String(item.sharePercentage),
          moiUnifiedNumber: item.uid,
          emailAddress:
            item.email || formValues.applicantEmail || formValues.officialEmail,
          mobileNo: (item.phoneNumber || '').split('+').join(''),
          firstNameARB: item.firstNameAr || item.firstNameEn,
          lastNameARB: item.lastNameAr || item.lastNameEn,
          firstNameENG: item.firstNameEn,
          lastNameENG: item.lastNameEn,
        };
      };

      const getReturnDataLicenceTypesQUICKTwo = () => {
        return {
          emirate: '1',
          manager: '0',
          nationality: item.nationality,
          fullNameARB: item.firstNameAr
            ? `${item.firstNameAr} ${item.middleNameAr} ${item.lastNameAr}`
            : `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
          fullNameENG: `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
          arabicName: item.firstNameAr
            ? `${item.firstNameAr} ${item.middleNameAr} ${item.lastNameAr}`
            : `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
          englishName: `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
          title: item.title || '',
          dateOfBirth: getStringDate(item.dateOfBirth || ''),
          passportNumber: item.passportNumber || '',
          emirateName: item.emirateName || '',
        };
      };

      const getReturnDataLicenceTypesQUICKThree = () => {
        return {
          streetENG: item.streetENG || '',
          streetARB: item.streetARB || '',
          areaENG: item.areaENG || '',
          areaARB: item.areaARB || '',
          buildingNameENG: item.buildingNameENG || '',
          buildingNameARB: item.buildingNameARB || '',
          buildingNumber: item.buildingNumber || '',
          flatVillaNo: item.flatVillaNo || '',
          poBox: item.poBox || '',
        };
      };

      return {
        ...getReturnDataLicenceTypesQUICKOne(),
        ...getReturnDataLicenceTypesQUICKTwo(),
        ...getReturnDataLicenceTypesQUICKThree(),
        ...restItems,
      };
    };

    if (licenceTypes.QUICK.indexOf(licenceType) !== -1) {
      getLicenceTypesQUICK();
    }

    const getLicenceTypesINSTANT = () => {
      const getLicenceTypesINSTANTData = () => {
        return {
          idType: item.emiratesId ? 'EID' : 'UID',
          idNumber: item.emiratesId || '',
          partnerSharePercentage: String(item.sharePercentage),
          moiUnifiedNumber: item.uid,
          emailAddress: item.email || '',
          mobileNo: (item.phoneNumber || '').split('+').join(''),
          firstNameARB: item.firstNameEn,
          lastNameARB: item.lastNameEn,
          firstNameENG: item.firstNameEn,
          lastNameENG: item.lastNameEn,
          uuid: null,
          emirate: '1',
          manager: 'N', // TODO : ??? if owner also manager -> Y
          nationality:
            getCountry(item.nationality, props.countries) || item.nationality,
          arabicName: item.businessNameAr || '',
          englishName: item.businessNameEn || '',
          licenseNo: item.licenseNumber || '',
        };
      };

      return {
        ...getLicenceTypesINSTANTData(),
        fullNameARB:
          locale === 'en'
            ? ''
            : `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
        fullNameENG:
          locale === 'en'
            ? `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`
            : '',
        ...restItems,
      };
    };

    if (licenceTypes.INSTANT.indexOf(licenceType) !== -1) {
      getLicenceTypesINSTANT();
    }

    const getLicenceTypescontactType = () => {
      const currentBranch = find(
        BRANCHES,
        (i: IVariables) => i.id === licenceType,
      );

      let addition: any;
      if (
        currentBranch &&
        (currentBranch.id === 'branchGCC' ||
          currentBranch.id === 'branchForeign')
      ) {
        addition = {
          nationality:
            getCountry(formValues.nationality, props.countries) ||
            formValues.nationality,
          allGCC: formValues.isGCC ? 'Y' : 'N',
        };
      }

      if (currentBranch && currentBranch.id === 'branchFZ') {
        addition = {
          nationality:
            getCountry(formValues.nationality, props.countries) ||
            formValues.nationality,
        };
      }

      const getLicenceTypescontactTypeData = () => {
        return {
          type: currentBranch ? currentBranch.partnerType : '11',
          arabicName: item.businessNameAr,
          englishName: item.businessNameEn,
          licenseNo: item.licenseNumber,
          mobileNo: (item.phoneNumber || '').split('+').join(''),
          city: 'Abu Dhabi',
          // shareHolding: item.sharePercentage,
          partnerSharePercentage: String(item.sharePercentage),
          shareHolding: String(item.sharePercentage),
          idType: '',
          idNumber: '',
          representativeType: '1', // Owner
        };
      };

      return {
        ...restItems,
        ...getLicenceTypescontactTypeData(),
        ...addition,
      };
    };

    if (item.contactType === 'company') {
      getLicenceTypescontactType();
    }

    const getReturnData = () => {
      return {
        idType: item.emiratesId ? 'EID' : 'UID',
        idNumber: item.emiratesId ? item.emiratesId : item.uid,
        shareHolding: String(item.sharePercentage),
        partnerSharePercentage: String(item.sharePercentage),
        // moiUnifiedNumber: item.uid,
        emailAddress: item.email || '',
        mobileNo: (item.phoneNumber || '').split('+').join(''),
        city: '',
        emirate: '1',
        nationality:
          getCountry(item.nationality, props.countries) || item.nationality,
        arabicName: `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
        englishName: `${item.firstNameEn} ${item.middleNameEn} ${item.lastNameEn}`,
        ...restItems,
      };
    };

    // economic licenses
    return getReturnData();
  };

  const getOwnershipData = () => {
    if (formValues.ownership.partner.length) {
      formValues.ownership.partner.forEach((item: IVariables) => {
        partners.push(
          formatPartner(
            { ...item },
            {
              type: PARTNER_TYPES.INDIVIDUAL.code,
              representativeType: REPRESENTATIVE_TYPES.PARTNER.code,
            },
          ),
        );
      });
    }

    if (formValues.ownership.owner.length) {
      formValues.ownership.owner.forEach((item: IVariables) => {
        partners.push(
          formatPartner(
            { ...item },
            {
              type: PARTNER_TYPES.INDIVIDUAL.code,
              representativeType: REPRESENTATIVE_TYPES.OWNER.code,
            },
          ),
        );
      });
    }

    if (formValues.ownership.representative.length) {
      formValues.ownership.representative.forEach((item: IVariables) => {
        partners.push(
          formatPartner(
            { ...item },
            {
              type: PARTNER_TYPES.INDIVIDUAL.code,
              representativeType: REPRESENTATIVE_TYPES.REPRESENTATIVE.code,
            },
          ),
        );
      });
    }

    if (formValues.ownership.manager.length) {
      formValues.ownership.manager.forEach((item: IVariables) => {
        partners.push(
          formatPartner(
            { ...item },
            {
              type: PARTNER_TYPES.INDIVIDUAL.code,
              representativeType: REPRESENTATIVE_TYPES.MANAGER.code,
              manager:
                licenceTypes.QUICK.indexOf(licenceType) !== -1 ? '1' : 'Y',
            },
          ),
        );
      });
    }

    if (formValues.ownership.localAgent.length) {
      formValues.ownership.localAgent.forEach((item: IVariables) => {
        partners.push(
          formatPartner(
            { ...item },
            {
              type: PARTNER_TYPES.INDIVIDUAL.code,
              representativeType: REPRESENTATIVE_TYPES.SPONSOR.code,
            },
          ),
        );
      });
    }
  };

  getOwnershipData();

  const parseUrl = (url: string) => {
    if (url && url !== '') {
      if (url.indexOf('http') !== 0) {
        return `https://${url}`;
      }
    }
    return url;
  };

  const getSubmitVariables = () => {
    return {
      licenceType,
      businessLegalFormCode: getBusinessLegalFormCode(
        licenceType,
        formValues.legalForm,
      ),
      businessNameENG: formValues.tradeNameEn,
      businessNameARB: formValues.tradeNameAr,
      tawtheeq: formValues.tawtheeqNumber,
      officialEmail: formValues.officialEmail,
      officialMobile: formValues.officialMobile.split('+').join(''),
      // expectedPaidCapital: formValues.financialDetails.paidCapitalApprox, // fix: check
      // expectedRevenue: formValues.financialDetails.revenuesSalesApprox,
      // durationOfTheCompanyInYears: formValues.financialDetails.durationOfTheCompany,
      // managerAppointmentDurationInYears: formValues.financialDetails.managerAppointmentDuration,
      // capital: String(formValues.financialDetails.capital),
      // totalNumberOfShares: String(formValues.financialDetails.totalNumberOfShares),
      // partnersPlain: partners, // for test only, do not remove for now!
      partners: JSON.stringify(partners),

      activities: JSON.stringify(
        formValues.activities.map((i: IVariables) => ({
          activityCode: String(i.activityCode),
        })),
      ),
      activitiesDetail: JSON.stringify(formValues.activities),
      businessLocation: formValues.businessLocation,
      issuePlaceCode: '1',
      emirate: '1', // TODO : Should always be 1 -> Abu dhabi
      preferredLanguage: locale === 'en' ? 'English' : 'Arabic',
      socialMediaType: formValues.socialMediaType,
      socialMediaAccount: formValues.socialMediaAccount,
      webSiteURL: parseUrl(formValues.website),
      quickLicense: '',
      expectedPaidCapital: (formValues.paidCapitalApprox || '').substring(3),
      expectedRevenue: (formValues.revenuesSalesApprox || '').substring(3),

      proName: (formValues.applicantName || '')
        .replace(/\d/, '')
        .replace('.', ''),
      proEmail: formValues.applicantEmail,
      proMobile: formValues.applicantPhoneNumber,

      parentLicenseSource: getParentLicenseSource(formValues.nationality),
      municipality: 'Abu Dhabi',
      parentLicenseEmirate:
        formValues.parentLicenseEmirate ||
        formValues.emirate ||
        formValues.parentCompanyFreeZone,
      parentLicenseNo:
        formValues.licenseNumber.indexOf('CN-') !== 0
          ? `CN-${formValues.licenseNumber}`
          : formValues.licenseNumber,
      parentLegalForm: formValues.parentCompanyLegalForm,
      documents: JSON.stringify(formValues.documents),
      streetName: formValues.streetName,
      // ubo: formValues.ubo,
    };
  };

  const submitVariables: any = getSubmitVariables();

  const getSubmitVariablesCapitalData = () => {
    if (formValues.legalForm !== 'establishment') {
      submitVariables.durationOfTheCompanyInYears =
        formValues.durationOfTheCompany;
      submitVariables.managerAppointmentDurationInYears =
        formValues.managerAppointmentDuration;
      submitVariables.totalNumberOfShares = String(
        formValues.totalNumberOfShares,
      );
      submitVariables.capital = String(formValues.capital);
    }

    if (licenceType === 'tajer') {
      submitVariables.quickLicense = 'Abu Dhabi Trader';
    }
  };

  getSubmitVariablesCapitalData();

  const getLicenceTypeData = () => {
    // get smartpass data
    const smartPassData: any[] = [];
    let foundApplicant = false;
    if (
      includes(
        ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
        formValues.legalForm,
      ) &&
      formValues.ownership.owner.length > 0
    ) {
      const owner: any = formValues.ownership.owner[0];
      const user: any = {
        uuid: '00000000-83c0-4f53-ba6e-111111111111',
        spuuid: '00000000-83c0-4f53-ba6e-111111111111',
        idType: owner.type !== 'visitor' ? 'EID' : 'UID',
        isApplicant: true,
        passportNumber: '',
        userType: 0,
      };
      if (owner.type !== 'visitor') {
        user.eid = owner.emiratesId.replace(
          /(\d{3})(\d{4})(\d{7})(\d{1})/,
          '$1-$2-$3-$4',
        );
      } else {
        user.uid = owner.uid;
      }
      if (user.eid === smartpassData.EID && !foundApplicant) {
        user.isApplicant = true;
        foundApplicant = true;
      } else {
        user.isApplicant = false;
      }
      smartPassData.push(user);
    } else if (
      !includes(
        ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
        formValues.legalForm,
      ) &&
      formValues.licenceType !== 'branch'
    ) {
      formValues.ownership.partner.forEach((partner: any) => {
        const user: any = {
          uuid: '00000000-83c0-4f53-ba6e-111111111111',
          spuuid: '00000000-83c0-4f53-ba6e-111111111111',
          idType: partner.type !== 'visitor' ? 'EID' : 'UID',
          passportNumber: '',
          userType: 0,
        };
        if (partner.type !== 'visitor') {
          user.eid = partner.emiratesId.replace(
            /(\d{3})(\d{4})(\d{7})(\d{1})/,
            '$1-$2-$3-$4',
          );
        } else {
          user.uid = partner.uid;
        }
        if (user.eid === smartpassData.EID && !foundApplicant) {
          user.isApplicant = true;
          foundApplicant = true;
        } else {
          user.isApplicant = false;
        }
        smartPassData.push(user);
      });
    }

    if (!foundApplicant) smartPassData[0].isApplicant = true;
    submitVariables.smartPassData = JSON.stringify(smartPassData);
  };

  if (licenceType === 'tajer' || licenceType === 'allInOne') {
    getLicenceTypeData();
  }

  const getSubmitVariablesData = () => {
    if (licenceTypes.QUICK.indexOf(licenceType) !== -1) {
      submitVariables.activities = JSON.stringify(
        formValues.activities.map((i: IVariables) => ({
          ActivityCode: String(i.activityCode),
        })),
      );
    }

    if (licenceTypes.INSTANT.indexOf(licenceType) !== -1) {
      submitVariables.issuePlaceCode = formValues.issuePlaceCode;
    }

    if (licenceTypes.ECONOMIC.indexOf(licenceType) !== -1) {
      submitVariables.reservationPeriod = formValues.nameReservationPeriod;
      submitVariables.activities = JSON.stringify(
        formValues.activities.map((i: IVariables) => {
          if (includes(i.activityNameEn, i.activityCode)) {
            return i.activityNameEn;
          }
          return `${i.activityNameEn} (${String(i.activityCode)})`;
        }),
      );
    }

    submitVariables.initialPartnerID =
      props.user && props.user.IDN
        ? `tradeLicence-${props.user.IDN.split('-').join('')}`
        : '';
  };

  getSubmitVariablesData();

  let { businessKey } = props;

  const getStartBPM = async () => {
    const data = await bpm.start('tradeName', {
      // smartPassData,
    });

    // when logged out set forceRedirect to current path and redirect to login page
    if (data && data.message === 'Unauthorized') {
      if (window && localStorage) {
        localStorage.setItem('forceRedirect', window.location.href);
        window.location.href = '/login';
      }
    }

    if (data.success && data.data && data.data.businessKey && data.data.id) {
      businessKey = data.data.businessKey;
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);
    }
  };

  if (!props.instanceId || !props.businessKey) {
    await getStartBPM();
  }

  if (businessKey) {
    // submit message with timeout just to make sure process has started
    setTimeout(async () => {
      try {
        await bpm.message('tradeName', {
          businessKey,
          messageName: 'onSendTradeNameDetails',
          variables: submitVariables,
          // variables: testVariables,
        });
        props.actions.economicLicenceSubmitting.update(false);
        props.history.push(PATH_SUBMIT_PROCESS);
      } catch (e) {
        props.actions.economicLicenceSubmitting.update(false);
        props.actions.economicLicenceServerError.update(true);
      }
    }, 2000);
  } else {
    props.actions.economicLicenceSubmitting.update(false);
    props.actions.economicLicenceServerError.update(true);
  }
};

export default submitLicence;
