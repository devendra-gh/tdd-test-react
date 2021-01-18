import * as func from './functions';

const symbolConfig = [
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
          visible: func.f2_visible,
        },
        sharedProps: ['i18n', 'locale', 'showSideBar'],
      },
    ],
  },
];

export default symbolConfig;
