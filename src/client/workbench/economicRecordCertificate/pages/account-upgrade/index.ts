import * as func from './functions';

const pageConfig = [
  {
    title: 'Account upgrade',
    pageId: 'CZIZxvMaAV7Tg-CRw7IIO',
    path: '/account-upgrade',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'w_cMq1yWzEkUJKvmW6RPE',
          type: 'text',
          props: {
            variant: 'h3',
            content: "i18n('accountUpgrade')",
            displayAsHtml: false,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'JF0ZWI4cpr5kNjW6-WAMZ',
          type: 'icon',
          props: {
            className: ' ui-lib-icon',
            source: 'AlertTriangle',
            'data-key': '',
            tooltip: '',
            classNames: ' ui-lib-icon',
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'K4X1fICefb_w7hcelKZ0j',
          type: 'text',
          props: {
            variant: 'p',
            content: "i18n('accoundUpgradeDescription')",
            displayAsHtml: false,
            space: {
              marginBottom: 'lg',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'xQ2cE5B0NA02mIlhtBkfC',
          type: 'button',
          props: {
            locale: 'en',
            label: "i18n('upgradeAccount')",
            type: 'button',
            uiType: 'primary',
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
            onClick: func.f1_onClick,
            space: {
              marginBottom: 'xl',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
      ],
      symbols: [
        {
          id: 'LRdpV5hJYYHXEeQXvW572',
          name: 'Sidebar',
          definitions: [
            {
              componentId: 'x02R_vTEPQV7EuW80B8-y',
              type: 'stepTracker',
              props: {
                title: "i18n('process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: '{"code":"  return props.state.showSideBar;"}',
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
              componentId: 'bx_ewe29IC5HCtaVmJhKJ',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: "i18n('relevantEntity')",
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
          id: 'SpZNRSS1hcBXpPT30yok2',
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
                  componentId: 'NsDev2OWYPDn7ZqbM1-Na',
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
                    content: "i18n('serviceCardServicename')",
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
      ],
      mapDispatch: ['showSideBar', 'loading'],
    },
    init: func.init,
  },
];

export default pageConfig;
