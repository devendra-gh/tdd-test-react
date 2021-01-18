import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PATH_SUBMIT_PROCESS } from '../../../routes';

const submitted = [
  {
    path: PATH_SUBMIT_PROCESS, // path for router
    uniqueId: 'instant-licence-payment', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    // title: 'global.economicLicence', // title of the page, later it will be read from CMS
    title: 'startYourBusiness',
    props: {
      type: noticeTypes.INFO,
      title: 'notice.applicationSubmitted.title',
      text: 'notice.applicationSubmitted.text',
      buttons: [],
      tags: [],
    },
    state: {
      mapState: ['loggedIn', 'stepsStatus', 'instantLicenceSteps'],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default submitted;
