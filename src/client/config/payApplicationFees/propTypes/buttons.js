import PropTypes from 'prop-types';
import { alignPropTypes } from './positioning';

const buttonsPropTypes = {
  /** Actions list, use it to add primary and secondary buttons */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label */
      label: PropTypes.string,
      /** Icon, name from our icon library */
      icon: PropTypes.string,
      /** Flip icon in Arabic */
      flipIconAr: PropTypes.bool,
      /** Link, used to navigate to another page */
      link: PropTypes.string,
      /** On click action, overrides link */
      onClick: PropTypes.func,
      ...alignPropTypes,
    }),
  ),
};

export default buttonsPropTypes;
