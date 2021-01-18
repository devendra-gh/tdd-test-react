import { IVariables } from '@tamm/app-composer';
// import { REQUIRES_CUSTOM_LOGIN } from 'client/config/utils/customRequireTests';
import { PATH_HOME } from '../../routes';
import { constants } from '../../helper';
import { startService } from './functions';

const home = [
  {
    path: [PATH_HOME], // path for router
    uniqueId: 'home-page', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'service.title', // title of the page, later it will be read from CMS
    props: {
      title: 'service.title',
      descriptionTitle: 'service.description.title',
      description: 'service.description',
      showRelatedJourneyCard: true,
      startLogin: {
        title: '',
        description: 'service.startLogin.description',
        onClick: startService,
        buttonLabel: 'service.button.startService',
      },
      processSteps: {
        title: 'service.steps.title',
        steps: [
          {
            label: 'findLicence',
            description: 'service.steps.description.findLicence',
          },
          {
            label: 'getDEDApproval',
            description: 'service.steps.description.getDEDApproval',
          },
        ],
      },
      breadcrumbs: constants.BREADCRUMBS,
    },
    state: {
      mapState: [
        'loggedIn',
        'stepStatus',
        'selectedLicenceNumber',
        'loadingLicense',
        'licenceDetails',
        'linkLicenseStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: [
        'stepStatus',
        'selectedLicenceNumber',
        'loadingLicense',
        'licenceDetails',
        'linkLicenseStatus',
      ],
    },
    // requires: [REQUIRES_CUSTOM_LOGIN],
  },
];

export default home;
