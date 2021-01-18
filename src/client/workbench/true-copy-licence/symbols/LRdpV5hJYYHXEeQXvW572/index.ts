import * as func from './functions';

const symbolConfig = [
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
          visible: func.f1_visible,
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
          visible: func.f2_visible,
        },
        sharedProps: ['i18n', 'locale', 'showSideBar'],
      },
    ],
  },
];

export default symbolConfig;
