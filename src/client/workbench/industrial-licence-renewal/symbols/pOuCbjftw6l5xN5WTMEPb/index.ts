import * as func from './functions';

const symbolConfig = [
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
          visible: func.f1_visible,
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
];

export default symbolConfig;
