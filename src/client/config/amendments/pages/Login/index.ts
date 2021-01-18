const login = [
  {
    path: ['/login-pass'], // path for router
    uniqueId: 'login-smartpass', // uniqueId for caching and other purposes
    template: 'smartpassLogin', // template name, must be located in index of folder template/index
    title: 'login.title', // title of the page, later it will be read from CMS
    props: {
      description: 'login.description',
      smartpassText: 'login.smartpassText',
      uaepassText: 'login.uaepassText',
      smartpassOnClick: () => {},
      uaepassOnClick: () => {},
      smartpassLink: 'https://www.tamm.abudhabi/',
      uaepassLink: 'https://www.tamm.abudhabi/',
    },
    state: {
      mapState: ['loggedIn', 'businessKey'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default login;
