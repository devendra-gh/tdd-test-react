import { IVariables } from '@tamm/app-composer';
import { PATH_RETURNED } from 'client/config/AddEconomicActivity/routes';
import { initialState } from 'client/config/AddEconomicActivity/config';
import { addEconomicActivitySteps } from '../../steps';
import functions from './functions';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';

const applicationReturned = [
  {
    path: PATH_RETURNED, // path for router
    uniqueId: 'add-economic-activity-returned', // uniqueId for caching and other purposes
    template: 'returnDocuments', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.title', // title of the page, later it will be read from CMS
    props: {
      type: 'custom',
      title: 'addEconomicActivity.addAttachment.title',
      content: 'addEconomicActivity.addAttachment.description',
      steps: addEconomicActivitySteps,
      currentStep: 'addEconomicActivity.getDEDApproval',
      stepsStatus: {
        'addEconomicActivity.addActivity': 'finish',
      },
      buttons: [],
      onSubmit: functions.onSubmit,
      buttonLabel: 'button.submit',
    },
    fromProcessState: {
      processName: PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
      variables: ['feedback', 'applicationStatus'],
    },
    onPageInit: (props: IVariables) => {
      const { i18n } = props;
      props.actions.fileUploadData.update(initialState.fileUploadData);
      return {
        commentsParsed: props.feedback ? [props.feedback] : [],
        tags: [
          {
            label: i18n('addEconomicActivity.notice.refNo'),
            value: props.newActivityApiData.altId,
          },
          {
            label: i18n('addEconomicActivity.notice.submit'),
            value: props.newActivityApiData.submittedOn,
          },
        ],
      };
    },
    state: {
      mapState: [
        'newActivityApiData',
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'fileUploadData',
      ],
      mapDispatch: [
        'fileUploadData',
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
      ],
    },
  },
];

export default applicationReturned;
