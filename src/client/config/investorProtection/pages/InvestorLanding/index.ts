import { IVariables } from '@tamm/app-composer';
import { BASE_PATH } from 'client/config/investorProtection/routes';
import functions from './functions';

const InvestorLanding = [
  {
    path: [BASE_PATH], // path for router
    uniqueId: 'landing-page', // uniqueId for caching and other purposes
    template: 'landing', // template name, must be located in index of folder template/index
    title: 'investorProtection.title', // title of the page, later it will be read from CMS
    props: {
      showSteps: false,
      title: 'investorProtection.landingPage.title',
      description: 'investorProtection.landingPage.description',
      startLogin: {
        title: 'investorProtection.title',
        description: 'investorProtection.landingPage.startLogin.description',
        onClick: functions.onClick,
        buttonLabel: 'button.start',
      },
      process: {
        steps: [
          {
            description: 'step.selectServe',
            label: 'step.selectServie.label',
          },
          {
            description: 'step.serviceDetails',
            label: 'step.servieDetails.label',
          },
          {
            description: 'step.viewStatus',
            label: 'step.viewStatus.label',
          },
        ],
        title: 'Process',
      },
      tables: [
        {
          columns: [
            {
              id: 'document',
              title: 'investorProtection.landingPage.table.column.document',
            },
            {
              align: 'end',
              id: 'description',
              title: 'investorProtection.landingPage.table.column.description',
            },
          ],
          items: [
            {
              description: 'investorProtection.landingPage.table.cardCopy',
              document: 'investorProtection.landingPage.table.eida',
              id: '0',
            },
            {
              description: 'investorProtection.landingPage.table.originalDoc',
              document: 'investorProtection.landingPage.table.dedDoc',
              id: '1',
            },
          ],
          title: 'investorProtection.landingPage.table.reqDocs',
        },
      ],
      helpfulBlock: {
        onChange: () => {},
        callField: {
          onChange: () => {},
        },
        commentField: {
          onChange: () => {},
        },
        emailField: {
          onChange: () => {},
        },
        submitButton: {
          onClick: () => {},
        },
        telephoneField: {
          countries: [],
          onChange: () => {},
        },
      },
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
        'stepStatus',
      ],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default InvestorLanding;
