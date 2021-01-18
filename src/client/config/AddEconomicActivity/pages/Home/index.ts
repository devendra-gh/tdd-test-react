import { IVariables } from '@tamm/app-composer';
import { PATH_HOME } from 'client/config/AddEconomicActivity/routes';
import functions from './functions';

const home = [
  {
    path: PATH_HOME, // path for router
    uniqueId: 'add-economic-activity.home', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.title', // title of the page, later it will be read from CMS
    init: functions.init,
    props: {
      title: 'addEconomicActivity.home.title',
      description: 'addEconomicActivity.home.description',
      showRelatedJourneyCard: true,
      startLogin: {
        title: 'addEconomicActivity.title',
        description: 'addEconomicActivity.home.startLogin.description',
        onClick: functions.onClick,
        buttonLabel: 'button.start',
      },
      process: {
        title: 'addEconomicActivity.home.process.title',
        steps: [
          {
            label: 'addEconomicActivity.addActivity',
            description: 'addEconomicActivity.addActivity.description',
          },
          {
            label: 'addEconomicActivity.getDEDApproval',
            description: 'addEconomicActivity.getDEDApproval.description',
          },
        ],
      },
      helpfulBlock: {
        callField: {
          onChange: () => {},
        },
        commentField: {
          onChange: () => {},
        },
        emailField: {
          onChange: () => {},
        },
        onChange: () => {},
        submitButton: {
          onClick: () => {},
        },
        telephoneField: {
          countries: [],
          onChange: () => {},
        },
      },
    },
    state: {
      mapState: [
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: [
        'stepsStatus',
        'formData',
        'newActivityApiData',
        'helperData',
        'instanceId',
        'businessKey',
      ],
    },
  },
];

export default home;
