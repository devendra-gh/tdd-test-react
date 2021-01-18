// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import functions from './functions';

const home = [
  {
    path: ['/business-licence-procedure/'], // path for router
    uniqueId: 'licence-submit', // uniqueId for caching and other purposes
    template: 'businessLicenseProcedureHome', // template name, must be located in index of folder template/index
    title: 'businessLicenseProcedure.main.title', // title of the page, later it will be read from CMS
    props: {
      onStart: functions.onStart,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        {
          steps: () => [],
        },
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'businessLicenseProcedureSteps',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default home;
