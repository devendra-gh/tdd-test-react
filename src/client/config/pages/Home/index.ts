import functions from './functions';

const home = [
  {
    path: ['/economic-licence/test-submit'], // path for router
    uniqueId: 'license-submit', // uniqueId for caching and other purposes
    template: 'fakeLicenseSubmit', // template name, must be located in index of folder template/index
    title: 'License Submit', // title of the page, later it will be read from CMS
    props: {
      onSubmit: functions.onSubmit,
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'economicLicense'],
      mapDispatch: ['instanceId', 'businessKey', 'economicLicense'],
    },
  },
];

export default home;
