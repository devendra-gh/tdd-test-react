import * as func from './functions';

const pageConfig = [
  {
    title: 'Continue process',
    pageId: '0hQBCe0dQJz6JtvjWMeqO',
    path: '/continue-process',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'OLzx1j8q7dZIpKB73HiqM',
          type: 'notice',
          props: {
            status: 'inProgress',
            icon: null,
            title: "i18n('continueProcessTitle')",
            content: "i18n('continueProcessDescription')",
            buttons: [],
            classNames: '',
            space: {
              marginBottom: 'lg',
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
      ],
      mapDispatch: [
        'showSideBar',
        'loading',
        'businessKey',
        'instanceId',
        'licenceNumber',
      ],
    },
    init: func.init,
  },
];

export default pageConfig;
