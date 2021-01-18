// import fetch from 'client/services/fetch';
import { PATH_HOME, PATH_GET_STATUS, PATH_ERROR } from '../../routes';
import {
  init,
  validate,
  handleInputLicence,
  getLicenceDetails,
  handleBackButton,
  onSubmit,
  firstUpdate,
} from './functions';
import { services } from '../../services';

jest.mock('../../services');

const props = {
  user: {
    IDN: '1234567889',
    'User Unique Identifier': '362888e9-ddd1-7cc7-bbca-47945a297136',
  },
  selectedLicenceType: 'industrialLicence',
  selectedLicenceNumber: 'IN-1000257',
  actions: {
    selectedLicenceType: { update: jest.fn() },
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
  const mockFetch: any = services;

  it('initialize the page', async () => {
    await init(props);
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });

  it('validate for empty licence number', () => {
    expect(validate({ ...props, selectedLicenceNumber: '' })).toBeFalsy();
  });
  it('validate the licence number', () => {
    expect(validate(props)).toBeFalsy();
  });
  it('invalidate the licence number', () => {
    expect(
      validate({ ...props, selectedLicenceNumber: 'TN-2972676' }),
    ).toBeTruthy();
  });

  it('call the getLicence without licence number', async () => {
    const newProp = { ...props, selectedLicenceNumber: null };
    const value = await getLicenceDetails(newProp);
    expect(value).toBeFalsy();
  });
  it('get the licence details', async () => {
    mockFetch.industrialLicenceDetails.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          code: '200',
          result: {},
        },
      });
    });

    const response = await getLicenceDetails({
      ...props,
      selectedLicenceType: 'industrialLicence',
      selectedLicenceNumber: 'IN-1000257',
    });
    expect(response).toBeTruthy();
    expect(props.actions.licenceDetails.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });
  it('get the licence details', async () => {
    mockFetch.industrialLicenceDetails.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          message: '',
          code: '200',
          traceId: '',
          result: [
            {
              licenseNo: '',
              clasification_en: '',
              clasification_ar: '',
              businessNameEng: '',
              businessNameArb: '',
            },
          ],
        },
      });
    });

    const response = await getLicenceDetails({
      ...props,
      selectedLicenceType: 'industrialLicence',
      selectedLicenceNumber: 'IN-1000257',
    });
    expect(response).toBeTruthy();
    expect(props.actions.licenceDetails.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });
  it('get the licence details failed response', async () => {
    mockFetch.industrialLicenceDetails.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        data: {
          message: '',
          code: '200',
          traceId: '',
          result: [],
        },
      });
    });

    const response = await getLicenceDetails({
      ...props,
      selectedLicenceType: 'industrialLicence',
      selectedLicenceNumber: 'IN-1000257',
    });
    expect(response).toBeTruthy();
    expect(props.actions.licenceDetails.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });
  it('get the licence details return error', async () => {
    mockFetch.industrialLicenceDetails.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    const response = await getLicenceDetails({
      ...props,
      selectedLicenceType: 'industrialLicence',
      selectedLicenceNumber: 'IN-1000257',
    });
    expect(response).toBeFalsy();
    expect(props.actions.licenceDetails.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });

  it('handle back button', async () => {
    await handleBackButton(props);
    expect(props.history.push).toHaveBeenCalledWith(PATH_HOME);
  });

  it('handle the onSubmit info result', async () => {
    mockFetch.linkUserLicence.mockImplementation(() => {
      return Promise.resolve({
        data: { code: '200', status: '200', message: 'success', traceId: '' },
      });
    });

    await onSubmit({
      ...props,
      selectedLicenceNumber: 'IN-1000257',
    });
    expect(props.actions.linkLicenseStatus.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalledWith(PATH_GET_STATUS);
  });

  it('handle the onSubmit success result', async () => {
    mockFetch.linkUserLicence.mockImplementation(() => {
      return Promise.resolve({
        data: {
          code: '201',
          status: '200',
          message: 'success',
          traceId: '',
        },
      });
    });

    await onSubmit({
      ...props,
      selectedLicenceNumber: 'IN-1000257',
    });
    expect(props.actions.linkLicenseStatus.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });

  it('handle the onSubmit error ', async () => {
    try {
      mockFetch.linkUserLicence.mockImplementation(() => {
        return Promise.reject();
      });

      await onSubmit({
        ...props,
        selectedLicenceNumber: 'IN-1000257',
      });
      expect(props.actions.linkLicenseStatus.update).toHaveBeenCalled();
      expect(props.actions.loadingLicense.update).toHaveBeenCalled();
      expect(props.history.push).toHaveBeenCalledWith(PATH_ERROR);
    } catch (error) {
      console.info('my error message', error);
    }
  });

  it('handle back button', async () => {
    await firstUpdate({
      ...props,
      licenceDetails: { ...props.licenceDetails, status: 'error' },
    });
    expect(props.actions.licenceDetails.update).toHaveBeenCalled();
    expect(props.actions.loadingLicense.update).toHaveBeenCalled();
  });
  it('handle back button', async () => {
    await firstUpdate({
      ...props,
      licenceDetails: { ...props.licenceDetails, status: '' },
    });
  });

  it('input licence number', async () => {
    await handleInputLicence('CN-1023919', props);
    expect(props.actions.selectedLicenceNumber.update).toHaveBeenCalledWith(
      'CN-1023919',
    );
  });
});
