import { pageInitialization } from './function';
import { PATH_HOME } from '../../routes';
// mock data for props
const props = {
  linkLicenseStatus: { status: '' },
  selectedLicenceNumber: '',
  history: {
    push: jest.fn(),
  },
};
const currentStep = 'getDEDApproval'; // currentStep

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Summary page Functions', () => {
  it('page initialization function for empty status', () => {
    const newValues = pageInitialization(props, currentStep);
    expect(newValues()).toBeInstanceOf(Object);
  });
  it('page initialization function for empty success', () => {
    props.linkLicenseStatus.status = 'success';
    const newValues = pageInitialization(props, currentStep);
    const received = newValues();
    expect(received).toBeInstanceOf(Object);
    const { onClick } = received.buttons[0];
    onClick();
    expect(props.history.push).toBeCalledWith(PATH_HOME);
  });
  it('page initialization function for empty info', () => {
    props.linkLicenseStatus.status = 'info';
    const newValues = pageInitialization(props, currentStep);
    expect(newValues()).toBeInstanceOf(Object);
  });
  it('page initialization function for empty error', () => {
    props.linkLicenseStatus.status = 'error';
    const newValues = pageInitialization(props, currentStep);
    const received = newValues();
    expect(received).toBeInstanceOf(Object);
    const { onClick } = received.buttons[0];
    onClick();
    expect(props.history.push).toBeCalledWith(PATH_HOME);
  });
  it('page initialization function failing because of no linkLicenseStatus', () => {
    const newProps = props;
    delete newProps.linkLicenseStatus;
    pageInitialization(newProps, currentStep);
    expect(props.history.push).toHaveBeenCalled();
  });
});
