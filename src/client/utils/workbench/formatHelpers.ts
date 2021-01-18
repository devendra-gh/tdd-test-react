import { has, omit, isString, isObjectLike, isFunction, isEmpty } from 'lodash';
import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import deepMap from 'client/utils/workbench/deepMap';
import get from 'client/utils/lodash/get';

const regexI18n = /i18n\('([a-zA-Z_\-$][0-9a-zA-Z_\-$.]*)'\)/g;
const regexSymbolProps = /symbolProps\('([a-zA-Z_\-$][0-9a-zA-Z_\-$.]*)'\)/g;

const getImageProps = (passedProps: IVariables) => {
  const tempProps = { ...passedProps };

  Object.keys(tempProps).forEach((key: any) => {
    const prop = tempProps[key];
    if (
      isObjectLike(prop) &&
      has(prop, 'type') &&
      has(prop, 'fileId') &&
      prop.type === 'file/image'
    ) {
      tempProps[key] = `${baseUrl}/api/file/image/${prop.fileId}`;
    }
  });

  return tempProps;
};

const getCustomComponentProps = (
  props: IVariables,
  definitionProps: IVariables,
) => {
  const { i18n } = props;

  // eslint-disable-next-line complexity
  const componentProps = deepMap(definitionProps, (value: any, key: string) => {
    if (isString(value) && value.match(regexI18n)) {
      return value.replace(regexI18n, (matched, k) => i18n(k));
    }

    if (
      !isEmpty(definitionProps.symbolProps) &&
      isString(value) &&
      value.match(regexSymbolProps)
    ) {
      return value.replace(regexSymbolProps, (matched, k) =>
        get(definitionProps.symbolProps, k, k),
      );
    }

    if (
      isString(key) &&
      key.toLowerCase().indexOf('date') >= 0 &&
      Date.parse(value)
    ) {
      return new Date(value);
    }

    if (definitionProps.symbolProps && isFunction(value)) {
      return value.bind(null, definitionProps.symbolProps);
    }

    return value;
  });

  return omit(
    {
      ...props,
      ...getImageProps(componentProps),
      i18n,
    },
    ['definition'],
  );
};

export { getCustomComponentProps };
