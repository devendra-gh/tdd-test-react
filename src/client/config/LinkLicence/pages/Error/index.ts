import { IVariables } from '@tamm/app-composer';
import { PATH_ERROR, PATH_FIND_LICENCE } from '../../routes';
import { constants, functions } from '../../helper';

const error = [
  {
    path: [PATH_ERROR], // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'errorTemplate', // template name, must be located in index of folder template/index
    title: 'service.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    onPageInit: (props: IVariables) => ({
      button: {
        label: 'button.back',
        withArrow: true,
        uiType: 'secondary',
        alignIcon: 'start',
        onClick: () => functions.handleRedirectLink(props, PATH_FIND_LICENCE),
      },
    }),
    props: {
      currentStep: 'findLicence',
      content: 'errorPage.text',
      title: 'errorPage.title',
      status: 'failure',
      breadcrumbs: constants.BREADCRUMBS,
    },
    state: {
      mapState: ['businessKey'],
    },
  },
];

export default error;
