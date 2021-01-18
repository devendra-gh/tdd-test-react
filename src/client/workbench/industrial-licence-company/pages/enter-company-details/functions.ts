

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    props.actions.loading.update(false);
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
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
  props.actions.currentSubStepIndex.update(1);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'fill_application', status: '' };
  const cSubStep = { id: 'enter_company_details', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);

  // filling legal form dropdown legalTypeArb
  const legalFormVal = [
    {
      id: props.legalType,
      label:
        props.locale === 'en'
          ? props.legalType
          : props.legalTypeArb,
      disabled: true,
    },
  ];
  props.actions.legalFormSelect.update(legalFormVal);

  // add i18n for the table
  let tableColoum: any[] = [];
  props.ownerDetailsColumns.map((item: any) => {
    tableColoum = [...tableColoum, { ...item, title: props.i18n(item.title) }];
  });
  props.actions.ownerDetailsColumns.update(tableColoum);

  const detailsRow =
    props.partners.length > 0
      ? props.partners.map((value: any, index: number) => ({
          id: `'${index}'`,
          name: props.locale === 'en' ? value.FullNameENG : value.FullNameARB,
          nationality:
            props.locale === 'en' ? value.Nationality : value.Nationality,
          idNumber: value.IDNumber,
          share: value.PartnerSharePercentage + '%',
        }))
      : [{ id: '0', description: '', price: 0 }];

  props.actions.ownerDetailsRow.update(detailsRow);
}
export async function f1_onSearch(props: any) {
}
export  function call_f2_onChange(props: any) {
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
export async function f3_onOpenChange(props: any) {
}
export  function call_f4_onChange(props: any) {
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
export  function call_f5_onChange(props: any) {
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
export async function f6_btnBackClick(props: any, formValues: any) {
	  //props.actions();
  //const { locale, i18n } = props;
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onBackToTradeName',
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f7_btnSubmitClick(props: any, formValues: any) {
	  //props.actions();
  //const { locale, i18n } = props;

  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onNextToChooseActivities',
    variables: {
      legalType: props.legalType,
      industrialType: props.selectedIndustrialType,
      capitalvalue: props.totalCapitalvalue,
      investmentValue: props.totalInvestmentValue,
    },
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f8_btnCancelClick(props: any, formValues: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(true);
}
export async function f9_btnSubmitDisabled(props: any, formValues: any) {
	  return !(
    props.validateStatusTotalCapitalValue == '' &&
    props.totalCapitalvalue !== '' &&
    props.validateStatusTotalInvestmentValue == '' &&
    props.totalInvestmentValue !== '' &&
    props.validateStatus_industryType == '' &&
    props.selectedIndustrialType !== ''
  );
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
