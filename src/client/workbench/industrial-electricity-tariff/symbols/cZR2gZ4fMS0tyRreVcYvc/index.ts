import * as func from './functions';

const symbolConfig = [
  {
    id: 'cZR2gZ4fMS0tyRreVcYvc',
    name: 'contact checkbox',
    definitions: [
      {
        componentId: 'I18kYbjtfniIvlcgz3Nt1',
        type: 'checkbox',
        props: {
          name: '',
          id: '',
          tabIndex: 1,
          autoFocus: false,
          readOnly: false,
          label: "i18n('SelectLicence_ContactPerson')",
          disabled: false,
          uiType: '',
          description: '',
          validateStatus: '',
          meta: '',
          space: {
            marginBottom: '',
            marginTop: '',
            paddingTop: '',
          },
          onClick: func.call_f1_onClick,
          onChange: func.f2_onChange,
          checked: '${state.isContact}',
        },
        layout: 'base',
        sharedProps: [
          'i18n',
          'locale',
          'actions',
          'isContact',
          'contactForm',
          'actions',
        ],
      },
    ],
  },
];

export default symbolConfig;
