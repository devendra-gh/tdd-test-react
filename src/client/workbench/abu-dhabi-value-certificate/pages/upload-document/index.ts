import * as func from './functions';

const pageConfig = [
  {
    title: 'Upload Document',
    pageId: 'RMeAltFc8P7rzwk24eSsL',
    expanded: true,
    path: '/upload-document',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'qP5M5KOOT3aLbpNJj2iY0',
          type: 'text',
          props: {
            variant: 'h3',
            content: "i18n('UploadDocuments_UploadDocuments')",
            displayAsHtml: false,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'mdErAo6yH0zLOpY8w7QwN',
          type: 'text',
          props: {
            variant: 'p',
            content: "i18n('UploadDocuments_Desc')",
            displayAsHtml: false,
            space: {
              marginBottom: 'xl',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'ZZQxs3sNDxu_wW_gxhB6x',
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
          },
          layout: 'base',
          children: [
            {
              componentId: '1OqDoKTeu0JIRtpL9t83t',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document1')",
                accept: ['application/pdf'],
                files: '${state.document0}',
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f1_onChange,
                onRemove: func.f2_onRemove,
                space: {
                  marginBottom: 'md',
                },
              },
              layout: 'base',
              columnIndex: 0,
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document0',
                'actions',
              ],
            },
            {
              componentId: '3dqzcHbqOgPD0dUFU37Vc',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document3')",
                accept: ['application/pdf'],
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f3_onChange,
                onRemove: func.f4_onRemove,
                space: {
                  marginBottom: 'md',
                },
                files: '${state.document2}',
              },
              layout: 'base',
              columnIndex: 0,
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document2',
                'actions',
              ],
            },
            {
              componentId: 'UXN0yXyWYz8-s_oV4v6LB',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document5')",
                accept: ['application/pdf'],
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f5_onChange,
                onRemove: func.f6_onRemove,
                space: {
                  marginBottom: 'md',
                },
                files: '${state.document4}',
              },
              layout: 'base',
              columnIndex: 0,
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document4',
                'actions',
              ],
            },
            {
              componentId: 'cDLF0Kgp3DN2-KV9lbkQ5',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document7')",
                accept: ['application/pdf'],
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f7_onChange,
                onRemove: func.f8_onRemove,
                space: {
                  marginBottom: 'md',
                },
                files: '${state.document6}',
              },
              layout: 'base',
              columnIndex: 0,
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document6',
                'actions',
              ],
            },
            {
              componentId: 'tQMumYWniLOTDQMJlHzBd',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document2')",
                accept: ['application/pdf'],
                files: '${state.document1}',
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f9_onChange,
                onRemove: func.f10_onRemove,
                space: {
                  marginBottom: 'md',
                },
              },
              columnIndex: 1,
              layout: 'base',
              parentComponentId: 'ZZQxs3sNDxu_wW_gxhB6x',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document1',
                'actions',
              ],
            },
            {
              componentId: 'p19DljCdUhMU6L7weiXXD',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document4')",
                accept: ['application/pdf'],
                files: '${state.document3}',
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f11_onChange,
                onRemove: func.f12_onRemove,
                space: {
                  marginBottom: 'md',
                },
              },
              columnIndex: 1,
              layout: 'base',
              parentComponentId: 'ZZQxs3sNDxu_wW_gxhB6x',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document3',
                'actions',
              ],
            },
            {
              componentId: 'FeRvAU5ikTfAz1I7v_7OE',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document6')",
                accept: ['application/pdf'],
                files: '${state.document5}',
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f13_onChange,
                onRemove: func.f14_onRemove,
                space: {
                  marginBottom: 'md',
                },
              },
              columnIndex: 1,
              layout: 'base',
              parentComponentId: 'ZZQxs3sNDxu_wW_gxhB6x',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document5',
                'actions',
              ],
            },
            {
              componentId: 'SIKXE-bbxrYkYofVwWX-Q',
              type: 'fileUpload',
              props: {
                tabIndex: 1,
                multiple: false,
                validateStatus: '',
                validationMessage: '',
                help: '',
                disabled: false,
                label: "i18n('UploadDocuments_Document8')",
                accept: ['application/pdf'],
                files: '${state.document7}',
                removeAriaLabel: 'file-remove-button',
                uploadAriaLabel: 'file-upload',
                removeAcceptForIOS: false,
                i18n: '',
                maxSize: 2147483648,
                onChange: func.call_f15_onChange,
                onRemove: func.f16_onRemove,
                space: {
                  marginBottom: 'md',
                },
              },
              columnIndex: 1,
              layout: 'base',
              parentComponentId: 'ZZQxs3sNDxu_wW_gxhB6x',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'document7',
                'actions',
              ],
            },
          ],
        },
        {
          componentId: 'eiBBa67eXmPQ5j_HxzUJV',
          type: 'symbol',
          props: {
            symbol: '8LINI-LpO_wRsPTAq3_86',
            space: {
              marginTop: '',
              paddingTop: 'md',
              marginBottom: 'xl',
            },
          },
          sharedProps: [
            'i18n',
            'locale',
            'isPrivacyWaiverChecked',
            'fileUploads',
            'actions',
          ],
        },
        {
          componentId: 'JwlHyRMv-aac_n3J0u3gD',
          type: 'symbol',
          props: {
            symbol: 'zq9vkdjX1HVpzHE4Jcn5k',
            space: {
              marginBottom: 'xl',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'classNames_decbcfcfbe'],
        },
        {
          componentId: 'LpT09ryCzdYLus0iBGP7Y',
          type: 'flexbox',
          props: {
            flexWrap: true,
            flexDirection: 'initial',
            justifyContent: 'initial',
            alignItems: 'initial',
            alignContent: 'initial',
            space: {
              marginTop: '',
              marginBottom: 'xl',
            },
          },
          layout: 'base',
          children: [
            {
              componentId: '7wi0OL9Aa49PmVcxGApfw',
              type: 'button',
              props: {
                locale: 'en',
                label: "i18n('Global_Back')",
                type: 'button',
                uiType: 'secondary',
                disabled: false,
                'aria-label': 'button',
                size: 'default',
                icon: null,
                alignIcon: 'start',
                withArrow: true,
                active: false,
                hidden: false,
                iconTooltip: '',
                applyAutoWidth: false,
                space: {
                  marginRight: 'md',
                },
                onClick: func.f17_onClick,
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale', 'history'],
            },
            {
              componentId: '-RchqyNCoqiJRWTglaqt0',
              type: 'button',
              props: {
                locale: 'en',
                label: "i18n('Global_Next')",
                type: 'button',
                uiType: 'primary',
                'aria-label': 'button',
                size: 'default',
                icon: null,
                alignIcon: 'end',
                withArrow: true,
                active: false,
                hidden: false,
                iconTooltip: '',
                applyAutoWidth: false,
                space: {
                  marginRight: 'sm',
                  marginLeft: 'sm',
                  paddingLeft: 'sm',
                  paddingRight: 'sm',
                },
                onClick: func.call_f18_onClick,
                disabled: '${state.isSubmitButtonDisabled}',
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'bpm',
                'user',
                'isSubmitButtonDisabled',
                'actions',
              ],
            },
            {
              componentId: 'BuLyV-clnegV3uN3GZlER',
              type: 'button',
              props: {
                locale: 'en',
                label: "i18n('Global_Cancel')",
                type: 'button',
                uiType: 'text-link',
                disabled: false,
                'aria-label': 'button',
                size: 'default',
                icon: null,
                alignIcon: 'end',
                withArrow: false,
                active: false,
                hidden: false,
                iconTooltip: '',
                applyAutoWidth: true,
                onClick: func.f19_onClick,
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale', 'history'],
            },
          ],
        },
      ],
      symbols: [
        {
          id: 'eauqjPZrppIH9ngzoQH_1',
          name: 'hero',
          definitions: [
            {
              componentId: 'L0vGbvPcFSBE2WAv2Fh7e',
              type: 'hero',
              props: {
                backgroundImage:
                  'https://journeys-stg.tamm.abudhabi/journeys/journey-template/images/hero.jpg',
                backgroundBase64Extension: '',
                internal: true,
                aspectOfLifeType: '',
                breadcrumbs: [
                  {
                    label: "i18n('bc_home')",
                    link: '/',
                  },
                  {
                    id: 'kd4lrtqy',
                    label: "i18n('bc_businessInAbuDhabi')",
                  },
                  {
                    id: 'kd4ltcaj',
                    label: "i18n('bc_registerYourBusiness')",
                  },
                  {
                    id: 'kd4ltg37',
                    label: "i18n('bc_industrialLicences')",
                  },
                ],
                subTitle: '',
                title: "i18n('Global_Title')",
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
            },
          ],
        },
        {
          id: 'Tvqi6M5rKJu4JAS3soD9-',
          name: 'Sidebar',
          definitions: [
            {
              componentId: 'yELNRmPQ0-BAvQuT6M0L2',
              type: 'stepTracker',
              props: {
                title: "i18n('ServiceCard_Process')",
                steps: '${state.steps}',
                expandedStepIndexes: '${state.expandedStepIndexes}',
                currentStepIndex: '${state.currentStepIndex}',
                i18n: '',
                currentSubStepIndex: '${state.currentSubStepIndex}',
                visible: '{"code":"  return props.state.showSidebar;"}',
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
              componentId: 'EGdDKE5QVU6ElyGm7BnMR',
              type: 'relevantEntity2-0-0',
              props: {
                i18n: '',
                title: 'Relevant entity',
                entities: [
                  {
                    logo:
                      'https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development',
                    address:
                      'Baniyas Towers, Al Falah Street - Fatima bint Mubarak St 6, Abu Dhabi',
                    phones: [],
                    website: 'www.adeconomy.ae',
                    email: 'email@domain.com',
                  },
                ],
                closedAll: false,
                space: {
                  marginTop: 'xl',
                },
                visible: '{"code":"  return props.state.showSidebar;"}',
              },
              sharedProps: ['i18n', 'locale', 'showSidebar'],
            },
            {
              columnIndex: 0,
              componentId: 'da0TyuQFwqVVGZjOAC_LI',
              type: 'relatedJourneyCard',
              props: {
                aspectOfLifeType: 'business-management',
                icon: null,
                description:
                  'The Manage Your Business journey contains a consolidated dashboard for business owners and representatives to view and...',
                label: 'Manage your business',
                title: 'Related journey',
                space: {
                  marginTop: 'lg',
                },
                visible: '{"code":"  return props.state.showSidebar;"}',
              },
              sharedProps: ['i18n', 'locale', 'showSidebar'],
            },
          ],
        },
        {
          id: 'zq9vkdjX1HVpzHE4Jcn5k',
          name: 'AutoSaved',
          definitions: [
            {
              componentId: 'Wg41huxRP35WX0AzJK3FJ',
              type: 'text',
              props: {
                variant: 'p',
                content: '<p>Your application is being autosaved</p>\n',
                displayAsHtml: true,
                space: {
                  marginTop: '',
                  marginBottom: '',
                },
                classNames: '${state.classNames_decbcfcfbe}',
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale', 'classNames_decbcfcfbe'],
            },
          ],
        },
        {
          id: '8LINI-LpO_wRsPTAq3_86',
          name: 'privacy waiver',
          definitions: [
            {
              componentId: 'AQd1lZuSYiERMsl3ahxLv',
              type: 'checkbox',
              props: {
                name: '',
                id: '',
                tabIndex: 0,
                autoFocus: true,
                readOnly: false,
                label: "i18n('UploadDocuments_Disclaimer')",
                indeterminate: false,
                disabled: false,
                uiType: '',
                description: '',
                validateStatus: '',
                meta: '',
                onFocus: {
                  type: 'func',
                  actions: [],
                },
                onClick: {
                  type: 'func',
                  actions: [],
                },
                onChange: {
                  type: 'func',
                  actions: [
                    {
                      type: 'customCode',
                      code:
                        '{"code":" return () => {\\n    const isPrivacyWaiverChecked = !props.state.isPrivacyWaiverChecked;\\n    const files = props.state.fileUploads;\\n\\n    props.actions.isPrivacyWaiverChecked.update(isPrivacyWaiverChecked);\\n    props.actions.isSubmitButtonDisabled.update(\\n      !isPrivacyWaiverChecked || files.filter((file: any) => !!file).length !== 8,\\n    );\\n  };","shouldCallCustomCode":true}',
                    },
                  ],
                },
                checked: '${state.isPrivacyWaiverChecked}',
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isPrivacyWaiverChecked',
                'fileUploads',
                'actions',
              ],
            },
          ],
        },
      ],
      sharedFunctions: {},
    },
    layout: 'sidebar',
    state: {
      mapState: [
        'user',
        'loggedIn',
        'isPrivacyWaiverChecked',
        'fileUploads',
        'classNames_decbcfcfbe',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'document0',
        'document2',
        'document4',
        'document6',
        'document1',
        'document3',
        'document5',
        'document7',
        'isSubmitButtonDisabled',
      ],
      mapDispatch: [
        'steps',
        'currentSubStepIndex',
        'isPrivacyWaiverChecked',
        'isSubmitButtonDisabled',
        'document0',
        'fileUploads',
        'document2',
        'document4',
        'document6',
        'document1',
        'document3',
        'document5',
        'document7',
        'loading',
        'instanceId',
        'businessKey',
      ],
    },
    init: func.init,
    requires: null,
  },
];

export default pageConfig;
