import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { PATH_CONTINUE_PROCESS } from '../../routes';
import { continueProcess } from './functions';
import { REQUIRES_SOP3 } from '../../utils';

const error = [
  {
    path: [PATH_CONTINUE_PROCESS], // path for router
    uniqueId: 'continue-process', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    props: {
      content: 'payment.continueProcessPage.text',
      title: 'payment.continueProcessPage.title',
      status: 'inProgress',
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
    onPageInit: async (props: IVariables) => {
      await continueProcess(props);
    },
    state: {
      mapDispatch: ['businessKey', 'instanceId'],
      mapState: ['user', 'loggedIn', 'businessKey', 'instanceId'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default error;
