import { IVariables } from '@tamm/app-composer';
import legalForms from '../constants/legalForms';
import {
  AMENDMENT_TYPES as types,
  AMENDMENT_CATEGORIES as categories,
} from '../constants/amendmentObjects';
import { UAE, DELETE, profileTypes } from '../constants';

const economicRules = {
  [legalForms.ESTABLISHMENT]: {
    [categories.OWNERSHIP]: {
      [types.PARTNERS]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: () => true,
            message: 'condition.partners.mandatory',
            noDisplay: false,
          },
          {
            condition: 'mustHaveOnlyOne',
            onlyIf: () => true,
            message: 'condition.partners.totalCount',
            legalFormChange: [legalForms.LLC],
            noDisplay: false,
          },
          // {
          //   condition: 'mustNotHaveLocal',
          //   onlyIf: () => true,
          //   message: 'condition.partners.gccMustNotHave',
          //   legalFormChange: [legalForms.SOLE_LLC],
          //   noDisplay: false,
          // },
          {
            condition: 'mustHave100Shares',
            onlyIf: () => true,
            message: 'condition.owner.100Shares',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.REPRESENTATIVES]: {
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.HEIRS]: {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        noDisplay: false,
      },
      [types.MANAGERS]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: (props: IVariables) => {
              const partners = props.licenceDetails.partners.filter(
                (item: IVariables) => item.status !== DELETE,
              );
              return (
                partners[0] && partners[0].profileType === profileTypes.COMPANY
              );
            },
            message: 'condition.managers.mandatory',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.LOCAL_AGENT]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: (props: IVariables) => {
              const partners = props.licenceDetails.partners.filter(
                (item: IVariables) => item.status !== DELETE,
              );
              return partners[0] && partners[0].nationality !== UAE;
            },
            message: 'condition.localAgent.mandatory',
            noDisplay: false,
          },
          {
            condition: 'mustHaveOnlyLocal',
            onlyIf: (props: IVariables) => {
              const partners = props.licenceDetails.partners.filter(
                (item: IVariables) => item.status !== DELETE,
              );
              return partners[0] && partners[0].nationality !== UAE;
            },
            message: 'condition.localAgent.gccMustHave',
            noDisplay: true,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
    },
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
    [categories.TRADE_NAME]: {
      [types.TRADE_NAME]: {
        rules: [
          {
            condition: 'mustHaveTradeName',
            onlyIf: () => true,
            message: 'condition.tradeName.mandatory',
            noDisplay: false,
          },
        ],
        actions: {},
        noDisplay: false,
      },
    },
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
    },
  },
  [legalForms.LLC]: {
    [categories.OWNERSHIP]: {
      [types.PARTNERS]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: () => true,
            message: 'condition.partners.mandatory',
            noDisplay: false,
          },
          {
            condition: 'mustHaveMoreThanOne',
            onlyIf: () => true,
            message: 'condition.partners.moreThanOne',
            legalFormChange: [legalForms.SOLE_LLC],
            noDisplay: false,
          },
          {
            condition: 'mustHave51LocalShares',
            onlyIf: () => true,
            message: 'condition.partners.localShares51',
            noDisplay: false,
          },
          {
            condition: 'mustHave100Shares',
            onlyIf: () => true,
            message: 'condition.partners.100Shares',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.REPRESENTATIVES]: {
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.HEIRS]: {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        noDisplay: false,
      },
      [types.MANAGERS]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: () => true,
            message: 'condition.managers.mandatory',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.LOCAL_AGENT]: {
        rules: [
          {
            condition: 'mustHaveZero',
            onlyIf: () => true,
            message: 'condition.localAgent.notAllowed',
            noDisplay: false,
          },
        ],
        actions: {
          add: false,
          edit: false,
          delete: true,
        },
        noDisplay: false,
      },
    },
    [categories.ACTIVITIES]: {
      [types.ACTIVITIES]: {
        actions: {},
      },
    },
    [categories.TRADE_NAME]: {
      [types.TRADE_NAME]: {
        rules: [
          {
            condition: 'mustHaveTradeName',
            onlyIf: () => true,
            message: 'condition.tradeName.mandatory',
            noDisplay: false,
          },
        ],
        actions: {},
        noDisplay: false,
      },
    },
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
    },
    [categories.FINANCIAL]: {
      [types.PAID_UP_CAPITAL]: {
        rules: [
          {
            condition: 'mustHavePaidUpCapital',
            onlyIf: () => true,
            message: 'condition.paidUpCapital.mandatory',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
    },
  },
  [legalForms.SOLE_LLC]: {
    [categories.OWNERSHIP]: {
      [types.PARTNERS]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: () => true,
            message: 'condition.partners.mandatory',
            noDisplay: false,
          },
          {
            condition: 'mustHaveOnlyOne',
            onlyIf: () => true,
            message: 'condition.partners.totalCount',
            legalFormChange: [legalForms.LLC],
            noDisplay: false,
          },
          {
            condition: 'mustHaveOnlyLocal',
            onlyIf: () => true,
            message: 'condition.partners.gccMustHave',
            noDisplay: false,
          },
          {
            condition: 'mustHave100Shares',
            onlyIf: () => true,
            message: 'condition.owner.100Shares',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.REPRESENTATIVES]: {
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.HEIRS]: {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        noDisplay: false,
      },
      [types.MANAGERS]: {
        rules: [
          {
            condition: 'mustHaveAtLeastOne',
            onlyIf: () => true,
            message: 'condition.managers.mandatory',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
      [types.LOCAL_AGENT]: {
        rules: [
          {
            condition: 'mustHaveZero',
            onlyIf: () => true,
            message: 'condition.localAgent.notAllowed',
            noDisplay: false,
          },
        ],
        actions: {
          add: false,
          edit: false,
          delete: true,
        },
        noDisplay: false,
      },
    },
    [categories.ACTIVITIES]: {
      [types.ACTIVITIES]: {
        actions: {},
        noDisplay: false,
      },
    },
    [categories.TRADE_NAME]: {
      [types.TRADE_NAME]: {
        rules: [
          {
            condition: 'mustHaveTradeName',
            onlyIf: () => true,
            message: 'condition.tradeName.mandatory',
            noDisplay: false,
          },
        ],
        actions: {},
        noDisplay: false,
      },
    },
    [categories.LOCATION_COUNTRY]: {
      [types.LOCATION]: {
        actions: {},
        noDisplay: false,
      },
    },
    [categories.FINANCIAL]: {
      [types.PAID_UP_CAPITAL]: {
        rules: [
          {
            condition: 'mustHavePaidUpCapital',
            onlyIf: () => true,
            message: 'condition.paidUpCapital.mandatory',
            noDisplay: false,
          },
        ],
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
    },
  },
  [legalForms.BRANCH]: {
    [categories.OWNERSHIP]: {
      [types.REPRESENTATIVES]: {
        actions: {
          add: true,
          edit: true,
          delete: true,
        },
        noDisplay: false,
      },
    },
  },
  [legalForms.FOREIGN_BRANCH]: {
    [categories.OWNERSHIP]: {
      [types.REPRESENTATIVES]: {
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

export default economicRules;
