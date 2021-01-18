import * as func from './functions';


          


          const pageConfig = [{
  "title": "Application Approved",
  "pageId": "EldnNJVOnX2Z6WJnW5sC0",
  "expanded": true,
  "path": "/application-approved",
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
        "componentId": "HRb9nfYnhktoJp2kcFcoD",
        "type": "notice",
        "props": {
          "status": "success",
          "icon": null,
          "title": "i18n('licenceStatus_approved_title')",
          "tags": "${state.individualIssuedTags}",
          "content": "i18n('licenceStatus_approved_description')",
          "buttons": [],
          "space": {
            "marginBottom": "xl"
          }
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "individualIssuedTags"
        ]
      },
      {
        "componentId": "iHiQzTPcdhBL8deaxzHBY",
        "type": "table",
        "props": {
          "size": "${state.size_fceaffcbba}",
          "selectable": false,
          "clickable": true,
          "columns": "${state.paymentSummaryColoum}",
          "items": "${state.paymentSummaryRows}",
          "title": "i18n('paymentSummary')",
          "space": {
            "marginTop": "",
            "marginBottom": "xl",
            "marginLeft": "",
            "paddingLeft": ""
          },
          "search": "${state.search_cdeaffaebe}",
          "commonSelection": "${state.commonSelection_ccbdbafcfe}",
          "classNames": "application-approved-payment-summary-table"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "size_fceaffcbba",
          "paymentSummaryColoum",
          "paymentSummaryRows",
          "search_cdeaffaebe",
          "commonSelection_ccbdbafcfe"
        ]
      },
      {
        "componentId": "hfP1KDIjvSOm0zS-7ofyC",
        "type": "total",
        "props": {
          "unit": "AED",
          "isValueFirst": false,
          "isButtonVisible": false,
          "onClick": "nop()",
          "buttonDisabled": false,
          "value": "${state.paymentTotal}",
          "space": {
            "marginBottom": "xl"
          }
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "paymentTotal"
        ]
      },
      {
        "componentId": "uSm40Yei0_pjrFzwNe7Q6",
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
            "marginBottom": "xl"
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "chvlRhXpWybMSl8L4xMk9",
            "type": "text",
            "props": {
              "variant": "h5",
              "content": "i18n('please_note')",
              "displayAsHtml": false,
              "space": {
                "marginTop": ""
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
            "componentId": "WXqla5rwN4pOOpQhhtOhE",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "<p>i18n('please_note_description')</p>\n",
              "displayAsHtml": "${state.displayAsHtml_fbecddafbc}"
            },
            "layout": "base",
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "displayAsHtml_fbecddafbc"
            ]
          },
          {
            "componentId": "lm7OU2QCSKpxiCKbFnI7f",
            "type": "link",
            "props": {
              "href": "",
              "children": null,
              "uiType": "text",
              "appearance": "default",
              "disabled": false,
              "tammHref": "/www.tamm.abudhabi/",
              "className": "",
              "label": "i18n('learn_more')",
              "onClick": func.f1_onClick,
              "aria-label": "i18n('learn_more')"
            },
            "parentComponentId": "no_parent",
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "wFOwvda5yztyF9mGFNpIM",
        "type": "button",
        "props": {
          "locale": "en",
          "label": "i18n('button_next')",
          "type": "button",
          "uiType": "primary",
          "disabled": false,
          "aria-label": "i18n('button_next')",
          "size": "default",
          "icon": null,
          "alignIcon": "end",
          "withArrow": true,
          "active": false,
          "hidden": false,
          "iconTooltip": "",
          "applyAutoWidth": false,
          "space": {
            "marginTop": "",
            "marginBottom": "xl"
          },
          "onClick": func.f2_onClick,
          "classNames": "application-approved-next-btn"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "fetch",
          "bpm",
          "apTransactionNumber",
          "businessKey",
          "user",
          "instanceId",
          "actions"
        ]
      },
      {
        "componentId": "-v0tJVMpCfoeNdcBV5LNL",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isModalOpen}",
          "title": "i18n('fee_waiver_title')",
          "buttonCombination": "primary",
          "primaryButton": {
            "label": "i18n('fee_waiver_btn')",
            "onClick": func.f3_primaryButton_onClick
          },
          "secondaryButton": "",
          "linkButton": "",
          "onClose": func.f4_onClose,
          "children": [
            {
              "componentId": "tGBD8lzV5jP7jlq2kcvyS",
              "type": "symbol",
              "props": {
                "symbol": "tGBD8lzV5jP7jlq2kcvyS"
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
          "isModalOpen",
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
        "id": "tGBD8lzV5jP7jlq2kcvyS",
        "name": "feeWaiver",
        "definitions": [
          {
            "componentId": "koFxXTSk7WgZ7nKtUkPhe",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "i18n('fee_waiver_p1')",
              "displayAsHtml": false
            },
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale"
            ]
          },
          {
            "componentId": "ZUbHb2QAYQqcwFQCkeA0c",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "i18n('fee_waiver_p2')",
              "displayAsHtml": false
            },
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale"
            ]
          },
          {
            "componentId": "wboxWpHVNkLwt_kBjeRtV",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "i18n('fee_waiver_p3')",
              "displayAsHtml": false
            },
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale"
            ]
          },
          {
            "componentId": "umvDygz7qbIl_-JPOy1eI",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "i18n('fee_waiver_p4')",
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
      "skipEconomicName",
      "paymentSummaryColoum",
      "breadCrumItems",
      "showSidebar",
      "steps",
      "expandedStepIndexes",
      "currentStepIndex",
      "currentSubStepIndex",
      "relevant_entities",
      "individualIssuedTags",
      "size_fceaffcbba",
      "paymentSummaryRows",
      "search_cdeaffaebe",
      "commonSelection_ccbdbafcfe",
      "paymentTotal",
      "displayAsHtml_fbecddafbc",
      "apTransactionNumber",
      "businessKey",
      "instanceId",
      "isModalOpen"
    ],
    "mapDispatch": [
      "individualIssuedTags",
      "paymentTotal",
      "paymentSummaryRows",
      "breadCrumItems",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "paymentSummaryColoum",
      "isModalOpen",
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
      "selectedActivities"
    ]
  }
}]

export default pageConfig;