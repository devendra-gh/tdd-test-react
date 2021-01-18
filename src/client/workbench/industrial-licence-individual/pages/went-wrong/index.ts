import * as func from './functions';


          


          const pageConfig = [{
  "title": "Went Wrong",
  "pageId": "9s9dTHj8JznkdqwuHtz-N",
  "expanded": true,
  "path": "/went-wrong",
  "template": "custom",
  "props": {
    "definitions": [
      {
        "componentId": "dG0c57seTBNOhDpRq86L1",
        "type": "notice",
        "props": {
          "status": "failure",
          "icon": null,
          "title": "i18n('somethingWentWrong')",
          "tags": [],
          "content": "",
          "buttons": []
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "JNhy7HXB4HaPtdegrzZgW",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "${state.somethingWentWrongContent}",
          "displayAsHtml": false,
          "space": {
            "marginBottom": "xl"
          }
        },
        "sharedProps": [
          "i18n",
          "locale",
          "somethingWentWrongContent"
        ]
      },
      {
        "componentId": "Kq2G-y2rSnYV2AzQHEmKh",
        "type": "button",
        "props": {
          "locale": "en",
          "label": "i18n('back')",
          "type": "button",
          "uiType": "secondary",
          "disabled": false,
          "aria-label": "i18n('back')",
          "size": "default",
          "icon": null,
          "alignIcon": "start",
          "withArrow": true,
          "active": false,
          "hidden": false,
          "iconTooltip": "",
          "applyAutoWidth": false,
          "space": {
            "marginTop": "",
            "marginBottom": "xl"
          },
          "onClick": func.f1_onClick,
          "name": "went-wrong-back-btn",
          "classNames": "went-wrong-back-btn"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "bpm",
          "businessKey"
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
      }
    ],
    "sharedFunctions": {}
  },
  "layout": "sidebar",
  "state": {
    "mapState": [
      "user",
      "loggedIn",
      "responseDescription",
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "somethingWentWrongContent",
      "businessKey"
    ],
    "mapDispatch": [
      "breadCrumItems",
      "showSidebar",
      "loading",
      "somethingWentWrongContent"
    ]
  },
  "init": func.init,
  "requires": null
}]

export default pageConfig;