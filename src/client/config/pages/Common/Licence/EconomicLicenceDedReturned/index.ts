import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const dedReturned = [
  {
    path: '/economic-licence/returned',
    uniqueId: 'economic-licence-ded-returned',
    template: 'notice',
    title: 'global.economicLicence',
    props: {
      // currentStep: 'economic_licence',
      currentSubStep: 'ded_approval',
      type: noticeTypes.WARNING,
      title: 'notice.economicLicence.returned.title',
      // text: "notice.economicLicence.returned.text",
      buttons: [],
      showUpload: true,
      onFileUpload: functions.onFileUpload,
      // handleDocumentDelete: functions.handleDocumentDelete,
      documentCategoryChange: functions.onDocumentCategoryChange,
      documentCategory: functions.getDocumentCategory(),
    },
    onPageInit: (props: IVariables) => {
      props.actions.licenceCapId.update(props.capId);
      props.actions.cnNumber.update(props.cnNumber);
      return {
        text: `${props.i18n('notice.economicName.returned.text')} - ${
          props.returnedMessage
        }`,
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
      variables: ['cnNumber', 'submitDate', 'returnedMessage'],
    },
    state: {
      mapState: [
        'loggedIn',
        'disableDocumentCategorySelection',
        'licenseCapId',
        'cnNumber',
        'economicLicense',
        {
          steps: functions.getStep,
          currentStep: functions.getCurrentStep,
          stepsStatus: functions.getStepStatus,
          uploadDocs: functions.getDocs,
          selectedDocumentCategory: functions.getSelectedDocumentCategory,
          capId: functions.getCapId,
        },
      ],
      mapDispatch: [
        'stepsStatus',
        'licenceAdditionalDocuments',
        'licenceAdditionalDocumentCategory',
        'disableDocumentCategorySelection',
        'licenceCapId',
        'cnNumber',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default dedReturned;
