import config from './index';
import { constants } from '../../helper';

jest.mock('./functions', () => ({
  init: jest.fn(),
  firstUpdate: jest.fn(),
}));

const currentStep = 'findLicence'; // currentStep
const page = config[0]; // page configuration
const props = {
  stepsStatus: {},
  currentStep,
  breadcrumbs: constants.BREADCRUMBS,
  subTitle: currentStep,
  subDescription: `linkLicence.${currentStep}.description`,
  licenceTable: ['licenceNumber', 'licenceType', 'tradeName'],
  loggedIn: true,
  user: '',
  selectedLicenceType: 'industrialLicence',
  selectedLicenceNumber: '',
  loadingLicense: false,
  licenceDetails: { status: '' },
  actions: {
    loadingLicense: { update: jest.fn() },
    selectedLicenceNumber: { update: jest.fn() },
    licenceDetails: { update: jest.fn() },
  },
  history: {
    push: jest.fn(),
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('find licence', () => {
  it('should page init', async () => {
    await page.init(props);
    expect(page.init).toBeInstanceOf(Function);
  });
  it('should page onPageInit', async () => {
    await page.onPageInit(props);
    expect(page.onPageInit).toBeInstanceOf(Function);
  });
  it('test the step status', () => {
    page.state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        expect(item.steps).toBeInstanceOf(Function);
        item.steps(page.state);
      }
    });
  });
});
