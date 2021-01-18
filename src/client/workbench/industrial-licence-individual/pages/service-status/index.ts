import * as func from './functions';


          


          const pageConfig = [{
  "title": "Service Status",
  "pageId": "1OOmwMqqRy3Qy8CZ_jY3E",
  "expanded": true,
  "path": "/service-status",
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
        "componentId": "WUK4V6x5Qs4ylj-gYM0GP",
        "type": "notice",
        "props": {
          "status": "actionRequired",
          "icon": null,
          "title": "i18n('serviceStatus_actionRequired_title')",
          "tags": [],
          "content": "i18n('serviceStatus_actionRequired_description')",
          "buttons": [],
          "space": {
            "marginBottom": "xl"
          }
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "ojvfR7UrDVOCllLB_vNIG",
        "type": "button",
        "props": {
          "locale": "en",
          "label": "i18n('button_login_again')",
          "type": "button",
          "uiType": "secondary",
          "disabled": false,
          "aria-label": "i18n('button_login_again')",
          "size": "default",
          "icon": null,
          "alignIcon": "end",
          "withArrow": false,
          "active": false,
          "hidden": false,
          "iconTooltip": "",
          "applyAutoWidth": false,
          "space": {
            "marginTop": "",
            "marginBottom": "xl"
          },
          "visible": func.f1_visible,
          "onClick": func.f2_onClick,
          "name": "service-not-applicable-btn",
          "classNames": "service-not-applicable-btn"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "referenceNo",
          "user"
        ]
      },
      {
        "componentId": "_Q0l2U_rbt-OAtNkFH-Rd",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('relatedServices')",
          "displayAsHtml": false
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "lqOnkSzzyHqxrj1ch7Dq4",
        "parentComponentId": "no_parent",
        "type": "symbol",
        "props": {
          "symbol": "_rSFAtv4sbf3yNFwRaLhl"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      }
    ],
    "symbols": [
      {
        "id": "_rSFAtv4sbf3yNFwRaLhl",
        "name": "related_services",
        "definitions": [
          {
            "componentId": "7Dyp8Ryc_Uox5AXD8er46",
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
                "marginBottom": "xl",
                "marginTop": ""
              }
            },
            "layout": "base",
            "children": [
              {
                "componentId": "IHbxFK7bgcfvbhplRQjpW",
                "type": "list",
                "props": {
                  "i18n": "",
                  "title": "",
                  "items": [
                    {
                      "id": "kc076fsm",
                      "label": "i18n('relatedServices_1')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/social-services/service-list/financialSupportForEntrepreneurs",
                      "linkTarget": "_parent"
                    },
                    {
                      "id": "kc078fhp",
                      "label": "i18n('relatedServices_2')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/start-your-business/operate/banking-and-financing",
                      "linkTarget": ""
                    },
                    {
                      "id": "kc09mlzw",
                      "label": "i18n('relatedServices_3')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/start-your-business/operate/business-location-setup",
                      "linkTarget": ""
                    },
                    {
                      "id": "kc09mwa7",
                      "label": "i18n('relatedServices_4')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/start-your-business/operate/employment",
                      "linkTarget": ""
                    }
                  ],
                  "withArrow": true,
                  "withBoldContent": true,
                  "expanded": false,
                  "allowedNotExpandedLimit": 5,
                  "showMoreLabels": [],
                  "applyStrictWidth": false,
                  "uiType": "link",
                  "onClick": {
                    "type": "func",
                    "actions": []
                  },
                  "classNames": "releatedServicesList",
                  "space": {
                    "marginBottom": "sm"
                  }
                },
                "layout": "base",
                "columnIndex": 0,
                "sharedProps": [
                  "i18n",
                  "locale"
                ]
              },
              {
                "componentId": "vpaNky4Arb3YrRkdx8fII",
                "type": "list",
                "props": {
                  "i18n": "",
                  "title": "",
                  "items": [
                    {
                      "id": "kc076fsm",
                      "label": "i18n('relatedServices_5')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/start-your-business/operate/recruitment-tracker",
                      "linkTarget": "_parent"
                    },
                    {
                      "id": "kc078fhp",
                      "label": "i18n('relatedServices_6')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/start-your-business/operate/employment-docs",
                      "linkTarget": ""
                    },
                    {
                      "id": "kc09nhi3",
                      "label": "i18n('relatedServices_7')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/discover-abudhabi-business/info/funding",
                      "linkTarget": ""
                    },
                    {
                      "id": "kc09nnms",
                      "label": "i18n('relatedServices_8')",
                      "description": "",
                      "link": "https://www.tamm.abudhabi/journeys/start-your-business/operate/trademark-registration",
                      "linkTarget": ""
                    }
                  ],
                  "withArrow": true,
                  "withBoldContent": true,
                  "expanded": false,
                  "allowedNotExpandedLimit": 5,
                  "showMoreLabels": [],
                  "applyStrictWidth": false,
                  "uiType": "link",
                  "onClick": {
                    "type": "func",
                    "actions": []
                  }
                },
                "layout": "base",
                "columnIndex": 1,
                "sharedProps": [
                  "i18n",
                  "locale"
                ]
              }
            ]
          }
        ]
      },
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
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "referenceNo"
    ],
    "mapDispatch": [
      "showSidebar",
      "breadCrumItems",
      "relevant_entities"
    ]
  },
  "init": func.init
}]

export default pageConfig;