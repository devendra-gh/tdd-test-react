import { startService } from './functions';
import { PATH_FIND_LICENCE } from '../../routes';

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

describe('Select Licence page functions', () => {
  it('rest the values in the state for start service', () => {
    startService(props);
    expect(props.actions.loadingLicense.update).toHaveBeenCalledWith(false);
    expect(props.actions.linkLicenseStatus.update).toHaveBeenCalledWith({
      status: '',
    });
    expect(props.actions.licenceDetails.update).toHaveBeenCalledWith({
      status: '',
    });
    expect(props.actions.selectedLicenceNumber.update).toHaveBeenCalledWith('');
    expect(props.history.push).toHaveBeenCalledWith(PATH_FIND_LICENCE);
  });
});
