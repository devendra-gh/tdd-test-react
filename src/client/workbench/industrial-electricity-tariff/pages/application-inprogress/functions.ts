

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    const steps = getSteps(props.i18n, 1, 0);
  props.actions.steps.update(steps);
  props.actions.currentSubStepIndex.update(0);
  props.actions.currentStepIndex.update(1);
  props.actions.expandedStepIndexes.update([1]);

  // props.actions.referenceTags.update();
  props.actions.loading.update(false);
}
export async function onPageInit(props: any) {
    //props.fetch()
  const { submittedOn, i18n } = props;
  const referenceTags = [
    {
      label: i18n('Global_SubmittedOn'),
      value: submittedOn,
    },
  ];
  props.actions.referenceTags.update(referenceTags);
}
