import * as func from './functions';

import customRequires from '../../sharedFunctions/customRequires';

const pageConfig = [
  {
    title: 'Select Licence',
    pageId: 'R3Ao6kbjaGbo0UOutNUNI',
    expanded: true,
    path: '/select-licence',
    template: 'custom',
    layout: 'sidebar',
    props: {
      definitions: [
        {
          componentId: 'wazORLhsQWztoudr46j32',
          type: 'text',
          props: {
            variant: 'h3',
            content: "i18n('selectLicenceTitle')",
            displayAsHtml: false,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'qjrO5xn-xoe-YBGwuDmJr',
          type: 'text',
          props: {
            variant: 'p',
            content: "i18n('selectLicenceDescription')",
            displayAsHtml: false,
            space: {
              marginBottom: 'lg',
            },
            visible: '',
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'i9a465fr2E-sER3mLIcbM',
          type: 'table',
          props: {
            size: 'default',
            selectable: true,
            clickable: false,
            columns: '${state.licenceListColumns}',
            items: '${state.licenceListRows}',
            title: "i18n('selectLicenceTableTitle')",
            isSingleSelect: true,
            space: {
              marginTop: 'md',
            },
            onSelectionChange: func.call_f1_onSelectionChange,
            searchable: true,
            total: '${state.totalLicenceList}',
            currPage: '${state.currentIndexLicenceList}',
            pageSize: '${state.currentPageSize}',
            onSearch: func.call_f2_onSearch,
            onPageResize: func.f3_onPageResize,
            search: '${state.licenceSearch}',
            onClick: func.f4_onClick,
            onPageTurn: func.call_f5_onPageTurn,
            editable: false,
            visible: '',
            filterable: false,
          },
          layout: 'base',
          sharedProps: [
            'i18n',
            'locale',
            'actions',
            'analytics',
            'licenceListRows',
            'actualLicenceList',
            'licenceNumber',
            'licenceSearch',
            'licenceListColumns',
            'totalLicenceList',
            'currentIndexLicenceList',
            'currentPageSize',
            'actions',
          ],
        },
        {
          componentId: 'Wrw9rb3NhrIEmixk9_lch',
          type: 'alert',
          props: {
            status: 'error',
            message: "i18n('errorLicenceNotSelected')",
            onClose: null,
            space: {
              marginBottom: 'sm',
              marginTop: 'md',
            },
            visible: func.f6_visible,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'licenceNoError', 'licenceNumber'],
        },
        {
          componentId: 'o4BErzPdP7zwW96T6aNpG',
          type: 'alert',
          props: {
            status: 'error',
            message: '${state.camundaMessage}',
            onClose: null,
            space: {
              marginBottom: 'md',
              marginTop: 'md',
            },
            visible: func.f7_visible,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'camundaMessage'],
        },
        {
          componentId: '2KRRzrGn5waEacvl7WjYw',
          type: 'flexbox',
          props: {
            flexWrap: true,
            flexDirection: 'initial',
            justifyContent: 'initial',
            alignItems: 'initial',
            alignContent: 'initial',
            space: {
              marginTop: 'lg',
              marginBottom: 'xl',
            },
            classNames: 'button-wrapper',
          },
          layout: 'base',
          children: [
            {
              componentId: 'z6wH36UdObAofAaUveuZ_',
              type: 'button',
              props: {
                label: "i18n('globalNext')",
                type: 'button',
                uiType: 'primary',
                disabled: false,
                'aria-label': "i18n('globalNext')",
                size: 'default',
                icon: null,
                alignIcon: 'end',
                withArrow: true,
                active: false,
                hidden: false,
                iconTooltip: '',
                onClick: func.f8_onClick,
                space: {
                  marginRight: 'md',
                },
                visible: '',
              },
              columnIndex: 1,
              layout: 'base',
              parentComponentId: 'kAAzK8MrdKtX-phVmKE29',
              sharedProps: [
                'i18n',
                'locale',
                'history',
                'actions',
                'bpm',
                'licenceNumber',
                'actions',
              ],
            },
            {
              componentId: '8JUMSCEIQKs0CTOqjpNcC',
              type: 'link',
              props: {
                href: '',
                children: null,
                uiType: 'text',
                disabled: false,
                tammHref: '/www.tamm.abudhabi/',
                className: '',
                label: "i18n('globalCancel')",
                space: {
                  marginTop: 'sm',
                  marginLeft: 'md',
                  marginRight: 'md',
                },
                'aria-label': "i18n('globalCancel')",
                onClick: func.f9_onClick,
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale', 'history'],
            },
          ],
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
    requires: [
      {
        type: 'REQUIRES_LOGIN',
        redirectTo: '/login',
      },
      {
        type: 'REQUIRES_CUSTOM',
        redirectTo: '/login',
        codeId: '1593517133758',
        test: customRequires,
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
        'licenceListRows',
        'actualLicenceList',
        'licenceNumber',
        'licenceSearch',
        'licenceListColumns',
        'totalLicenceList',
        'currentIndexLicenceList',
        'currentPageSize',
        'licenceNoError',
        'camundaMessage',
      ],
      mapDispatch: [
        'showSideBar',
        'currentStepIndex',
        'loading',
        'businessKey',
        'licenceSearch',
        'instanceId',
        'camundaMessage',
        'licenceNoError',
        'licenceNumber',
        'expandedStepIndexes',
        'steps',
        'actualLicenceList',
        'currentPageSize',
        'licenceListRows',
        'currentIndexLicenceList',
        'totalLicenceList',
        'licenceListColumns',
        'licenceNo',
        'pageLoader',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
  },
];

export default pageConfig;
