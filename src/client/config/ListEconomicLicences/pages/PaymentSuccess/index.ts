import { IVariables } from '@tamm/app-composer';
import {
  REQUIRES_CUSTOM_LOGIN,
  REQUIRES_UPGRADE_SOP3,
} from 'client/config/utils/customRequireTests';
import {
  handleReceiptDownloadButton,
  handleCertificateDownloadButton,
  handleEndProcess,
} from './functions';
import { PATH_PAYMENT_SUCCESS } from '../../routes';
import { addAnalytics, PAY2_EVENT_KEY } from '../../utils';

const success = [
  {
    path: [PATH_PAYMENT_SUCCESS], // path for router
    uniqueId: 'success-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    onPageInit: (props: IVariables) => {
      addAnalytics(
        PAY2_EVENT_KEY,
        { serviceStatus: 'success' },
        { sum: props.totalSection },
      );
    },
    props: {
      buttons: [
        {
          label: 'download.receipt.button',
          uiType: 'secondary',
          onClick: handleReceiptDownloadButton,
        },
        {
          label: 'download.certificate.button',
          uiType: 'primary',
          onClick: handleCertificateDownloadButton,
        },
        {
          label: 'button.dashboard',
          uiType: 'secondary',
          onClick: handleEndProcess,
        },
      ],
      content: 'successPage.text',
      title: 'successPage.title',
      status: 'success',
      currentStep: 'applicationSummary',
      stepStatus: {
        makePayment: 'finish',
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
    state: {
      mapState: [
        'steps',
        'instanceId',
        'businessKey',
        'user',
        'downloaded',
        'loggedIn',
        'totalSection',
        {
          process: (state: IVariables) => ({
            currentStepIndex: state.steps.findIndex(
              ({ name }: IVariables) => name === 'applicationSummary',
            ),
            title: 'service.process.title',
            steps: state.steps,
          }),
        },
      ],
      mapDispatch: ['downloaded', 'stepsStatus'],
    },
    requires: [REQUIRES_CUSTOM_LOGIN, REQUIRES_UPGRADE_SOP3],
  },
];

export default success;
