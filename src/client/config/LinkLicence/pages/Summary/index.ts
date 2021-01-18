import { IVariables, REQUIRES_LOGIN } from '@tamm/app-composer';
// import { REQUIRES_CUSTOM_LOGIN } from 'client/config/utils/customRequireTests';
import { PATH_GET_STATUS } from '../../routes';
import { constants } from '../../helper';
import { pageInitialization } from './function';
import steps from '../../steps';

const currentStep = 'getDEDApproval'; // currentStep
const summary = [
  {
    path: [PATH_GET_STATUS], // path for router
    uniqueId: 'summary-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'service.title', // title of the page, later it will be read from CMS
    onPageInit: (props: IVariables) => pageInitialization(props, currentStep),
    props: {
      title: 'service.title',
      showRelatedJourneyCard: true,
      currentStep,
      breadcrumbs: constants.BREADCRUMBS,
      steps,
    },
    state: {
      mapState: ['linkLicenseStatus', 'selectedLicenceNumber'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default summary;
