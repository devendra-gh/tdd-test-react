import {
  PATH_NOT_FOUND,
  PATH_HOME,
} from 'client/config/AddEconomicActivity/routes';

const notFound = [
  {
    path: PATH_NOT_FOUND, // path for router
    uniqueId: 'not-found', // uniqueId for caching and other purposes
    template: 'page404', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.notfound', // title of the page, later it will be read from CMS
    props: {
      label: 'button.backHome',
      btnBack: PATH_HOME,
    },
    state: {
      mapState: ['history'],
      mapDispatch: [],
    },
  },
];

export default notFound;
