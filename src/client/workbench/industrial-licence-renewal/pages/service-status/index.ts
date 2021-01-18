import * as func from './functions';

const pageConfig = [
  {
    title: 'Service Status',
    pageId: 'soKZSfGWdWYCYzNAR7WSB',
    expanded: true,
    path: '/service-status-1',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'WUK4V6x5Qs4ylj-gYM0GP',
          type: 'notice',
          props: {
            status: 'actionRequired',
            icon: null,
            title: "i18n('ApplicationReturned_ApplicationReturnedTitle')",
            tags: [],
            content:
              'Your application has been returned by the DED. Please check the feedback below, and make the required amends and/or add the requested documents. For any issues, please contact TAMM support or alternatively you can call the Department of Economic Development at +971 2 815 8888.',
            buttons: [],
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'lDnL2gR5gIP1iobrJlIKh',
          type: 'table',
          props: {
            size: 'default',
            selectable: false,
            clickable: false,
            isSingleSelect: false,
            columns: [],
            items: [],
            title: "i18n('ApplicationReturned_Feedback')",
            space: {
              marginTop: 'xl',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'eDC_1Rqrv99aq7rKmwzr8',
          type: 'text',
          props: {
            variant: 'p',
            content: "<p>i18n('ApplicationReturned_FeedbackDesc')</p>",
            displayAsHtml: '${state.displayAsHtml_fbecddafbc}',
            space: {
              marginTop: 'md',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'displayAsHtml_fbecddafbc'],
        },
        {
          componentId: 'qhO0G4WYY6IAhejdjfJFH',
          type: 'text',
          props: {
            variant: 'h5',
            content: "i18n('ApplicationReturned_ActionReq')",
            displayAsHtml: false,
            space: {
              marginTop: 'md',
              marginBottom: 'md',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'y-6CghBJH8sDa-zYXj6A7',
          type: 'text',
          props: {
            variant: 'p',
            content: "<p>i18n('ApplicationReturned_ActionRedDesc')</p>",
            displayAsHtml: '${state.displayAsHtml_fbecddafbc}',
            space: {
              marginTop: '',
              marginBottom: 'lg',
              paddingTop: '',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'displayAsHtml_fbecddafbc'],
        },
        {
          componentId: 'CNAFcreBKILmFUlTkCNyK',
          type: 'grid',
          props: {
            columns: 2,
            flexColumns: {
              xl: 2,
              lg: 2,
              md: 2,
              sm: 2,
            },
          },
          layout: 'base',
          children: [
            {
              componentId: 'h-HsqZSC6mWSNOy5mqu9N',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: true,
                validateStatus: '${state.feedBackDocumentValidateStatus}',
                validationMessage: '${state.feedBackDocumentValidationMessage}',
                help: "i18n('ApplicationReturned_FileType')",
                disabled: false,
                label: '',
                accept: ['application/pdf', 'image/png', 'image/jpg'],
                files: '${state.feedBackDocumentFiles}',
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 20971520,
                space: {
                  marginBottom: 'lg',
                },
                name: 'feedBackDocument',
              },
              layout: 'base',
              columnIndex: 0,
              sharedProps: [
                'i18n',
                'locale',
                'feedBackDocumentValidateStatus',
                'feedBackDocumentValidationMessage',
                'feedBackDocumentFiles',
              ],
            },
          ],
        },
        {
          componentId: 'Dn72ENQLONC3jbHr_F_R1',
          type: 'button',
          props: {
            locale: 'en',
            label: "i18n('ApplicationReturned_SubmitButton')",
            type: 'button',
            uiType: 'primary',
            disabled: false,
            'aria-label': 'button',
            size: 'default',
            icon: null,
            alignIcon: 'end',
            withArrow: false,
            active: false,
            hidden: false,
            iconTooltip: '',
            applyAutoWidth: false,
            space: {
              marginTop: 'lg',
              marginBottom: 'lg',
            },
            onClick: func.f1_onClick,
          },
          layout: 'base',
          sharedProps: [
            'i18n',
            'locale',
            'history',
            'bpm',
            'businessKey',
            'paymentLink',
          ],
        },
      ],
      symbols: [
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
        {
          id: 'pOuCbjftw6l5xN5WTMEPb',
          name: 'Sidebar_without_card',
          definitions: [
            {
              componentId: 'yeIBuc-dVj7toDnj_7R81',
              type: 'stepTracker',
              props: {
                title: "i18n('ServicePage_Process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: '{"code":"  return props.state.showSidebar;"}',
                classNames: '',
              },
              sharedProps: [
                'i18n',
                'locale',
                'showSidebar',
                'steps',
                'expandedStepIndexes',
                'currentStepIndex',
                'currentSubStepIndex',
              ],
            },
            {
              columnIndex: 0,
              componentId: '2eXUqMf3xlTH9Dity7T6_',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: "i18n('Relevant_entity')",
                entities: [
                  {
                    logo:
                      'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                    address: "i18n('address')",
                    phones: [],
                    website: 'www.adeconomy.ae',
                    email: 'email@domain.com',
                  },
                ],
                closedAll: true,
                space: {
                  marginTop: 'xl',
                  paddingBottom: 'lg',
                },
              },
              sharedProps: ['i18n', 'locale'],
            },
          ],
        },
      ],
      sharedFunctions: {},
    },
    layout: 'sidebar',
    requires: [
      {
        type: 'REQUIRES_LOGIN',
        redirectTo: '/login',
      },
    ],
    state: {
      mapState: [
        'user',
        'loggedIn',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'displayAsHtml_fbecddafbc',
        'feedBackDocumentValidateStatus',
        'feedBackDocumentValidationMessage',
        'feedBackDocumentFiles',
        'businessKey',
        'paymentLink',
      ],
      mapDispatch: [
        'showSidebar',
        'currentStepIndex',
        'currentSubStepIndex',
        'expandedStepIndexes',
        'steps',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
    fromProcessState: {
      processName: 'workbench',
      variables: ['submitDate'],
    },
  },
];

export default pageConfig;
