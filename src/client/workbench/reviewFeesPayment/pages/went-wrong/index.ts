import * as func from './functions';

const pageConfig = [
  {
    title: 'Went Wrong',
    pageId: 'wUU6kDuBnXFKeYaMiqU1Y',
    expanded: true,
    path: '/application-error',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'XLI-LjnM8rQadhKyfxEQz',
          type: 'notice',
          props: {
            status: 'failure',
            icon: null,
            title: "i18n('somethingWentWrong-title')",
            tags: [],
            content: "i18n('somethingWentWrong-description')",
            buttons: [],
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'SrX0R6kO05N9UjiLZfiej',
          type: 'alert',
          props: {
            status: 'error',
            message: '${state.camundaMessage}',
            onClose: null,
            space: {
              marginTop: 'md',
              marginBottom: 'md',
            },
            visible: func.f1_visible,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'camundaMessage'],
        },
        {
          componentId: 'ExU0bOuP8d7Ij9NqWLXHs',
          type: 'flexbox',
          props: {
            flexWrap: true,
            flexDirection: 'initial',
            justifyContent: 'initial',
            alignItems: 'initial',
            alignContent: 'initial',
            space: {
              marginTop: 'lg',
            },
          },
          layout: 'base',
          children: [
            {
              componentId: 'G2jndaFkagCpfmkY2SIvR',
              type: 'button',
              props: {
                locale: 'en',
                label: "i18n('global-back')",
                type: 'button',
                uiType: 'secondary',
                disabled: false,
                'aria-label': 'button',
                size: 'default',
                icon: null,
                alignIcon: 'start',
                withArrow: true,
                active: false,
                hidden: false,
                iconTooltip: '',
                applyAutoWidth: false,
                onClick: func.f2_onClick,
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
            },
          ],
        },
      ],
      symbols: [
        {
          id: 'XPuuzzSsc1PM7KGrp2LDX',
          name: 'Sidebar',
          definitions: [
            {
              componentId: '_7l1ujJnaZewdBciJZUoA',
              type: 'stepTracker',
              props: {
                title: "i18n('process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: '{"code":" return props.state.showSideBar;"}',
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'showSideBar',
                'steps',
                'expandedStepIndexes',
                'currentStepIndex',
                'currentSubStepIndex',
              ],
            },
            {
              columnIndex: 0,
              componentId: 'LlS0jKn4mVvWHElTc4DVL',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: "i18n('relevant_entity')",
                entities: [
                  {
                    logo:
                      'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                    address: "i18n('address')",
                    phones: [],
                    website: 'www.adeconomy.ae',
                    email: 'email@domain.com',
                  },
                ],
                closedAll: false,
                space: {
                  marginTop: 'xl',
                  marginBottom: 'xl',
                },
                visible: '{"code":"  return props.state.showSideBar;"}',
              },
              sharedProps: ['i18n', 'locale', 'showSideBar'],
            },
          ],
        },
        {
          id: 'zUb_2ox3pxzJj2-JHqAh1',
          name: 'Header',
          definitions: [
            {
              componentId: '_0JdDeDuJ9aLzLvOyksSX',
              type: 'flexbox',
              props: {
                flexWrap: true,
                flexDirection: 'column',
                justifyContent: 'initial',
                alignItems: 'initial',
                alignContent: 'initial',
                classNames: 'container',
              },
              layout: 'base',
              children: [
                {
                  componentId: 'QRUGlUhHpBbWipDuiJI1l',
                  type: 'breadcrumb',
                  props: {
                    space: {
                      marginBottom: 'md',
                      marginTop: 'lg',
                    },
                    items: [
                      {
                        id: 'kdmsxtik',
                        label: "i18n('bc_home')",
                        linkTarget: '_self',
                        link: '/',
                      },
                      {
                        id: 'kdmsyjm9',
                        label: "i18n('bc_digitalServices')",
                        link: 'https://www.tamm.abudhabi/tamm-centers-services',
                        linkTarget: '_self',
                      },
                      {
                        id: 'kdmszcbw',
                        label: "i18n('bc_DED')",
                        link:
                          'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                        linkTarget: '_self',
                      },
                    ],
                  },
                  parentComponentId: 'no_parent',
                  sharedProps: ['i18n', 'locale'],
                },
                {
                  componentId: '68aenTCGP0X-L3br5r-li',
                  type: 'text',
                  props: {
                    variant: 'h1',
                    content: "i18n('serviceCard-desc')",
                    displayAsHtml: false,
                  },
                  layout: 'base',
                  parentComponentId: 'no_parent',
                  sharedProps: ['i18n', 'locale'],
                },
              ],
            },
          ],
        },
      ],
      sharedFunctions: {},
    },
    layout: 'sidebar',
    templateId: '250',
    templateName: 'Apporval page',
    customPath: true,
    requires: [
      {
        type: 'REQUIRES_LOGIN',
        redirectTo: '/login',
      },
    ],
    state: {
      mapState: [
        'user',
        'loggedIn',
        'showSideBar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'camundaMessage',
      ],
      mapDispatch: ['camundaMessage', 'showSideBar', 'loading'],
    },
    init: func.init,
  },
];

export default pageConfig;
