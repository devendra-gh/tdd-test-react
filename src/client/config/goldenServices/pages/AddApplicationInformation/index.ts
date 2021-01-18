import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import functions from './functions';
import { PATH_DETAILS, BASE_PATH } from '../../routes';

const routes = [
  {
    path: PATH_DETAILS,
    uniqueId: 'details',
    template: 'serviceForm',
    title: 'goldenServices.title.goldenServices',
    init: functions.init,
    getVariables: bpm.getVariables,
    props: {
      subTitle: 'goldenServices.subTitle.addApplicationInformation',
      description: 'goldenServices.subTitle.desc.addApplicationInformation',
      currentStep: 'goldenServices.steps.addApplicationInformation',
      onSubmit: functions.onSubmit,
      getFields: functions.getFields,
      cancelLink: BASE_PATH,
      onCheckboxChange: functions.onChange,
      form: [
        {
          name: 'serviceDetails.contactDetails.name',
          fields: [
            {
              ariaLabel: 'input name',
              elementType: 'input',
              key: 'name',
              label: 'goldenServices.label.form.name',
              name: 'name',
              placeholder: '',
            },
            {
              ariaLabel: 'input email',
              elementType: 'input',
              key: 'email',
              label: 'goldenServices.label.form.email',
              name: 'email',
              placeholder: 'email@domain.ae',
            },
            {
              ariaLabel: 'input telephone',
              code: 971,
              countries: [
                {
                  code: 971,
                  name: 'UAE',
                },
              ],
              key: 'telephone',
              elementType: 'inputTelephone',
              label: 'goldenServices.label.form.mobileNumber',
              name: 'inputTelephone',
            },
          ],
        },
        {
          name: 'serviceDetails.serviceDetails.name',
          fields: [
            {
              ariaLabel: 'select transaction type',
              elementType: 'select',
              items: [
                { id: '1', label: 'serviceDetails.transactionType.1' },
                { id: '2', label: 'serviceDetails.transactionType.2' },
                { id: '3', label: 'serviceDetails.transactionType.3' },
                { id: '4', label: 'serviceDetails.transactionType.4' },
                { id: '5', label: 'serviceDetails.transactionType.5' },
                { id: '6', label: 'serviceDetails.transactionType.6' },
              ],
              key: 'transactionType',
              label: 'goldenServices.label.form.transactionType',
              name: 'transactionType',
              value: 'value',
            },
            {
              ariaLabel: 'input licence',
              elementType: 'input',
              key: 'licenceNo',
              label: 'goldenServices.label.form.licence',
              name: 'licenceNo',
              placeholder: '',
            },
            {
              ariaLabel: 'date picker',
              elementType: 'datePicker',
              key: 'date',
              label: 'goldenServices.label.form.date',
              name: 'datePicker',
              value: null,
              help: 'Only during working days',
            },
            {
              ariaLabel: 'time picker',
              elementType: 'timePicker',
              key: 'time',
              label: 'goldenServices.label.form.time',
              name: 'timePicker',
              value: null,
              help: 'Working hours: 8:30AM - 5:30PM',
            },
            {
              ariaLabel: 'input licence',
              elementType: 'input',
              key: 'address',
              label: 'goldenServices.label.form.address',
              name: 'address',
              placeholder: '',
            },
            {
              ariaLabel: 'select city',
              elementType: 'select',
              key: 'city',
              items: [
                { id: '1', label: 'serviceDetails.city.1' },
                { id: '2', label: 'serviceDetails.city.2' },
                { id: '3', label: 'serviceDetails.city.3' },
              ],
              label: 'goldenServices.label.form.city',
              name: 'city',
              value: 'value',
            },
          ],
        },
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        'businessKey',
        'goldenService',
        {
          steps: (state: IVariables) => {
            return state.goldenServicesSteps;
          },
        },
      ],
      mapDispatch: [
        'stepsStatus',
        'goldenService',
        'instanceId',
        'businessKey',
      ],
    },
  },
];

export default routes;
