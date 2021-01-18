import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { FORM_STEP_4, FORM_STEP_5 } from 'client/config/renewLicence/steps';
import { PATH_WAITING } from 'client/config/renewLicence/routes';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import {
  REQUIRE_SOP3,
  getAnalyticsData,
  getDateFromTimeStamp,
} from '../../utils/common';

const waitingPage = [
  {
    path: PATH_WAITING, // path for router
    uniqueId: 'renew-licence-waiting', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      type: noticeTypes.INFO,
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      const { reachedPayment } = props;
      getAnalyticsData('sla', {
        serviceStatus: 'success',
        applicationStatus: reachedPayment
          ? 'Payment In Progress'
          : 'Approval in Progress',
      });
      const tags = [
        ...(props.renewalNumber
          ? [
              {
                label: 'notice.referenceNo',
                value: props.renewalNumber,
              },
            ]
          : []),
        {
          label: 'notice.submitedOn',
          value: getDateFromTimeStamp(props.submittedDate),
        },
      ];
      return {
        currentStep: !props.reachedPayment ? FORM_STEP_4 : FORM_STEP_5,
        steps: props.steps,
        tags,
        content: !reachedPayment
          ? 'notice.content.approvalInprogress'
          : 'notice.content.paymentInprogress',
        title: !reachedPayment
          ? 'notice.renewLicenceSubmitted.subTitle'
          : 'notice.paymentInprogress.subTitle',
        link: reachedPayment ? props.paymentLink : null,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
      variables: ['submittedDate', 'renewalNumber', 'paymentLink'],
    },
    state: {
      mapState: [
        'reachedPayment', // 2 waiting pages toggled using this
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'submitLicence',
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'submitLicence',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default waitingPage;
