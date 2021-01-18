import * as func from './functions';

const symbolConfig = [
  {
    id: '5xF4WpaHijH9pKvymPV0O',
    name: 'related services',
    definitions: [
      {
        componentId: 'zDtCQt-yJFVLM7IqVQ1ui',
        type: 'text',
        props: {
          variant: 'h3',
          content: "i18n('licenceStatus_nextStep_title')",
          displayAsHtml: false,
          classNames: '',
          space: {
            marginTop: '',
          },
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale'],
      },
      {
        componentId: 'QGFgJDKE2a0bm8t4Vpwyz',
        type: 'text',
        props: {
          variant: 'p',
          content: "i18n('licenceStatus_nextStep_description')",
          displayAsHtml: false,
          space: {
            marginBottom: 'lg',
          },
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale'],
      },
      {
        componentId: 'YzdjnWxXVA-7YTh5K5FGB',
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
            marginBottom: '',
            marginTop: '',
          },
        },
        layout: 'base',
        children: [
          {
            componentId: 'u1NTpFtiJqBbl4LAgVxVi',
            type: 'list',
            props: {
              i18n: '',
              title: '',
              items: [
                {
                  id: 'kc076fsm',
                  label: "i18n('relatedServices_1')",
                  description: '',
                  link: '',
                  linkTarget: '_parent',
                },
                {
                  id: 'kc078fhp',
                  label: "i18n('relatedServices_2')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09mlzw',
                  label: "i18n('relatedServices_3')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09mwa7',
                  label: "i18n('relatedServices_4')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
              ],
              withArrow: true,
              withBoldContent: true,
              expanded: false,
              allowedNotExpandedLimit: 5,
              showMoreLabels: [],
              applyStrictWidth: false,
              uiType: 'link',
              onClick: func.f1_onClick,
            },
            layout: 'base',
            columnIndex: 0,
            sharedProps: ['i18n', 'locale'],
          },
          {
            componentId: 'dmhKy19jE-Gy9svl1a-Ko',
            type: 'list',
            props: {
              i18n: '',
              title: '',
              items: [
                {
                  id: 'kc076fsm',
                  label: "i18n('relatedServices_5')",
                  description: '',
                  link: '',
                  linkTarget: '_parent',
                },
                {
                  id: 'kc078fhp',
                  label: "i18n('relatedServices_6')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09nhi3',
                  label: "i18n('relatedServices_7')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09nnms',
                  label: "i18n('relatedServices_8')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
              ],
              withArrow: true,
              withBoldContent: true,
              expanded: false,
              allowedNotExpandedLimit: 5,
              showMoreLabels: [],
              applyStrictWidth: false,
              uiType: 'link',
              onClick: func.f2_onClick,
            },
            layout: 'base',
            columnIndex: 1,
            sharedProps: ['i18n', 'locale'],
          },
        ],
      },
    ],
  },
];

export default symbolConfig;
