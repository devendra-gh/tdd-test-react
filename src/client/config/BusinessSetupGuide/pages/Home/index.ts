import functions from './functions';

const home = [
  {
    path: ['/investment-compass/'], // path for router
    uniqueId: 'home-page', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'bsg.home.title', // title of the page, later it will be read from CMS
    init: functions.init,
    onPageInit: functions.onPageInit,
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    props: {
      breadcrumbs: [
        {
          label: 'bsg.breadcrumb.level0.title',
          link: 'https://www.tamm.abudhabi/',
        },
        {
          label: 'bsg.breadcrumb.level1.title',
          link: 'https://www.tamm.abudhabi/journeys/start-your-business',
        },
      ],
    },
    state: {
      mapState: [],
    },
  },
];

export default home;
