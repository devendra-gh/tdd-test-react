import * as func from './functions';

const pageConfig = [
  {
    title: 'Review Quotations',
    pageId: 'ubL8xSgFKSDQdWT5dBy2i',
    path: '/review-quotations',
    template: 'custom',
    props: {
      definitions: [
        {
          componentId: 'idtjIq4SPkyaREyNin0ni',
          type: 'notice',
          props: {
            status: 'inProgress',
            icon: '',
            title: "i18n('ReceiveQuotations_ReceivingEntityQuotations')",
            tags: '${state.referenceTags}',
            content: "i18n('ReceiveQuotations_Desc')",
            buttons: [],
            space: {
              marginBottom: 'lg',
            },
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'referenceTags'],
        },
        {
          componentId: '6dqHW-Q0urLXZRPV-pu4M',
          type: 'symbol',
          props: {
            symbol: '_fKRatH62UIjfyCmEg4_8',
            space: {
              marginBottom: 'lg',
            },
          },
          sharedProps: ['i18n', 'locale'],
        },
        {
          componentId: 'eFhuVB3Bgnxc1wLShiyT0',
          type: 'symbol',
          props: {
            symbol: 'UEf-I4uyEmhhoyFPWfI3U',
            space: {
              marginTop: '',
              marginBottom: 'xl',
            },
            visible: func.f1_visible,
          },
          layout: 'base',
          sharedProps: [
            'i18n',
            'locale',
            'hasEntityFeedback',
            'businessKey',
            'actions',
          ],
        },
        {
          componentId: 'S7RqpskWdyFwWjtw7j7s-',
          type: 'highlightLoader',
          props: {
            delay: 0,
            countdown: null,
            description: "i18n('ReceiveQuotations_Refresh')",
            space: {
              marginTop: '',
              marginBottom: 'xl',
            },
            visible: func.f2_visible,
          },
          layout: 'base',
          sharedProps: ['i18n', 'locale', 'isAllQuotationsFetched'],
        },
        {
          componentId: 'OIFE0ysQx_W_HG0f9PUwo',
          type: 'table',
          props: {
            status: '',
            size: 'default',
            rowVerticalAlign: 'top',
            selectable: true,
            editable: false,
            searchable: false,
            headerHidden: false,
            disabledSelectionVisible: false,
            clickable: false,
            isSingleSelect: true,
            columns: '${state.quotationColumns}',
            items: '${state.entityQuotations}',
            title: "i18n('Global_QuotationSummary')",
            search: '',
            onSelectionChange: func.call_f3_onSelectionChange,
            selectedItems: '${state.selectedQuotationsArr}',
            symbolActions: [
              {
                id: 'field-An_h0tGuWZNJk0eM7EzFq',
                title: 'Actions',
                renderType: 'symbol',
                symbolId: 'EjPOVaCv-3xQGRvwUsIEV',
                position: 'end',
                sortable: false,
              },
            ],
            onActionClick: func.f4_onActionClick,
            space: {
              marginBottom: 'xl',
            },
          },
          sharedProps: [
            'i18n',
            'locale',
            'history',
            'actions',
            'quotationColumns',
            'entityQuotations',
            'selectedQuotationsArr',
            'actions',
          ],
        },
        {
          componentId: 'voEP77se-EVmVqIrb0EiC',
          type: 'button',
          props: {
            locale: 'en',
            label: "i18n('Global_AwardContract')",
            type: 'button',
            uiType: 'primary',
            disabled: '${state.isEntityNotSelected}',
            'aria-label': 'button',
            size: 'default',
            icon: null,
            alignIcon: 'end',
            withArrow: false,
            active: false,
            hidden: false,
            applyAutoWidth: false,
            space: {
              marginTop: '',
              marginBottom: 'xl',
            },
            onClick: func.call_f5_onClick,
          },
          sharedProps: [
            'i18n',
            'locale',
            'actions',
            'bpm',
            'awardedEntity',
            'apTransactionNumber',
            'businessKey',
            'isEntityNotSelected',
            'actions',
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
                visible: '{"code":"  return props.state.hasEntityFeedback;"}',
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
                visible: '{"code":"  return props.state.hasEntityFeedback;"}',
                onClick: {
                  type: 'func',
                  actions: [
                    {
                      type: 'customCode',
                      code:
                        '{"code":"  return async () => {\\n    props.actions.loading.update(true);\\n    await props.bpm.sendMessage({\\n      messageName: \'onFeedback\',\\n      businessKey: props.state.businessKey,\\n      variables: {\\n        processResult: \'FEEDBACK\',\\n      },\\n    });\\n  };","shouldCallCustomCode":true}',
                    },
                  ],
                },
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
        {
          id: 'EjPOVaCv-3xQGRvwUsIEV',
          name: 'download',
          definitions: [
            {
              componentId: '8Bc8myAmtahLhnnpk7Udm',
              type: 'dropdown',
              props: {
                locale: 'en',
                uiType: 'tertiary',
                size: 'small',
                label: '',
                isOpen: false,
                disabled: false,
                items: [
                  {
                    id: 'download',
                    label: 'Download',
                  },
                ],
                name: null,
                popupAlign: 'end',
                popupWidth: 0,
                popupRootSelector: 'body',
                customItemContent: false,
                onChange: {
                  type: 'func',
                  actions: [
                    {
                      type: 'customCode',
                      code:
                        "{\"code\":\"  return (symbolProps: any, ...rest: any[]) => {\\n    console.info('--symbolProps--', symbolProps, rest);\\n    const file = symbolProps.record.document;\\n    const documentName = symbolProps.record.documentName;\\n\\n    const blob = new Blob([file], {\\n      type: 'application/pdf',\\n    });\\n\\n    if (window.navigator && window.navigator.msSaveOrOpenBlob) {\\n      window.navigator.msSaveOrOpenBlob(blob);\\n      return;\\n    }\\n\\n    const data = window.URL.createObjectURL(blob);\\n    const link = document.createElement('a');\\n    link.href = data;\\n    link.target = '_blank';\\n    link.download = documentName;\\n\\n    link.click();\\n    setTimeout(function () {\\n      window.URL.revokeObjectURL(data);\\n    }, 100);\\n    return true;\\n  };\",\"shouldCallCustomCode\":true}",
                    },
                  ],
                },
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
        'fileUploads',
        'documentsUploaded',
        'selectedQuotationsArr',
        'hasEntityFeedback',
        'businessKey',
        'showSidebar',
        'steps',
        'expandedStepIndexes',
        'currentStepIndex',
        'currentSubStepIndex',
        'referenceTags',
        'isAllQuotationsFetched',
        'quotationColumns',
        'entityQuotations',
        'awardedEntity',
        'apTransactionNumber',
        'isEntityNotSelected',
      ],
      mapDispatch: [
        'entityQuotations',
        'selectedEntities',
        'hasEntityFeedback',
        'isAllQuotationsFetched',
        'feedbackStatements',
        'referenceTags',
        'steps',
        'currentStepIndex',
        'currentSubStepIndex',
        'isEntityNotSelected',
        'loading',
        'awardedEntity',
        'selectedQuotationsArr',
      ],
    },
    init: func.init,
    onPageInit: func.onPageInit,
    fromProcessState: {
      processName: 'workbench',
      variables: ['submittedOn', 'apTransactionNumber'],
    },
    requires: null,
  },
];

export default pageConfig;
