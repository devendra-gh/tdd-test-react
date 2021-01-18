const symbolConfig = [
  {
    id: 'u_7BA0xr8Q0oku7QtzxvE',
    name: 'Header',
    definitions: [
      {
        componentId: '0nSNUzm6NEjCkToaBdmCl',
        type: 'alert',
        props: {
          status: '',
          message: '',
          onClose: null,
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale'],
      },
      {
        componentId: 'Y78zMYB80jxbXDw2WuI6o',
        type: 'flexbox',
        props: {
          flexWrap: true,
          flexDirection: 'column-reverse',
          justifyContent: 'initial',
          alignItems: 'initial',
          alignContent: 'initial',
          classNames: 'container',
          space: {
            marginBottom: '',
            paddingBottom: '',
          },
        },
        layout: 'base',
        children: [
          {
            componentId: 'uQukKScRci0q9DWO9b324',
            parentComponentId: 'Y78zMYB80jxbXDw2WuI6o',
            type: 'text',
            props: {
              variant: 'h1',
              content: "i18n('Global_ServiceName')",
              displayAsHtml: false,
              space: {
                paddingBottom: 'md',
                marginTop: 'md',
              },
            },
            layout: 'base',
            sharedProps: ['i18n', 'locale'],
          },
          {
            componentId: 'iyAIP8maLEkaZwI2t7dUy',
            type: 'breadcrumb',
            props: {
              items: [
                {
                  label: "i18n('bcrumbsHome')",
                  link: 'https://www.tamm.abudhabi/',
                  linkTarget: '',
                  id: 'kbzqdrrl',
                },
                {
                  label: "i18n('bcrumbsBusinessInAbuDhabi')",
                  link: '',
                  linkTarget: '',
                  id: 'kbzqe5hx',
                },
                {
                  label: "i18n('bcrumbsRegisterYourBusiness')",
                  link: '',
                  linkTarget: '',
                  id: 'kbzqeewv',
                },
                {
                  label: "i18n('bcrumbsIndustrialLicences')",
                  link: '',
                  linkTarget: '',
                  id: 'kbzqel7d',
                },
              ],
            },
            layout: 'base',
            sharedProps: ['i18n', 'locale'],
          },
        ],
      },
    ],
  },
];

export default symbolConfig;
