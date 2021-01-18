import legalForms from '../constants/legalForms';
import {
  AMENDMENT_TYPES as types,
  AMENDMENT_CATEGORIES as categories,
} from '../constants/amendmentObjects';

const branchRules = {
  [legalForms.BRANCH]: {
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
      [types.COUNTRY]: {
        actions: {},
        noDisplay: false,
      },
    },
  },
  [legalForms.UAE_BRANCH]: {
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
      [types.COUNTRY]: {
        actions: {},
        noDisplay: false,
      },
    },
  },
  [legalForms.FREEZONE_BRANCH]: {
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
      [types.COUNTRY]: {
        actions: {},
        noDisplay: false,
      },
    },
  },
  [legalForms.GCC_BRANCH]: {
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
      [types.COUNTRY]: {
        actions: {},
        noDisplay: false,
      },
    },
  },
  [legalForms.FOREIGN_BRANCH]: {
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
      [types.COUNTRY]: {
        actions: {},
        noDisplay: false,
      },
    },
  },
};

export default branchRules;
