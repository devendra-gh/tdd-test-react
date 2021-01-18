import * as func from './functions';


          


          const pageConfig = [{
  "title": "Enter Trade Name",
  "pageId": "Kw156lh2r4oOUur89T6jK",
  "path": "/enter-trade-name",
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
        "componentId": "gFKzYp5zadxC6lpU4wLRU",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('company_enter_trade_name_title') ",
          "displayAsHtml": false,
          "space": {
            "marginTop": ""
          }
        },
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "GNz5Fqu4ZIddHejLPP8FJ",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "<p>i18n('company_enter_trade_name_description_1') <a href=\"${state.tradeNameLink}\" target=\"_blank\">i18n('company_enter_trade_name_description_2')</a>   i18n('company_enter_trade_name_description_3')</p>\n",
          "displayAsHtml": true,
          "space": {
            "marginBottom": "lg"
          },
          "classNames": ""
        },
        "sharedProps": [
          "i18n",
          "locale",
          "tradeNameLink"
        ]
      },
      {
        "componentId": "5VIWbIChgQNvYmgIIVrr0",
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
            "marginBottom": "lg"
          }
        },
        "children": [
          {
            "componentId": "xloQxh-Iuydtuh1yY8jpl",
            "type": "input",
            "props": {
              "label": "i18n('company_tn_number')",
              "tabIndex": 0,
              "value": "${state.tnNumber}",
              "defaultValue": "",
              "aria-label": "i18n('company_tn_number')",
              "validateStatus": "${state.tradeNumberValidateStatus}",
              "disabled": false,
              "readonly": false,
              "help": "${state.tradeNumberHelpMsg}",
              "placeholder": "i18n('individual_write')",
              "size": "default",
              "textDirection": "ltr",
              "name": "",
              "type": "text",
              "onChange": func.call_f1_onChange,
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
              "tnNumber",
              "tradeNumberValidateStatus",
              "tradeNumberHelpMsg",
              "actions"
            ]
          },
          {
            "componentId": "XSdw1Bxzk0c6EYnIaK-Lr",
            "type": "button",
            "props": {
              "locale": "en",
              "label": "i18n('company_check')",
              "type": "button",
              "uiType": "secondary",
              "disabled": "${state.tradeNumberCheckDisabled}",
              "aria-label": "i18n('company_check')",
              "size": "medium",
              "icon": null,
              "alignIcon": "start",
              "withArrow": false,
              "active": false,
              "hidden": false,
              "iconTooltip": "",
              "applyAutoWidth": false,
              "space": {
                "marginTop": "md",
                "marginLeft": "",
                "marginRight": "",
                "marginBottom": "md"
              },
              "onClick": func.f2_onClick
            },
            "layout": "base",
            "columnIndex": 1,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "fetch",
              "tnNumber",
              "tradeNumberCheckDisabled",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "_PlYxYO8zVpsvNWI51h8t",
        "type": "table",
        "props": {
          "size": "default",
          "selectable": false,
          "clickable": false,
          "isSingleSelect": true,
          "columns": "${state.tradeNameTableColumn}",
          "items": "${state.tradeNameTableRow}",
          "title": "i18n('trade_name_table_title')",
          "space": {
            "marginTop": "",
            "marginBottom": ""
          },
          "onSelectionChange": func.call_f3_onSelectionChange,
          "visible": func.f4_visible,
          "onClick": func.f5_onClick,
          "status": "${state.tradeNameStatus}"
        },
        "sharedProps": [
          "i18n",
          "locale",
          "tradeNameStatus",
          "tradeNameTableColumn",
          "tradeNameTableRow"
        ]
      },
      {
        "componentId": "cEAqhZkS654LImlWCy68k",
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
          "btnBackClick": func.f6_btnBackClick,
          "btnSubmitClick": func.f7_btnSubmitClick,
          "btnCancelClick": func.f8_btnCancelClick,
          "space": {
            "marginBottom": "xl"
          },
          "btnSubmitDisabled": func.f9_btnSubmitDisabled
        },
        "sharedProps": [
          "i18n",
          "locale",
          "history",
          "actions",
          "fetch",
          "bpm",
          "partners",
          "user",
          "isProcessStarted",
          "tnNumber",
          "tradeNameCapId",
          "englishPreferedName",
          "arabicPreferedName",
          "branchType",
          "mainLicenseNumber",
          "isbranch",
          "businessKey",
          "instanceId",
          "tradeNameBtnDisabled",
          "",
          "actions"
        ]
      },
      {
        "componentId": "hAHgSu9r9Dg8_vdwCJvcr",
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
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "tradeNameLink",
      "tnNumber",
      "tradeNumberValidateStatus",
      "tradeNumberHelpMsg",
      "tradeNumberCheckDisabled",
      "tradeNameStatus",
      "tradeNameTableColumn",
      "tradeNameTableRow",
      "partners",
      "isProcessStarted",
      "tradeNameCapId",
      "englishPreferedName",
      "arabicPreferedName",
      "branchType",
      "mainLicenseNumber",
      "isbranch",
      "businessKey",
      "instanceId",
      "tradeNameBtnDisabled",
      "",
      "isCancelModalOpen"
    ],
    "mapDispatch": [
      "breadCrumItems",
      "tradeNameStatus",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "relevant_entities",
      "tradeNameLink",
      "tnNumber",
      "tradeNumberValidateStatus",
      "tradeNumberHelpMsg",
      "tradeNumberCheckDisabled",
      "tradeNameTableRow",
      "tradeNameCapId",
      "englishPreferedName",
      "arabicPreferedName",
      "partners",
      "tradeNamePartnersList",
      "branchType",
      "mainLicenseNumber",
      "isbranch",
      "legalType",
      "legalTypeArb",
      "tradeNameBtnDisabled",
      "loading",
      "instanceId",
      "businessKey",
      "isProcessStarted",
      "isCancelModalOpen",
      ""
    ]
  },
  "init": func.init
}]

export default pageConfig;