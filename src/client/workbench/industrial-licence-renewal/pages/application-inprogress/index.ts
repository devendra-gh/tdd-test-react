import * as func from './functions';

const pageConfig = [
  {
    title: 'Application Inprogress',
    pageId: 'DrqBAoaik8gPp-BZ_DyZE',
    expanded: true,
    path: '/application-inprogress',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'XZAUjDzuXLNEuLSmSmAU3',
          type: 'notice',
          props: {
            status: 'inProgress',
            icon: null,
            title: "i18n('AwaitingApproval_ApprovalTitle')",
            tags: '${state.individualIssuedTags}',
            content: "i18n('AwaitingApproval_SubmittedMessage')",
            buttons: [],
            space: {
              marginBottom: 'lg',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'individualIssuedTags'],
        },
      ],
      symbols: [
        {
          id: 'u_7BA0xr8Q0oku7QtzxvE',
          name: 'Header',
          definitions: [
            {
              componentId: '0nSNUzm6NEjCkToaBdmCl',
              type: 'alert',
              props: {
                status: '',
                message: '',
                onClose: null,
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
            },
            {
              componentId: 'Y78zMYB80jxbXDw2WuI6o',
              type: 'flexbox',
              props: {
                flexWrap: true,
                flexDirection: 'column-reverse',
                justifyContent: 'initial',
                alignItems: 'initial',
                alignContent: 'initial',
                classNames: 'container',
                space: {
                  marginBottom: '',
                  paddingBottom: '',
                },
              },
              layout: 'base',
              children: [
                {
                  componentId: 'uQukKScRci0q9DWO9b324',
                  parentComponentId: 'Y78zMYB80jxbXDw2WuI6o',
                  type: 'text',
                  props: {
                    variant: 'h1',
                    content: "i18n('Global_ServiceName')",
                    displayAsHtml: false,
                    space: {
                      paddingBottom: 'md',
                      marginTop: 'md',
                    },
                  },
                  layout: 'base',
                  sharedProps: ['i18n', 'locale'],
                },
                {
                  componentId: 'iyAIP8maLEkaZwI2t7dUy',
                  type: 'breadcrumb',
                  props: {
                    items: [
                      {
                        label: "i18n('bcrumbsHome')",
                        link: 'https://www.tamm.abudhabi/',
                        linkTarget: '',
                        id: 'kbzqdrrl',
                      },
                      {
                        label: "i18n('bcrumbsBusinessInAbuDhabi')",
                        link: '',
                        linkTarget: '',
                        id: 'kbzqe5hx',
                      },
                      {
                        label: "i18n('bcrumbsRegisterYourBusiness')",
                        link: '',
                        linkTarget: '',
                        id: 'kbzqeewv',
                      },
                      {
                        label: "i18n('bcrumbsIndustrialLicences')",
                        link: '',
                        linkTarget: '',
                        id: 'kbzqel7d',
                      },
                    ],
                  },
                  layout: 'base',
                  sharedProps: ['i18n', 'locale'],
                },
              ],
            },
          ],
        },
        {
          id: 'pOuCbjftw6l5xN5WTMEPb',
          name: 'Sidebar_without_card',
          definitions: [
            {
              componentId: 'yeIBuc-dVj7toDnj_7R81',
              type: 'stepTracker',
              props: {
                title: "i18n('ServicePage_Process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: '{"code":"  return props.state.showSidebar;"}',
                classNames: '',
              },
              sharedProps: [
                'i18n',
                'locale',
                'showSidebar',
                'steps',
                'expandedStepIndexes',
                'currentStepIndex',
                'currentSubStepIndex',
              ],
            },
            {
              columnIndex: 0,
              componentId: '2eXUqMf3xlTH9Dity7T6_',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: "i18n('Relevant_entity')",
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
                closedAll: true,
                space: {
                  marginTop: 'xl',
                  paddingBottom: 'lg',
                },
              },
              sharedProps: ['i18n', 'locale'],
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
        'newLeaseContractFiles',
        'civilDefenceCertificateFiles',
        'adEnvironmentPermitFiles',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'individualIssuedTags',
      ],
      mapDispatch: [
        'showSidebar',
        'currentStepIndex',
        'currentSubStepIndex',
        'expandedStepIndexes',
        'steps',
        'loading',
        'individualIssuedTags',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
    fromProcessState: {
      processName: 'workbench',
      variables: [
        'submitDate',
        'renewalNumber',
        'capId',
        'apTransactionNumber',
      ],
    },
  },
];

export default pageConfig;
