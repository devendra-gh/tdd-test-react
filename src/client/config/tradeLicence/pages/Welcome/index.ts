import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import { PATH_DASHBOARD, PATH_SUBMIT } from '../../routes';

const home = [
  {
    path: [PATH_DASHBOARD], // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'welcome', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      buttons: [
        {
          label: 'button.welcome',
          onClick: (props: IVariables) => {
            // resetting state when you click on start
            props.actions.resetState();
            setTimeout(() => {
              props.history.push(PATH_SUBMIT);
            }, 2000);
          },
        },
      ],
    },
    onPageInit: async (props: IVariables) => {
      let response = { message: '', data: [] };
      if (props.user && props.user.IDN) {
        const forceRedirect = localStorage.getItem('forceRedirect');
        if (forceRedirect) {
          localStorage.removeItem('forceRedirect');
          props.history.push(forceRedirect);
        }
        response = await fetch(
          '/api/io/getApplications?type=tradeLicence',
          'GET',
        );
      }
      const applications = response && response.data ? response.data : [];
      props.actions.applications.update(applications);
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'user', 'applications'],
      mapDispatch: ['instanceId', 'businessKey', 'applications'],
    },
  },
];

export default home;
