import * as func from './functions';

const symbolConfig = [
  {
    id: 'UEf-I4uyEmhhoyFPWfI3U',
    name: 'entity feedback',
    definitions: [
      {
        componentId: 'Hk4NIrsHB4cqTsw3oPtP1',
        type: 'text',
        props: {
          variant: 'p',
          content: "i18n('ReceiveQuotations_Request')",
          displayAsHtml: false,
          visible: func.f1_visible,
          space: {
            marginBottom: 'lg',
          },
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale', 'hasEntityFeedback'],
      },
      {
        componentId: 'UrY8qwStmYwCpCjzDsFAg',
        type: 'button',
        props: {
          locale: 'en',
          label: "i18n('ReceiveQuotations_ViewFeedback')",
          type: 'button',
          uiType: 'secondary',
          disabled: false,
          'aria-label': 'button',
          size: 'default',
          icon: null,
          alignIcon: 'end',
          withArrow: false,
          active: false,
          hidden: false,
          applyAutoWidth: false,
          visible: func.f2_visible,
          onClick: func.call_f3_onClick,
        },
        layout: 'base',
        sharedProps: [
          'i18n',
          'locale',
          'actions',
          'bpm',
          'hasEntityFeedback',
          'businessKey',
          'actions',
        ],
      },
    ],
  },
];

export default symbolConfig;
