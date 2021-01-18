import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';

const noActiveLicence = [
  {
    path: [`/amendments/no-active-licence`], // path for router
    uniqueId: 'no-active-licence', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: false,
      icon: 'default',
      title: 'noActiveLicence.info',
      content: 'noActiveLicence.conent',
      buttons: [
        {
          label: 'button.back',
          uiType: 'secondary',
          alignIcon: 'start',
          withArrow: true,
          link: '/amendments/start-process',
        },
        {
          label: 'button.linkLicence',
          uiType: 'primary',
          alignIcon: 'end',
          withArrow: true,
          link: '',
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

export default noActiveLicence;
