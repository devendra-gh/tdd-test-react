import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import {
  PATH_SUCCESS,
  BASE_PATH,
} from 'client/config/investorProtection/routes';
import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData, getDateFromTimeStamp } from '../../utils/common';

const SuccessPage = [
  {
    path: PATH_SUCCESS, // path for router
    uniqueId: 'investorProtection-success-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'investorProtection.title', // title of the page, later it will be read from CMS
    init: (props: IVariables) => {
      if (!props.submitRef && !props.submitDate) {
        props.history.push(BASE_PATH);
      }
      getAnalyticsData('sla', { serviceStatus: 'success' });
      props.actions.currentStep.update('step.viewStatus.label');
      props.actions.stepsStatus.update({
        'step.selectServie.label': 'finish',
        'step.servieDetails.label': 'finish',
      });
    },
    props: {
      buttons: [
        {
          'aria-label': 'button-primary',
          label: 'visit.dashboard',
          onClick: () => {
            const redirectUrl =
              window.location.href.indexOf('stage.tamm.abudhabi') !== -1
                ? 'https://stage.tamm.abudhabi/'
                : 'https://www.tamm.abudhabi/';
            window.location.href = `${redirectUrl}journeys/manage-your-business/dashboard/services`;
          },
        },
      ],
      title: 'investorProtection.success.title',
      type: noticeTypes.SUCCESS,
      content: 'investorProtection.success.content',
    },
    onPageInit: async (props: IVariables) => {
      const { i18n, submitRef, submitDate } = props;
      return {
        tags: [
          {
            label: i18n('investorProtection.label.referenceNo'),
            value: submitRef,
          },
          {
            label: i18n('investorProtection.label.submittedOn'),
            value: getDateFromTimeStamp(submitDate),
          },
        ],
      };
    },
    state: {
      mapState: [
        'submitRef',
        'submitDate',
        'loggedIn',
        'stepsStatus',
        'steps',
        'currentStep',
      ],
      mapDispatch: ['stepsStatus', 'currentStep'],
    },
  },
];

export default SuccessPage;
