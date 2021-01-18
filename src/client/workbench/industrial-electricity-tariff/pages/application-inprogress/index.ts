import * as func from './functions';

const pageConfig = [
  {
    title: 'Application Inprogress',
    pageId: 'F9wv2Q5JRjsMKJFj6slR3',
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
            title: "i18n('AwaitingApproval_PleaseWait')",
            tags: '${state.referenceTags}',
            content: '',
            buttons: [],
            space: {
              marginBottom: 'lg',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'referenceTags'],
        },
        {
          componentId: 'TDZ-gvbLkF2iXz3aN6M_X',
          type: 'highlightLoader',
          props: {
            delay: 0,
            countdown: null,
            description: "i18n('AwaitingApproval_Refresh')",
            space: {
              marginTop: '',
              marginBottom: 'lg',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'knUN-I9HPHmUY0nBaiB01',
          type: 'text',
          props: {
            variant: 'p',
            content: "i18n('ReceiveQuotations_Desc')",
            displayAsHtml: false,
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
      ],
      sharedFunctions: {},
    },
    layout: 'sidebar',
    state: {
      mapState: [
        'user',
        'loggedIn',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'referenceTags',
      ],
      mapDispatch: [
        'steps',
        'currentSubStepIndex',
        'currentStepIndex',
        'expandedStepIndexes',
        'referenceTags',
        'loading',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
    fromProcessState: {
      processName: 'workbench',
      variables: ['submittedOn'],
    },
    requires: null,
  },
];

export default pageConfig;
