import * as func from './functions';

const symbolConfig = [
  {
    id: '8LINI-LpO_wRsPTAq3_86',
    name: 'privacy waiver',
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
          label: "i18n('UploadDocuments_Disclaimer')",
          indeterminate: false,
          disabled: false,
          uiType: '',
          description: '',
          validateStatus: '',
          meta: '',
          onFocus: func.f1_onFocus,
          onClick: func.f2_onClick,
          onChange: func.call_f3_onChange,
          checked: '${state.isPrivacyWaiverChecked}',
        },
        layout: 'base',
        sharedProps: [
          'i18n',
          'locale',
          'actions',
          'isPrivacyWaiverChecked',
          'fileUploads',
          'actions',
        ],
      },
    ],
  },
];

export default symbolConfig;
