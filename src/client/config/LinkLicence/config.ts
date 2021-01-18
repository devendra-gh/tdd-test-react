import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import { IVariables } from '@tamm/app-composer';
import './override.less';
import pages from './pages';
import steps, { IStep } from './steps';

// const smartpassData = getSmartpassData();
interface IState extends IVariables {
  steps: IStep[];
  stepStatus: IVariables;
  loadingLicencesDetails: boolean;
  submitting: boolean;
  licenceList: IVariables[];
  selectedLicenceNumber: string;
  totalSection: number | null;
  showErrors: boolean;
  transactionNumber: string;
  selectedLicenceType: string;
  loadingLicense: boolean;
  licenceDetails: object;
}

const initialState: IState = {
  loadingLicencesDetails: false,
  submitting: false,
  licenceList: [],
  selectedLicenceNumber: '',
  steps,
  stepStatus: {},
  totalSection: null,
  showErrors: false,
  transactionNumber: '',
  selectedLicenceType: 'industrialLicence',
  loadingLicense: false,
  licenceDetails: { status: '' },
  linkLicenseStatus: { status: '' },
};

const config = {
  appName: 'linkLicence',
  version: '1',
  defaults: {
    title: 'Link Licence and Trade Names',
  },
  initialState,
  header: {
    template: 'header',
    props: {},
    state: {
      mapState: [
        'user',
        'locale',
        'title',
        'breadcrumbs',
        'selectedLicenceNumber',
        'selectedLicenceType',
        'loadingLicense',
        'licenceDetails',
        'linkLicenseStatus',
      ],
      mapDispatch: [
        'user',
        'locale',
        'selectedLicenceNumber',
        'loadingLicense',
        'licenceDetails',
        'linkLicenseStatus',
      ],
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
