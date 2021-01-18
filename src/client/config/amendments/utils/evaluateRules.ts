import { IVariables } from '@tamm/app-composer';
import allRules from 'client/config/amendments/configs/rules'; // , { Rule }
import conditions from 'client/config/amendments/configs/conditions';
import {
  operatorConditions,
  attributeConditions,
} from 'client/config/amendments/configs/calculations';
import { AMENDMENT_CATEGORIES as categories } from 'client/config/amendments/constants/amendmentObjects';

const checkRule = (
  subCategoryName: string,
  subCategoryRules: IVariables[],
  props: IVariables,
) => {
  const result: IVariables[] = [];
  const { [subCategoryName]: attrObject } = props.licenceDetails;
  const subCategoryValues: IVariables = {};

  const ruleSet = subCategoryRules.map((rule: IVariables) =>
    rule.condition ? { ...conditions[rule.condition], ...rule } : rule,
  );

  /* get all possible attributes from config and 
  find calculation values (like totalCount, totalShare, etc.) */
  const attributeVarieties = ruleSet.map((rule: IVariables) => rule.attribute);

  attributeVarieties.forEach((attributeValue: string) => {
    const func = attributeConditions[attributeValue];
    subCategoryValues[attributeValue] =
      typeof func === 'function' ? func(attrObject) : undefined;
    return null;
  });

  /* 
  Takes rules array per subCategory (eg: partner, manager , etc.),
  check for onlyIf condition satisfies if it exists,
  run the condition function with attribute, operator, and value
  */
  ruleSet.forEach((rule: IVariables) => {
    // if (rule.condition) {
    //   const ruleConditions = conditions[rule.condition];
    //   rule = { ...ruleConditions, ...rule };
    // }
    const {
      attribute,
      operator,
      value,
      message,
      noDisplay,
      legalFormChange,
    } = rule;

    let { onlyIf } = rule;
    let ruleValid: boolean = false;
    if (!onlyIf) {
      onlyIf = (_none: IVariables) => true;
    }
    if (subCategoryValues[attribute] === undefined) {
      // eslint-disable-next-line no-console
      console.log(
        'functional calculation for rule is not done. Rule is: ',
        rule,
      );
    }
    const condition = operatorConditions[operator];

    if (onlyIf(props)) {
      ruleValid = condition(subCategoryValues[attribute], value);
      result.push({
        message,
        status: ruleValid,
        display: !noDisplay,
        legalFormChange: ruleValid === false ? legalFormChange || false : false,
      });
    }

    return null;
  });
  return result;
};

const evaluateRules = (props: IVariables, type = 'single') => {
  const { legalForm, licenseType, currentCategory } = props;

  const rulesConfig: IVariables =
    allRules[licenseType] && allRules[licenseType][legalForm];

  const ruleResult: IVariables = {};

  if (rulesConfig) {
    if (type === 'single') {
      if (rulesConfig[currentCategory]) {
        Object.keys(rulesConfig[currentCategory]).forEach(
          (subCategoryName: string) => {
            ruleResult[subCategoryName] = checkRule(
              subCategoryName,
              rulesConfig[currentCategory][subCategoryName].rules || [],
              props,
            );
            return null;
          },
        );
      }
    } else {
      Object.values(categories).forEach((category: string) => {
        ruleResult[category] = {};
        if (rulesConfig[category]) {
          Object.keys(rulesConfig[category]).forEach(
            (subCategoryName: string) => {
              ruleResult[category][subCategoryName] = checkRule(
                subCategoryName,
                rulesConfig[category][subCategoryName].rules || [],
                props,
              );
              return null;
            },
          );
        }
        return null;
      });
    }
  }

  return ruleResult;
};

export default evaluateRules;
