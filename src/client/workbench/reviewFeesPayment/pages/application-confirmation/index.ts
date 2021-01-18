import * as func from './functions';

const pageConfig = [
  {
    title: 'Application Confirmation',
    pageId: 'gDFXOYn71Qpgd_UEr8Ydo',
    expanded: true,
    path: '/application-waiting',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'anrDnJgYi3NcsWGAP5cOj',
          type: 'notice',
          props: {
            status: 'inProgress',
            icon: null,
            title: "i18n('waitingApproval-title')",
            tags: [],
            content: '',
            buttons: [],
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'lCOyUsGfuKo04O0Rbxqfc',
          type: 'highlightLoader',
          props: {
            delay: 0,
            countdown: null,
            description: "i18n('waitingApprovalWaitingMessage')",
            space: {
              marginBottom: 'md',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'd3HZW1fqFDwpvFMDO6UO_',
          type: 'text',
          props: {
            variant: 'p',
            content: '${state.waitingApprovalDescription}',
            displayAsHtml: true,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'waitingApprovalDescription'],
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
    requires: [
      {
        type: 'REQUIRES_LOGIN',
        redirectTo: '/login',
      },
    ],
    customPath: true,
    fetchStateVariables: '',
    state: {
      mapState: [
        'user',
        'loggedIn',
        'businessKey',
        'instanceId',
        'showSideBar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'waitingApprovalDescription',
      ],
      mapDispatch: [
        'showSideBar',
        'loading',
        'currentStepIndex',
        'currentSubStepIndex',
        'expandedStepIndexes',
        'steps',
        'waitingApprovalDescription',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
  },
];

export default pageConfig;
