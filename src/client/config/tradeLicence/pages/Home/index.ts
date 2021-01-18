import { IVariables } from '@tamm/app-composer';
import { BASE_PATH, PATH_SUBMIT } from '../../routes';

const home = [
  {
    path: [BASE_PATH], // path for router
    uniqueId: 'service-home-page', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      serviceTitle: 'serviceTitle',
      serviceDescription: 'serviceDescription',
      processSteps: [
        {
          label: 'submit_application',
          description: 'submit_application.description',
        },
        {
          label: 'ded_approval.title',
          description: 'ded_approval.description',
        },
        { label: 'payment.title', description: 'payment.description' },
        {
          label: 'initial_approval.title',
          description: 'initial_approval.description',
        },
        {
          label: 'download_certificate',
          description: 'download_certificate.description',
        },
      ],
      processTitle: 'global.process',
      startButton: {
        label: 'tradename.start',
        description: 'tradename.description',
        title: 'Request Reserving Economic Name',
        onClick: (props: IVariables) => props.history.push(PATH_SUBMIT),
      },
      showRelatedJourneyCard: true,
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'user', 'applications'],
      mapDispatch: ['instanceId', 'businessKey', 'applications'],
    },
  },
];

export default home;
