import { IVariables } from '@tamm/app-composer';

const conditions: IVariables = {
  mustHaveAtLeastOne: {
    attribute: 'totalCount',
    operator: '!=',
    value: 0,
  },
  mustHaveOnlyOne: {
    attribute: 'totalCount',
    operator: '=',
    value: 1,
  },
  mustHaveMoreThanOne: {
    attribute: 'totalCount',
    operator: '>',
    value: 1,
  },
  mustHaveOnlyLocal: {
    attribute: 'localCount',
    operator: '>=',
    value: 1,
  },
  mustNotHaveLocal: {
    attribute: 'localCount',
    operator: '=',
    value: 0,
  },
  mustHaveOnlyGCC: {
    attribute: 'gccCount',
    operator: '>=',
    value: 1,
  },
  mustHave100Shares: {
    attribute: 'totalShare',
    operator: '=',
    value: 100,
  },
  mustHave51LocalShares: {
    attribute: 'localShare',
    operator: '>=',
    value: 51,
  },
  mustHaveZero: {
    attribute: 'totalCount',
    operator: '=',
    value: 0,
  },
  mustHavePaidUpCapital: {
    attribute: 'mustHavePaidUpCapital',
    operator: '!=',
    value: 0,
  },
  mustHaveTradeName: {
    attribute: 'mustHaveTradeName',
    operator: '!=',
    value: 1,
  },
  mustHaveLocation: {
    attribute: 'mustHaveLocation',
    operator: '!=',
    value: 0,
  },
  shouldHaveZero: {
    attribute: 'totalCount',
    operator: '=',
    value: 0,
  },
};

export default conditions;
