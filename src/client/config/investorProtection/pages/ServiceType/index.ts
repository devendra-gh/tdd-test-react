import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import functions from './utils/functions';
import { PATH_SERVICE_TYPE, BASE_PATH } from '../../routes';

const ServiceType = [
  {
    path: PATH_SERVICE_TYPE,
    uniqueId: 'error-page',
    template: 'serviceType',
    title: 'investorProtection.title',
    init: functions.init,
    props: {
      subTitle: 'investorProtection.form.subTitle',
      description: 'investorProtection.form.description',
      type: noticeTypes.WARNING,
      cancelLink: BASE_PATH,
      onChange: functions.onChange,
      onSubmit: functions.onSubmit,
      getFormGroups: functions.getFormGroups,
    },
    state: {
      mapState: ['loggedIn', 'form', 'currentStep', 'steps', 'stepsStatus'],
      mapDispatch: ['form', 'currentStep', 'steps', 'stepsStatus'],
    },
  },
];

export default ServiceType;
