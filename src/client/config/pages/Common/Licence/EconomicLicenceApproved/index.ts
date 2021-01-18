import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { syncLicenseTypeAndCode } from '../../ContinueProcess/functions';

const result = [
  {
    path: '/economic-licence/success', // path for router
    uniqueId: 'economic-licence-approved', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      // currentStep: 'economic_licence',
      currentSubStep: 'download_certificate',
      type: noticeTypes.SUCCESS,
      title: 'notice.economicLicence.approved.title',
      text: 'notice.economicLicence.approved.text',
      buttons: [
        {
          label: 'button.licence',
          onClick: functions.documentDownload,
          uiType: 'primary',
        },
        {
          label: 'button.dashBoard',
          onClick: functions.onClick,
          uiType: 'secondary',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      syncLicenseTypeAndCode(props);
      return {
        tags: [
          {
            label: 'notice.refNo',
            value: props.cnNumber,
          },
          {
            label: 'notice.submit',
            value: getDateFromTimeStamp(props.submitDate),
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'cnNumber',
        'submitDate',
        'capId',
        'licenceType',
        'businessLegalFormCode',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'economicLicense',
        'instanceId',
        {
          steps: functions.getStep,
          currentStep: functions.getCurrentStep,
          stepsStatus: functions.getStepStatus,
          categories: functions.getCategories,
        },
      ],
      mapDispatch: ['stepsStatus', 'economicLicense'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default result;
