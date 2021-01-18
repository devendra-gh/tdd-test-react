import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { FORM_STEP_5, FORM_STEP_6 } from 'client/config/renewLicence/steps';
import { PATH_LICENCE_SUMMARY } from 'client/config/renewLicence/routes';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import functions from './functions';
import {
  REQUIRE_SOP3,
  getAnalyticsData,
  getDateFromTimeStamp,
} from '../../utils/common';

const statusPage = [
  {
    path: PATH_LICENCE_SUMMARY, // path for router
    uniqueId: 'renew-licence-licence-summary', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      type: noticeTypes.SUCCESS,
      currentStep: FORM_STEP_6,
      msgCode: 'success',
      title: 'payment.success.title',
      content: 'payment.success.content',
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      const { renewalNumber, submittedDate } = props;
      getAnalyticsData(
        'pay2',
        { serviceStatus: 'success' },
        { sum: props.paymentAmount },
      );
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        [`${FORM_STEP_5}`]: 'finish',
      });

      return {
        tags: [
          {
            label: 'label.tags.referenceNo',
            value: renewalNumber,
          },
          {
            label: 'label.tags.submittedOn',
            value: getDateFromTimeStamp(submittedDate),
          },
        ],
        steps: props.steps,
        dropDownConfig: functions.dropDownConfig,
        downloadLicenceBtnConfig: functions.downloadLicenceBtnConfig,
        finishDownloadBtnConfig: functions.finishDownloadBtnConfig,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
      variables: [
        'renewalNumber',
        'cnNumber',
        'submittedDate',
        'licenceIssueDate',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'user',
        'businessKey',
        'paymentAmount',
        {
          steps: (state: IVariables) => {
            return state.steps;
          },
        },
      ],
      mapDispatch: ['stepsStatus', 'form', 'instanceId', 'businessKey'],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default statusPage;
