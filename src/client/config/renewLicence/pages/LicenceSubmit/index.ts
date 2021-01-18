import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { PATH_SUBMIT_LICENCE } from 'client/config/renewLicence/routes';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import functions from './functions';
import { approxDropdownItems } from './data';
import { REQUIRE_SOP3 } from '../../utils/common';

const routes = [
  {
    path: PATH_SUBMIT_LICENCE,
    uniqueId: 'renew-economic-licence-submit',
    template: 'uploadDocuments',
    title: 'main.title',
    init: functions.init,
    onPageInit: functions.onPageInit,
    props: {
      status: 'custom',
      subTitle: 'licenceExpiry.subTitle',
      onSubmit: functions.onSubmit,
      onNocFormChange: functions.onNocFormChange,
      validate: functions.validate,
      onBack: functions.onBack,
      onNext: functions.onNext,
      onPrevious: functions.onPrevious,
      approxDropdownItems,
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
      variables: [
        'daysPendingForLicenceExpiry',
        'licenceIssueDate',
        'licenceExpiryDate',
        'contractExpiryDate',
        'licenceActivities',
        'leaseInfo',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'fileUploadData',
        'form',
        'nocForm',
        'isTawtheeqRequired',
        'licenceSubmitPage',
        {
          currentStep: (state: IVariables) => {
            return state.licenceSubmitPage;
          },
        },
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'fileUploadData',
        'form',
        'nocForm',
        'isTawtheeqRequired',
        'licenceSubmitPage',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default routes;
