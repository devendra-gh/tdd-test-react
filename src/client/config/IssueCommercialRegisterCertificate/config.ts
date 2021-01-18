import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import { IVariables } from '@tamm/app-composer';
import './override.less';
import pages from './pages';
import steps, { IStep } from './steps';

// const smartpassData = getSmartpassData();
interface IState {
  steps: IStep[];
  stepStatus: IVariables;
  loadingLicences: boolean;
  submitting: boolean;
  licenceList: IVariables[];
  selectedLicence: string;
  termsAndConditionsValues: boolean[];
  totalSection: number | null;
  list: [];
  tags: [];
  showErrors: boolean;
  paymentLink: string;
  capId: string;
  transactionNumber: string;
  startingPayment: boolean;
  downloaded: [];
}

const initialState: IState = {
  loadingLicences: false,
  submitting: false,
  licenceList: [],
  selectedLicence: '',
  steps,
  stepStatus: {},
  termsAndConditionsValues: [false],
  totalSection: null,
  tags: [],
  list: [],
  paymentLink: '',
  showErrors: false,
  capId: '',
  transactionNumber: '',
  startingPayment: false,
  downloaded: [],
};

const config = {
  appName: 'issueCommercialRegisterCertificate',
  version: '1',
  defaults: {
    title: 'Issue Commercial Registration Certificate',
  },
  initialState,
  header: {
    template: 'header',
    props: {},
    state: {
      mapState: ['user', 'locale', 'title', 'breadcrumbs', 'selectedLicence'],
      mapDispatch: ['user', 'locale', 'breadcrumbs', 'selectedLicence'],
    },
  },
  footer: {
    template: 'footer',
    state: {
      mapState: ['user'],
    },
  },
  pages,
};

export default config;
