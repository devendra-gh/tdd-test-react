import * as func from './functions';

 const symbolConfig = [{
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
            "onClick": func.f1_onClick,
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
            "onClick": func.f2_onClick
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
}]

export default symbolConfig;