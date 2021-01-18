import * as func from './functions';


          


          const pageConfig = [{
  "title": "Licence Issued",
  "pageId": "f78WF4pTn4KWZS8OL6JAd",
  "expanded": true,
  "path": "/licence-issued",
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
        "componentId": "XEYcR2qk7daNmvaKiAwXF",
        "type": "notice",
        "props": {
          "status": "success",
          "icon": null,
          "title": "i18n('licenceStatus_issued_title')",
          "tags": "${state.individualIssuedTags}",
          "content": "i18n('licenceStatus_issued_description')",
          "buttons": [
            {
              "id": "ke5ji9oz",
              "label": "i18n('button_download')",
              "type": "submit",
              "uiType": "primary",
              "onClick": func.f1_buttons_onClick,
              "aria-label": "i18n('button_download')"
            },
            {
              "id": "ke5jjb0r",
              "label": "i18n('button_dashboard')",
              "type": "submit",
              "uiType": "secondary",
              "onClick": func.f2_buttons_onClick,
              "aria-label": "i18n('button_dashboard')"
            }
          ],
          "space": {
            "marginBottom": "xl",
            "paddingLeft": "",
            "paddingRight": ""
          },
          "classNames": ""
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "fetch",
          "individualIssuedTags",
          "actions"
        ]
      },
      {
        "componentId": "GOTM6JCp6CeYHwW19z6G_",
        "type": "customerSatisfaction",
        "props": {
          "i18n": "",
          "status": "idle",
          "emotion": "",
          "onSubmit": "",
          "rates": [
            {
              "value": "",
              "starsCount": 3,
              "min": "",
              "max": "",
              "step": "",
              "id": "kbu0xo8l"
            }
          ],
          "withComment": false,
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
        "componentId": "k8Cb_69S_zXZI2J39onOZ",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('licenceStatus_nextStep_title')",
          "displayAsHtml": false,
          "classNames": "",
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
        "componentId": "TEJTipP-hZOMOgbuU5Zor",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "i18n('licenceStatus_nextStep_description')",
          "displayAsHtml": false
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "0nuwmZD0GPzPhwEBHaN-T",
        "type": "symbol",
        "props": {
          "symbol": "_rSFAtv4sbf3yNFwRaLhl",
          "space": {
            "marginBottom": ""
          }
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
      "skipEconomicName",
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "individualIssuedTags"
    ],
    "mapDispatch": [
      "individualIssuedTags",
      "breadCrumItems",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "loading"
    ]
  },
  "init": func.init,
  "onPageInit": func.onPageInit,
  "fromProcessState": {
    "processName": "workbench",
    "variables": [
      "apTransactionNumber",
      "submitDate",
      "skipEconomicName",
      "instanceId"
    ]
  }
}]

export default pageConfig;