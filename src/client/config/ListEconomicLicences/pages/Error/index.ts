import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PATH_ERROR } from '../../routes';
import { addAnalytics, SLA_EVENT_KEY } from '../../utils';

const error = [
  {
    path: [PATH_ERROR], // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    onPageInit: (props: IVariables) => {
      addAnalytics(SLA_EVENT_KEY, { serviceStatus: 'fail' });
      return {
        buttons: [
          {
            label: 'selectLicence.empty.button',
            withArrow: true,
            uiType: 'secondary',
            alignIcon: 'start',
            onClick: () => functions.handleBackButton(props),
          },
        ],
      };
    },
    props: {
      content: 'errorPage.text',
      title: 'errorPage.title',
      status: 'failure',
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
      mapDispatch: ['businessKey', 'instanceId'],
    },
  },
];

export default error;
