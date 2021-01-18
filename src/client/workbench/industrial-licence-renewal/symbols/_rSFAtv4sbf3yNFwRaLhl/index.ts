import * as func from './functions';

const symbolConfig = [
  {
    id: '_rSFAtv4sbf3yNFwRaLhl',
    name: 'related_services',
    definitions: [
      {
        componentId: '7Dyp8Ryc_Uox5AXD8er46',
        type: 'grid',
        props: {
          columns: 3,
          flexColumns: {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 3,
          },
          space: {
            marginBottom: 'xl',
            marginTop: '',
          },
        },
        layout: 'base',
        children: [
          {
            componentId: 'IHbxFK7bgcfvbhplRQjpW',
            type: 'list',
            props: {
              i18n: '',
              title: '',
              items: [
                {
                  id: 'kc076fsm',
                  label: "i18n('LicenceIssued_NextStepsLink1')",
                  description: '',
                  link: '',
                  linkTarget: '_parent',
                },
                {
                  id: 'kc078fhp',
                  label: "i18n('LicenceIssued_NextStepsLink3')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09mlzw',
                  label: "i18n('LicenceIssued_NextStepsLink5')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09mwa7',
                  label: "i18n('LicenceIssued_NextStepsLink7')",
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
            componentId: 'vpaNky4Arb3YrRkdx8fII',
            type: 'list',
            props: {
              i18n: '',
              title: '',
              items: [
                {
                  id: 'kc076fsm',
                  label: "i18n('LicenceIssued_NextStepsLink2')",
                  description: '',
                  link: '',
                  linkTarget: '_parent',
                },
                {
                  id: 'kc078fhp',
                  label: "i18n('LicenceIssued_NextStepsLink4')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09nhi3',
                  label: "i18n('LicenceIssued_NextStepsLink6')",
                  description: '',
                  link: '',
                  linkTarget: '',
                },
                {
                  id: 'kc09nnms',
                  label: "i18n('LicenceIssued_NextStepsLink8')",
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
