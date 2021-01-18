const symbolConfig = [
  {
    id: '3hUcXdivV2rAoRRsJ3pd8',
    name: 'link license message',
    definitions: [
      {
        componentId: 'r5LTPsD9K8JKnQbmGYvly',
        type: 'text',
        props: {
          variant: 'h5',
          content: "i18n('ApplicationReturned_PleaseNote')",
          displayAsHtml: false,
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale'],
      },
      {
        componentId: 'tnY8J2YguS69fBFdYVYbI',
        type: 'text',
        props: {
          variant: 'p',
          content: "<p>i18n('pleaseNoteText')</p>\n",
          displayAsHtml: true,
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale'],
      },
    ],
  },
];

export default symbolConfig;
