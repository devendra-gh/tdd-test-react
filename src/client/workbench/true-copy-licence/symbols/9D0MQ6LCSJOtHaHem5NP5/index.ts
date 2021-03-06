import * as func from './functions';

const symbolConfig = [
  {
    id: '9D0MQ6LCSJOtHaHem5NP5',
    name: 'Application Details',
    definitions: [
      {
        componentId: 'x8NzMMR4useFQBHrXKDV0',
        type: 'checkbox',
        props: {
          name: '',
          id: '',
          tabIndex: 0,
          autoFocus: false,
          readOnly: false,
          label: "i18n('applicantDetailsCheckboxContact')",
          disabled: false,
          uiType: '',
          description: '',
          validateStatus: '',
          meta: '',
          space: {
            marginBottom: 'lg',
          },
          onClick: func.f1_onClick,
          onChange: func.call_f2_onChange,
          checked: '${state.contactDetailsFlag}',
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
        componentId: 'GEzYxD1nNaqiuEuCint5u',
        type: 'grid',
        props: {
          columns: 2,
          flexColumns: {
            xl: 2,
            lg: 2,
            md: 2,
            sm: 1,
          },
          space: {
            marginTop: '',
          },
          visible: func.f3_visible,
        },
        layout: 'base',
        children: [
          {
            componentId: 'k4kDHPtQlLBE_fs1zZBWb',
            type: 'input',
            props: {
              label: "i18n('applicantDetailsNameField')",
              value: '${state.contactDetailsName}',
              defaultValue: '',
              'aria-label': "i18n('applicantDetailsNameField')",
              validateStatus: '${state.nameValidateStatus}',
              disabled: '${state.contactDetailsFlag}',
              readonly: false,
              help: '${state.nameValidateHelp}',
              placeholder: '',
              size: 'default',
              textDirection: 'ltr',
              name: '',
              type: 'text',
              tabIndex: 0,
              space: {
                marginBottom: 'lg',
              },
              onChange: func.call_f4_onChange,
              visible: '',
            },
            layout: 'base',
            columnIndex: 0,
            sharedProps: [
              'i18n',
              'locale',
              'actions',
              'contactDetailsFlag',
              'contactDetailsName',
              'nameValidateStatus',
              'nameValidateHelp',
              'actions',
            ],
          },
          {
            componentId: 'RqPbZXaLXOeHlhnwz02ab',
            type: 'input',
            props: {
              label: "i18n('applicantDetailsEmailField')",
              value: '${state.contactDetailsEmail}',
              defaultValue: '',
              'aria-label': "i18n('applicantDetailsEmailField')",
              validateStatus: '${state.emailValidateStatus}',
              disabled: '${state.contactDetailsFlag}',
              readonly: false,
              help: '${state.emailValidateHelp}',
              placeholder: '',
              size: 'default',
              textDirection: 'ltr',
              name: '',
              type: 'text',
              space: {
                marginTop: '',
                marginBottom: 'lg',
              },
              tabIndex: 0,
              onChange: func.call_f5_onChange,
              visible: '',
            },
            layout: 'base',
            columnIndex: 0,
            sharedProps: [
              'i18n',
              'locale',
              'actions',
              'contactDetailsEmail',
              'emailValidateStatus',
              'contactDetailsFlag',
              'emailValidateHelp',
              'actions',
            ],
          },
          {
            componentId: 'a3tmA1HJd2PoVrhELaOF5',
            type: 'inputTelephone',
            props: {
              i18n: '',
              help: '${state.mobileValidateHelp}',
              validateStatus: '${state.mobileValidateStatus}',
              label: "i18n('applicantDetailsNumberField')",
              'aria-label': "i18n('applicantDetailsNumberField')",
              disabled: '${state.contactDetailsFlag}',
              value: '${state.contactDetailsMobile}',
              code: null,
              countries: [],
              size: 'default',
              defaultValue: {},
              tabIndex: 0,
              space: {
                marginBottom: 'lg',
              },
              onSelect: func.call_f6_onSelect,
              visible: '',
            },
            layout: 'base',
            columnIndex: 1,
            sharedProps: [
              'i18n',
              'locale',
              'actions',
              'mobileValidateHelp',
              'mobileValidateStatus',
              'contactDetailsFlag',
              'contactDetailsMobile',
              'actions',
            ],
          },
        ],
      },
      {
        componentId: 'zTQtz7Bm5KbcT0pffQ2Lq',
        type: 'alert',
        props: {
          status: 'error',
          message: '${state.camundaMessage}',
          onClose: null,
          space: {
            marginBottom: '',
          },
          visible: func.f7_visible,
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale', 'camundaMessage'],
      },
    ],
  },
];

export default symbolConfig;
