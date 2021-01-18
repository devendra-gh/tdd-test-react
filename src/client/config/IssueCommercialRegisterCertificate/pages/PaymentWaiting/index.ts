import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { PATH_PAYMENT_WAITING } from '../../routes';
import { continueProcess } from './functions';
import { REQUIRES_SOP3, getPaymentLink } from '../../utils';

const error = [
  {
    path: [PATH_PAYMENT_WAITING], // path for router
    uniqueId: 'waiting-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    props: {
      content: 'payment.waitingPage.text',
      title: 'payment.waitingPage.title',
      status: 'inProgress',
      currentStep: 'makePayment',
      stepStatus: {
        selectLicence: 'finish',
      },
      showSidebar: true,
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
      const paymentLink = await getPaymentLink(props);
      return {
        link: paymentLink,
      };
    },
    state: {
      mapDispatch: ['businessKey', 'instanceId'],
      mapState: [
        'user',
        'loggedIn',
        'businessKey',
        'instanceId',
        {
          process: (state: IVariables) => ({
            currentStepIndex: state.steps.findIndex(
              ({ name }: IVariables) => name === 'makePayment',
            ),
            title: 'service.process.title',
            steps: state.steps,
          }),
        },
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default error;
