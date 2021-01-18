import functions from './functions';
import { PATH_INVESTOR_FORM, BASE_PATH } from '../../routes';

const InvestorForm = [
  {
    path: PATH_INVESTOR_FORM,
    uniqueId: 'form-page',
    template: 'form',
    title: 'investorProtection.title',
    init: functions.init,
    onPageInit: functions.onPageInit,
    props: {
      multiple: true,
      subTitle: 'investorProtection.form.details.title',
      description: 'investorProtection.form.details.subtitle',
      note: 'investorProtection.form.contactDetails.note',
      onChange: functions.onChange,
      onSubmit: functions.onSubmit,
      validate: functions.validate,
      onBack: functions.onBack,
      validateFiles: functions.validateFiles,
      getFileGroups: functions.getFileGroups,
      getOthersFileGroups: functions.getOthersFileGroups,
      cancelLink: BASE_PATH,
    },
    fromProcessState: {
      processName: 'license',
      variables: ['userName'],
    },
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    state: {
      mapState: [
        'user',
        'title',
        'submitRef',
        'submitDate',
        'loggedIn',
        'form',
        'validation',
        'currentStep',
        'steps',
        'stepsStatus',
        'documents',
      ],
      mapDispatch: [
        'user',
        'form',
        'validation',
        'submitRef',
        'submitDate',
        'documents',
        'currentStep',
        'stepsStatus',
        'loading',
      ],
    },
  },
];

export default InvestorForm;
