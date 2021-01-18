const symbolConfig = [
  {
    id: 'SpZNRSS1hcBXpPT30yok2',
    name: 'Header',
    definitions: [
      {
        componentId: 'ZubPbXDHOtVDemU26pYRi',
        type: 'flexbox',
        props: {
          flexWrap: true,
          flexDirection: 'column',
          justifyContent: 'initial',
          alignItems: 'initial',
          alignContent: 'initial',
          classNames: 'container',
        },
        layout: 'base',
        children: [
          {
            componentId: '7vJvGWTue3wJJTCS3mfAX',
            type: 'breadcrumb',
            props: {
              space: {
                marginBottom: 'md',
                marginTop: 'lg',
              },
              items: [
                {
                  id: 'kdmsxtik',
                  label: "i18n('bc_home')",
                  linkTarget: '_self',
                  link: '/',
                },
                {
                  id: 'kdmsyjm9',
                  label: "i18n('bc_digitalServices')",
                  link: 'https://www.tamm.abudhabi/tamm-centers-services',
                  linkTarget: '_self',
                },
                {
                  id: 'kdmszcbw',
                  label: "i18n('bc_DED')",
                  link:
                    'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
                  linkTarget: '_self',
                },
              ],
            },
            parentComponentId: 'no_parent',
            sharedProps: ['i18n', 'locale'],
          },
          {
            componentId: '4wTDq9dCLSvn6yueeb1LJ',
            type: 'text',
            props: {
              variant: 'h1',
              content: "i18n('serviceCardServicename')",
              displayAsHtml: false,
            },
            layout: 'base',
            parentComponentId: 'no_parent',
            sharedProps: ['i18n', 'locale'],
          },
        ],
      },
    ],
  },
];

export default symbolConfig;
