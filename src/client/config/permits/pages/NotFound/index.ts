import {
  PATH_PAGE_NOT_FOUND,
  PATH_404_NOT_FOUND,
} from '../../utils/constants/pageRoutes';

const notFound = [
  {
    path: [PATH_PAGE_NOT_FOUND, PATH_404_NOT_FOUND], // path for router
    uniqueId: 'not-found', // uniqueId for caching and other purposes
    template: 'page404', // template name, must be located in index of folder template/index
    title: 'notfound', // title of the page, later it will be read from CMS
    props: {
      label: 'button.backHome',
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'history'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default notFound;
