import React from 'react';
import { IVariables } from '@tamm/app-composer';
import { toPairs, startCase, lowerCase, join } from 'lodash';
import classNamesHandler from 'classnames';

function Space(props: IVariables) {
  const { children, classNames, ...space } = props;

  const className = join(
    toPairs(space).map(([key, value]) => {
      const [type, direction] = startCase(lowerCase(key)).split(' ');
      return `ui-lib-${lowerCase(type)}-${lowerCase(direction[0])}_${value}`;
    }),
    ' ',
  );

  return (
    <div className={classNamesHandler(className, classNames)}>{children}</div>
  );
}

export default Space;
