const symbolConfig = [
  {
    id: 'zUb_2ox3pxzJj2-JHqAh1',
    name: 'Header',
    definitions: [
      {
        componentId: '_0JdDeDuJ9aLzLvOyksSX',
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
            componentId: 'QRUGlUhHpBbWipDuiJI1l',
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
            componentId: '68aenTCGP0X-L3br5r-li',
            type: 'text',
            props: {
              variant: 'h1',
              content: "i18n('serviceCard-desc')",
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
