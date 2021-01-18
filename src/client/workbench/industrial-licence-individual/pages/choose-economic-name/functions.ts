

import {autoFillBusinessNames, getYamliSuggestions, tradeNameCheck, tradeNameSuggestion} from '../../sharedFunctions/services';

import {addAnalyticsEvent} from '../../sharedFunctions/tammAnalytics';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    props.actions.loading.update(false);
  // breadCrumbs
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);

  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(2);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'fill_application', status: '' };
  const cSubStep = { id: 'choose_economic_name', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export async function f1_onClick(props: any) {
}
export  function call_f2_onChange(props: any) {
	  return async () => {
    props.actions.autogenerateChecked.update(!props.autogenerateChecked);
    if (!props.autogenerateChecked) {
      props.actions.economicNameEngDisabled.update(true);
      props.actions.economicNameArbDisabled.update(true);
      props.actions.checkAvailabilityBtnDisabled.update(true);
      //props.fetch();
      const autoFillRes = await autoFillBusinessNames(props);
      if (autoFillRes) {
        props.actions.arabicPreferedName.update(autoFillRes.businessNameArb);
        props.actions.englishPreferedName.update(autoFillRes.businessNameEng);
        props.actions.economicNameDisabled.update(false);
      }
    } else {
      props.actions.arabicPreferedName.update('');
      props.actions.englishPreferedName.update('');
      props.actions.economicNameEngDisabled.update(false);
      props.actions.economicNameArbDisabled.update(false);
      props.actions.economicNameDisabled.update(true);
      props.actions.checkAvailabilityBtnDisabled.update(false);
    }
  };
}
export  function call_f3_onChange(props: any) {
	  return (value: string) => {
    props.actions.economicNameDisabled.update(true);
    const english = /^[A-Za-z][A-Za-z0-9 ]*$/;
    const result = english.test(value);
    props.actions.englishPreferedName.update(value);
    if (!result) {
      props.actions.englishPreferedNameValidStatus.update('error');
      props.actions.checkAvailabilityBtnDisabled.update(true);
    } else {
      props.actions.englishPreferedNameValidStatus.update('');
      props.actions.checkAvailabilityBtnDisabled.update(false);
    }
  };
}
export async function f4_onBlur(props: any) {
	  // props.fetch();
  const suggestions = await getYamliSuggestions(
    props,
    props.englishPreferedName
  );
  if (suggestions) {
    props.actions.arabicPreferedName.update(suggestions.nameAr);
  }
}
export  function call_f5_onChange(props: any) {
	  return (value: string) => {
    props.actions.economicNameDisabled.update(true);
    const arabic = /^[\u0621-\u064A0-9 ]*$/;
    const result = arabic.test(value);
    props.actions.arabicPreferedName.update(value);
    if (!result) {
      props.actions.arabicPreferedNameValidStatus.update('error');
      props.actions.checkAvailabilityBtnDisabled.update(true);
    } else {
      props.actions.arabicPreferedNameValidStatus.update('');
      props.actions.checkAvailabilityBtnDisabled.update(false);
    }
  };
}
export  function call_f6_onClick(props: any) {
	  const { i18n } = props;
  // props.fetch();
  return async () => {
    props.actions.economicNameDisabled.update(true);
    props.actions.showNameSuggestions.update(false);
    props.actions.suggestionNoteVisibility.update(false);
    if (props.englishPreferedName && props.arabicPreferedName) {
      props.actions.loading.update(true);
      props.actions.checkAvailabilityBtnDisabled.update(true);
      const validityRes = await tradeNameCheck(
        props,
        props.englishPreferedName,
        props.arabicPreferedName
      );
      props.actions.loading.update(false);
      props.actions.checkAvailabilityBtnDisabled.update(false);
      props.actions.showNameSuggestions.update(false);
      props.actions.tableEconomicNameItems.update([]);
      if (
        !validityRes.checkedEconomicNameProperty.nameAvailableInEnglish ||
        !validityRes.checkedEconomicNameProperty.nameAvailableInArabic
      ) {
        props.actions.showNameSuggestions.update(true);
        props.actions.suggestionNoteVisibility.update(true);
        const activities = props.basket.reduce(
          (acc: any, el: any) => acc + (acc ? ',' : '') + el.id,
          ''
        );
        const suggestions = await tradeNameSuggestion(
          props,
          props.arabicPreferedName,
          props.englishPreferedName,
          activities
        );
        props.actions.tableEconomicNameItems.update(suggestions);
      } else if (
        validityRes.checkedEconomicNameProperty.isSpecialNameEn ||
        validityRes.checkedEconomicNameProperty.isSpecialNameAr ||
        validityRes.checkedEconomicNameProperty.isProhibitedNameEn ||
        validityRes.checkedEconomicNameProperty.isProhibitedNameAr
      ) {
        if (validityRes.checkedEconomicNameProperty.isSpecialNameEn) {
          props.actions.englishPreferedNameValidStatus.update('error');
          props.actions.englishPreferedNameHelpMsg.update(
            i18n('error_reserved_name')
          );
        }
        if (validityRes.checkedEconomicNameProperty.isSpecialNameAr) {
          props.actions.arabicPreferedNameValidStatus.update('error');
          props.actions.arabicPreferedNameHelpMsg.update(
            i18n('error_reserved_name')
          );
        }
        if (validityRes.checkedEconomicNameProperty.isProhibitedNameEn) {
          props.actions.englishPreferedNameValidStatus.update('error');
          props.actions.englishPreferedNameHelpMsg.update(
            i18n('error_prohibited_name')
          );
        }
        if (validityRes.checkedEconomicNameProperty.isProhibitedNameAr) {
          props.actions.arabicPreferedNameValidStatus.update('error');
          props.actions.arabicPreferedNameHelpMsg.update(
            i18n('error_prohibited_name')
          );
        }
      } else if (
        validityRes.checkedEconomicNameProperty.nameAvailableInEnglish &&
        validityRes.checkedEconomicNameProperty.nameAvailableInArabic
      ) {
        props.actions.arabicPreferedNameValidStatus.update('success');
        props.actions.arabicPreferedNameHelpMsg.update(
          i18n('economic_name_available')
        );
        props.actions.englishPreferedNameValidStatus.update('success');
        props.actions.englishPreferedNameHelpMsg.update(
          i18n('economic_name_available')
        );
        //enable submit button
        props.actions.economicNameDisabled.update(false);
      } else {
        // throw generic error
      }
    }
  };
}
export function f7_visible(props: any) {
	  
}
export function f8_visible(props: any) {
	  return (
    props.showNameSuggestions && props.suggestionNoteVisibility
  );
}
export  function call_f9_onSelectionChange(props: any) {
	  return (idArr: any) => {
    const tradeNameJSON = props.tableEconomicNameItems.find(
      (obj: any) => obj.serial == idArr[0]
    );
    if (tradeNameJSON) {
      props.actions.englishPreferedName.update(tradeNameJSON.nameEn);
      props.actions.arabicPreferedName.update(tradeNameJSON.nameAr);
      props.actions.economicNameDisabled.update(false);
      props.actions.checkAvailabilityBtnDisabled.update(true);
      props.actions.suggestionNoteVisibility.update(false);
    }
  };
}
export function f10_visible(props: any) {
	  return props.showNameSuggestions;
}
export async function f11_onClick(props: any) {
}
export async function f12_btnBackClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onBackToChooseActivities',
    variables: {},
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f13_btnSubmitClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  addAnalyticsEvent(props, 'TRA');
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onSubmit',
    variables: {
      englishPreferedName: props.englishPreferedName,
      arabicPreferedName: props.arabicPreferedName,
    },
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f14_btnCancelClick(props: any, formValues: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(true);
}
export async function f15_btnSubmitDisabled(props: any, formValues: any) {
	  return props.economicNameDisabled;
}
export async function f16_primaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
  props.actions.resetState();
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforIssuingEconomicLicenceIndustrialLeaderIndividual?recache=true`;
}
export async function f17_secondaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
}
export async function f18_onClose(props: any) {
	  props.actions.isCancelModalOpen.update(false);
}
