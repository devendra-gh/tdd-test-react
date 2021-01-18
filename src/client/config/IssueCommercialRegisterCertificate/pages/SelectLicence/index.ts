import { IVariables } from '@tamm/app-composer';
import {
  REQUIRES_CUSTOM_LOGIN,
  REQUIRES_UPGRADE_SOP3,
} from 'client/config/utils/customRequireTests';
import { PATH_SELECT_LICENCE } from '../../routes';

import {
  init,
  handleCancelLink,
  handleBackButton,
  handleStartService,
  handleSelectLicence,
} from './functions';

const selectLicence = [
  {
    path: [PATH_SELECT_LICENCE], // path for router
    uniqueId: 'select-licence', // uniqueId for caching and other purposes
    template: 'selectLicence', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    init,
    onPageInit: (props: IVariables) => ({
      handleBackButton: () => handleBackButton(props),
      handleSelectLicence: (value: any) => handleSelectLicence(value, props),
      handleCancelLink: () => handleCancelLink(props),
    }),
    props: {
      handleStartService,
      currentStep: 'selectLicence',
      stepStatus: {},
      breadcrumbs: [
        {
          label: 'breadcrumb.level0.title',
          link: 'https://www.tamm.abudhabi/',
        },
        {
          label: 'breadcrumb.level1.title',
          link: 'https://www.tamm.abudhabi/tamm-centers-services',
        },
        {
          label: 'breadcrumb.level2.title',
          link:
            'https://www.tamm.abudhabi/tamm-centers-services/department-of-economic-development',
        },
      ],
    },
    state: {
      mapState: [
        'licenceList',
        'loggedIn',
        'loadingLicences',
        'user',
        'selectedLicence',
        'businessKey',
        'submitting',
        'steps',
        {
          process: (state: IVariables) => ({
            currentStepIndex: state.steps.findIndex(
              ({ name }: IVariables) => name === 'selectLicence',
            ),
            title: 'service.process.title',
            steps: state.steps,
          }),
        },
      ],
      mapDispatch: [
        'loadingLicences',
        'licenceList',
        'selectedLicence',
        'instanceId',
        'businessKey',
        'submitting',
      ],
    },
    requires: [REQUIRES_CUSTOM_LOGIN, REQUIRES_UPGRADE_SOP3],
  },
];

export default selectLicence;
