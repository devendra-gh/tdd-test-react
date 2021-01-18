

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    props.actions.loading.update(false);
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
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
