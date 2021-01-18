import * as func from './functions';

const pageConfig = [
  {
    title: 'Contact Details',
    pageId: 'dtUjk4lxcTPI4zvaa4UEA',
    expanded: true,
    path: '/contact-details',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: '823uPzPXjx2A2ezfr7x7Y',
          type: 'form',
          props: {
            definitions: [
              {
                componentId: 'wG5yGn41E9bHelAqAzJ9V',
                symbolTitle: 'contact checkbox',
                type: 'symbol',
                props: {
                  symbol: 'cZR2gZ4fMS0tyRreVcYvc',
                },
                layout: 'base',
              },
              {
                componentId: 'MWgtWgQexD5qDZ_xNK1oX',
                type: 'fieldset',
                props: {
                  title: '',
                  description: '',
                  children: [
                    {
                      rowTitle: 'name/mobile number',
                      componentId: 'MD3n2PXfOYl8shQF097mL',
                      type: 'grid',
                      props: {
                        columns: 2,
                        flexColumns: {
                          xl: 6,
                          lg: 6,
                          md: 12,
                        },
                        style: {
                          marginTop: '2rem',
                        },
                      },
                      layout: 'base',
                      children: [
                        {
                          fieldTitle: 'name',
                          componentId: 'a8Qn-JzfYHN5wYgWjgrJv',
                          type: 'input',
                          props: {
                            label: "i18n('SelectLicence_Name')",
                            name: 'name',
                            isRequired: true,
                            value: '',
                            onFocus: func.f1_onFocus,
                            onChange: func.call_f2_onChange,
                            defaultValue: '',
                            space: {
                              marginBottom: '',
                            },
                          },
                          layout: 'base',
                        },
                        {
                          fieldTitle: 'mobileNumber',
                          componentId: '8nDiTuEB1bwTKpjXLzWJS',
                          type: 'inputTelephone',
                          props: {
                            i18n: '',
                            id: '',
                            tabIndex: 2,
                            help: null,
                            validateStatus: '',
                            label: "i18n('SelectLicence_PhoneNumber')",
                            'aria-label': 'Telephone input',
                            disabled: false,
                            value: '',
                            code: 0,
                            countries: [
                              {
                                id: 'kcvmh4ka',
                                name: 'UAE',
                                code: 971,
                              },
                            ],
                            size: 'default',
                            defaultValue: {},
                            name: 'mobileNumber',
                            onSelect: func.f3_onSelect,
                            isRequired: true,
                            isValidFunc: func.f4_isValidFunc,
                            isValid: true,
                            space: {
                              marginBottom: '',
                            },
                          },
                          layout: 'base',
                        },
                      ],
                    },
                    {
                      rowTitle: 'email',
                      componentId: 'OMGD6vZUkkkGqN0T1OT2l',
                      type: 'grid',
                      props: {
                        columns: 2,
                        flexColumns: {
                          xl: 6,
                          lg: 6,
                          md: 12,
                        },
                        style: {
                          marginTop: '2rem',
                        },
                      },
                      layout: 'base',
                      children: [
                        {
                          fieldTitle: 'email',
                          componentId: 'Q85cKey-EPJn9aAe-C9cu',
                          type: 'input',
                          props: {
                            label: "i18n('SelectLicence_EmailAddress')",
                            name: 'email',
                            onChange: func.f5_onChange,
                            value: '',
                            isRequired: true,
                            defaultValue: '',
                            space: {
                              marginBottom: '',
                            },
                          },
                          layout: 'base',
                        },
                      ],
                    },
                  ],
                },
                layout: 'base',
              },
              {
                componentId: '-VkXOj7DF4Xsqj5Fv1Q0_',
                symbolTitle: 'underline',
                type: 'symbol',
                props: {
                  symbol: '_fKRatH62UIjfyCmEg4_8',
                },
                layout: 'base',
              },
              {
                componentId: 'vzeczd6P9CETrOU_ImmAi',
                symbolTitle: 'undertaking',
                type: 'symbol',
                props: {
                  symbol: 'FoviLkTxM5ejYht7kzXYY',
                },
                layout: 'base',
              },
              {
                componentId: 'HZRdLd2Myoqm8JDhW78nR',
                symbolTitle: 'autosave',
                type: 'symbol',
                props: {
                  symbol: '_yXTD_hRr98et9R1OspXM',
                },
                layout: 'base',
              },
            ],
            description: '<p></p>\n',
            title: "i18n('SelectLicence_AddContactInformation')",
            formValues: 'contactForm',
            btnSubmitLabel: "i18n('Global_Next')",
            includeCancelButton: false,
            includeBackButton: true,
            btnBackLabel: "i18n('Global_Back')",
            validateStatus: {
              valid: true,
              message: '',
            },
            btnSubmitClick: func.f6_btnSubmitClick,
            btnSubmitDisabled: func.f7_btnSubmitDisabled,
            btnBackClick: func.f8_btnBackClick,
            btnCancelClick: func.f9_btnCancelClick,
            btnBackArrow: 'start',
            space: {
              marginBottom: 'xl',
            },
          },
          sharedProps: [
            'i18n',
            'locale',
            'history',
            'actions',
            'fetch',
            'bpm',
            'contactForm',
            'entityPayload',
            'companyDetailsForm',
            'businessKey',
            'instanceId',
            'licenceNumber',
            'isUndertakingChecked',
            'contactForm',
            'actions',
          ],
        },
        {
          componentId: 'TqTmrXYhWkHtYrPvkcxrz',
          type: 'symbol',
          props: {
            symbol: '23J1LKV0VR2uF6Ymw9zoE',
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale'],
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
          id: '_yXTD_hRr98et9R1OspXM',
          name: 'auto save without underline',
          definitions: [
            {
              componentId: 'Wg41huxRP35WX0AzJK3FJ',
              type: 'text',
              props: {
                variant: 'p',
                content: '<p>Your application is being autosaved</p>\n',
                displayAsHtml: true,
                space: {
                  marginTop: 'xl',
                  marginBottom: '',
                  paddingTop: '',
                },
                classNames: '${state.classNames_decbcfcfbe}',
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale', 'classNames_decbcfcfbe'],
            },
          ],
        },
        {
          id: 'FoviLkTxM5ejYht7kzXYY',
          name: 'undertaking',
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
                label: "i18n('SelectLicence_Disclaimer')",
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
                        '{"code":"  return (value: boolean) => {\\n    const isUndertakingChecked = props.state.isUndertakingChecked;\\n    props.actions.isUndertakingChecked.update(!isUndertakingChecked);\\n  };","shouldCallCustomCode":true}',
                    },
                  ],
                },
                checked: '${state.isUndertakingChecked}',
                space: {
                  marginTop: 'xl',
                  paddingTop: '',
                  marginBottom: '',
                },
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isUndertakingChecked',
                'actions',
              ],
            },
          ],
        },
        {
          id: 'cZR2gZ4fMS0tyRreVcYvc',
          name: 'contact checkbox',
          definitions: [
            {
              componentId: 'I18kYbjtfniIvlcgz3Nt1',
              type: 'checkbox',
              props: {
                name: '',
                id: '',
                tabIndex: 1,
                autoFocus: false,
                readOnly: false,
                label: "i18n('SelectLicence_ContactPerson')",
                disabled: false,
                uiType: '',
                description: '',
                validateStatus: '',
                meta: '',
                space: {
                  marginBottom: '',
                  marginTop: '',
                  paddingTop: '',
                },
                onClick: {
                  type: 'func',
                  actions: [
                    {
                      type: 'customCode',
                      code:
                        '{"code":"  return (value: any) => {\\n    const contactDetails = getContactDetails(\\n      !props.state.isContact,\\n      props.user,\\n      {\\n        contactName: props.state.contactForm.name,\\n        contactEmail: props.state.contactForm.email,\\n        contactNumber: props.state.contactForm.mobileNumber,\\n      },\\n      props.locale,\\n    );\\n    props.actions.contactForm.update({\\n      name: contactDetails.name,\\n      email: contactDetails.email,\\n      mobileNumber: contactDetails.phone,\\n    });\\n\\n    props.actions.isContact.update(!props.state.isContact);\\n  };","shouldCallCustomCode":true}',
                    },
                  ],
                },
                onChange: {
                  type: 'func',
                  actions: [],
                },
                checked: '${state.isContact}',
              },
              layout: 'base',
              sharedProps: [
                'i18n',
                'locale',
                'actions',
                'isContact',
                'contactForm',
                'actions',
              ],
            },
          ],
        },
        {
          id: '_fKRatH62UIjfyCmEg4_8',
          name: 'underline',
          definitions: [
            {
              componentId: 's2RFkM-KPxq4WlNEofGH-',
              type: 'text',
              props: {
                variant: 'p',
                content: '<p></p>\n',
                displayAsHtml: true,
              },
              layout: 'base',
              sharedProps: ['i18n', 'locale'],
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
        'isContact',
        'contactForm',
        'isUndertakingChecked',
        'classNames_decbcfcfbe',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'entityPayload',
        'companyDetailsForm',
        'businessKey',
        'instanceId',
        'licenceNumber',
      ],
      mapDispatch: [
        'loading',
        'steps',
        'currentStepIndex',
        'currentSubStepIndex',
        'contactForm',
        'isContact',
        'isUndertakingChecked',
        'contactName',
        'businessKey',
        'instanceId',
      ],
    },
    init: func.init,
    fromProcessState: {
      processName: 'workbench',
      variables: ['apTransactionNumber', 'responseDescription'],
    },
    requires: null,
  },
];

export default pageConfig;
