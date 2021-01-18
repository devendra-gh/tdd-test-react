import { isArray, isObjectLike, isDate } from 'lodash';

function deepMap(
  value: any,
  mapFn: Function,
  thisArg?: any,
  key?: any,
  cache = new Map(),
  deep = 0,
) {
  // Use cached value, if present:
  if (cache.has(value)) {
    return cache.get(value);
  }

  if (isArray(value)) {
    const result: any = [];
    cache.set(value, result); // Cache to avoid circular references

    // eslint-disable-next-line no-param-reassign
    deep += 1;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < value.length; i++) {
      result.push(deepMap(value[i], mapFn, thisArg, i, cache, deep));
    }
    return result;
  }

  if (isObjectLike(value) && !isDate(value)) {
    const result: any = {};
    cache.set(value, result); // Cache to avoid circular references

    // eslint-disable-next-line no-param-reassign
    deep += 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const k of Object.keys(value)) {
      result[k] = deepMap(value[k], mapFn, thisArg, k, cache, deep);
    }
    return result;
  }

  return mapFn.call(thisArg, value, key, deep);
}

export default deepMap;
