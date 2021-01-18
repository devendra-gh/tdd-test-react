// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import functions from './functions';

const home = [
  {
    path: ['/consumer-good-prices'], // path for router
    uniqueId: 'cgp-home', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      onStart: functions.onStart,
      showTracker: false,
    },
    state: {
      mapState: ['loggedIn', 'user', 'steps', 'stepsStatus'],
      mapDispatch: ['steps', 'stepsStatus'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default home;
