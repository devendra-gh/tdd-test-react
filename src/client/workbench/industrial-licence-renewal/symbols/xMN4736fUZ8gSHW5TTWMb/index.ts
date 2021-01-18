const symbolConfig = [
  {
    id: 'xMN4736fUZ8gSHW5TTWMb',
    name: 'AutoSaved',
    definitions: [
      {
        componentId: 'Ri1CtARrVz3nuJc_XbMMd',
        type: 'dataLoader',
        props: {
          i18n: '',
          status: '${state.autoSaveStatus}',
          icon: null,
          message: '',
          space: {
            marginTop: 'sm',
            marginRight: 'sm',
          },
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale', 'autoSaveStatus'],
      },
    ],
  },
];

export default symbolConfig;
