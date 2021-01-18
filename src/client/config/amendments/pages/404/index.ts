const notFound = [
  {
    path: '/404', // path for router
    uniqueId: 'not-found', // uniqueId for caching and other purposes
    template: 'page404', // template name, must be located in index of folder template/index
    title: 'title.notfound', // title of the page, later it will be read from CMS
    props: {
      backButtonLabel: 'button.backHome',
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'history'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default notFound;
