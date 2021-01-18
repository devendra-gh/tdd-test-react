import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const dedReturned = [
  {
    path: '/economic-name/returned',
    uniqueId: 'economic-name-ded-returned',
    template: 'notice',
    title: 'global.economicName',
    props: {
      currentStep: 'economic_name',
      currentSubStep: 'ded_approval',
      type: noticeTypes.WARNING,
      title: 'notice.economicName.returned.title',
      // text: "notice.economicName.returned.text",
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
      return {
        text: `${props.i18n('notice.economicName.returned.text')} - ${
          props.returnedMessage
        }`,
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
        'steps',
        'tnNumber',
        {
          uploadDocs: functions.getDocs,
          steps: functions.getStep,
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
