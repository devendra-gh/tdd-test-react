import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';

const notFound = [
  {
    path: [`/amendments/not-found`], // path for router
    uniqueId: 'not-found', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: false,
      icon: 'default',
      title: 'notFound.info',
      content: 'notFound.content',
      buttons: [
        {
          label: 'button.back',
          uiType: 'secondary',
          alignIcon: 'start',
          withArrow: true,
          link: '/amendments/start-process',
        },
      ],
      currentPage: 'noInfoFound',
    },
    state: {
      mapState: ['loggedIn', 'steps', 'stepsStatus'],
      mapDispatch: [],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default notFound;
