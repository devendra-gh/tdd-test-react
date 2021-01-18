import { IVariables } from '@tamm/app-composer';
import { mapValues } from 'lodash';

const formatGrid = ({ columns, flexColumns }: IVariables) => {
  return {
    columns: Number(columns),
    sizes: flexColumns
      ? mapValues(flexColumns, i => 12 / i)
      : {
          xs: 12 / Number(columns),
        },
  };
};

export default formatGrid;
