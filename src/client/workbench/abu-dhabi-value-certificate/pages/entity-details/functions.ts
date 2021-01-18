import { checkEntitySelected } from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  const steps = getSteps(props.i18n, 0, 1);
  props.actions.steps.update(steps);
  props.actions.currentSubStepIndex.update(1);
}
export function call_f1_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isArdentSelected = event.target.checked;
    selectedEntities.ardent = isArdentSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.ardentSelected.update(isArdentSelected);
  };
}
export function call_f2_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isBakertillySelected = event.target.checked;
    selectedEntities.bakertilly = isBakertillySelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.bakertillySelected.update(isBakertillySelected);
  };
}
export function call_f3_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isDeloitteSelected = event.target.checked;
    selectedEntities.deloitte = isDeloitteSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.deloitteSelected.update(isDeloitteSelected);
  };
}
export function call_f4_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isEYSelected = event.target.checked;
    selectedEntities.ey = isEYSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.eySelected.update(isEYSelected);
  };
}
export function call_f5_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isProtivitiSelected = event.target.checked;
    selectedEntities.protiviti = isProtivitiSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.provitiSelected.update(isProtivitiSelected);
  };
}
export function call_f6_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isMAZARSSelected = event.target.checked;
    selectedEntities.mazars = isMAZARSSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.mazarsSelected.update(isMAZARSSelected);
  };
}
export function call_f7_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isCROWESelected = event.target.checked;
    selectedEntities.crowe = isCROWESelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.croweSelected.update(isCROWESelected);
  };
}
export function call_f8_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isMBCSelected = event.target.checked;
    selectedEntities.mbc = isMBCSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.mbcSelected.update(isMBCSelected);
  };
}
export function call_f9_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isPKFSelected = event.target.checked;
    selectedEntities.pkf = isPKFSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.pkfSelected.update(isPKFSelected);
  };
}
export function call_f10_onClick(props: any) {
  return (event: any) => {
    const { selectedEntities } = props;
    const isTAGSelected = event.target.checked;
    selectedEntities.tag = isTAGSelected;
    const isEntitySelected = checkEntitySelected(selectedEntities);

    props.actions.isEntityNotSelected.update(!isEntitySelected);
    props.actions.selectedEntities.update(selectedEntities);
    props.actions.tagSelected.update(isTAGSelected);
  };
}
export async function f11_onClick(props: any) {
  props.history.push('/select-licence');
}
export async function f12_onClick(props: any) {
  props.history.push('/enter-company-details');
  const selectedEntities = Object.keys(props.selectedEntities)
    .filter((entity: string) => props.selectedEntities[entity])
    .reduce(
      (entities: any, entity) => ({
        ...entities,
        [entity]: 'CHECKED',
      }),
      {},
    );

  props.actions.entityPayload.update({
    ...selectedEntities,
  });
  props.actions.selectedEntities.update(selectedEntities);
}
export async function f13_onClick(props: any) {
  props.history.push('/');
}
