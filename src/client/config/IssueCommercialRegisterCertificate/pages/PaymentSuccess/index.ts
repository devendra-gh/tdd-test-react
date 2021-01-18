import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import {
  handleReceiptDownloadButton,
  handleCertificateDownloadButton,
  handleEndProcess,
} from './functions';
import { PATH_PAYMENT_SUCCESS } from '../../routes';
import { REQUIRES_SOP3 } from '../../utils';

const error = [
  {
    path: [PATH_PAYMENT_SUCCESS], // path for router
    uniqueId: 'success-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
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
        selectLicence: 'finish',
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
      mapDispatch: ['downloaded'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default error;
