import * as func from './functions';

const pageConfig = [
  {
    title: 'Account Upgrade',
    pageId: '95VSDg6VGOaf9nwQHWynd',
    path: '/account-upgrade',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'yWz--wgeri78T0D4Q5v5i',
          type: 'text',
          props: {
            variant: 'h3',
            content: "i18n('accountUpgradeRequired')",
            displayAsHtml: false,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'ExCIQS4OGmnB5A6q5Vtpt',
          type: 'icon',
          props: {
            className: '${state.alertTriangle}',
            source: null,
            'data-key': '',
            tooltip: '',
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'alertTriangle'],
        },
        {
          componentId: 'x8ewjEWU0D4B-kqeFQRmH',
          type: 'text',
          props: {
            variant: 'p',
            content: "i18n('accountUpgradeDes')",
            displayAsHtml: false,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: '2N9kiA5P-W77SGzp8Cpsd',
          type: 'flexbox',
          props: {
            flexWrap: true,
            flexDirection: 'initial',
            justifyContent: 'initial',
            alignItems: 'initial',
            alignContent: 'initial',
          },
          layout: 'base',
          children: [
            {
              componentId: 'JOZ045bCz4pz2IKd4rMoN',
              type: 'button',
              props: {
                locale: 'en',
                label: "i18n('upgradeYourAccount')",
                type: 'button',
                uiType: 'secondary',
                disabled: false,
                'aria-label': 'button',
                size: 'default',
                icon: null,
                alignIcon: 'end',
                withArrow: false,
                active: false,
                hidden: false,
                iconTooltip: '',
                applyAutoWidth: false,
                space: {
                  marginTop: 'md',
                },
                onClick: func.f1_onClick,
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
        'alertTriangle',
      ],
      mapDispatch: ['loading'],
    },
    init: func.init,
  },
];

export default pageConfig;
