// import * as func from './functions';

//           const pageConfig = [{
//   "title": "Enter Trade Name",
//   "pageId": "GROhoq0tiWl9mNE-Sv1ZQ",
//   "path": "/enter-trade-name",
//   "template": "custom",
//   "layout": "sidebar",
//   "props": {
//     "definitions": [
//       {
//         "componentId": "gFKzYp5zadxC6lpU4wLRU",
//         "type": "text",
//         "props": {
//           "variant": "h3",
//           "content": "i18n('company_enter_trade_name_title') ",
//           "displayAsHtml": false,
//           "space": {
//             "marginTop": ""
//           }
//         },
//         "sharedProps": [
//           "i18n",
//           "locale"
//         ]
//       },
//       {
//         "componentId": "GNz5Fqu4ZIddHejLPP8FJ",
//         "type": "text",
//         "props": {
//           "variant": "p",
//           "content": "i18n('company_enter_trade_name_description_1') <a href=\"#\">i18n('company_enter_trade_name_description_2')</a> i18n('company_enter_trade_name_description_3')",
//           "displayAsHtml": true
//         },
//         "sharedProps": [
//           "i18n",
//           "locale"
//         ]
//       },
//       {
//         "componentId": "5WPWtqwcWZLDmgkZXOiPu",
//         "type": "flexbox",
//         "props": {
//           "flexWrap": true,
//           "flexDirection": "initial",
//           "justifyContent": "initial",
//           "alignItems": "initial",
//           "alignContent": "initial"
//         },
//         "children": [
//           {
//             "componentId": "tNoDgb5P_SMw9Nxqb_ZwB",
//             "type": "input",
//             "props": {
//               "label": "i18n('company_tn_number')",
//               "tabIndex": 0,
//               "value": "${state.tnNumber}",
//               "defaultValue": "",
//               "aria-label": "input",
//               "validateStatus": null,
//               "disabled": false,
//               "readonly": false,
//               "help": "",
//               "placeholder": "i18n('individual_write')",
//               "size": "default",
//               "textDirection": "ltr",
//               "name": "",
//               "type": "text",
//               "onChange": func.call_f1_onChange
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "actions",
//               "tnNumber",
//               "actions"
//             ]
//           },
//           {
//             "componentId": "DZNGSik2P3kJ3QITkkn6_",
//             "type": "button",
//             "props": {
//               "locale": "en",
//               "label": "i18n('company_check')",
//               "type": "button",
//               "uiType": "secondary",
//               "disabled": false,
//               "aria-label": "button",
//               "size": "medium",
//               "icon": null,
//               "alignIcon": "end",
//               "withArrow": false,
//               "active": false,
//               "hidden": false,
//               "iconTooltip": "",
//               "applyAutoWidth": false,
//               "space": {
//                 "marginTop": "md",
//                 "marginLeft": "md"
//               },
//               "onClick": func.f2_onClick
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "actions",
//               "fetch",
//               "tnNumber",
//               "actions"
//             ]
//           },
//           {
//             "componentId": "-uRXKIuBTvMg1o153rnjN",
//             "type": "spinner",
//             "props": {
//               "type": "logo",
//               "visible": func.f3_visible,
//               "space": {
//                 "marginTop": "md",
//                 "paddingTop": "",
//                 "marginLeft": "lg"
//               }
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "tradeNameCheckLoader"
//             ]
//           }
//         ]
//       },
//       {
//         "componentId": "_PlYxYO8zVpsvNWI51h8t",
//         "type": "table",
//         "props": {
//           "size": "default",
//           "selectable": false,
//           "clickable": false,
//           "isSingleSelect": true,
//           "columns": "${state.tradeNameTableColumn}",
//           "items": "${state.tradeNameTableRow}",
//           "title": "i18n('entre_trade_name_table_title')",
//           "space": {
//             "marginTop": "lg",
//             "marginBottom": "xl"
//           },
//           "onSelectionChange": func.call_f4_onSelectionChange,
//           "visible": "",
//           "onClick": func.f5_onClick
//         },
//         "sharedProps": [
//           "i18n",
//           "locale",
//           "tradeNameTableColumn",
//           "tradeNameTableRow"
//         ]
//       },
//       {
//         "componentId": "DmDPyHb2AHkDPKgJalbeJ",
//         "type": "symbol",
//         "props": {
//           "symbol": "n36dpY3tGRdQ5XTjH5wlv"
//         },
//         "sharedProps": [
//           "i18n",
//           "locale",
//           "classNames_decbcfcfbe"
//         ]
//       },
//       {
//         "componentId": "-KT8jyu0vF-Aqe9C7Qh1p",
//         "type": "flexbox",
//         "props": {
//           "flexWrap": true,
//           "flexDirection": "initial",
//           "justifyContent": "initial",
//           "alignItems": "initial",
//           "alignContent": "initial",
//           "space": {
//             "marginTop": "md",
//             "marginBottom": "xl"
//           }
//         },
//         "children": [
//           {
//             "componentId": "10RBaxMb8_k2KIK_oaZaV",
//             "type": "button",
//             "props": {
//               "locale": "en",
//               "label": "i18n('button_next')",
//               "type": "button",
//               "uiType": "primary",
//               "disabled": "${state.tradeNameBtnDisabled}",
//               "aria-label": "trade-name-next-btn",
//               "size": "default",
//               "icon": null,
//               "alignIcon": "end",
//               "withArrow": true,
//               "active": false,
//               "hidden": false,
//               "iconTooltip": "",
//               "applyAutoWidth": false,
//               "space": {
//                 "marginRight": ""
//               },
//               "onClick": func.call_f6_onClick,
//               "classNames": "company-details-next-btn",
//               "name": "trade-name-next-btn"
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "actions",
//               "fetch",
//               "bpm",
//               "tradeNameBtnDisabled",
//               "actions"
//             ]
//           },
//           {
//             "componentId": "7QvELXg6RlHVYhVVJGtcv",
//             "type": "button",
//             "props": {
//               "locale": "en",
//               "label": "i18n('cancel')",
//               "type": "button",
//               "uiType": "text-link",
//               "disabled": false,
//               "aria-label": "company-details-cancel-btn",
//               "size": "default",
//               "icon": null,
//               "alignIcon": "end",
//               "withArrow": false,
//               "active": false,
//               "hidden": false,
//               "iconTooltip": "",
//               "applyAutoWidth": true,
//               "space": {
//                 "paddingLeft": "md",
//                 "paddingRight": "md"
//               },
//               "name": "company-details-cancel-btn",
//               "classNames": "company-details-cancel-btn"
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale"
//             ]
//           },
//           {
//             "componentId": "zXtpd76hGZQtZjmmk9TgJ",
//             "type": "spinner",
//             "props": {
//               "type": "logo",
//               "visible": func.f7_visible
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "tradeNameBtnCheckLoader"
//             ]
//           }
//         ]
//       }
//     ],
//     "symbols": [
//       {
//         "id": "u_7BA0xr8Q0oku7QtzxvE",
//         "name": "Header",
//         "definitions": [
//           {
//             "componentId": "0nSNUzm6NEjCkToaBdmCl",
//             "type": "alert",
//             "props": {
//               "status": "",
//               "message": "",
//               "onClose": null
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale"
//             ]
//           },
//           {
//             "componentId": "Y78zMYB80jxbXDw2WuI6o",
//             "type": "flexbox",
//             "props": {
//               "flexWrap": true,
//               "flexDirection": "column-reverse",
//               "justifyContent": "initial",
//               "alignItems": "initial",
//               "alignContent": "initial",
//               "classNames": "container",
//               "space": {
//                 "marginBottom": "",
//                 "paddingBottom": ""
//               }
//             },
//             "layout": "base",
//             "children": [
//               {
//                 "componentId": "uQukKScRci0q9DWO9b324",
//                 "parentComponentId": "Y78zMYB80jxbXDw2WuI6o",
//                 "type": "text",
//                 "props": {
//                   "variant": "h1",
//                   "content": "i18n('individual_main_title')",
//                   "displayAsHtml": false,
//                   "space": {
//                     "paddingBottom": "md",
//                     "marginTop": "md"
//                   }
//                 },
//                 "layout": "base",
//                 "sharedProps": [
//                   "i18n",
//                   "locale"
//                 ]
//               },
//               {
//                 "componentId": "iyAIP8maLEkaZwI2t7dUy",
//                 "type": "breadcrumb",
//                 "props": {
//                   "items": [
//                     {
//                       "label": "i18n('bcrumbsHome')",
//                       "link": "https://www.tamm.abudhabi/",
//                       "linkTarget": "",
//                       "id": "kbzqdrrl"
//                     },
//                     {
//                       "label": "i18n('bcrumbsBusinessInAbuDhabi')",
//                       "link": "",
//                       "linkTarget": "",
//                       "id": "kbzqe5hx"
//                     },
//                     {
//                       "label": "i18n('bcrumbsRegisterYourBusiness')",
//                       "link": "",
//                       "linkTarget": "",
//                       "id": "kbzqeewv"
//                     },
//                     {
//                       "label": "i18n('bcrumbsIndustrialLicences')",
//                       "link": "",
//                       "linkTarget": "",
//                       "id": "kbzqel7d"
//                     }
//                   ]
//                 },
//                 "layout": "base",
//                 "sharedProps": [
//                   "i18n",
//                   "locale"
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "id": "pOuCbjftw6l5xN5WTMEPb",
//         "name": "Sidebar_without_card",
//         "definitions": [
//           {
//             "componentId": "yeIBuc-dVj7toDnj_7R81",
//             "type": "stepTracker",
//             "props": {
//               "title": "i18n('process')",
//               "steps": "${state.steps}",
//               "expandedStepIndexes": "${state.expandedStepIndexes}",
//               "currentStepIndex": "${state.currentStepIndex}",
//               "i18n": "",
//               "currentSubStepIndex": "${state.currentSubStepIndex}",
//               "visible": "{\"code\":\"  return props.state.showSidebar;\"}",
//               "classNames": ""
//             },
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "showSidebar",
//               "steps",
//               "expandedStepIndexes",
//               "currentStepIndex",
//               "currentSubStepIndex"
//             ]
//           },
//           {
//             "columnIndex": 0,
//             "componentId": "2eXUqMf3xlTH9Dity7T6_",
//             "type": "relevantEntity2-0-0",
//             "props": {
//               "i18n": "",
//               "title": "Relevant entity",
//               "entities": [
//                 {
//                   "logo": "https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development",
//                   "address": "Baniyas Towers, Al Falah Street - Fatima bint Mubarak St 6, Abu Dhabi",
//                   "phones": [],
//                   "website": "www.adeconomy.ae",
//                   "email": "email@domain.com"
//                 }
//               ],
//               "closedAll": true,
//               "space": {
//                 "marginTop": "xl",
//                 "paddingBottom": "lg"
//               }
//             },
//             "sharedProps": [
//               "i18n",
//               "locale"
//             ]
//           }
//         ]
//       },
//       {
//         "id": "n36dpY3tGRdQ5XTjH5wlv",
//         "name": "AutoSaved",
//         "definitions": [
//           {
//             "componentId": "Wg41huxRP35WX0AzJK3FJ",
//             "type": "text",
//             "props": {
//               "variant": "p",
//               "content": "<div><svg style=\"display: inline-block; vertical-align: middle;\" role=\"\" tabindex=\"0\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" data-key=\"\" class=\" ui-lib-icon\" width=\"3.2rem\" height=\"3.2rem\" viewBox=\"0 0 32 32\"><title></title><path d=\"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z\"></path></svg>i18n('individual_auto_saved')</div><div style=\"margin-top: 1rem; border-top: thin solid var(--ui-lib-separator-color, #E0E0E1) \"/>",
//               "displayAsHtml": true,
//               "space": {
//                 "marginTop": "lg",
//                 "marginBottom": "lg"
//               },
//               "classNames": "${state.classNames_decbcfcfbe}"
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "classNames_decbcfcfbe"
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   "customPath": true,
//   "state": {
//     "mapState": [
//       "user",
//       "loggedIn",
//       "classNames_decbcfcfbe",
//       "showSidebar",
//       "steps",
//       "expandedStepIndexes",
//       "currentStepIndex",
//       "currentSubStepIndex",
//       "tnNumber",
//       "tradeNameCheckLoader",
//       "tradeNameTableColumn",
//       "tradeNameTableRow",
//       "tradeNameBtnDisabled",
//       "tradeNameBtnCheckLoader"
//     ],
//     "mapDispatch": [
//       "tnNumber",
//       "tradeNameCheckLoader",
//       "partners",
//       "tradeNameTableRow",
//       "tradeNameBtnDisabled",
//       "tradeNameBtnCheckLoader",
//       "instanceId",
//       "businessKey"
//     ]
//   },
//   "init": func.init
// }]

// export default pageConfig;

it('test', () => {
  expect(1).toBe(1);
});
