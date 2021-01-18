import * as func from './functions';


          


          const pageConfig = [{
  "title": "Choose economic name",
  "pageId": "4YyfyL_wSi3gXGQvpfhxQ",
  "expanded": true,
  "path": "/choose-economic-name",
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
        "componentId": "YnntJ2WxNT_H4VkgjIa0U",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('individual_choose_economic_name_title')",
          "displayAsHtml": false
        },
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "i06FtlvabOV2r6km1M9OV",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "i18n('individual_choose_economic_name_description')",
          "displayAsHtml": false,
          "space": {
            "marginBottom": "lg"
          }
        },
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "OHLTqBgmsfYwy9N8J4rQM",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "<p></p>\n",
          "displayAsHtml": true,
          "space": {
            "marginBottom": "lg"
          }
        },
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "sjnIfSHoZdE4bkTl2q5RW",
        "type": "checkbox",
        "props": {
          "name": "autogenerator-name",
          "id": "autogenerator-name",
          "tabIndex": 0,
          "autoFocus": false,
          "readOnly": false,
          "label": "i18n('individual_autogenerate_name')",
          "disabled": false,
          "uiType": "",
          "description": "",
          "validateStatus": "",
          "meta": "",
          "space": {
            "marginBottom": "lg"
          },
          "classNames": "autogenerator-name",
          "onClick": func.f1_onClick,
          "onChange": func.call_f2_onChange,
          "checked": "${state.autogenerateChecked}"
        },
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "fetch",
          "autogenerateChecked",
          "actions"
        ]
      },
      {
        "componentId": "Ievo585X2FbYGCTnTf0Pp",
        "type": "grid",
        "props": {
          "columns": 2,
          "flexColumns": {
            "xl": 2,
            "lg": 2,
            "md": 1,
            "sm": 1
          },
          "space": {
            "marginBottom": "md"
          }
        },
        "children": [
          {
            "componentId": "oNGZoIwPnhXwqVoEGFcpU",
            "type": "input",
            "props": {
              "label": "i18n('individual_economic_name_en')",
              "tabIndex": "${state.element_tabIndex}",
              "value": "${state.englishPreferedName}",
              "defaultValue": "",
              "aria-label": "i18n('individual_economic_name_en')",
              "validateStatus": "${state.englishPreferedNameValidStatus}",
              "disabled": "${state.economicNameEngDisabled}",
              "readonly": false,
              "help": "${state.englishPreferedNameHelpMsg}",
              "placeholder": "i18n('individual_economic_name_en_placeholder')",
              "size": "default",
              "textDirection": "ltr",
              "name": "economic-name-en",
              "type": "text",
              "onChange": func.call_f3_onChange,
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              },
              "classNames": "economic-name-en",
              "onBlur": func.f4_onBlur
            },
            "layout": "base",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "fetch",
              "englishPreferedName",
              "element_tabIndex",
              "englishPreferedNameValidStatus",
              "economicNameEngDisabled",
              "englishPreferedNameHelpMsg",
              "actions"
            ]
          },
          {
            "componentId": "XlgySNxIg8MnW9-LuKor5",
            "type": "input",
            "props": {
              "label": "i18n('individual_economic_name_ar')",
              "tabIndex": "${state.element_tabIndex}",
              "value": "${state.arabicPreferedName}",
              "defaultValue": "",
              "aria-label": "i18n('individual_economic_name_ar')",
              "validateStatus": "${state.arabicPreferedNameValidStatus}",
              "disabled": "${state.economicNameArbDisabled}",
              "readonly": false,
              "help": "${state.arabicPreferedNameHelpMsg}",
              "placeholder": "i18n('individual_economic_name_ar_placeholder')",
              "size": "default",
              "textDirection": "rtl",
              "name": "economic-name-ar",
              "type": "text",
              "onChange": func.call_f5_onChange,
              "space": {
                "marginBottom": "md"
              },
              "classNames": "economic-name-ar"
            },
            "layout": "base",
            "columnIndex": 1,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "element_tabIndex",
              "arabicPreferedName",
              "arabicPreferedNameValidStatus",
              "economicNameArbDisabled",
              "arabicPreferedNameHelpMsg",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "4mhbkMha7Gr6APb8qj_BK",
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
            "marginBottom": "md"
          }
        },
        "children": [
          {
            "componentId": "lhMCt20f-SUYpw9C5BCl3",
            "type": "button",
            "props": {
              "locale": "en",
              "label": "i18n('individual_check_availability')",
              "type": "button",
              "uiType": "secondary",
              "disabled": "${state.checkAvailabilityBtnDisabled}",
              "aria-label": "i18n('individual_check_availability')",
              "size": "default",
              "icon": null,
              "alignIcon": "end",
              "withArrow": false,
              "active": false,
              "hidden": false,
              "iconTooltip": "",
              "applyAutoWidth": false,
              "onClick": func.call_f6_onClick,
              "visible": func.f7_visible,
              "name": "check-availabilty-btn",
              "classNames": "check-availabilty-btn",
              "space": {
                "marginBottom": "md"
              }
            },
            "columnIndex": 0,
            "layout": "base",
            "parentComponentId": "Ievo585X2FbYGCTnTf0Pp",
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "fetch",
              "englishPreferedName",
              "arabicPreferedName",
              "basket",
              "checkAvailabilityBtnDisabled",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "VaLUk767_iu-2Zp4NGZH1",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "i18n('individual_name_suggestions')",
          "displayAsHtml": false,
          "visible": func.f8_visible
        },
        "sharedProps": [
          "i18n",
          "locale",
          "showNameSuggestions",
          "suggestionNoteVisibility"
        ]
      },
      {
        "componentId": "0-nGx4LME-pbXhPjjyG17",
        "type": "table",
        "props": {
          "size": "default",
          "selectable": true,
          "clickable": false,
          "isSingleSelect": true,
          "columns": "${state.tableEconomicNameColumns}",
          "items": "${state.tableEconomicNameItems}",
          "title": "i18n('individual_suggested_economic_names')",
          "space": {
            "marginTop": "",
            "marginBottom": ""
          },
          "onSelectionChange": func.call_f9_onSelectionChange,
          "visible": func.f10_visible,
          "onClick": func.f11_onClick
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "tableEconomicNameItems",
          "showNameSuggestions",
          "tableEconomicNameColumns",
          "actions"
        ]
      },
      {
        "componentId": "lkNsjNMfixURKO74n7iNt",
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
          "btnBackClick": func.f12_btnBackClick,
          "btnSubmitClick": func.f13_btnSubmitClick,
          "btnCancelClick": func.f14_btnCancelClick,
          "space": {
            "marginBottom": "xl"
          },
          "btnSubmitDisabled": func.f15_btnSubmitDisabled
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "fetch",
          "bpm",
          "businessKey",
          "englishPreferedName",
          "arabicPreferedName",
          "economicNameDisabled",
          "",
          "actions"
        ]
      },
      {
        "componentId": "GwhKY_SYNpBZh3s3AXMTG",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isCancelModalOpen}",
          "title": "i18n('cancel_application')",
          "buttonCombination": "primary-secondary",
          "primaryButton": {
            "label": "i18n('cancel_popup_btn_yes')",
            "onClick": func.f16_primaryButton_onClick
          },
          "secondaryButton": {
            "onClick": func.f17_secondaryButton_onClick,
            "label": "i18n('cancel_popup_btn_no')",
            "disabled": false,
            "withArrow": false
          },
          "linkButton": "",
          "onClose": func.f18_onClose,
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
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "autogenerateChecked",
      "englishPreferedName",
      "element_tabIndex",
      "englishPreferedNameValidStatus",
      "economicNameEngDisabled",
      "englishPreferedNameHelpMsg",
      "arabicPreferedName",
      "arabicPreferedNameValidStatus",
      "economicNameArbDisabled",
      "arabicPreferedNameHelpMsg",
      "basket",
      "checkAvailabilityBtnDisabled",
      "showNameSuggestions",
      "suggestionNoteVisibility",
      "tableEconomicNameItems",
      "tableEconomicNameColumns",
      "businessKey",
      "economicNameDisabled",
      "",
      "isCancelModalOpen"
    ],
    "mapDispatch": [
      "loading",
      "breadCrumItems",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "autogenerateChecked",
      "economicNameEngDisabled",
      "economicNameArbDisabled",
      "checkAvailabilityBtnDisabled",
      "arabicPreferedName",
      "englishPreferedName",
      "economicNameDisabled",
      "englishPreferedNameValidStatus",
      "arabicPreferedNameValidStatus",
      "showNameSuggestions",
      "suggestionNoteVisibility",
      "tableEconomicNameItems",
      "englishPreferedNameHelpMsg",
      "arabicPreferedNameHelpMsg",
      "isCancelModalOpen",
      ""
    ]
  },
  "init": func.init
}]

export default pageConfig;