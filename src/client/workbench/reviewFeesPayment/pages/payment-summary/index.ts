import * as func from './functions';

const pageConfig = [
  {
    title: 'Payment Summary',
    pageId: 'JdVSmaUb6NP-3yLnnDLVZ',
    expanded: true,
    path: '/payment-summary',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'VvUXLlTUjNLLGlG-s1IcB',
          type: 'notice',
          props: {
            status: 'success',
            icon: null,
            title: "i18n('paymentSummary-title')",
            tags: '${state.paymentTag}',
            content: "i18n('paymentSummary-description')",
            buttons: [],
            classNames: '',
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'paymentTag'],
        },
        {
          componentId: 'ZTbzkuODj6yGSQwb-jM6o',
          type: 'table',
          props: {
            size: 'default',
            selectable: false,
            clickable: true,
            columns: '${state.payment_table_columns}',
            items: '${state.payment_table_rows}',
            title: "i18n('paymentSummary-tabletitle')",
            space: {
              marginTop: 'xl',
              marginBottom: 'md',
            },
          },
          layout: 'base',
          sharedProps: [
            'i18n',
            'locale',
            'payment_table_columns',
            'payment_table_rows',
          ],
        },
        {
          componentId: 'bUYXbbzOv6QWuonl6xj4c',
          type: 'total',
          props: {
            unit: "i18n('aed')",
            isValueFirst: false,
            isButtonVisible: false,
            onClick: 'nop()',
            buttonDisabled: false,
            value: '${state.paymentTotal}',
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'paymentTotal'],
        },
        {
          componentId: 'lKhRcls_MP8qppJB5nhY1',
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
          componentId: 'loHeuFEWG2L4_YXHspaQ0',
          type: 'button',
          props: {
            locale: 'en',
            label: "i18n('paymentSummary-paybutton')",
            type: 'button',
            uiType: 'primary',
            disabled: false,
            'aria-label': 'button',
            size: 'default',
            icon: null,
            alignIcon: 'end',
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
          sharedProps: [
            'i18n',
            'locale',
            'actions',
            'bpm',
            'analytics',
            'businessKey',
            'paymentTotal',
            'paymentURL',
            'actions',
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
    templateId: '249',
    templateName: 'Payment Summary',
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
        'businessKey',
        'instanceId',
        'showSideBar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'paymentTag',
        'payment_table_columns',
        'payment_table_rows',
        'paymentTotal',
        'camundaMessage',
        'paymentURL',
      ],
      mapDispatch: [
        'showSideBar',
        'loading',
        'currentStepIndex',
        'currentSubStepIndex',
        'expandedStepIndexes',
        'camundaMessage',
        'steps',
        'paymentTag',
        'payment_table_rows',
        'paymentTotal',
        'paymentURL',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
    fromProcessState: {
      processName: 'workbench',
      variables: [
        'apTransactionNumber',
        'submitDate',
        'paymentLink',
        'feeDetails',
      ],
    },
  },
];

export default pageConfig;
