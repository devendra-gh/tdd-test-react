import { IVariables } from '@tamm/app-composer';
import { isString, isDate, isArray, noop, isFunction } from 'lodash';
import get from 'client/utils/lodash/get';
import deepMap from 'client/utils/workbench/deepMap';

const regex = /\${([a-zA-Z_$][0-9a-zA-Z_$.]*)}/g;
const regexSharedFunction = /callShared\('([a-zA-Z_\-$][0-9a-zA-Z_\-$.]*)'\)/i;

function JSONSafeParse(json: any) {
  let parsed;

  try {
    parsed = JSON.parse(json);
  } catch (e) {
    parsed = json;
  }

  return parsed;
}

const IGNORED_FUNCTIONS = [
  'visible',
  'btnSubmitClick',
  'btnCancelClick',
  'btnBackClick',
  'btnSubmitDisabled',
  'isRequiredFunc',
  'isVisibleFunc',
  'isDisabledFunc',
  'isValidFunc',
];

const isIgnoredFunction = (name: string) => {
  return IGNORED_FUNCTIONS.some(item => name.includes(item));
};

const formatState = (definitions: IVariables[], props: IVariables) => {
  const statefull = deepMap(definitions, (value: any) => {
    if (isString(value)) {
      let parseDate = false;

      let result: any = value.replace(
        regex,
        (matchedText: string, key: string): any => {
          const stateValue = get(props, `${key.replace('state.', '')}`);
          if (isDate(stateValue)) {
            parseDate = true;
            return stateValue;
          }
          if (typeof stateValue === 'string') {
            return stateValue;
          }
          return JSON.stringify(stateValue);
        },
      );

      if (parseDate) {
        return new Date(result);
      }

      result = JSONSafeParse(result);

      if (isArray(result)) {
        /**
         * handle sharedFunction call
         */
        return deepMap(result, (item: any) => {
          if (isString(item) && item.match(regexSharedFunction)) {
            const [, funcName]: any = item.match(regexSharedFunction);
            return get(props, `sharedFunctions.${funcName}`, noop);
          }

          return item;
        });
      }
      return result;
    }

    return value;
  });

  return deepMap(statefull, (value: any) => {
    if (isFunction(value) && !isIgnoredFunction(value.name)) {
      if (value.name.includes('call_')) {
        return value(props);
      }
      return () => {
        value(props);
      };
    }
    return value;
  });
};

export default formatState;
