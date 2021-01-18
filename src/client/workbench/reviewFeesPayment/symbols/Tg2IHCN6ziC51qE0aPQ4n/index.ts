import * as func from './functions';

const symbolConfig = [
  {
    id: 'Tg2IHCN6ziC51qE0aPQ4n',
    name: 'Application Details',
    definitions: [
      {
        componentId: 'LhJwRzgLi4aDXM62GnjV_',
        type: 'checkbox',
        props: {
          name: '',
          id: '',
          tabIndex: 0,
          autoFocus: false,
          readOnly: false,
          label: "i18n('applicantDetails-checkboxContact')",
          disabled: false,
          uiType: '',
          description: '',
          validateStatus: '',
          meta: '',
          onClick: func.f1_onClick,
          onChange: func.call_f2_onChange,
          visible: '',
          checked: '${state.contactDetailsFlag}',
          space: {
            marginBottom: 'lg',
          },
        },
        layout: 'base',
        sharedProps: [
          'i18n',
          'locale',
          'actions',
          'contactDetailsFlag',
          'user',
          'actions',
        ],
      },
      {
        componentId: 'KDgS-N1IF9731nMY_wf0b',
        type: 'grid',
        props: {
          columns: 2,
          flexColumns: {
            xl: 2,
            lg: 2,
            md: 2,
            sm: 1,
          },
        },
        layout: 'base',
        children: [
          {
            componentId: '-F5Om4UcgMI1FACOCanHJ',
            type: 'input',
            props: {
              label: "i18n('applicantDetails-nameField')",
              value: '${state.contactName}',
              defaultValue: '${state.contactName}',
              'aria-label': 'input',
              validateStatus: '${state.validateStatus_contact_name}',
              disabled: '${state.contactDetailsFlag}',
              readonly: false,
              help: '${state.help_contact_name}',
              placeholder: '',
              size: 'default',
              textDirection: 'ltr',
              name: '',
              type: 'text',
              tabIndex: 0,
              space: {
                marginBottom: 'lg',
                marginTop: '',
              },
              onChange: func.call_f3_onChange,
              visible: '',
            },
            layout: 'base',
            columnIndex: 0,
            sharedProps: [
              'i18n',
              'locale',
              'actions',
              'contactDetailsFlag',
              'contactName',
              'validateStatus_contact_name',
              'help_contact_name',
              'actions',
            ],
          },
          {
            componentId: 'mogeKqZmJSl3N4RYC2bXo',
            type: 'inputTelephone',
            props: {
              i18n: '',
              help: '${state.help_phone_no}',
              validateStatus: '${state.validateStatus_phone}',
              label: "i18n('applicantDetails-numberField')",
              'aria-label': 'Telephone input',
              disabled: '${state.contactDetailsFlag}',
              value: '${state.contactNumber}',
              code: null,
              countries: [],
              size: 'default',
              defaultValue: {},
              tabIndex: 0,
              space: {
                marginBottom: 'lg',
              },
              onSelect: func.call_f4_onSelect,
              visible: '',
            },
            layout: 'base',
            columnIndex: 1,
            sharedProps: [
              'i18n',
              'locale',
              'actions',
              'help_phone_no',
              'validateStatus_phone',
              'contactDetailsFlag',
              'contactNumber',
              'actions',
            ],
          },
          {
            componentId: 'b11gY1VfcmzxGoY4odcko',
            type: 'input',
            props: {
              label: "i18n('applicantDetails-emailField')",
              tabIndex: 0,
              value: '${state.contactEmail}',
              defaultValue: '${state.contactEmail}',
              'aria-label': 'input',
              validateStatus: '${state.validateStatus_email}',
              disabled: '${state.contactDetailsFlag}',
              readonly: false,
              help: '${state.help_email}',
              placeholder: '',
              size: 'default',
              textDirection: 'ltr',
              name: '',
              type: 'text',
              onChange: func.call_f5_onChange,
              space: {
                marginTop: '',
                marginBottom: 'lg',
              },
              visible: '',
            },
            layout: 'base',
            columnIndex: 0,
            sharedProps: [
              'i18n',
              'locale',
              'actions',
              'contactEmail',
              'validateStatus_email',
              'contactDetailsFlag',
              'help_email',
              'actions',
            ],
          },
        ],
      },
      {
        componentId: 'l1vTlmYUaaGmRDTA2K8ob',
        type: 'alert',
        props: {
          status: 'error',
          message: '${state.camundaMessage}',
          onClose: null,
          space: {
            marginTop: 'sm',
            marginBottom: 'md',
          },
          visible: func.f6_visible,
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale', 'camundaMessage'],
      },
    ],
  },
];

export default symbolConfig;
