import { IVariables, REQUIRES_LOGIN } from '@tamm/app-composer';

const landing = [
  {
    path: ['/amendments/start-process'], // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'start', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      onStart: (props: IVariables) => {
        props.history.push('/amendments/select-licence');
      },
    },
    state: {
      mapState: ['loggedIn', 'user'],
      mapDispatch: [],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default landing;
