import * as func from './functions';

 const symbolConfig = [{
  "id": "TH0ur8trAjubV5SVTKPNB",
  "name": "Sidebar",
  "definitions": [
    {
      "componentId": "lQ4z81m81sfBuab21d7KQ",
      "type": "stepTracker",
      "props": {
        "title": "i18n('process')",
        "steps": "${state.steps}",
        "expandedStepIndexes": "${state.expandedStepIndexes}",
        "currentStepIndex": "${state.currentStepIndex}",
        "i18n": "",
        "visible": func.f1_visible,
        "currentSubStepIndex": "${state.currentSubStepIndex}",
        "space": {
          "marginTop": "xl"
        }
      },
      "sharedProps": [
        "i18n",
        "locale",
        "showSideBar",
        "steps",
        "expandedStepIndexes",
        "currentStepIndex",
        "currentSubStepIndex"
      ]
    },
    {
      "columnIndex": 0,
      "componentId": "HNhKpioA1BPn98ZN8kA-I",
      "type": "relevantEntity2-0-0",
      "props": {
        "i18n": "",
        "title": "i18n('relevant_entity')",
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
        }
      },
      "sharedProps": [
        "i18n",
        "locale"
      ]
    }
  ]
}]

export default symbolConfig;