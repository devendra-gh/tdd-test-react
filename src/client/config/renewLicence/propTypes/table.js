import PropTypes from 'prop-types';
import types from '@tamm/app-composer/client/constants/types';
import buttonsPropTypes from './buttons';

const cellPropTypes = {
  /** Text in English */
  textEn: PropTypes.string,
  /** Text in Arabic */
  textAr: PropTypes.string,
  /** Align content */
  align: PropTypes.oneOf(types.ALIGN_TYPES),
  /** Font weight, bold or normal */
  fontWeight: PropTypes.oneOf(types.FONT_WEIGHT_TYPES),
  /** Font size, one of 'lg', 'sm', leave empty for default */
  fontSize: PropTypes.oneOf(types.FONT_SIZE_TYPES),
  /** Text color */
  textColor: PropTypes.string,
  /** Icon, name from our icon set */
  icon: PropTypes.string,
  /** Is item selectable */
  selectable: PropTypes.bool,
  /** On item select call */
  onSelect: PropTypes.func,
};

const tablePropType = {
  /** Table with details  */
  table: PropTypes.shape({
    /** Table title in English */
    titleEn: PropTypes.string,
    /** Table title in Arabic */
    titleAr: PropTypes.string,
    /** Size, use 'sm' for smaller cell padding */
    size: PropTypes.string,
    /** Header row with column titles */
    header: PropTypes.arrayOf(
      /** Individual header cells, can have 2 lines */
      PropTypes.shape({
        ...cellPropTypes,
        /** Add second line of content if needed */
        secondLine: {
          ...cellPropTypes,
        },
        /** Width in columns for table column, smaller screens logic is determined automatically */
        width: PropTypes.number,
      }),
    ),
    /** List of rows in table, 2 columns supported for now */
    rows: PropTypes.arrayOf(
      /** Single column */
      PropTypes.arrayOf(
        /** Individual cell, can have 2 lines */
        PropTypes.shape({
          ...cellPropTypes,
          /** Buttons, list of buttons  */
          ...buttonsPropTypes,
          /** Add second line of content if needed */
          secondLine: {
            ...cellPropTypes,
          },
        }),
      ),
    ),
  }),
};

export default tablePropType;
