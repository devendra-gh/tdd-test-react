import * as func from './functions';


          


          const pageConfig = [{
  "title": "Enter Company Details",
  "pageId": "qnjJCS1jU_apaJIgy5RDV",
  "path": "/enter-company-details",
  "template": "custom",
  "requires": [
    {
      "type": "REQUIRES_LOGIN",
      "redirectTo": "/login"
    }
  ],
  "props": {
    "definitions": [
      {
        "componentId": "3AilkM8udQuvXB-4uJP8U",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isCancelModalOpen}",
          "title": "i18n('cancel_application')",
          "buttonCombination": "primary-secondary",
          "primaryButton": {
            "label": "i18n('cancel_popup_btn_yes')",
            "onClick": func.f1_primaryButton_onClick
          },
          "secondaryButton": {
            "onClick": func.f2_secondaryButton_onClick,
            "label": "i18n('cancel_popup_btn_no')",
            "disabled": false,
            "withArrow": false
          },
          "linkButton": "",
          "onClose": func.f3_onClose,
          "children": [
            {
              "componentId": "QAIBlH79UMJ7HmHuLz-ZV",
              "type": "symbol",
              "props": {
                "symbol": "QAIBlH79UMJ7HmHuLz-ZV"
              }
            }
          ],
          "maxWidth": 600
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "isCancelModalOpen",
          "actions"
        ]
      },
      {
        "componentId": "pdv-XGX47r7vGq5kel-_1",
        "type": "grid",
        "props": {
          "columns": 1,
          "flexColumns": {
            "xl": 1,
            "lg": 1,
            "md": 1,
            "sm": 1
          },
          "space": {
            "marginBottom": "md"
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "wlbo5ZWwqTU2cYHE0wsdv",
            "type": "text",
            "props": {
              "variant": "h3",
              "content": "i18n('individual_enter_company_title')",
              "displayAsHtml": false,
              "space": {
                "marginTop": ""
              },
              "classNames": ""
            },
            "layout": "base",
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale"
            ]
          },
          {
            "componentId": "5RRe9o9fy5Lby1BTxtPSK",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "<p>i18n('individual_enter_company_description')</p>\n",
              "displayAsHtml": "${state.displayAsHtml_fbecddafbc}",
              "space": {
                "marginBottom": "",
                "paddingBottom": ""
              },
              "classNames": ""
            },
            "layout": "base",
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "displayAsHtml_fbecddafbc"
            ]
          }
        ]
      },
      {
        "componentId": "iMwl2qKp9KKeephjcrE7O",
        "type": "grid",
        "props": {
          "columns": 2,
          "flexColumns": {
            "xl": 2,
            "lg": 2,
            "md": 2,
            "sm": 1
          },
          "space": {
            "marginTop": "",
            "marginBottom": "lg",
            "paddingTop": "",
            "paddingBottom": ""
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "YnCjcbf2AWqlUpMFlRWVg",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_aeecfaefed}",
              "placeholder": "i18n('individual_select')",
              "label": "i18n('existingBranchType_title')",
              "items": "${state.companyDetailsExistingBranchType}",
              "value": "${state.companyDetailsExistingBranchTypeVal}",
              "isOpen": false,
              "disabled": false,
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": "${state.validateStatus_existingLicense}",
              "help": "${state.help_existingLicense}",
              "size": "default",
              "aria-label": "i18n('existingBranchType_title')",
              "popupWidth": 0,
              "popupAlign": "start",
              "onSearch": func.f4_onSearch,
              "onChange": func.call_f5_onChange,
              "onOpenChange": func.f6_onOpenChange,
              "classNames": "industrial-is-brach-select",
              "space": {
                "marginBottom": "md"
              }
            },
            "layout": "base",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "tabIndex_aeecfaefed",
              "companyDetailsExistingBranchType",
              "companyDetailsExistingBranchTypeVal",
              "validateStatus_existingLicense",
              "help_existingLicense",
              "actions"
            ]
          },
          {
            "componentId": "efbcVwjIyTc3q2BUWFk8K",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_aeecfaefed}",
              "placeholder": "i18n('individual_select')",
              "label": "i18n('industry_type')",
              "items": "${state.industrialList}",
              "value": "${state.selectedIndustrialType}",
              "isOpen": false,
              "disabled": false,
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": "${state.validateStatus_industryType}",
              "help": "${state.help_industryType}",
              "size": "default",
              "aria-label": "i18n('industry_type')",
              "popupWidth": 0,
              "popupAlign": "start",
              "onSearch": func.f7_onSearch,
              "onChange": func.call_f8_onChange,
              "onOpenChange": func.f9_onOpenChange,
              "classNames": "industrial-type-select",
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              }
            },
            "columnIndex": 1,
            "layout": "base",
            "parentComponentId": "iMwl2qKp9KKeephjcrE7O",
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "tabIndex_aeecfaefed",
              "industrialList",
              "selectedIndustrialType",
              "validateStatus_industryType",
              "help_industryType",
              "actions"
            ]
          },
          {
            "componentId": "JQ9x9k7k8pOSMoWyWIcZn",
            "parentComponentId": "iMwl2qKp9KKeephjcrE7O",
            "type": "input",
            "props": {
              "label": "i18n('parentCompanylicenceNumber')",
              "tabIndex": 0,
              "value": "${state.parentCompanylicenceNumberVal}",
              "defaultValue": "",
              "aria-label": "i18n('parentCompanylicenceNumber')",
              "validateStatus": "${state.validateStatus_parentLicenceNumber}",
              "disabled": false,
              "readonly": false,
              "help": "${state.help_parentLicenceNumber}",
              "placeholder": "i18n('individual_write')",
              "size": "default",
              "textDirection": "ltr",
              "name": "industrial-lic-num-select",
              "type": "text",
              "onChange": func.call_f10_onChange,
              "classNames": "industrial-lic-num-select",
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              },
              "visible": func.f11_visible
            },
            "columnIndex": 0,
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "existingLicenceVisibility",
              "parentCompanylicenceNumberVal",
              "validateStatus_parentLicenceNumber",
              "help_parentLicenceNumber",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "kmiPMJY5iJwwr3qyU8Ccf",
        "type": "text",
        "props": {
          "variant": "h5",
          "content": "i18n('individual_note_title')",
          "displayAsHtml": false,
          "space": {
            "marginTop": ""
          }
        },
        "parentComponentId": "no_parent",
        "columnIndex": 0,
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "TeqEjrIt7-F-AXvmujyZc",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "<p>i18n('please_note_parent_company_licence_number_description')</p>\n",
          "displayAsHtml": "${state.displayAsHtml_fbecddafbc}",
          "space": {
            "marginBottom": "lg"
          }
        },
        "parentComponentId": "no_parent",
        "columnIndex": 0,
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "displayAsHtml_fbecddafbc"
        ]
      },
      {
        "componentId": "8k0XNWaVnHHqoIZAT1edM",
        "type": "text",
        "props": {
          "variant": "h5",
          "content": "i18n('individual_add_financial_title')",
          "displayAsHtml": false,
          "space": {
            "marginTop": "",
            "marginBottom": "lg"
          }
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "2NGS9x35gaEjwjaQxA4rW",
        "type": "grid",
        "props": {
          "columns": 2,
          "flexColumns": {
            "xl": 2,
            "lg": 2,
            "md": 2,
            "sm": 1
          },
          "space": {
            "marginTop": "",
            "marginBottom": "lg",
            "paddingTop": "",
            "paddingBottom": ""
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "LkR76kBaWK5lcz_DsNQBP",
            "type": "input",
            "props": {
              "label": "i18n('individual_total_investment')",
              "tabIndex": 0,
              "value": "${state.totalInvestmentValue}",
              "defaultValue": "",
              "aria-label": "i18n('individual_total_investment')",
              "validateStatus": "${state.validateStatusTotalInvestmentValue}",
              "disabled": "${state.comanyTotalDisabled}",
              "readonly": false,
              "help": "${state.helpValidateStatusTotalInvestmentValue}",
              "placeholder": "i18n('individual_write')",
              "size": "default",
              "textDirection": "ltr",
              "name": "total-investment-input",
              "type": "text",
              "onChange": func.call_f12_onChange,
              "classNames": "total-investment-input",
              "space": {
                "marginBottom": "md"
              }
            },
            "layout": "base",
            "columnIndex": 1,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "totalCapitalvalue",
              "totalInvestmentValue",
              "validateStatusTotalInvestmentValue",
              "comanyTotalDisabled",
              "helpValidateStatusTotalInvestmentValue",
              "actions"
            ]
          },
          {
            "componentId": "D_HzBQ4-K29Mqp7k3zhmP",
            "type": "input",
            "props": {
              "label": "i18n('individual_total_capital')",
              "tabIndex": 0,
              "value": "${state.totalCapitalvalue}",
              "defaultValue": "",
              "aria-label": "i18n('individual_total_capital')",
              "validateStatus": "${state.validateStatusTotalCapitalValue}",
              "disabled": "${state.comanyTotalDisabled}",
              "readonly": false,
              "help": "${state.helpValidateStatusTotalCapitalValue}",
              "placeholder": "i18n('individual_write')",
              "size": "default",
              "textDirection": "ltr",
              "name": "total-capital-input",
              "type": "text",
              "onChange": func.call_f13_onChange,
              "classNames": "total-capital-input",
              "space": {
                "marginBottom": "md"
              }
            },
            "layout": "base",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "totalCapitalvalue",
              "validateStatusTotalCapitalValue",
              "comanyTotalDisabled",
              "helpValidateStatusTotalCapitalValue",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "bdi1bV0vybEfmsfepMj8N",
        "type": "grid",
        "props": {
          "columns": 1,
          "flexColumns": {
            "xl": 1,
            "lg": 1,
            "md": 1,
            "sm": 1
          },
          "space": {
            "marginBottom": "md"
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "m3dI1AfLdb93Qtm5wwXV3",
            "type": "text",
            "props": {
              "variant": "h5",
              "content": "i18n('individual_review_ownership_title')",
              "displayAsHtml": false,
              "space": {
                "marginTop": "",
                "marginBottom": ""
              }
            },
            "layout": "base",
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale"
            ]
          },
          {
            "componentId": "EuKems008B_21CKJKm5d5",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "<p>i18n('individual_review_ownership_description')</p>\n",
              "displayAsHtml": "${state.displayAsHtml_fbecddafbc}",
              "space": {
                "paddingBottom": ""
              }
            },
            "layout": "base",
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "displayAsHtml_fbecddafbc"
            ]
          }
        ]
      },
      {
        "componentId": "qAV2nugBSo64zxuaWw4xZ",
        "type": "table",
        "props": {
          "size": "${state.size_cbfecdeddc}",
          "rowVerticalAlign": "top",
          "selectable": false,
          "editable": false,
          "searchable": false,
          "headerHidden": false,
          "disabledSelectionVisible": false,
          "clickable": true,
          "isSingleSelect": false,
          "columns": "${state.ownerDetailsColumns}",
          "items": "${state.ownerDetailsRow}",
          "title": "i18n('individual_owner_title')"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "size_cbfecdeddc",
          "ownerDetailsColumns",
          "ownerDetailsRow"
        ]
      },
      {
        "componentId": "KswXvIDUEZSf4GC4weMju",
        "type": "form",
        "props": {
          "definitions": [],
          "description": "<p></p>\n",
          "title": "",
          "formValues": "",
          "btnSubmitLabel": "i18n('button_next')",
          "includeCancelButton": true,
          "includeBackButton": false,
          "btnBackLabel": "i18n('back')",
          "validateStatus": {
            "valid": true,
            "message": ""
          },
          "btnBackArrow": "start",
          "btnSubmitArrow": "end",
          "btnBackClick": func.f14_btnBackClick,
          "btnSubmitClick": func.f15_btnSubmitClick,
          "btnCancelClick": func.f16_btnCancelClick,
          "space": {
            "marginBottom": "xl"
          },
          "btnSubmitDisabled": func.f17_btnSubmitDisabled
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "history",
          "actions",
          "fetch",
          "bpm",
          "isProcessStarted",
          "user",
          "selectedIndustrialType",
          "totalCapitalvalue",
          "totalInvestmentValue",
          "parentCompanylicenceNumberVal",
          "skipEconomicName",
          "englishPreferedName",
          "arabicPreferedName",
          "businessKey",
          "instanceId",
          "validateStatusTotalCapitalValue",
          "validateStatusTotalInvestmentValue",
          "validateStatus_industryType",
          "companyDetailsExistingBranchTypeVal",
          "validateStatus_parentLicenceNumber",
          "",
          "actions"
        ]
      }
    ],
    "symbols": [
      {
        "id": "u_7BA0xr8Q0oku7QtzxvE",
        "name": "Header",
        "definitions": [
          {
            "componentId": "0nSNUzm6NEjCkToaBdmCl",
            "type": "alert",
            "props": {
              "status": "",
              "message": "",
              "onClose": null
            },
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale"
            ]
          },
          {
            "componentId": "Y78zMYB80jxbXDw2WuI6o",
            "type": "flexbox",
            "props": {
              "flexWrap": true,
              "flexDirection": "column-reverse",
              "justifyContent": "initial",
              "alignItems": "initial",
              "alignContent": "initial",
              "classNames": "container",
              "space": {
                "marginBottom": "",
                "paddingBottom": ""
              }
            },
            "layout": "base",
            "children": [
              {
                "componentId": "uQukKScRci0q9DWO9b324",
                "parentComponentId": "Y78zMYB80jxbXDw2WuI6o",
                "type": "text",
                "props": {
                  "variant": "h1",
                  "content": "i18n('individual_main_title')",
                  "displayAsHtml": false,
                  "space": {
                    "paddingBottom": "",
                    "marginTop": "sm",
                    "marginBottom": ""
                  }
                },
                "layout": "base",
                "sharedProps": [
                  "i18n",
                  "locale"
                ]
              },
              {
                "componentId": "iyAIP8maLEkaZwI2t7dUy",
                "type": "breadcrumb",
                "props": {
                  "items": "${state.breadCrumItems}"
                },
                "layout": "base",
                "sharedProps": [
                  "i18n",
                  "locale",
                  "breadCrumItems"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "pOuCbjftw6l5xN5WTMEPb",
        "name": "Sidebar_without_card",
        "definitions": [
          {
            "componentId": "yeIBuc-dVj7toDnj_7R81",
            "type": "stepTracker",
            "props": {
              "title": "i18n('process')",
              "steps": "${state.steps}",
              "expandedStepIndexes": "${state.expandedStepIndexes}",
              "currentStepIndex": "${state.currentStepIndex}",
              "i18n": "",
              "currentSubStepIndex": "${state.currentSubStepIndex}",
              "visible": "{\"code\":\"  return props.state.showSidebar;\"}",
              "classNames": ""
            },
            "sharedProps": [
              "i18n",
              "locale",
              "showSidebar",
              "steps",
              "expandedStepIndexes",
              "currentStepIndex",
              "currentSubStepIndex"
            ]
          },
          {
            "columnIndex": 0,
            "componentId": "2eXUqMf3xlTH9Dity7T6_",
            "type": "relevantEntity2-0-0",
            "props": {
              "i18n": "",
              "title": "i18n('relevant_entity')",
              "entities": "${state.relevant_entities}",
              "closedAll": true,
              "space": {
                "marginTop": "xl",
                "paddingBottom": "lg"
              }
            },
            "sharedProps": [
              "i18n",
              "locale",
              "relevant_entities"
            ]
          }
        ]
      },
      {
        "id": "QAIBlH79UMJ7HmHuLz-ZV",
        "name": "Cancel",
        "definitions": [
          {
            "componentId": "VYmmZKYESJ6Hl1Uv96gdD",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "i18n('cancel_popup_desc')",
              "displayAsHtml": false
            },
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale"
            ]
          }
        ]
      }
    ],
    "sharedFunctions": {}
  },
  "layout": "sidebar",
  "state": {
    "mapState": [
      "user",
      "loggedIn",
      "ownerDetailsColumns",
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "isCancelModalOpen",
      "displayAsHtml_fbecddafbc",
      "tabIndex_aeecfaefed",
      "companyDetailsExistingBranchType",
      "companyDetailsExistingBranchTypeVal",
      "validateStatus_existingLicense",
      "help_existingLicense",
      "industrialList",
      "selectedIndustrialType",
      "validateStatus_industryType",
      "help_industryType",
      "existingLicenceVisibility",
      "parentCompanylicenceNumberVal",
      "validateStatus_parentLicenceNumber",
      "help_parentLicenceNumber",
      "totalCapitalvalue",
      "totalInvestmentValue",
      "validateStatusTotalInvestmentValue",
      "comanyTotalDisabled",
      "helpValidateStatusTotalInvestmentValue",
      "validateStatusTotalCapitalValue",
      "helpValidateStatusTotalCapitalValue",
      "size_cbfecdeddc",
      "ownerDetailsRow",
      "isProcessStarted",
      "skipEconomicName",
      "englishPreferedName",
      "arabicPreferedName",
      "businessKey",
      "instanceId",
      ""
    ],
    "mapDispatch": [
      "breadCrumItems",
      "helpValidateStatusTotalCapitalValue",
      "helpValidateStatusTotalInvestmentValue",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "ownerDetailsColumns",
      "ownerDetailsRow",
      "relevant_entities",
      "isCancelModalOpen",
      "companyDetailsExistingBranchTypeVal",
      "existingLicenceVisibility",
      "validateStatus_existingLicense",
      "help_existingLicense",
      "skipEconomicName",
      "selectedIndustrialType",
      "validateStatus_industryType",
      "help_industryType",
      "parentCompanylicenceNumberVal",
      "validateStatus_parentLicenceNumber",
      "help_parentLicenceNumber",
      "loading",
      "englishPreferedName",
      "arabicPreferedName",
      "totalInvestmentValue",
      "validateStatusTotalInvestmentValue",
      "totalCapitalvalue",
      "validateStatusTotalCapitalValue",
      "instanceId",
      "businessKey",
      "isProcessStarted",
      ""
    ]
  },
  "init": func.init
}]

export default pageConfig;