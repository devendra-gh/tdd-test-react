import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PATH_NOT_ELIGIBLE } from 'client/config/renewLicence/routes';
import { FORM_STEP_1 } from 'client/config/renewLicence/steps';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import functions from './functions';
import {
  REQUIRE_SOP3,
  getAnalyticsData,
  getDateFromTimeStamp,
} from '../../utils/common';

const notEligiblePage = [
  {
    path: PATH_NOT_ELIGIBLE, // path for router
    uniqueId: 'renew-licence-not-eligible', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    currentStep: FORM_STEP_1,
    props: {
      buttons: [
        {
          label: 'button.back',
          onClick: functions.onClick,
          uiType: 'secondary',
          alignIcon: 'start',
          withArrow: true,
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const { cnNumber, licenceExpiryDate } = props;
      getAnalyticsData('sla', {
        applicationStatus: 'not-eligible',
        serviceStatus: 'fail',
      });
      const errorMsg = props.errorMsg ? JSON.parse(props.errorMsg) : null;
      let title = 'inEligible.title';
      let content = 'inEligible.content';
      let msgCode = 'default';
      let type = noticeTypes.WARNING;
      if (errorMsg) {
        title = errorMsg.title;
        content = errorMsg.content;
        if (title && title.includes('103')) {
          msgCode = 'checkRenewalEligibility103';
          type = noticeTypes.SUCCESS;
        } else if (title && title.includes('107')) {
          msgCode = 'checkRenewalEligibility107';
          type = noticeTypes.SUCCESS;
        }
      }
      return {
        title,
        content,
        msgCode,
        type,
        tags: [
          {
            label: 'label.tags.licenceNo',
            value: cnNumber,
          },
          {
            label: 'expiryDate',
            value: getDateFromTimeStamp(licenceExpiryDate),
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
      variables: [
        'errorMsg',
        'isLicenceNumberValid',
        'daysPendingForLicenceExpiry',
        'capId',
        'tradeNameNumber',
        'licenceExpiryDate',
        'cnNumber',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'currentStep',
        'instanceId',
        'businessKey',
        'user',
        {
          steps: (state: IVariables) => {
            return state.minimumSteps;
          },
        },
      ],
      mapDispatch: [
        'stepsStatus',
        'form',
        'instanceId',
        'businessKey',
        'currentStep',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default notEligiblePage;
