import * as func from './functions';

const pageConfig = [
  {
    title: 'Licence Issued',
    pageId: 'f-qgdo64g7hrcTkL0_Qd8',
    expanded: true,
    path: '/licence-issued',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'XZAUjDzuXLNEuLSmSmAU3',
          type: 'notice',
          props: {
            status: 'success',
            icon: null,
            title: "i18n('CertificateIssued_Issued')",
            tags: '${state.paymentTableRows}',
            content: "i18n('CertificateIssued_Desc')",
            buttons: [
              {
                label: "i18n('CertificateIssued_DownloadCertificate')",
                type: 'button',
                uiType: 'primary',
                onClick: func.call_f1_buttons_onClick,
                disabled: '',
                'aria-label': '',
                link: '',
                target: '',
                icon: '',
                alignIcon: 'last',
                withArrow: false,
                id: 'kc0drvb4',
              },
              {
                label: "i18n('CertificateIssued_VisitDashboard')",
                type: 'button',
                uiType: 'secondary',
                onClick: func.f2_buttons_onClick,
                disabled: '',
                'aria-label': '',
                link: '',
                target: '',
                icon: '',
                alignIcon: '',
                withArrow: '',
                id: 'kc0drx6v',
              },
            ],
            space: {
              marginBottom: 'xl',
            },
          },
          layout: 'base',
          sharedProps: [
            'i18n',
            'locale',
            'actions',
            'bpm',
            'paymentTableRows',
            'actions',
          ],
        },
        {
          componentId: 'GOTM6JCp6CeYHwW19z6G_',
          type: 'customerSatisfaction',
          props: {
            i18n: '',
            status: 'idle',
            emotion: '',
            onSubmit: '',
            rates: [
              {
                value: '',
                starsCount: 3,
                min: '',
                max: '',
                step: '',
                id: 'kbu0xo8l',
              },
            ],
            withComment: false,
            space: {
              marginBottom: 'xl',
              marginTop: '',
              paddingTop: '',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: '0nuwmZD0GPzPhwEBHaN-T',
          type: 'symbol',
          props: {
            symbol: '5xF4WpaHijH9pKvymPV0O',
            space: {
              marginBottom: 'xl',
              marginTop: '',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
      ],
      symbols: [
        {
          id: 'eauqjPZrppIH9ngzoQH_1',
          name: 'hero',
          definitions: [
            {
              componentId: 'L0vGbvPcFSBE2WAv2Fh7e',
              type: 'hero',
              props: {
                backgroundImage:
                  'https://journeys-stg.tamm.abudhabi/journeys/journey-template/images/hero.jpg',
                backgroundBase64Extension: '',
                internal: true,
                aspectOfLifeType: '',
                breadcrumbs: [
                  {
                    label: "i18n('bc_home')",
                    link: '/',
                  },
                  {
                    id: 'kd4lrtqy',
                    label: "i18n('bc_businessInAbuDhabi')",
                  },
                  {
                    id: 'kd4ltcaj',
                    label: "i18n('bc_registerYourBusiness')",
                  },
                  {
                    id: 'kd4ltg37',
                    label: "i18n('bc_industrialLicences')",
                  },
                ],
                subTitle: '',
                title: "i18n('Global_Title')",
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
            },
          ],
        },
        {
          id: 'Tvqi6M5rKJu4JAS3soD9-',
          name: 'Sidebar',
          definitions: [
            {
              componentId: 'yELNRmPQ0-BAvQuT6M0L2',
              type: 'stepTracker',
              props: {
                title: "i18n('ServiceCard_Process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: '{"code":"  return props.state.showSidebar;"}',
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
              componentId: 'EGdDKE5QVU6ElyGm7BnMR',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: 'Relevant entity',
                entities: [
                  {
                    logo:
                      'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                    address:
                      'Baniyas Towers, Al Falah Street - Fatima bint Mubarak St 6, Abu Dhabi',
                    phones: [],
                    website: 'www.adeconomy.ae',
                    email: 'email@domain.com',
                  },
                ],
                closedAll: false,
                space: {
                  marginTop: 'xl',
                },
                visible: '{"code":"  return props.state.showSidebar;"}',
              },
              sharedProps: ['i18n', 'locale', 'showSidebar'],
            },
            {
              columnIndex: 0,
              componentId: 'da0TyuQFwqVVGZjOAC_LI',
              type: 'relatedJourneyCard',
              props: {
                aspectOfLifeType: 'business-management',
                icon: null,
                description:
                  'The Manage Your Business journey contains a consolidated dashboard for business owners and representatives to view and...',
                label: 'Manage your business',
                title: 'Related journey',
                space: {
                  marginTop: 'lg',
                },
                visible: '{"code":"  return props.state.showSidebar;"}',
              },
              sharedProps: ['i18n', 'locale', 'showSidebar'],
            },
          ],
        },
        {
          id: '5xF4WpaHijH9pKvymPV0O',
          name: 'related services',
          definitions: [
            {
              componentId: 'zDtCQt-yJFVLM7IqVQ1ui',
              type: 'text',
              props: {
                variant: 'h3',
                content: "i18n('licenceStatus_nextStep_title')",
                displayAsHtml: false,
                classNames: '',
                space: {
                  marginTop: '',
                },
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
            },
            {
              componentId: 'QGFgJDKE2a0bm8t4Vpwyz',
              type: 'text',
              props: {
                variant: 'p',
                content: "i18n('licenceStatus_nextStep_description')",
                displayAsHtml: false,
                space: {
                  marginBottom: 'lg',
                },
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
            },
            {
              componentId: 'YzdjnWxXVA-7YTh5K5FGB',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 2,
                  sm: 1,
                },
                space: {
                  marginBottom: '',
                  marginTop: '',
                },
              },
              layout: 'base',
              children: [
                {
                  componentId: 'u1NTpFtiJqBbl4LAgVxVi',
                  type: 'list',
                  props: {
                    i18n: '',
                    title: '',
                    items: [
                      {
                        id: 'kc076fsm',
                        label: "i18n('relatedServices_1')",
                        description: '',
                        link: '',
                        linkTarget: '_parent',
                      },
                      {
                        id: 'kc078fhp',
                        label: "i18n('relatedServices_2')",
                        description: '',
                        link: '',
                        linkTarget: '',
                      },
                      {
                        id: 'kc09mlzw',
                        label: "i18n('relatedServices_3')",
                        description: '',
                        link: '',
                        linkTarget: '',
                      },
                      {
                        id: 'kc09mwa7',
                        label: "i18n('relatedServices_4')",
                        description: '',
                        link: '',
                        linkTarget: '',
                      },
                    ],
                    withArrow: true,
                    withBoldContent: true,
                    expanded: false,
                    allowedNotExpandedLimit: 5,
                    showMoreLabels: [],
                    applyStrictWidth: false,
                    uiType: 'link',
                    onClick: {
                      type: 'func',
                      actions: [],
                    },
                  },
                  layout: 'base',
                  columnIndex: 0,
                  sharedProps: ['i18n', 'locale'],
                },
                {
                  componentId: 'dmhKy19jE-Gy9svl1a-Ko',
                  type: 'list',
                  props: {
                    i18n: '',
                    title: '',
                    items: [
                      {
                        id: 'kc076fsm',
                        label: "i18n('relatedServices_5')",
                        description: '',
                        link: '',
                        linkTarget: '_parent',
                      },
                      {
                        id: 'kc078fhp',
                        label: "i18n('relatedServices_6')",
                        description: '',
                        link: '',
                        linkTarget: '',
                      },
                      {
                        id: 'kc09nhi3',
                        label: "i18n('relatedServices_7')",
                        description: '',
                        link: '',
                        linkTarget: '',
                      },
                      {
                        id: 'kc09nnms',
                        label: "i18n('relatedServices_8')",
                        description: '',
                        link: '',
                        linkTarget: '',
                      },
                    ],
                    withArrow: true,
                    withBoldContent: true,
                    expanded: false,
                    allowedNotExpandedLimit: 5,
                    showMoreLabels: [],
                    applyStrictWidth: false,
                    uiType: 'link',
                    onClick: {
                      type: 'func',
                      actions: [],
                    },
                  },
                  layout: 'base',
                  columnIndex: 1,
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
        'emailSent',
        'instanceId',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'paymentTableRows',
      ],
      mapDispatch: [
        'steps',
        'currentStepIndex',
        'currentSubStepIndex',
        'loading',
        'emailSent',
      ],
    },
    init: func.init,
    fromProcessState: {
      processName: 'workbench',
      variables: ['instanceId', 'businessKey'],
    },
  },
];

export default pageConfig;
