import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import baseUrl from 'client/utils/baseUrl';
import { PROCESS_NAME } from '../../../constants';

const waitingApproval = [
  {
    path: '/economic-licence/instant-video', // path for router
    uniqueId: 'instant-licence-payment', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.instantLicence', // title of the page, later it will be read from CMS
    props: {
      type: noticeTypes.INFO,
      title: 'notice.waitingApproval.title',
      text: 'notice.waitingApproval.description',
      // https://journeys-stg.tamm.abudhabi/services/business/media/instant-video.mp4
      videoSrc: `${baseUrl}/media/instant-video.mp4`,
      buttons: [],
    },
    // onPageInit: (props: IVariables) => {
    //   return {
    //     tags: [
    //       {
    //         label: 'notice.refNo',
    //         value: props.cnNumber
    //       },
    //       {
    //         label: 'notice.submit',
    //         value: 'May 21, 2019'
    //       }
    //     ]
    //   }
    // },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['cnNumber'],
    },
    state: {
      mapState: ['loggedIn', 'stepsStatus', 'instantLicenceSteps'],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default waitingApproval;
