

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsListsWithoutEconomicName, stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    // breadCrumbs
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
  let stepsList: any[];
  if (props.skipEconomicName || props.skipEconomicName) {
    stepsList = stepsListsWithoutEconomicName();
  } else {
    stepsList = stepsLists();
  }
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
