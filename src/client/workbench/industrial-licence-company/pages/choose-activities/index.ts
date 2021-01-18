import * as func from './functions';


          import { call_sort } from '../../sharedFunctions/utils';


          const pageConfig = [{
  "title": "Choose Activities",
  "pageId": "WS0j8enNwv2q7gSwt3fd6",
  "expanded": true,
  "path": "/choose-activities",
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
        "componentId": "4X-zl08Vs57EttAOS-m1U",
        "type": "text",
        "props": {
          "variant": "h3",
          "content": "i18n('choose_activities')",
          "displayAsHtml": false
        },
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "sJT_aFTwYudntG_oOjqee",
        "type": "text",
        "props": {
          "variant": "p",
          "content": "i18n('choose_activities_des1')",
          "displayAsHtml": false,
          "space": {
            "marginBottom": "xl"
          },
          "classNames": ""
        },
        "sharedProps": [
          "i18n",
          "locale"
        ]
      },
      {
        "componentId": "b5GzzaXvXewU1wHf99Fpj",
        "type": "symbol",
        "props": {
          "symbol": "sS7NVpd6W7XMQbd-WOGLK",
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
        "componentId": "a2gFVPJ2ilvZZ8OLrlmuc",
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
            "marginBottom": "",
            "paddingTop": ""
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "-0qJABdUT_h4X-xUrcu4J",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_bdadeaabca}",
              "placeholder": "",
              "label": "i18n('category')",
              "items": "${state.categories}",
              "value": "${state.categoryValue}",
              "isOpen": false,
              "disabled": false,
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": null,
              "help": "",
              "size": "default",
              "aria-label": "i18n('category')",
              "popupWidth": 0,
              "popupAlign": "start",
              "onBlur": func.f1_onBlur,
              "onChange": func.call_f2_onChange,
              "classNames": "choose-activities-category-select",
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
              "fetch",
              "tabIndex_bdadeaabca",
              "categories",
              "categoryValue",
              "actions"
            ]
          },
          {
            "componentId": "aaIkfWvGEP41_Wrkn4A24",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_aeecfaefed}",
              "placeholder": "",
              "label": "i18n('division')",
              "items": "${state.divisions}",
              "value": "${state.divisionValue}",
              "isOpen": false,
              "disabled": "${state.divisionDisabled}",
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": "null",
              "help": "",
              "size": "default",
              "aria-label": "i18n('division')",
              "popupWidth": 0,
              "popupAlign": "start",
              "onSearch": func.f3_onSearch,
              "onChange": func.call_f4_onChange,
              "onOpenChange": func.f5_onOpenChange,
              "classNames": "choose-activities-division-select",
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
              "fetch",
              "getActivitiesReqFilter",
              "tabIndex_aeecfaefed",
              "divisions",
              "divisionValue",
              "divisionDisabled",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "NSZlfh3D9x5D2TV3VIBgR",
        "type": "grid",
        "props": {
          "columns": 2,
          "flexColumns": {
            "xl": 2,
            "lg": 2,
            "md": 2,
            "sm": 1
          }
        },
        "layout": "base",
        "children": [
          {
            "componentId": "McLjyKWawM2dqJIj-ukqM",
            "parentComponentId": "a2gFVPJ2ilvZZ8OLrlmuc",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_group}",
              "placeholder": "",
              "label": "i18n('group')",
              "items": "${state.groups}",
              "value": "${state.groupValue}",
              "isOpen": false,
              "disabled": "${state.groupDisabled}",
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": null,
              "help": "",
              "size": "default",
              "aria-label": "i18n('group')",
              "popupWidth": 0,
              "popupAlign": "start",
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              },
              "onChange": func.call_f6_onChange,
              "classNames": "choose-activities-group-select"
            },
            "columnIndex": 0,
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "fetch",
              "getActivitiesReqFilter",
              "tabIndex_group",
              "groups",
              "groupValue",
              "groupDisabled",
              "actions"
            ]
          },
          {
            "componentId": "ld_hFj-zPrtyi-gPMvdqU",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_class}",
              "placeholder": "",
              "label": "i18n('class')",
              "items": "${state.classes}",
              "value": "${state.classValue}",
              "isOpen": false,
              "disabled": "${state.classDisabled}",
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": null,
              "help": "",
              "size": "default",
              "aria-label": "i18n('class')",
              "popupWidth": 0,
              "popupAlign": "start",
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              },
              "onChange": func.call_f7_onChange,
              "classNames": "choose-activities-class-select"
            },
            "columnIndex": 1,
            "layout": "base",
            "parentComponentId": "a2gFVPJ2ilvZZ8OLrlmuc",
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "fetch",
              "getActivitiesReqFilter",
              "tabIndex_class",
              "classes",
              "classValue",
              "classDisabled",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "UQIS1UDHHEf8SLN74WsKt",
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
        "layout": "base",
        "children": [
          {
            "componentId": "mwkFEXvXOsLFE1vXZJ6-y",
            "parentComponentId": "a2gFVPJ2ilvZZ8OLrlmuc",
            "type": "select",
            "props": {
              "tabIndex": "${state.tabIndex_group}",
              "placeholder": "",
              "label": "i18n('branch')",
              "items": "${state.branches}",
              "value": "${state.branchValue}",
              "isOpen": false,
              "disabled": "${state.branchDisabled}",
              "isStatic": false,
              "multi": false,
              "showSearch": true,
              "validateStatus": null,
              "help": "",
              "size": "default",
              "aria-label": "i18n('branch')",
              "popupWidth": 0,
              "popupAlign": "start",
              "space": {
                "marginTop": "",
                "marginBottom": "md"
              },
              "onChange": func.call_f8_onChange,
              "classNames": "choose-activities-branch-select"
            },
            "columnIndex": 0,
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale",
              "actions",
              "fetch",
              "getActivitiesReqFilter",
              "tabIndex_group",
              "branches",
              "branchValue",
              "branchDisabled",
              "actions"
            ]
          }
        ]
      },
      {
        "componentId": "ybtjvb__nB7RorHCHSOun",
        "type": "table",
        "props": {
          "size": "default",
          "selectable": true,
          "clickable": true,
          "isSingleSelect": false,
          "columns": "${state.tableColumns}",
          "items": "${state.tableActivities}",
          "title": "i18n('activity_list')",
          "onSelectionChange": func.call_f9_onSelectionChange,
          "space": {
            "marginTop": "",
            "marginBottom": "xl"
          },
          "pageSize": "${state.tablePageSize}",
          "currPage": "${state.tableCurrPage}",
          "searchable": true,
          "onSearch": func.call_f10_onSearch,
          "disabledSelectionVisible": false,
          "search": "${state.tableSearch}",
          "total": "${state.tableTotalRecords}",
          "pageResizeOptions": "${state.tablePageResizeOptions}",
          "onPageTurn": func.call_f11_onPageTurn,
          "onPageResize": func.call_f12_onPageResize,
          "classNames": "choose-activities-activities-table",
          "filterable": false,
          "selectedItems": "${state.selectedActivities}",
          "status": "${state.tableActivitiesStatus}",
          "commonSelection": "${state.activitiesCommonSelection}"
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "tableActivities",
          "tableAllActivities",
          "tablePageSize",
          "tableSearch",
          "tableColumns",
          "tableCurrPage",
          "tableTotalRecords",
          "tablePageResizeOptions",
          "selectedActivities",
          "tableActivitiesStatus",
          "activitiesCommonSelection",
          "actions"
        ]
      },
      {
        "componentId": "z2jROJafxMu1uIBeiktGh",
        "type": "basket",
        "props": {
          "submitDisabled": false,
          "items": "${state.basket}",
          "isInitiallyOpened": true,
          "containsQuantityColumn": false,
          "currency": "${state.currency}",
          "activityLabel": "",
          "quantityLabel": "",
          "priceLabel": "",
          "isTotalValueFirst": false,
          "isRowValueFirst": false,
          "space": {
            "marginTop": "",
            "marginBottom": "xl"
          },
          "onChange": func.f13_onChange,
          "onSubmit": func.f14_onSubmit,
          "onRemove": func.call_f15_onRemove,
          "notToStick": true
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "history",
          "actions",
          "analytics",
          "tableActivities",
          "tableAllActivities",
          "basket",
          "currency",
          "actions"
        ]
      },
      {
        "componentId": "C48jdPpVY3FFnLliGtwGv",
        "type": "text",
        "props": {
          "variant": "h5",
          "content": "i18n('individual_note_title')",
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
        "componentId": "ukXBqiXxr8agMUFfziofS",
        "type": "flexbox",
        "props": {
          "flexWrap": "wrap",
          "flexDirection": "row",
          "justifyContent": "initial",
          "alignItems": "flex-start",
          "alignContent": "flex-start"
        },
        "layout": "base",
        "children": [
          {
            "componentId": "9S9sQoBG6hZ9Aaizz5znf",
            "parentComponentId": "ukXBqiXxr8agMUFfziofS",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "<p>i18n('please_note_description')</p>\n",
              "displayAsHtml": "${state.displayAsHtml_fbecddafbc}"
            },
            "columnIndex": 0,
            "sharedProps": [
              "i18n",
              "locale",
              "displayAsHtml_fbecddafbc"
            ]
          },
          {
            "componentId": "7gAYljTF_ibx3l-G093a4",
            "type": "link",
            "props": {
              "href": "",
              "children": null,
              "uiType": "text",
              "appearance": "default",
              "disabled": false,
              "tammHref": "/www.tamm.abudhabi/",
              "className": "",
              "label": "i18n('learn-more')",
              "onClick": func.f16_onClick,
              "aria-label": "i18n('learn-more')",
              "space": {
                "paddingLeft": "sm"
              }
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
        "componentId": "uVtrhpGagUAxRM_eiBi4I",
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
          "btnBackClick": func.f17_btnBackClick,
          "btnSubmitClick": func.f18_btnSubmitClick,
          "btnCancelClick": func.f19_btnCancelClick,
          "space": {
            "marginBottom": "xl"
          },
          "btnSubmitDisabled": func.f20_btnSubmitDisabled
        },
        "layout": "base",
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "fetch",
          "bpm",
          "businessKey",
          "basket",
          "",
          "actions"
        ]
      },
      {
        "componentId": "cxaDQ6k5FtZBfoI8Fa-Uu",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isModalOpen}",
          "title": "i18n('fee_waiver_title')",
          "buttonCombination": "primary",
          "primaryButton": {
            "label": "i18n('fee_waiver_btn')",
            "onClick": func.f21_primaryButton_onClick
          },
          "secondaryButton": "",
          "linkButton": "",
          "onClose": func.f22_onClose,
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
        "sharedProps": [
          "i18n",
          "locale",
          "actions",
          "isModalOpen",
          "actions"
        ]
      },
      {
        "componentId": "WyNyz-1_7NbhFmv9VEOLZ",
        "type": "modal",
        "props": {
          "scrollable": "",
          "isOpen": "${state.isCancelModalOpen}",
          "title": "i18n('cancel_application')",
          "buttonCombination": "primary-secondary",
          "primaryButton": {
            "label": "i18n('cancel_popup_btn_yes')",
            "onClick": func.f23_primaryButton_onClick
          },
          "secondaryButton": {
            "onClick": func.f24_secondaryButton_onClick,
            "label": "i18n('cancel_popup_btn_no')"
          },
          "linkButton": "",
          "onClose": func.f25_onClose,
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
        "id": "sS7NVpd6W7XMQbd-WOGLK",
        "name": "form_field_label",
        "definitions": [
          {
            "componentId": "cGnx6_tIMPiFfMlDMhzxC",
            "type": "text",
            "props": {
              "variant": "h5",
              "content": "i18n('fieldset_title')",
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
          }
        ]
      },
      {
        "id": "tGBD8lzV5jP7jlq2kcvyS",
        "name": "feeWaiver",
        "definitions": [
          {
            "componentId": "TEKtSppm904wWBNrzw2Zj",
            "type": "text",
            "props": {
              "variant": "p",
              "content": "<p>i18n('fee_waiver_p1')</p>\n<p>i18n('fee_waiver_p2')</p>\n<p>i18n('fee_waiver_p3')</p>\n<p>i18n('fee_waiver_p4')</p>\n",
              "displayAsHtml": true
            },
            "layout": "base",
            "sharedProps": [
              "i18n",
              "locale"
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
    "sharedFunctions": {
      "utils": {
        "call_sort": call_sort
      }
    }
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
      "tabIndex_bdadeaabca",
      "categories",
      "categoryValue",
      "getActivitiesReqFilter",
      "tabIndex_aeecfaefed",
      "divisions",
      "divisionValue",
      "divisionDisabled",
      "tabIndex_group",
      "groups",
      "groupValue",
      "groupDisabled",
      "tabIndex_class",
      "classes",
      "classValue",
      "classDisabled",
      "branches",
      "branchValue",
      "branchDisabled",
      "tableActivities",
      "tableAllActivities",
      "tablePageSize",
      "tableSearch",
      "tableColumns",
      "tableCurrPage",
      "tableTotalRecords",
      "tablePageResizeOptions",
      "selectedActivities",
      "tableActivitiesStatus",
      "activitiesCommonSelection",
      "basket",
      "currency",
      "displayAsHtml_fbecddafbc",
      "businessKey",
      "",
      "isModalOpen",
      "isCancelModalOpen"
    ],
    "mapDispatch": [
      "breadCrumItems",
      "loading",
      "tableSearch",
      "basket",
      "selectedActivities",
      "activitiesCommonSelection",
      "categories",
      "classes",
      "divisions",
      "groups",
      "branches",
      "tableAllActivities",
      "tablePageResizeOptions",
      "tableCurrPage",
      "tableTotalRecords",
      "tableActivities",
      "currency",
      "tableColumns",
      "showSidebar",
      "currentStepIndex",
      "currentSubStepIndex",
      "expandedStepIndexes",
      "steps",
      "categoryValue",
      "getActivitiesReqFilter",
      "groupDisabled",
      "classDisabled",
      "branchDisabled",
      "divisionValue",
      "groupValue",
      "classValue",
      "branchValue",
      "tableActivitiesStatus",
      "divisionDisabled",
      "chooseActivitiesBtnDisabled",
      "tablePageSize",
      "isModalOpen",
      "isCancelModalOpen",
      ""
    ]
  },
  "init": func.init
}]

export default pageConfig;