import * as func from './functions';

 const symbolConfig = [{
  "id": "Tvqi6M5rKJu4JAS3soD9-",
  "name": "Sidebar",
  "definitions": [
    {
      "componentId": "yELNRmPQ0-BAvQuT6M0L2",
      "type": "stepTracker",
      "props": {
        "title": "i18n('ServiceCard_Process')",
        "steps": "${state.steps}",
        "expandedStepIndexes": "${state.expandedStepIndexes}",
        "currentStepIndex": "${state.currentStepIndex}",
        "i18n": "",
        "currentSubStepIndex": "${state.currentSubStepIndex}",
        "visible": func.f1_visible
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
      "componentId": "EGdDKE5QVU6ElyGm7BnMR",
      "type": "relevantEntity2-0-0",
      "props": {
        "i18n": "",
        "title": "Relevant entity",
        "entities": [
          {
            "logo": "https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development",
            "address": "Baniyas Towers, Al Falah Street - Fatima bint Mubarak St 6, Abu Dhabi",
            "phones": [],
            "website": "www.adeconomy.ae",
            "email": "email@domain.com"
          }
        ],
        "closedAll": false,
        "space": {
          "marginTop": "xl"
        },
        "visible": func.f2_visible
      },
      "sharedProps": [
        "i18n",
        "locale",
        "showSidebar"
      ]
    },
    {
      "columnIndex": 0,
      "componentId": "da0TyuQFwqVVGZjOAC_LI",
      "type": "relatedJourneyCard",
      "props": {
        "aspectOfLifeType": "business-management",
        "icon": null,
        "description": "The Manage Your Business journey contains a consolidated dashboard for business owners and representatives to view and...",
        "label": "Manage your business",
        "title": "Related journey",
        "space": {
          "marginTop": "lg"
        },
        "visible": func.f3_visible
      },
      "sharedProps": [
        "i18n",
        "locale",
        "showSidebar"
      ]
    }
  ]
}]

export default symbolConfig;