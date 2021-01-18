import PropTypes from 'prop-types';
import types from '@tamm/app-composer/client/constants/types';

export const alignPropTypes = {
  /** Align items left, center or right */
  align: PropTypes.oneOf(Object.keys(types.ALIGN_TYPES)),
};
