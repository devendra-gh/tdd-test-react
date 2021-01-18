import functions from './functions';

const category = [
  {
    path: ['/investment-compass/:categoryName'], // path for router
    uniqueId: 'category-page', // uniqueId for caching and other purposes
    template: 'category', // template name, must be located in index of folder template/index
    title: 'bsg.category.title', // title of the page, later it will be read from CMS
    init: functions.init,
    onPageInit: functions.onPageInit,
    props: {
      buttons: [
        {
          // alignIcon: 'first',
          label: 'Call me back',
          link: '/economic-name/submit',
          uiType: 'secondary',
          // onClick: functions.redirect,
          withArrow: false,
        },
      ],
      breadcrumbs: [
        {
          label: 'bsg.breadcrumb.level0.title',
          link: 'https://www.tamm.abudhabi/',
        },
        {
          label: 'bsg.breadcrumb.level1.title',
          link: 'https://www.tamm.abudhabi/journeys/start-your-business',
        },
        {
          label: 'bsg.breadcrumb.level2.title',
          link: '/investment-compass',
        },
      ],
    },

    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    state: {
      mapState: ['loggedIn', 'items', 'breadcrumbs'],
      mapDispatch: ['items', 'breadcrumbs'],
    },
  },
];

export default category;
