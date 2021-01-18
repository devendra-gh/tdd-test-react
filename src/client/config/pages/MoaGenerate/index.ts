import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { CATEGORIES } from 'client/config/utils/lookup';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PROCESS_NAME } from 'client/config/constants';
import functions from './functions';

const routes = [
  {
    path: '/economic-licence/moa-generate',
    uniqueId: 'moa-generate',
    template: 'moa',
    title: 'moa_application',
    init: functions.init,
    props: {
      categories: CATEGORIES,
      currentStep: 'moa_approval',
      currentSubStep: 'moa_generate',
      type: noticeTypes.WARNING,
      title: 'moa_generate_title',
      subTitle: 'moa_review_desc',
      ownerMoaAgree: functions.ownerMoaAgree,
      ownerMoaDisAgree: functions.ownerMoaDisAgree,
    },
    onPageInit: (props: IVariables) => {},
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'smartPassData',
        'partners',
        'instanceId',
        'businessKey',
        'businessLegalFormCode',
      ],
    },
    state: {
      mapState: [
        'stepsStatus',
        'smartPassData',
        'partners',
        'user',
        'businessKey',
        'businessLegalFormCode',
        'economicLicense',
        'partners',
        'moa',
        {
          steps: functions.getMoaSteps,
        },
      ],
      mapDispatch: [
        'partners',
        'moa',
        'economicLicense',
        'businessKey',
        'instanceId',
        'businessLegalFormCode',
        'smartPassData',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default routes;
