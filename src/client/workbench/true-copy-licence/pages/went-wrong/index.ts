import * as func from './functions';

const pageConfig = [
  {
    title: 'Went Wrong',
    pageId: 'mU_EyZTBvnwmb8gp75S1v',
    path: '/application-error',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'dG0c57seTBNOhDpRq86L1',
          type: 'notice',
          props: {
            status: 'failure',
            icon: null,
            title: "i18n('somethingWentWrongTitle')",
            tags: [],
            content: "i18n('somethingWentWrongDescription')",
            buttons: [],
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'f5mXmKzBo-kP28AeeLnVo',
          type: 'alert',
          props: {
            status: 'error',
            message: '${state.camundaMessage}',
            onClose: null,
            space: {
              marginBottom: 'md',
              marginTop: 'md',
            },
            visible: func.f1_visible,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'camundaMessage'],
        },
        {
          componentId: 'Kq2G-y2rSnYV2AzQHEmKh',
          type: 'button',
          props: {
            locale: 'en',
            label: "i18n('globalBack')",
            type: 'button',
            uiType: 'secondary',
            disabled: false,
            'aria-label': "i18n('globalBack')",
            size: 'default',
            icon: null,
            alignIcon: 'start',
            withArrow: true,
            active: false,
            hidden: false,
            iconTooltip: '',
            applyAutoWidth: false,
            space: {
              marginTop: 'xl',
              marginBottom: 'xl',
            },
            onClick: func.f2_onClick,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'history'],
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
              componentId: 'ZubPbXDHOtVDemU26pYRi',
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
                  componentId: '7vJvGWTue3wJJTCS3mfAX',
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
                  componentId: '4wTDq9dCLSvn6yueeb1LJ',
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
    customPath: true,
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
    onPageInit: func.onPageInit,
    fromProcessState: {
      processName: 'workbench',
      variables: ['getFeesDetail'],
    },
  },
];

export default pageConfig;
