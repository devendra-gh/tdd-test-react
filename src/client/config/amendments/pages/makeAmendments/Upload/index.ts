import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import {
  PROCESS_NAME,
  mapStateCommonForAll,
} from 'client/config/amendments/constants';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import functions, { getRequiredDocuments, validation } from './functions';

const documentsUpload = [
  {
    path: '/amendments/upload', // path for router
    uniqueId: 'submit', // uniqueId for caching and other purposes
    template: 'upload', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: 'subStep.uploadDocuments',
      currentPage: 'uploadDocuments',
      onSubmitFiles: functions.handleSubmitFiles,
      onBack: functions.handleBack,
      getRequiredDocuments,
      validation,
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['logUuid', 'dbAmendmentId'],
    },
    state: {
      mapState: [
        ...mapStateCommonForAll,
        'loggedIn',
        'documents',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            'subStep.uploadDocuments',
          ),
        },
      ],
      mapDispatch: ['licenceDetails', 'documents', 'amendmentServerError'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default documentsUpload;
