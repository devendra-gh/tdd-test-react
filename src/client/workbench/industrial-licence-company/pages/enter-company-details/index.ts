import * as func from './functions';


          


          const pageConfig = [{
  "title": "Enter Company Details",
  "pageId": "VAjpz0kjkdq47Cl0pzRgZ",
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
        "componentId": "wlbo5ZWwqTU2cYHE0wsdv",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('individual_enter_company_title')",
          "displayAsHtml": false,
          "space": {
            "marginTop": ""
          }
        },
        "layout": "base",
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
            "paddingBottom": "md"
          },
          "classNames": ""
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "displayAsHtml_fbecddafbc"
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
            "componentId": "VZ4faYE7AUsEgsAovAF1E",
            "type": "select",
            "props": {
              "id": "",
              "tabIndex": 0,
              "placeholder": "i18n('individual_select')",
              "label": "i18n('legal_form')",
              "items": "${state.legalFormSelect}",
              "value": "${state.legalType}",
              "isOpen": false,
              "disabled": true,
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": null,
              "help": "i18n('legalFormHelp')",
              "size": "default",
              "aria-label": "i18n('legal_form')",
              "popupWidth": 0,
              "popupAlign": "start",
              "space": {
                "marginBottom": "md"
              }
            },
            "columnIndex": 0,
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale",
              "legalFormSelect",
              "legalType"
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
              "onSearch": func.f1_onSearch,
              "onChange": func.call_f2_onChange,
              "onOpenChange": func.f3_onOpenChange,
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
          }
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
              "onChange": func.call_f4_onChange,
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
              "onChange": func.call_f5_onChange,
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
        "componentId": "m3dI1AfLdb93Qtm5wwXV3",
        "type": "text",
        "props": {
          "variant": "h5",
          "content": "i18n('individual_review_ownership_title')",
          "displayAsHtml": false,
          "space": {
            "marginTop": "",
            "marginBottom": "md"
          }
        },
        "layout": "base",
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
            "paddingBottom": "",
            "marginBottom": "lg"
          }
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "displayAsHtml_fbecddafbc"
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
        "componentId": "Oz3NPxSuNXaFXGKxfvbWa",
        "type": "form",
        "props": {
          "definitions": [],
          "description": "<p></p>\n",
          "title": "",
          "formValues": "",
          "btnSubmitLabel": "i18n('button_next')",
          "includeCancelButton": true,
          "includeBackButton": true,
          "btnBackLabel": "i18n('back')",
          "validateStatus": {
            "valid": true,
            "message": ""
          },
          "btnBackArrow": "start",
          "btnSubmitArrow": "end",
          "btnBackClick": func.f6_btnBackClick,
          "btnSubmitClick": func.f7_btnSubmitClick,
          "btnCancelClick": func.f8_btnCancelClick,
          "space": {
            "marginBottom": "xl"
          },
          "btnSubmitDisabled": func.f9_btnSubmitDisabled
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "bpm",
          "businessKey",
          "legalType",
          "selectedIndustrialType",
          "totalCapitalvalue",
          "totalInvestmentValue",
          "validateStatusTotalCapitalValue",
          "validateStatusTotalInvestmentValue",
          "validateStatus_industryType",
          "",
          "actions"
        ]
      },
      {
        "componentId": "p_FK8v3zLcTOzqrroh9hE",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isCancelModalOpen}",
          "title": "i18n('cancel_application')",
          "buttonCombination": "primary-secondary",
          "primaryButton": {
            "label": "i18n('cancel_popup_btn_yes')",
            "onClick": func.f10_primaryButton_onClick
          },
          "secondaryButton": {
            "onClick": func.f11_secondaryButton_onClick,
            "label": "i18n('cancel_popup_btn_no')"
          },
          "linkButton": "",
          "onClose": func.f12_onClose,
          "children": [
            {
              "componentId": "Rss0QvQnyApYxH97BAjrI",
              "type": "symbol",
              "props": {
                "symbol": "Rss0QvQnyApYxH97BAjrI"
              }
            }
          ],
          "maxWidth": 600
        },
        "layout": "base",
        "parentComponentId": "no_parent",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "isCancelModalOpen",
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
              "title": "i18n('relevant-entity')",
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
        "id": "Rss0QvQnyApYxH97BAjrI",
        "name": "Symbol 10",
        "definitions": [
          {
            "componentId": "VUyg6_71f0QdOHloj9Q7I",
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
      "legalType",
      "legalTypeArb",
      "ownerDetailsColumns",
      "partners",
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "displayAsHtml_fbecddafbc",
      "legalFormSelect",
      "tabIndex_aeecfaefed",
      "industrialList",
      "selectedIndustrialType",
      "validateStatus_industryType",
      "help_industryType",
      "totalCapitalvalue",
      "totalInvestmentValue",
      "validateStatusTotalInvestmentValue",
      "comanyTotalDisabled",
      "helpValidateStatusTotalInvestmentValue",
      "validateStatusTotalCapitalValue",
      "helpValidateStatusTotalCapitalValue",
      "size_cbfecdeddc",
      "ownerDetailsRow",
      "businessKey",
      "",
      "isCancelModalOpen"
    ],
    "mapDispatch": [
      "loading",
      "breadCrumItems",
      "helpValidateStatusTotalCapitalValue",
      "helpValidateStatusTotalInvestmentValue",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "legalFormSelect",
      "ownerDetailsColumns",
      "ownerDetailsRow",
      "selectedIndustrialType",
      "validateStatus_industryType",
      "help_industryType",
      "totalInvestmentValue",
      "validateStatusTotalInvestmentValue",
      "totalCapitalvalue",
      "validateStatusTotalCapitalValue",
      "isCancelModalOpen",
      ""
    ]
  },
  "init": func.init
}]

export default pageConfig;