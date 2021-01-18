import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { economicNameSteps } from 'client/config/steps';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { PATH_RETURNED } from '../../../../routes';
import { getAnalyticsData } from '../../../../utils/analytics';

const dedReturned = [
  {
    path: PATH_RETURNED,
    uniqueId: 'economic-name-ded-returned',
    template: 'notice',
    title: 'global.economicName',
    props: {
      currentStep: 'ded_approval',
      steps: economicNameSteps,
      type: 'RETURNED',
      title: 'notice.economicName.returned.title',
      text: 'notice.economicName.returned.text',
      buttons: [],
      showUpload: true,
      onFileUpload: functions.onFileUpload,
      onRemoveFile: functions.onRemoveFile,
      // handleDocumentDelete: functions.handleDocumentDelete,
      documentCategoryChange: functions.onDocumentCategoryChange,
      documentCategory: functions.getDocumentCategory(),
    },
    onPageInit: (props: IVariables) => {
      props.actions.economicNameCapId.update(props.capId);
      props.actions.tnNumber.update(props.tnNumber);
      getAnalyticsData('sla', {
        applicationStatus: 'returned',
        serviceStatus: 'success',
      });
      return {
        message: props.returnedMessage,
        // text: `${props.i18n('notice.economicName.returned.text')} - ${
        //   props.returnedMessage
        // }`,
        tags: [
          {
            label: 'notice.refNo',
            value: props.tnNumber,
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
      variables: ['tnNumber', 'capId', 'submitDate', 'returnedMessage'],
    },
    state: {
      mapState: [
        'loggedIn',
        'disableDocumentCategorySelection',
        'stepsStatus',
        // 'steps',
        'tnNumber',
        {
          uploadDocs: functions.getDocs,
          selectedDocumentCategory: functions.getSelectedDocumentCategory,
          capId: functions.getCapId,
        },
      ],
      mapDispatch: [
        'stepsStatus',
        'additionalDocuments',
        'additionalDocumentCategory',
        'disableDocumentCategorySelection',
        'economicNameCapId',
        'tnNumber',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default dedReturned;
