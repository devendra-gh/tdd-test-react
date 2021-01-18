import legalForms from '../constants/legalForms';
import {
  AMENDMENT_TYPES as types,
  AMENDMENT_CATEGORIES as categories,
} from '../constants/amendmentObjects';

const mobdeaRules = {
  [legalForms.ESTABLISHMENT]: {
    // [categories.OWNERSHIP]: {
    //   [types.HEIRS]: {
    //     actions: {
    //       add: false,
    //       edit: false,
    //       delete: false,
    //     },
    //     noDisplay: false,
    //   },
    // },
    [categories.ACTIVITIES]: {
      [types.ACTIVITIES]: {
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
    },
  },
};

export default mobdeaRules;
