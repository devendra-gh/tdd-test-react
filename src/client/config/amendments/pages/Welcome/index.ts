import { IVariables } from '@tamm/app-composer';

const welcome = [
  {
    path: ['/amendments'], // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'welcome', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      buttons: [
        {
          label: 'button.startAmendments',
          onClick: (props: IVariables) =>
            props.history.push('/amendments/start-process'),
        },
      ],
    },
    state: {
      mapState: ['loggedIn', 'businessKey'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default welcome;
