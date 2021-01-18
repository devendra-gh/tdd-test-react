import {
  PROCESS_NAME,
  REQUIRES_SOP3,
  REQUIRES_CUSTOM_LOGIN,
} from 'client/config/permits/constants';
import functions from './functions';
import { PATH_APPLICATION_DETAILS } from '../../utils/constants/pageRoutes';

const enterPermitDetails = [
  {
    path: `/:serviceName${PATH_APPLICATION_DETAILS}`,
    uniqueId: 'application-submit',
    template: 'permitForm',
    title: 'pageTitle.permitApplication',
    init: functions.init,

    props: {
      onSubmit: functions.onSubmit(PROCESS_NAME),
      onSubmitLabel: 'Submit',
      handleCategoryChange: functions.handleCategoryChange,
      handleServiceTypeChange: functions.handleServiceTypeChange,
      handleCompanyTypeChange: functions.handleCompanyTypeChange,
      handleCompanyDetailsChange: functions.handleCompanyDetailsChange,
      handleValidityPeriodChange: functions.handleValidityPeriodChange,
      handleRepresentativeTypeChange: functions.handleRepresentativeTypeChange,
      fetchLicenseDetails: functions.fetchLicenseDetails,
      validation: functions.validation,
      showUpload: true,
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['permitErrorMessage'],
    },
    state: {
      mapState: [
        'user',
        'instanceId',
        'businessKey',
        'loggedIn',
        'companyType',
        'permitCompanyTypes',
        'companyDetails',
        'permitType',
        'serviceType',
        'pageTitle',
        'permitInfo',
        'permitSubmitting',
        'permitServerError',
        'urlServiceName',
        {
          handlePermitFormChange: functions.handlePermitFormChange,
          getFormFields: functions.getFormFields,
        },
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'serviceType',
        'pageTitle',
        'permitInfo',
        'permitType',
        'permitCompanyTypes',
        'companyType',
        'companyDetails',
        'permitSubmitting',
        'permitServerError',
        'urlServiceName',
      ],
    },
    requires: [REQUIRES_CUSTOM_LOGIN, REQUIRES_SOP3],
  },
];

export default enterPermitDetails;
