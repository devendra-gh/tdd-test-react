import config from './index';
import { PATH_FIND_LICENCE } from '../../routes';

const page = config[0]; // page configuration
const props = {
  user: {
    IDN: '1234567889',
    'User Unique Identifier': '362888e9-ddd1-7cc7-bbca-47945a297136',
  },
  selectedLicenceType: 'industrialLicence',
  selectedLicenceNumber: 'IN-1000257',
  actions: {
    loadingLicense: { update: jest.fn() },
    linkLicenseStatus: { update: jest.fn() },
    licenceDetails: { update: jest.fn() },
    selectedLicenceNumber: { update: jest.fn() },
  },
  history: {
    push: jest.fn(),
  },
  licenceDetails: { status: '', capId: '', trackingNumber: 'IN-1000257' },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  it('should return buttons on page init', () => {
    const { startLogin } = page.props;
    startLogin.onClick(props);
    expect(props.history.push).toBeCalledWith(PATH_FIND_LICENCE);
  });
  it('test the step status', () => {
    page.state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        expect(item.steps).toBeInstanceOf(Function);
        const stepsValue = item.steps({ linkLicenceSteps: 'linkLicenceSteps' });
        expect(stepsValue).toEqual([]);
      }
    });
  });
});
