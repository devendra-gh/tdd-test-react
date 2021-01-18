// import * as func from './functions';

//           const pageConfig = [{
//   "title": "Upload Document",
//   "pageId": "9r-1T4p3lagL9ozj-7VE1",
//   "path": "/upload-document",
//   "template": "custom",
//   "layout": "sidebar",
//   "props": {
//     "definitions": [
//       {
//         "componentId": "x5fEJi0XGF99QDVUNwsn8",
//         "type": "text",
//         "props": {
//           "variant": "h4",
//           "content": "i18n('company_upload_document_title')",
//           "displayAsHtml": false,
//           "space": {
//             "marginTop": "md"
//           }
//         },
//         "layout": "base",
//         "sharedProps": [
//           "i18n",
//           "locale"
//         ]
//       },
//       {
//         "componentId": "e96YLouzeAGwcBOliZTz-",
//         "type": "text",
//         "props": {
//           "variant": "p",
//           "content": "i18n('company_upload_document_desc')",
//           "displayAsHtml": false
//         },
//         "layout": "base",
//         "sharedProps": [
//           "i18n",
//           "locale"
//         ]
//       },
//       {
//         "componentId": "iqaYhE5utgilQlFNmMBNF",
//         "type": "fileUpload",
//         "props": {
//           "id": "",
//           "tabIndex": 0,
//           "multiple": true,
//           "validateStatus": "",
//           "validationMessage": "",
//           "help": "",
//           "disabled": false,
//           "label": "",
//           "accept": [],
//           "files": "${state.files}",
//           "removeAriaLabel": "file-remove-button",
//           "uploadAriaLabel": "file-upload",
//           "removeAcceptForIOS": false,
//           "i18n": "",
//           "maxSize": 2147483648,
//           "onRemove": func.call_f1_onRemove,
//           "onChange": func.call_f2_onChange,
//           "space": {
//             "marginTop": "lg"
//           }
//         },
//         "layout": "base",
//         "sharedProps": [
//           "i18n",
//           "locale",
//           "actions",
//           "files",
//           "actions"
//         ]
//       },
//       {
//         "componentId": "0PcCIEY1el_VQL3K404nz",
//         "type": "symbol",
//         "props": {
//           "symbol": "n36dpY3tGRdQ5XTjH5wlv"
//         },
//         "layout": "base",
//         "sharedProps": [
//           "i18n",
//           "locale",
//           "classNames_decbcfcfbe"
//         ]
//       },
//       {
//         "componentId": "fKqQZduIm0fMd428l6bs_",
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
//         "layout": "base",
//         "children": [
//           {
//             "componentId": "dNspVxl4BDwIuhQkCN1yh",
//             "type": "button",
//             "props": {
//               "locale": "en",
//               "label": "i18n('back')",
//               "type": "button",
//               "uiType": "secondary",
//               "disabled": false,
//               "aria-label": "choose-activities-back-btn",
//               "size": "default",
//               "icon": null,
//               "alignIcon": "start",
//               "withArrow": true,
//               "active": false,
//               "hidden": false,
//               "iconTooltip": "",
//               "applyAutoWidth": false,
//               "space": {
//                 "marginRight": "md"
//               },
//               "name": "choose-activities-back-btn",
//               "classNames": "choose-activities-back-btn"
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale"
//             ]
//           },
//           {
//             "componentId": "ZqjVk66SodgM4Z5igmHXd",
//             "type": "button",
//             "props": {
//               "locale": "en",
//               "label": "i18n('button_next')",
//               "type": "button",
//               "uiType": "primary",
//               "disabled": "${state.uploadDocumentNextBtnDisabled}",
//               "aria-label": "choose-activities-next-btn",
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
//               "onClick": func.f3_onClick,
//               "classNames": "choose-activities-next-btn",
//               "name": "choose-activities-next-btn"
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "fetch",
//               "bpm",
//               "businessKey",
//               "uploadDocumentNextBtnDisabled"
//             ]
//           },
//           {
//             "componentId": "54XEaiBDUGtlTpKNY9iAD",
//             "type": "button",
//             "props": {
//               "locale": "en",
//               "label": "i18n('cancel')",
//               "type": "button",
//               "uiType": "text-link",
//               "disabled": false,
//               "aria-label": "choose-activities-cancel-btn",
//               "size": "default",
//               "icon": null,
//               "alignIcon": "end",
//               "withArrow": false,
//               "active": false,
//               "hidden": false,
//               "iconTooltip": "",
//               "applyAutoWidth": true,
//               "name": "choose-activities-cancel-btn",
//               "classNames": "choose-activities-cancel-btn"
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale"
//             ]
//           },
//           {
//             "componentId": "E6ihW95E2Lus40rJAmAiv",
//             "type": "spinner",
//             "props": {
//               "type": "logo",
//               "visible": func.f4_visible
//             },
//             "layout": "base",
//             "sharedProps": [
//               "i18n",
//               "locale",
//               "chooseActivitiesCheckLoader"
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
//       "files",
//       "businessKey",
//       "uploadDocumentNextBtnDisabled",
//       "chooseActivitiesCheckLoader"
//     ],
//     "mapDispatch": [
//       "files",
//       "uploadDocumentNextBtnDisabled"
//     ]
//   },
//   "init": func.init,
//   "onPageInit": func.onPageInit
// }]

// export default pageConfig;
it('test', () => {
  expect(1).toBe(1);
});
