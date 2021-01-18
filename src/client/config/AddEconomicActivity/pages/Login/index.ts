import functions from './functions';

const login = [
  {
    path: `/login`, // path for router
    uniqueId: 'login', // uniqueId for caching and other purposes
    template: 'login', // template name, must be located in index of folder template/index
    title: 'login.title', // title of the page, later it will be read from CMS
    props: {
      init: functions.init,
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'user'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default login;
