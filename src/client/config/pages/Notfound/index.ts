import { IVariables } from '@tamm/app-composer';

const home = [
  {
    path: ['/not-found'], // path for router
    uniqueId: 'not-found', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'notfound', // title of the page, later it will be read from CMS
    props: {
      title: 'notFound.title',
      text: 'notFound.text',
      type: 'notFound',
      buttons: [
        {
          label: 'button.backHome',
          onClick: (props: IVariables) => props.history.push('/'),
          uiType: 'secondary',
        },
      ],
    },
    state: {
      mapState: ['loggedIn', 'businessKey'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default home;
