import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import moment from 'moment';
import { PATH_RETURNED } from 'client/config/renewLicence/routes';
import { initialState } from 'client/config/renewLicence/config';
import { FORM_STEP_4 } from 'client/config/renewLicence/steps';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { REQUIRE_SOP3, getAnalyticsData } from '../../utils/common';

import functions from './functions';

const applicationReturned = [
  {
    path: PATH_RETURNED, // path for router
    uniqueId: 'renew-licence-returned', // uniqueId for caching and other purposes
    template: 'returnDocuments', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      currentStep: FORM_STEP_4,
      content: 'returned.content',
      type: 'information',
      title: 'returned',
      onSubmit: functions.onSubmit,
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      const { renewalNumber, subimttedDate, i18n, comments } = props;
      getAnalyticsData('sla', {
        applicationStatus: 'Documents Required',
        serviceStatus: 'success',
      });
      props.actions.fileUploadData.update(initialState.fileUploadData);
      return {
        commentsParsed: JSON.parse(comments),
        tags: [
          {
            label: i18n('label.tags.referenceNo'),
            value: renewalNumber,
          },
          {
            label: i18n('label.tags.submittedOn'),
            value: moment(subimttedDate).format('DD-MMM-YYYY'),
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
      variables: [
        'submittedDate',
        'applicationStatusComments',
        'licenceExpiryDate',
        'licenceIssueDate',
        'isNOCRequired',
        'comments',
        'capId',
        'cnNumber',
        'fileUploadData',
        'renewalNumber',
        'comments',
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
        'submitLicence',
        'form',
        'fileUploadData',
        'isTawtheeqRequired',
      ],
      mapDispatch: [
        'fileUploadData',
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'submitLicence',
        'form',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default applicationReturned;
