 const symbolConfig = [{
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
}]

export default symbolConfig;