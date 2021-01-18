import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import fetchPermits from './getPermits';

const welcome = [
  {
    path: ['/'], // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'welcome', // template name, must be located in index of folder template/index
    title: 'title.startServices', // title of the page, later it will be read from CMS
    props: {
      buttons: [
        {
          label: 'button.startPermit',
          onClick: (_props: IVariables) => {
            window.location.href = `${baseUrl}/dummy-permit`;
          },
        },
      ],
      startServiceApplication: 'title.startServiceApplication',
      economicName: 'title.economicName',
      titleAction: 'title.action',
      continue: 'continue',
    },
    onPageInit: async (props: IVariables) => {
      if (props.loggedIn) {
        const payload = await fetchPermits();
        props.actions.getPermits.update(payload);
      }
    },
    state: {
      mapState: ['user', 'loggedIn', 'businessKey', 'getPermits'],
      mapDispatch: ['instanceId', 'businessKey', 'getPermits'],
    },
  },
];

export default welcome;
