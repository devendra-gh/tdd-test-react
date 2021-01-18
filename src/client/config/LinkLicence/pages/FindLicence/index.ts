import { IVariables } from '@tamm/app-composer';
import { REQUIRES_CUSTOM_LOGIN } from 'client/config/utils/customRequireTests';
import { PATH_FIND_LICENCE } from '../../routes';
import { constants } from '../../helper';

import {
  init,
  handleBackButton,
  onSubmit,
  validate,
  getLicenceDetails,
  handleInputLicence,
  firstUpdate,
} from './functions';

const currentStep = 'findLicence'; // currentStep
const findLicence = [
  {
    path: [PATH_FIND_LICENCE], // path for router
    uniqueId: 'findLicence', // uniqueId for caching and other purposes
    template: 'findLicence', // template name, must be located in index of folder template/index
    title: 'service.title', // title of the page, later it will be read from CMS
    init: (props: IVariables) => init(props),
    onPageInit: (props: IVariables) => firstUpdate(props),
    props: {
      onBack: handleBackButton,
      handleCancelLink: handleBackButton,
      validate,
      getLicenceDetails,
      handleInputLicence,
      onSubmit,
      stepsStatus: {},
      currentStep,
      breadcrumbs: constants.BREADCRUMBS,
      subTitle: currentStep,
      subDescription: `linkLicence.${currentStep}.description`,
      licenceTable: ['licenceNumber', 'licenceType', 'tradeName'],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'selectedLicenceType',
        'selectedLicenceNumber',
        'loadingLicense',
        'licenceDetails',
        'linkLicenseStatus',
        {
          steps: (state: IVariables) => {
            return state.steps;
          },
        },
      ],
      mapDispatch: [
        'selectedLicenceNumber',
        'loadingLicense',
        'licenceDetails',
        'linkLicenseStatus',
      ],
    },
    requires: [REQUIRES_CUSTOM_LOGIN],
  },
];

export default findLicence;
