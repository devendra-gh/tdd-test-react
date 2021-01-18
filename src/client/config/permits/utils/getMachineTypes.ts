import { slugify } from './common';

export const MACHINE_TYPE_BUBBLE_GUM = 'Bubble gum machine';
export const MACHINE_TYPE_DOLL_LIFT = 'Doll lifting machines';
export const MACHINE_TYPE_HOT_DRINKS = 'Hot drinks machine';
export const MACHINE_TYPE_ICE_MAKERS = 'Ice makers';
export const MACHINE_TYPE_VENDING = 'Vending machines';
export const machineTypes = {
  [slugify(MACHINE_TYPE_BUBBLE_GUM)]: {
    id: MACHINE_TYPE_BUBBLE_GUM,
    value: MACHINE_TYPE_BUBBLE_GUM,
    label: 'variousMachines.bubbleGum',
  },
  [slugify(MACHINE_TYPE_DOLL_LIFT)]: {
    id: MACHINE_TYPE_DOLL_LIFT,
    value: MACHINE_TYPE_DOLL_LIFT,
    label: 'variousMachines.dollLifting',
  },
  [slugify(MACHINE_TYPE_HOT_DRINKS)]: {
    id: MACHINE_TYPE_HOT_DRINKS,
    value: MACHINE_TYPE_HOT_DRINKS,
    label: 'variousMachines.hotDrinks',
  },
  [slugify(MACHINE_TYPE_ICE_MAKERS)]: {
    id: MACHINE_TYPE_ICE_MAKERS,
    value: MACHINE_TYPE_ICE_MAKERS,
    label: 'variousMachines.iceMakers',
  },
  [slugify(MACHINE_TYPE_VENDING)]: {
    id: MACHINE_TYPE_VENDING,
    value: MACHINE_TYPE_VENDING,
    label: 'variousMachines.vendingMachines',
  },
};
const getMachineTypes = () => {
  return Object.values(machineTypes);
};
export default getMachineTypes;
