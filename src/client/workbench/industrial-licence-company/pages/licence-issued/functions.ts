

import {downloadFile} from '../../sharedFunctions/services';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

import {getDateFromTimeStamp} from '../../sharedFunctions/utils';

export async function init(props: any) {
    const { locale, i18n, fetch } = props;
  //props.fetch();
  //props.actions();
  // props.actions.individualIssuedTags.update([]);
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  //props.fetch();
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(2);
  // which substep to open up
  props.actions.expandedStepIndexes.update([1]);
  const cStep = { id: 'get_economic_licence', status: '' };
  const cSubStep = { id: 'download_licence', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export async function onPageInit(props: any) {
    const { locale, i18n } = props;
  //props.fetch();
  //props.actions();
  const tags = [
    { label: i18n('referenceNo'), value: props.apTransactionNumber },
    {
      label: i18n('submittedOn'),
      value: getDateFromTimeStamp(props.submitDate),
    },
  ];
  props.actions.individualIssuedTags.update(tags);
}
export async function f1_buttons_onClick(props: any) {
	  props.actions.loading.update(true);
  //props.fetch();
  await downloadFile(
    props.instanceId,
    'certificate',
    props
  );
  props.actions.loading.update(false);
}
export async function f2_buttons_onClick(props: any) {
	  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-ae' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/mylocker`;
}
