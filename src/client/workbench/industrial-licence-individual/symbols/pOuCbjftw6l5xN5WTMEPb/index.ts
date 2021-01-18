import * as func from './functions';

 const symbolConfig = [{
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
        "visible": func.f1_visible,
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
}]

export default symbolConfig;