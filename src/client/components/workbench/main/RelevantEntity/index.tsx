import React from 'react';
import { IVariables } from '@tamm/app-composer';
import { noop, isFunction } from 'lodash';

import DLSRelevantEntity from '@tamm/ui-lib-v2-relevant-entity-2-0-0';

/* istanbul ignore file */

function RelevantEntity(props: any) {
  const { entities, ...restProps } = props;

  return (
    <DLSRelevantEntity
      {...restProps}
      entities={entities.map((item: IVariables) => {
        const entity = {
          ...item,
        };

        if (
          entity.loadServices &&
          props.loadServices &&
          isFunction(props.loadServices)
        ) {
          entity.loadServices = props.loadServices(entity.loadServices);
        }

        if (
          entity.loadKiosks &&
          props.loadKiosks &&
          isFunction(props.loadKiosks)
        ) {
          entity.loadKiosks = props.loadKiosks(entity.loadKiosks);
        }

        return entity;
      })}
    />
  );
}

RelevantEntity.defaultProps = {
  entities: [],
  i18n: noop,
};

export default RelevantEntity;
