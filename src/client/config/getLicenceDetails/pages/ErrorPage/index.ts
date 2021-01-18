import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData } from '../../utils';

const ErrorPage = [
  {
    path: '/get-licence-details/error', // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'getLicenceDetails.title.tradeLicenceDetails', // title of the page, later it will be read from CMS
    init: (props: IVariables) => {
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        'getLicenceDetails.steps.enterLicenceNumber': 'finish',
      });
    },
    onPageInit: (props: IVariables) => {
      getAnalyticsData('sla', { serviceStatus: 'fail' });
      return {
        title:
          props.tradeLicence.errorCode === 204
            ? 'getLicenceDetails.error.notFound.title'
            : 'getLicenceDetails.error.generic.title',
        text:
          props.tradeLicence.errorCode === 204
            ? 'getLicenceDetails.error.notFound.desc.title'
            : 'getLicenceDetails.error.generic.desc.title',
        type:
          props.tradeLicence.errorCode === 204
            ? noticeTypes.INFO
            : noticeTypes.WARNING,
      };
    },
    props: {
      currentStep: 'getLicenceDetails.steps.licenceDetails',
      buttons: [
        {
          label: 'button.back',
          link: '/get-licence-details/licence-number',
        },
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'tradeLicence',
        {
          steps: (state: IVariables) => {
            return state.tradeLicence.errorCode === 204
              ? state.getLicenceDetailsSteps
              : [];
          },
        },
      ],
      mapDispatch: ['stepsStatus'],
    },
  },
];

export default ErrorPage;
