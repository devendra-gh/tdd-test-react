import { IVariables } from '@tamm/app-composer';

const upgrade = [
  {
    path: ['/upgrade'], // path for router
    uniqueId: 'upgrade', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'upgrade.title', // title of the page, later it will be read from CMS
    props: {
      title: '',
      text: 'upgrade.text',
      type: 'alert',
      buttons: [
        {
          label: 'button.upgradeAccount',
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

export default upgrade;
