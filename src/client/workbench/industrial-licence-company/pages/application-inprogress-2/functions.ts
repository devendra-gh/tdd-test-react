

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

import {getDateFromTimeStamp} from '../../sharedFunctions/utils';

export async function init(props: any) {
    const { locale, i18n } = props;
  //props.fetch();
  //props.actions();
  // props.actions.individualIssuedTags.update([]);
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  props.actions.loading.update(false);
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(0);
  // which substep to open up
  props.actions.expandedStepIndexes.update([1]);
  const cStep = { id: 'get_economic_licence', status: '' };
  const cSubStep = { id: 'get_ded_approval', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export async function onPageInit(props: any) {
    const { locale, i18n } = props;
  //props.fetch();
  // props.actions();
  const tags = [
    { label: i18n('referenceNo'), value: props.apTransactionNumber },
    {
      label: i18n('submittedOn'),
      value: getDateFromTimeStamp(props.submitDate),
    },
  ];
  console.log('ronald', tags);
  props.actions.individualIssuedTags.update(tags);
}
