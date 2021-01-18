import { CATEGORIES } from 'client/config/utils/lookup';

import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/constants';
import functions from './functions';
import { getMoaSteps } from '../MoaGenerate/functions';

const routes = [
  {
    path: [
      '/economic-licence/moa-approve',
      '/economic-licence/moa-approve-redirect',
    ],
    uniqueId: 'moa-partner-confirm',
    template: 'moa',
    title: 'moa_application',
    init: functions.init,
    props: {
      categories: CATEGORIES,
      currentStep: 'economic_name',
      currentSubStep: 'moa_approval',
      type: noticeTypes.WARNING,
      title: 'moa_approval_title',
      subTitle: 'moa_review_desc',
      buttons: [],
      doesAgree: functions.doesAgree,
      showMoa: functions.showMoa,
      reInvite: functions.reInvite,
    },
    onPageInit: async (props: IVariables) => {},
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['instanceId', 'businessKey', 'smartPassData', 'licenceType'],
    },
    state: {
      mapState: [
        'smartPassData',
        'stepsStatus',
        'partners',
        'user',
        'businessKey',
        'economicLicense',
        'moa',
        {
          steps: getMoaSteps,
        },
      ],
      mapDispatch: [
        'partners',
        'moa',
        'businessKey',
        'instanceId',
        'smartPassData',
        'economicLicense',
      ],
    },
  },
];

export default routes;
