import * as func from './functions';

const symbolConfig = [
  {
    id: 'EjPOVaCv-3xQGRvwUsIEV',
    name: 'download',
    definitions: [
      {
        componentId: '8Bc8myAmtahLhnnpk7Udm',
        type: 'dropdown',
        props: {
          locale: 'en',
          uiType: 'tertiary',
          size: 'small',
          label: '',
          isOpen: false,
          disabled: false,
          items: [
            {
              id: 'download',
              label: 'Download',
            },
          ],
          name: null,
          popupAlign: 'end',
          popupWidth: 0,
          popupRootSelector: 'body',
          customItemContent: false,
          onChange: func.call_f1_onChange,
        },
        layout: 'base',
        sharedProps: ['i18n', 'locale'],
      },
    ],
  },
];

export default symbolConfig;
