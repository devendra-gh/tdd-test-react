import { PATH_ADD_ACTIVITY } from 'client/config/AddEconomicActivity/routes';
import { addEconomicActivitySteps } from '../../steps';
import functions from './functions';

const userForm = [
  {
    path: PATH_ADD_ACTIVITY,
    uniqueId: 'add-economic-activity.add-activity',
    template: 'userForm',
    title: 'addEconomicActivity.title',

    props: {
      title: 'addEconomicActivity.user_form.title',
      description: 'addEconomicActivity.user_form.description',
      steps: addEconomicActivitySteps,
      currentStep: 'addEconomicActivity.addActivity',
      buttons: [],
      onChange: functions.onChange,
      onSubmit: functions.onSubmit,
      validation: functions.validation,
    },

    onPageInit: functions.onPageInit,

    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        'formData',
        'helperData',
        'instanceId',
        'businessKey',
      ],
      mapDispatch: [
        'stepsStatus',
        'statusRecieved',
        'formData',
        'helperData',
        'newActivityApiData',
        'instanceId',
        'businessKey',
      ],
    },
  },
];

// @ts-ignore
export default userForm;
