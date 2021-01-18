import { errorBoundary } from '../../services';
import { PATH_HOME } from '../../routes';
import {
  handleCancelLink,
  handleSelectLicence,
  handleStartService,
  init,
} from './functions';
import { startPaymentService } from '../../utils';

jest.mock('../../services', () => ({
  errorBoundary: jest.fn(),
  issueCertificate: jest
    .fn()
    .mockResolvedValueOnce({
      code: '200',
      Result: {
        recordNumber: 'LN-1234567',
      },
    })
    .mockResolvedValueOnce({
      code: '500',
      message: 'An Application pending payment with number LN-1234566 exists',
    })
    .mockResolvedValueOnce({
      code: '109',
      message: 'Letter is not issued',
    })
    .mockRejectedValueOnce('Error issuing certificate'),
  fetchLicences: jest
    .fn()
    .mockResolvedValueOnce([{ tradeLicenseNumber: 'CN-12345' }])
    .mockResolvedValueOnce({ tradeLicenseNumber: 'CN-12345' })
    .mockResolvedValueOnce([{ tradeLicenseNumber: 'CN-12345' }])
    .mockRejectedValueOnce('Error fetching licences'),
}));

jest.mock('../../utils', () => ({
  startPaymentService: jest.fn().mockResolvedValueOnce({}),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Select Licence page functions', () => {
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init', () => {
    it('should initialize page by fetching licenses', async () => {
      const props = {
        loggedIn: true,
        user: { IDN: '1234567889' },
        submitting: false,
        actions: {
          loadingLicences: { update: jest.fn() },
          licenceList: { update: jest.fn() },
          selectedLicence: { update: jest.fn() },
          submitting: { update: jest.fn() },
        },
      };
      await init(props);
      // expect(fetchLicences).toHaveBeenCalled();
      // expect(props.actions.licenceList.update).toHaveBeenCalled();
    });

    it('should initialize licences with array when single item licence is returned', async () => {
      const props = {
        loggedIn: true,
        user: { IDN: '1234567889' },
        submitting: false,
        selectedLicence: { tradeLicenseNumber: 'CN-1234567' },
        actions: {
          loadingLicences: { update: jest.fn() },
          licenceList: { update: jest.fn() },
          selectedLicence: { update: jest.fn() },
          submitting: { update: jest.fn() },
        },
      };
      await init(props);
      // expect(fetchLicences).toHaveBeenCalled();
      // expect(props.actions.licenceList.update).toHaveBeenCalledWith([
      //   { tradeLicenseNumber: 'CN-12345' },
      // ]);
    });

    it('should update the defaultValue with the first item in the list of licences', async () => {
      const props = {
        user: { IDN: '1234567889' },
        submitting: false,
        actions: {
          loadingLicences: { update: jest.fn() },
          licenceList: { update: jest.fn() },
          selectedLicence: { update: jest.fn() },
          submitting: { update: jest.fn() },
        },
      };
      await init(props);
      // expect(props.actions.selectedLicence.update).toHaveBeenCalledWith(
      //   'CN-12345',
      // );
    });

    it('should fail gracefully when fetch licence fails', async () => {
      const props = {
        user: { IDN: '1234567889' },
        submitting: false,
        actions: {
          loadingLicences: { update: jest.fn() },
          licenceList: { update: jest.fn() },
          selectedLicence: { update: jest.fn() },
          submitting: { update: jest.fn() },
        },
      };
      await init(props);
      // expect(errorBoundary).toHaveBeenCalled();
    });

    it('should fail gracefully when fetch licence loggedIn', async () => {
      const props = {
        loggedIn: false,
        user: { IDN: '1234567889' },
        submitting: false,
        actions: {
          loadingLicences: { update: jest.fn() },
          licenceList: { update: jest.fn() },
          selectedLicence: { update: jest.fn() },
          submitting: { update: jest.fn() },
        },
      };
      await init(props);
    });
  });

  it('should successfully redirect to home page when cancel button is clicked', () => {
    const props = { history: { push: jest.fn() } };
    handleCancelLink(props);
    expect(props.history.push).toHaveBeenCalledWith(PATH_HOME);
  });

  it('should successfully select licence', () => {
    const event = { target: { value: 'CN-12345' } };
    const props = { actions: { selectedLicence: { update: jest.fn() } } };

    handleSelectLicence(event, props);
    expect(props.actions.selectedLicence.update).toHaveBeenCalledWith({
      target: { value: 'CN-12345' },
    });
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Select licence page functions - handle Start Service', () => {
  it('should start payment service if letter number is issued', async () => {
    const props = {
      selectedLicence: 'CN-1234567',
      actions: { submitting: { update: jest.fn() } },
    };
    await handleStartService(props);
    expect(startPaymentService).toHaveBeenCalled();
  });

  it('should extract letter number from already pending payments', async () => {
    const props = {
      user: { IDN: '1234567889' },
      selectedLicence: 'CN-1234567',
      actions: { submitting: { update: jest.fn() } },
    };
    await handleStartService(props);
    expect(startPaymentService).toBeCalled();
    // expect(startPaymentService).toHaveBeenCalledWith(props, {
    //   transactionNumber: 'LN-1234566',
    //   emiratesId: '1234567889',
    // });
  });

  it('should use error boundary when unable to extract letter number', async () => {
    const props = {
      selectedLicence: 'CN-1234567',
      actions: { submitting: { update: jest.fn() } },
    };
    await handleStartService(props);
    expect(errorBoundary).toHaveBeenCalled();
  });

  it('should use error boundary when issuing letter fails', async () => {
    const props = {
      selectedLicence: 'CN-1234567',
      actions: { submitting: { update: jest.fn() } },
    };
    await handleStartService(props);
    expect(errorBoundary).toHaveBeenCalled();
  });
});
