import { IVariables } from '@tamm/app-composer';
import { BASE_PATH } from '../../routes';

const home = [
  {
    path: BASE_PATH, // path for router
    uniqueId: 'golden-services-home', // uniqueId for caching and other purposes
    template: 'landing', // template name, must be located in index of folder template/index
    title: 'goldenServices.title.goldenServices', // title of the page, later it will be read from CMS
    props: {},
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
        'stepsStatus',
      ],
      mapDispatch: ['instanceId', 'businessKey', 'steps', 'stepsStatus'],
    },
  },
];

export default home;
