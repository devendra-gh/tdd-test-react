import { IVariables } from '@tamm/app-composer';
import { UAE, DELETE } from '../constants';
import { isGCC } from '../utils/nationality';

export const operatorConditions: IVariables = {
  '=': (a: number, b: number) => a === b,
  '!=': (a: number, b: number) => a !== b,
  '>': (a: number, b: number) => a > b,
  '<': (a: number, b: number) => a < b,
  '>=': (a: number, b: number) => a >= b,
  '<=': (a: number, b: number) => a <= b,
};

export const attributeConditions: IVariables = {
  totalCount: (items: IVariables[]) =>
    items && items.filter((item: IVariables) => item.status !== DELETE).length,
  gccCount: (items: IVariables[]) =>
    items &&
    items.filter(
      (item: IVariables) => item.status !== DELETE && isGCC(item.nationality),
    ).length,
  localCount: (items: IVariables[]) =>
    items &&
    items.filter(
      (item: IVariables) => item.status !== DELETE && item.nationality === UAE,
    ).length,
  nonLocalCount: (items: IVariables[]) =>
    items &&
    items.filter(
      (item: IVariables) => item.status !== DELETE && item.nationality !== UAE,
    ).length,
  totalShare: (items: IVariables[]) =>
    items &&
    items.reduce(
      (acc: number, item: IVariables) =>
        item.status !== DELETE ? acc + Number(item.sharePercentage) : acc,
      0,
    ),
  localShare: (items: IVariables[]) =>
    items &&
    items.reduce(
      (acc: number, item: IVariables) =>
        item.status !== DELETE && item.nationality === UAE
          ? acc + Number(item.sharePercentage)
          : acc,
      0,
    ),
  nonLocalShare: (items: IVariables[]) =>
    items &&
    items.reduce(
      (acc: number, item: IVariables) =>
        item.status !== DELETE && item.nationality !== UAE
          ? acc + Number(item.sharePercentage)
          : acc,
      0,
    ),
  mustHavePaidUpCapital: (value: IVariables) => (value.paidUpCapital ? 1 : 0),
  mustHaveTradeName: () => 1,
  mustHaveLocation: (value: IVariables) => (value.tawtheeqNum ? 1 : 0),
};

// export default { operatorConditions, attributeConditions };
