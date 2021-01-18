import * as func from './functions';

 const symbolConfig = [{
  "id": "V-yVgnSPmczj86P4we-0G",
  "name": "camunda message alert",
  "definitions": [
    {
      "componentId": "utdsc_aNYydKh6MdrdBxk",
      "type": "alert",
      "props": {
        "status": "error",
        "message": "${state.camundaMessage}",
        "onClose": null,
        "space": {
          "marginBottom": ""
        },
        "visible": func.f1_visible
      },
      "layout": "base",
      "sharedProps": [
        "i18n",
        "locale",
        "camundaMessage"
      ]
    }
  ]
}]

export default symbolConfig;