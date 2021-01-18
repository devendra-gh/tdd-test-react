import * as func from './functions';


          


          const pageConfig = [{
  "title": "Upload Document",
  "pageId": "v-dIU2PBN3DrZlEOZvWkY",
  "path": "/upload-document",
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
        "componentId": "x5fEJi0XGF99QDVUNwsn8",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('company_upload_document_title')",
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
        "componentId": "e96YLouzeAGwcBOliZTz-",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "i18n('company_upload_document_desc')",
          "displayAsHtml": false,
          "space": {
            "marginBottom": "lg"
          },
          "classNames": ""
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "NAgemtDTmlSCAka-GG4kK",
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
        "layout": "base",
        "children": [
          {
            "componentId": "iqaYhE5utgilQlFNmMBNF",
            "type": "fileUpload",
            "props": {
              "id": "",
              "tabIndex": 0,
              "multiple": true,
              "validateStatus": "",
              "validationMessage": "",
              "help": "i18n('accepted_file_types')",
              "disabled": false,
              "label": "",
              "accept": [
                "application/pdf"
              ],
              "files": "${state.files}",
              "removeAriaLabel": "file-remove-button",
              "uploadAriaLabel": "file-upload",
              "removeAcceptForIOS": false,
              "i18n": "",
              "maxSize": 2147483648,
              "onRemove": func.call_f1_onRemove,
              "onChange": func.call_f2_onChange,
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              }
            },
            "layout": "base",
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "files",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "Fo2r7izHWP4AfdH05N8l_",
        "type": "form",
        "props": {
          "definitions": [],
          "description": "<p></p>\n",
          "title": "",
          "formValues": "",
          "btnSubmitLabel": "i18n('Global_Submit')",
          "includeCancelButton": true,
          "includeBackButton": true,
          "btnBackLabel": "i18n('back')",
          "validateStatus": {
            "valid": true,
            "message": ""
          },
          "btnBackArrow": "start",
          "btnSubmitArrow": "end",
          "btnBackClick": func.f3_btnBackClick,
          "btnSubmitClick": func.f4_btnSubmitClick,
          "btnCancelClick": func.f5_btnCancelClick,
          "space": {
            "marginBottom": "xl"
          },
          "btnSubmitDisabled": func.f6_btnSubmitDisabled
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "fetch",
          "bpm",
          "businessKey",
          "files",
          "uploadDocumentNextBtnDisabled",
          "",
          "actions"
        ]
      },
      {
        "componentId": "n3oR8-GA8CUFZdHvWd9Ud",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isCancelModalOpen}",
          "title": "i18n('cancel_application')",
          "buttonCombination": "primary-secondary",
          "primaryButton": {
            "label": "i18n('cancel_popup_btn_yes')",
            "onClick": func.f7_primaryButton_onClick
          },
          "secondaryButton": {
            "onClick": func.f8_secondaryButton_onClick,
            "label": "i18n('cancel_popup_btn_no')"
          },
          "linkButton": "",
          "onClose": func.f9_onClose,
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
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "files",
      "businessKey",
      "uploadDocumentNextBtnDisabled",
      "",
      "isCancelModalOpen"
    ],
    "mapDispatch": [
      "breadCrumItems",
      "loading",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "files",
      "uploadDocumentNextBtnDisabled",
      "isCancelModalOpen",
      ""
    ]
  },
  "init": func.init
}]

export default pageConfig;