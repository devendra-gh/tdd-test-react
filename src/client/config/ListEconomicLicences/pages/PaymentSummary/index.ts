import { IVariables } from '@tamm/app-composer';
import {
  REQUIRES_CUSTOM_LOGIN,
  REQUIRES_UPGRADE_SOP3,
} from 'client/config/utils/customRequireTests';
import { PATH_PAYMENT_SUMMARY } from '../../routes';
import {
  init,
  onPageInit,
  handleTermsConditions,
  startPayment,
} from './functions';

const payment = [
  {
    path: [PATH_PAYMENT_SUMMARY], // path for router
    uniqueId: 'payment', // uniqueId for caching and other purposes
    template: 'paymentSummary', // template name, must be located in index of folder template/index
    title: 'home.title', // title of the page, later it will be read from CMS
    translations: {
      dictionaryId: 'buy-new-car',
      templateId: '4f3b7eee7185484f988ae2d898d666ba',
    },
    init,
    onPageInit,
    props: {
      handleTermsConditions,
      subtitle: 'payment.subtitle',
      description: 'payment.description',
      currentStep: 'applicationSummary',
      stepStatus: {
        selectLicence: 'finish',
      },
      buttons: [
        {
          label: 'button.pay',
          onClick: (props: IVariables) => startPayment(props, true),
          withArrow: true,
        },
        {
          label: 'button.cancel',
          onClick: (props: IVariables) => startPayment(props, false),
          withArrow: true,
          alignIcon: 'start',
          uiType: 'secondary',
        },
      ],

      termsAndConditions: [
        {
          id: 1,
          label: 'terms.label',
        },
      ],
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
        {
          process: (state: IVariables) => ({
            currentStepIndex: state.steps.findIndex(
              ({ name }: IVariables) => name === 'makePayment',
            ),
            title: 'service.process.title',
            steps: state.steps,
          }),
        },
        'user',
        'selectedLicence',
        'businessKey',
        'termsAndConditionsValues',
        'list',
        'totalSection',
        'tags',
        'instanceId',
        'paymentLink',
        'showErrors',
        'loggedIn',
      ],
      mapDispatch: [
        'selectedLicence',
        'instanceId',
        'businessKey',
        'termsAndConditionsValues',
        'list',
        'totalSection',
        'tags',
        'paymentLink',
        'showErrors',
        'startingPayment',
      ],
    },
    requires: [REQUIRES_CUSTOM_LOGIN, REQUIRES_UPGRADE_SOP3],
  },
];

export default payment;
