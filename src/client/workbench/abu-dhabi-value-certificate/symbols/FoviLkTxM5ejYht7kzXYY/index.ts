import * as func from './functions';

const symbolConfig = [
  {
    id: 'FoviLkTxM5ejYht7kzXYY',
    name: 'undertaking',
    definitions: [
      {
        componentId: 'AQd1lZuSYiERMsl3ahxLv',
        type: 'checkbox',
        props: {
          name: '',
          id: '',
          tabIndex: 0,
          autoFocus: true,
          readOnly: false,
          label: "i18n('SelectLicence_Disclaimer')",
          indeterminate: false,
          disabled: false,
          uiType: '',
          description: '',
          validateStatus: '',
          meta: '',
          onFocus: func.f1_onFocus,
          onClick: func.f2_onClick,
          onChange: func.call_f3_onChange,
          checked: '${state.isUndertakingChecked}',
          space: {
            marginTop: 'xl',
            paddingTop: '',
            marginBottom: '',
          },
        },
        layout: 'base',
        sharedProps: [
          'i18n',
          'locale',
          'actions',
          'isUndertakingChecked',
          'actions',
        ],
      },
    ],
  },
];

export default symbolConfig;
