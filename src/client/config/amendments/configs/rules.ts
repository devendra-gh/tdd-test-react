import { IVariables } from '@tamm/app-composer';
import licenseTypes from '../constants/licenseTypes';
import tajerRules from './rulesTajer';
import rulesMobdea from './rulesMobdea';
import economicRules from './rulesEconomic';
import allInOneRules from './rulesAllInOne';
import instantRules from './rulesInstant';
import branchRules from './rulesBranch';

export interface Rule {
  condition?: string;
  attribute?: string;
  operator?: string;
  value?: number | string;
  message: string;
  onlyIf?: (key: IVariables) => boolean;
  noDisplay?: boolean;
  legalFormChange?: string[];
}

const rules: IVariables = {
  [licenseTypes.TAJER]: tajerRules,
  [licenseTypes.MOBDEA]: rulesMobdea,
  [licenseTypes.ECONOMIC]: economicRules,
  [licenseTypes.ALL_IN_ONE]: allInOneRules,
  [licenseTypes.INSTANT]: instantRules,
  [licenseTypes.BRANCH]: branchRules,
  [licenseTypes.TECH]: economicRules,
};

export default rules;
