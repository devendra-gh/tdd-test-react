import * as func from './functions';

const pageConfig = [
  {
    title: 'Login',
    pageId: '1vUQfbmDrDx9kb_CDVqjm',
    expanded: true,
    path: '/login',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'LhCD9_RpUj9GtokIILohE',
          type: 'text',
          props: {
            variant: 'h5',
            content: "<p>i18n('pleaseLogIn')</p>\n",
            displayAsHtml: true,
            space: {
              marginBottom: 'md',
            },
          },
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'sgYt4LbrltEI96hHwN0CJ',
          type: 'loginRequired',
          props: {
            i18n: '',
            smartPassProps: {
              link:
                'https://journeys-stg.tamm.abudhabi/journeys/journey-template/api/smartpass/login',
              linkTarget: '_self',
            },
            uaePassProps: {
              link: '${state.uaePassURL}',
            },
            space: {
              marginBottom: 'xl',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'uaePassURL'],
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
        'uaePassURL',
      ],
      mapDispatch: ['showSidebar', 'smartPassURL', 'uaePassURL'],
    },
    init: func.init,
    requires: null,
  },
];

export default pageConfig;
