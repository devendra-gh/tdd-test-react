

import {stepsListsWithoutEconomicName, stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

import {businessLicenseDetailsV3} from '../../sharedFunctions/services';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {updateRelevantEntity} from '../../sharedFunctions/relevantEntity';

export async function init(props: any) {
    props.actions.resetState();
  // setting breadCrums
  // breadCrumbs
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

  //props.actions();
  //const { locale, i18n } = props;
  props.actions.helpValidateStatusTotalCapitalValue.update(
    props.i18n('individual_total_capital_content')
  );
  props.actions.helpValidateStatusTotalInvestmentValue.update(
    props.i18n('individual_total_investment_content')
  );
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(0);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'fill_application', status: '' };
  const cSubStep = { id: 'enter_company_details', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);

  // add i18n for the table
  let tableColoum: any[] = [];
  props.ownerDetailsColumns.map((item: any) => {
    tableColoum = [...tableColoum, { ...item, title: props.i18n(item.title) }];
  });
  props.actions.ownerDetailsColumns.update(tableColoum);

  // add the rows to the table
  let ownerDetails = [
    {
      authorityEn: 'Department of Economic Development',
      authorityAr: 'دائرة التنمية الاقتصادية',
      ownNameEn: props.user ? props.user['First Name EN'] : '',
      ownNameAr: props.user ? props.user['Full Name AR'] : '',
      idNumber: props.user ? props.user['IDN'] : '',
      nationalityEn: props.user ? props.user['Nationality EN'] : '',
      nationalityAr: '',
      share: '100',
    },
  ];
  const detailsRow =
    ownerDetails.length > 0
      ? ownerDetails.map((value: any, index: number) => ({
          id: `'${index}'`,
          name: props.locale === 'en' ? value.ownNameEn : value.ownNameAr,
          nationality:
            props.locale === 'en' ? value.nationalityEn : value.nationalityEn,
          idNumber: value.idNumber,
          share: value.share + '%',
        }))
      : [{ id: '0', description: '', price: 0 }];

  props.actions.ownerDetailsRow.update(detailsRow);

  const relevantEntityData = updateRelevantEntity(props);
  props.actions.relevant_entities.update(relevantEntityData);
}
export async function f1_primaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
  props.actions.resetState();
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforIssuingEconomicLicenceIndustrialLeaderIndividual?recache=true`;
}
export async function f2_secondaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
}
export async function f3_onClose(props: any) {
	  props.actions.isCancelModalOpen.update(false);
}
export async function f4_onSearch(props: any) {
}
export  function call_f5_onChange(props: any) {
	  return (value: string) => {
    props.actions.companyDetailsExistingBranchTypeVal.update(value);
    let visibility = false;
    if (value === 'Yes') visibility = true;
    if (value === 'No') visibility = false;
    props.actions.existingLicenceVisibility.update(visibility);
    props.actions.validateStatus_existingLicense.update('');
    props.actions.help_existingLicense.update('');

    const cStep = { id: 'fill_application', status: '' };
    const cSubStep = { id: 'enter_company_details', status: '' };
    // the steps of the current service
    let stepsList: any[];
    if (visibility) {
      props.actions.skipEconomicName.update(true);
      stepsList = stepsListsWithoutEconomicName();
    } else {
      props.actions.skipEconomicName.update(false);
      stepsList = stepsLists();
    }
    const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
    props.actions.steps.update(steps);

    if (value === '') {
      props.actions.validateStatus_existingLicense.update('error');
      props.actions.help_existingLicense.update(
        props.i18n('required_field_validation')
      );
    } else {
      props.actions.validateStatus_existingLicense.update('');
      props.actions.help_existingLicense.update('');
    }
  };
}
export async function f6_onOpenChange(props: any) {
}
export async function f7_onSearch(props: any) {
}
export  function call_f8_onChange(props: any) {
	  return (value: string) => {
    props.actions.selectedIndustrialType.update(value);
    if (value === '') {
      props.actions.validateStatus_industryType.update('error');
      props.actions.help_industryType.update(
        props.i18n('required_field_validation')
      );
    } else {
      props.actions.validateStatus_industryType.update('');
      props.actions.help_industryType.update('');
    }
  };
}
export async function f9_onOpenChange(props: any) {
}
export  function call_f10_onChange(props: any) {
	  return async (value: string) => {
    const regex = /(IN)-\d{7}\b/;
    props.actions.parentCompanylicenceNumberVal.update(value);
    props.actions.validateStatus_parentLicenceNumber.update('');
    props.actions.help_parentLicenceNumber.update('');
    if (regex.test(value)) {
      //api call
      props.actions.loading.update(true);
      const result = await businessLicenseDetailsV3(props, value);
      props.actions.loading.update(false);
      if (result.code === '200') {
        if (result.result[0].legalFormEng === 'Local Establishment') {
          props.actions.englishPreferedName.update(
            result.result[0].businessNameEng
          );
          props.actions.arabicPreferedName.update(
            result.result[0].businessNameArb
          );
          props.actions.validateStatus_parentLicenceNumber.update('success');
          props.actions.help_parentLicenceNumber.update('');
        } else {
          props.actions.validateStatus_parentLicenceNumber.update('error');
          props.actions.help_parentLicenceNumber.update(
            props.i18n('invalid_licence_number_local_est')
          );
        }
      } else {
        props.actions.validateStatus_parentLicenceNumber.update('error');
        props.actions.help_parentLicenceNumber.update(
          props.i18n('invalid_licence_number_local_est')
        );
      }
    } else {
      props.actions.validateStatus_parentLicenceNumber.update('error');
      props.actions.help_parentLicenceNumber.update(
        props.i18n('invalid_licence_number')
      );
    }
  };
}
export function f11_visible(props: any) {
	return props.existingLicenceVisibility;
}
export  function call_f12_onChange(props: any) {
	  return (value: string) => {
    props.actions.totalInvestmentValue.update(value);
    if (value === '') {
      props.actions.validateStatusTotalInvestmentValue.update('error');
      props.actions.helpValidateStatusTotalInvestmentValue.update(
        props.i18n('required_field_validation')
      );
    } else if (value !== '' && isNaN(Number(value))) {
      props.actions.validateStatusTotalInvestmentValue.update('error');
      props.actions.helpValidateStatusTotalInvestmentValue.update(
        props.i18n('number_validation')
      );
    } else if (
      value !== '' &&
      !isNaN(Number(value)) &&
      Number(value) <= Number(props.totalCapitalvalue)
    ) {
      props.actions.validateStatusTotalInvestmentValue.update('error');
      props.actions.helpValidateStatusTotalInvestmentValue.update(
        props.i18n('individual_total_investment_content')
      );
    } else {
      props.actions.validateStatusTotalInvestmentValue.update('');
      props.actions.helpValidateStatusTotalInvestmentValue.update(
        props.i18n('individual_total_investment_content')
      );
    }
  };
}
export  function call_f13_onChange(props: any) {
	  return (value: string) => {
    props.actions.totalCapitalvalue.update(value);
    if (value === '') {
      props.actions.validateStatusTotalCapitalValue.update('error');
      props.actions.helpValidateStatusTotalCapitalValue.update(
        props.i18n('required_field_validation')
      );
    } else if (value !== '' && isNaN(Number(value))) {
      props.actions.validateStatusTotalCapitalValue.update('error');
      props.actions.helpValidateStatusTotalCapitalValue.update(
        props.i18n('number_validation')
      );
    } else if (
      value !== '' &&
      !isNaN(Number(value)) &&
      Number(value) < 250000
    ) {
      props.actions.validateStatusTotalCapitalValue.update('error');
      props.actions.helpValidateStatusTotalCapitalValue.update(
        props.i18n('individual_total_capital_content')
      );
    } else {
      props.actions.validateStatusTotalCapitalValue.update('');
      props.actions.helpValidateStatusTotalCapitalValue.update(
        props.i18n('individual_total_capital_content')
      );
    }
  };
}
export async function f14_btnBackClick(props: any, formValues: any) {
	  props.history.push('/enter-trade-name');
}
export async function f15_btnSubmitClick(props: any, formValues: any) {
	  // props.fetch();
  //props.actions();
  const { locale, i18n } = props;

  if (props.isProcessStarted === false) {
    props.actions.loading.update(true);
    const data = await props.bpm.startProcess({
      emiratesId: '{{IDN}}',
      UUID: props.user['User Unique Identifier'],
      //companyDetails
      serviceName: 'Rowad_I',
      //partnerDetails

      partnerDetails: JSON.stringify([
        {
          Type: '10',
          IDNumber: props.user['IDN'],
          RepresentativeType: '1',
          PartnerSharePercentage: '100',
          ProfitAndLossesDistributionPercentage: '100',
          Emirate: '2',
          FirstNameENG: props.user['First Name EN'],
          FirstNameARB: props.user['First Name AR'],
          LastNameENG: props.user['Last Name EN'],
          LastNameARB: props.user['Last Name AR'],
          FullNameENG: props.user['First Name EN'],
          FullNameARB: props.user['Full Name AR'],
          EmailAddress: props.user['User Email'],
          MobileNo: props.user['Mobile'],
          Nationality: props.user['Nationality EN'],
        },
      ]),
      //smartpassData

      smartpassData: JSON.stringify([
        {
          UUID: props.user['User Unique Identifier'],
          IdType: 'EID',
          EID: props.user['IDN'],
          SPUUID: props.user['SmartPassToken'],
          IsApplicant: true,
        },
      ]),
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
        messageName: 'onNextToChooseActivities',
        variables: {
          businessKey: data.data.businessKey,
          instanceId: data.data.id,
          legalType: 'Local Establishment',
          industrialType: props.selectedIndustrialType,
          capitalvalue: props.totalCapitalvalue,
          investmentValue: props.totalInvestmentValue,
          branchType: 'Branch of a Local Establishment',
          licenceNumber: props.parentCompanylicenceNumberVal,
          skipEconomicName: props.skipEconomicName,
          englishPreferedName: props.englishPreferedName,
          arabicPreferedName: props.arabicPreferedName,
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
      messageName: 'onNextToChooseActivities',
      variables: {
        businessKey: props.businessKey,
        instanceId: props.instanceId,
        legalType: 'Local Establishment',
        industrialType: props.selectedIndustrialType,
        capitalvalue: props.totalCapitalvalue,
        investmentValue: props.totalInvestmentValue,
        branchType: 'Branch of a Local Establishment',
        licenceNumber: props.parentCompanylicenceNumberVal,
        skipEconomicName: props.skipEconomicName,
        englishPreferedName: props.englishPreferedName,
        arabicPreferedName: props.arabicPreferedName,
      },
    });
    if (!res.success || !res.data || !res.data.success) {
      props.actions.loading.update(false);
    }
  }
}
export async function f16_btnCancelClick(props: any, formValues: any) {
	 // props.actions();
  props.actions.isCancelModalOpen.update(true);
}
export async function f17_btnSubmitDisabled(props: any, formValues: any) {
	  return !(
    props.validateStatusTotalCapitalValue == '' &&
    props.totalCapitalvalue !== '' &&
    props.validateStatusTotalInvestmentValue == '' &&
    props.totalInvestmentValue !== '' &&
    props.validateStatus_industryType == '' &&
    props.selectedIndustrialType !== '' &&
    (props.companyDetailsExistingBranchTypeVal == 'No' ||
      (props.companyDetailsExistingBranchTypeVal == 'Yes' &&
        props.validateStatus_parentLicenceNumber == 'success' &&
        props.parentCompanylicenceNumberVal !== ''))
  );
}
