

import {businessLicenseDetailsV3, checkApplicationStatus} from '../../sharedFunctions/services';

import {representativeType, nationalityCode, contactType} from '../../sharedFunctions/mapper';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

import {updateRelevantEntity} from '../../sharedFunctions/relevantEntity';

export async function init(props: any) {
    //props.fetch()
  const { fetch, bpm } = props;

  props.actions.resetState();
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  if (props.user && props.user['Type'] !== 'SOP3') {
    props.history.push('/service-status');
  }

  if (
    props.user &&
    props.user['Type'] !== 'SOP3' &&
    props.user['Nationality EN'] !== 'ARE'
  ) {
    props.history.push('/service-status');
  }

  if (
    props.user &&
    props.user['Type'] === 'SOP3' &&
    props.user['Nationality EN'] !== 'ARE'
  ) {
    props.history.push('/service-status');
  }

  props.actions.tradeNameStatus.update('none');

  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(0);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'fill_application', status: '' };
  const cSubStep = { id: 'enter_trade_name', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);

  const relevantEntityData = updateRelevantEntity(props);
  props.actions.relevant_entities.update(relevantEntityData);

  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  const tradeNameLink = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/startupbasics/TradeLicenceActivities/requestforreservingeconomicname`;
  props.actions.tradeNameLink.update(tradeNameLink);
}
export  function call_f1_onChange(props: any) {
	  return (value: any) => {
    const regex = /(TN)-\d{7}\b/;
    props.actions.tnNumber.update(value);
    props.actions.tradeNumberValidateStatus.update(null);
    props.actions.tradeNumberHelpMsg.update('');
    if (regex.test(value)) {
      props.actions.tradeNumberCheckDisabled.update(false);
    } else {
      props.actions.tradeNumberCheckDisabled.update(true);
    }
  };
}
export async function f2_onClick(props: any) {
	  //props.fetch()
  const { fetch, i18n } = props;

  props.actions.tradeNameStatus.update('loading');

  // Calling businessLicenseDetailsV3
  //no_information_found
  const result = await businessLicenseDetailsV3(
    props,
    props.tnNumber
  );
  let tradeName = [];
  if (result.code === '200') {
    tradeName = [
      {
        _id: 'tradeNameTableRow1',
        englishName: result.result[0].businessNameEng,
        arabicName: result.result[0].businessNameArb,
      },
    ];
    const casResult = await checkApplicationStatus(
      props,
      props.tnNumber
    );
    if (!casResult || casResult.length === 0) {
      tradeName = [
        {
          _id: 'tradeNameTableRow1',
          englishName: i18n('no_information_found'),
          arabicName: i18n('no_information_found'),
        },
      ];
      props.actions.tradeNameStatus.update('');
      props.actions.tradeNameTableRow.update(tradeName);
    }
    props.actions.tradeNameCapId.update(casResult[0].capId);
    // Filling Partners
    let partners: any[] = [];
    result.result[0].partners.map((item: any) => {
      const representative = representativeType(
        item.representativeTypeEng
      );
      const nationality = nationalityCode(item.nationalityEn);
      const partnerType = contactType(item.typeEng);
      partners.push({
        Type: partnerType,
        IDNumber: item.idNumber,
        RepresentativeType: representative,
        PartnerSharePercentage: item.partnerSharePercentage,
        ProfitAndLossesDistributionPercentage: '100',
        Emirate: '',
        FirstNameENG: item.FNameEn,
        FirstNameARB: item.FNameAr,
        LastNameENG: item.LNameEn,
        LastNameARB: item.LNameAr,
        FullNameENG: item.NameEn,
        FullNameARB: item.NameAr,
        EmailAddress: item.pEmail,
        MobileNo: item.phoneNumber,
        Nationality: nationality,
      });
    });
    props.actions.tradeNameTableRow.update(tradeName);
    props.actions.englishPreferedName.update(result.result[0].businessNameEng);
    props.actions.arabicPreferedName.update(result.result[0].businessNameArb);
    props.actions.partners.update(partners);
    props.actions.tradeNamePartnersList.update(result.result[0].partners);
    props.actions.branchType.update(result.result[0].branch_type_en);
    props.actions.mainLicenseNumber.update(result.result[0].licenseNo);
    props.actions.isbranch.update(result.result[0].isbranch);
    props.actions.legalType.update(result.result[0].legalFormEng);
    props.actions.legalTypeArb.update(result.result[0].legalFormArb);
    props.actions.tradeNameBtnDisabled.update(false);
    props.actions.tradeNameStatus.update('');
  } else if (result.code === '500') {
    tradeName = [
      {
        _id: 'tradeNameTableRow1',
        englishName: i18n('no_information_found'),
        arabicName: i18n('no_information_found'),
      },
    ];
    props.actions.tradeNameStatus.update('');
    props.actions.tradeNameTableRow.update(tradeName);
  }
}
export  function call_f3_onSelectionChange(props: any) {
	 
}
export function f4_visible(props: any) {
	  return props.tradeNameStatus !== 'none';
}
export async function f5_onClick(props: any) {
}
export async function f6_btnBackClick(props: any, formValues: any) {
	  props.history.push('/enter-trade-name');
}
export async function f7_btnSubmitClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  const smartpassData =
    props.partners.map((partner: any) => {
      return {
        UUID: props.user['User Unique Identifier'],
        IdType: 'EID',
        EID: partner.IDNumber,
        SPUUID: props.user['SmartPassToken'],
        IsApplicant: true,
      };
    }) || [];

  if (props.isProcessStarted === false) {
    props.actions.loading.update(true);
    const data = await props.bpm.startProcess({
      proEmail: props.user['User Email'],
      proMobile: props.user['Mobile'],
      continueProcessUrl: 'tamm.abudhabi.ae',
      emiratesId: '{{IDN}}',
      UUID: props.user['User Unique Identifier'],
      tnNumber: props.tnNumber,
      tradeNameCapId: props.tradeNameCapId,
      //BusinessName
      englishPreferedName: props.englishPreferedName,
      arabicPreferedName: props.arabicPreferedName,
      //partnerDetails
      partnerDetails: JSON.stringify(props.partners),

      //smartpassData
      smartpassData: JSON.stringify(smartpassData),
      serviceName: 'Rowad_C',
      branchType: props.branchType,
      mainLicenseNumber: props.mainLicenseNumber,
      isbranch: props.isbranch,
    });
    if (
      data &&
      data.success &&
      data.data &&
      data.data.businessKey &&
      data.data.id
    ) {
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);
      props.actions.isProcessStarted.update(true);
      const res = await props.bpm.sendMessage({
        businessKey: data.data.businessKey,
        messageName: 'onNextToCompanyDetails',
        variables: {
          businessKey: data.data.businessKey,
          instanceId: data.data.id,
        },
      });
      if (!res.success || !res.data || !res.data.success) {
        props.actions.loading.update(false);
      }
    } else {
      props.actions.loading.update(false);
    }
  } else {
    props.actions.loading.update(true);
    const res = await props.bpm.sendMessage({
      businessKey: props.businessKey,
      messageName: 'onNextToCompanyDetails',
      variables: {
        businessKey: props.businessKey,
        instanceId: props.instanceId,
      },
    });
    if (!res.success || !res.data || !res.data.success) {
      props.actions.loading.update(false);
    }
  }
}
export async function f8_btnCancelClick(props: any, formValues: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(true);
}
export async function f9_btnSubmitDisabled(props: any, formValues: any) {
	  return props.tradeNameBtnDisabled;
}
export async function f10_primaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
  props.actions.resetState();
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforIssuingEconomicLicenceIndustrialLeaderCompany?recache=true`;
}
export async function f11_secondaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
}
export async function f12_onClose(props: any) {
	  props.actions.isCancelModalOpen.update(false);
}
