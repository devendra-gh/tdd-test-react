import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('../../config');
jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceSubmit/functions', () => {
  window.scrollTo = jest.fn();
  let mockFetch: any;
  let props = {
    locale: 'en',
    nocForm: {
      officialEmail: 'test@test.com',
      officialMobile: ' 971 52 111 1111',
      proEmail: 'test@test.com',
      proMobileNumber: null,
      acceptAll: null,
    },
    user: {
      Mobile: '971111111111',
      'User Email': 'test@test.com',
      'First Name EN': 'test',
      'Last Name EN': 'test',
      'Full Name AR': 'test',
    },
    licenceExpiryDate: '',
    contractExpiryDate: '',
    isTawtheeqRequired: false,
    fileUploadData: 'test',
    submitLicence: {
      data: {
        thawtheeq: {},
        noc: {},
      },
    },
    actions: {
      nocForm: {
        update: jest.fn(),
      },
      isTawtheeqRequired: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
      submitLicence: {
        update: jest.fn(),
      },
      licenceSubmitPage: {
        update: jest.fn(),
      },
      fileUploadData: {
        update: jest.fn(),
      },
    },
  };
  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Init', () => {
    it('should call init with en', async () => {
      functions.init(props);
      expect(props.actions.nocForm.update).toHaveBeenCalled();
    });
    it('should call init with ar', async () => {
      props.locale = 'ar';
      functions.init(props);
      expect(props.actions.nocForm.update).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    it('should call onPageInit', async () => {
      const props1 = {
        licenceExpiryDate: undefined,
        contractExpiryDate: undefined,
      };
      functions.onPageInit(props1);
      expect(props.actions.isTawtheeqRequired.update).not.toHaveBeenCalled();
    });

    it('should call onPageInit with licenceExpiryDate < new Date', async () => {
      props = {
        ...props,
        licenceExpiryDate: '2020-04-06T08:07:57.810Z',
        contractExpiryDate: '',
      };
      functions.onPageInit(props);
      expect(props.actions.isTawtheeqRequired.update).not.toHaveBeenCalled();
    });

    it('should call onPageInit with contractExpiryDate < licenceExpiryDate', async () => {
      props = {
        ...props,
        licenceExpiryDate: '2020-04-06T08:07:57.810Z',
        contractExpiryDate: '2030-04-06T08:07:57.810Z',
      };
      functions.onPageInit(props);
      expect(props.actions.isTawtheeqRequired.update).toHaveBeenCalled();
    });

    it('should call onPageInit with contractExpiryDate > licenceExpiryDate', async () => {
      props = {
        ...props,
        licenceExpiryDate: '2030-04-06T08:07:57.810Z',
        contractExpiryDate: '2020-04-06T08:07:57.810Z',
      };
      functions.onPageInit(props);
      expect(props.actions.isTawtheeqRequired.update).toHaveBeenCalled();
    });

    it('should call onPageInit with en', async () => {
      props = {
        ...props,
        licenceExpiryDate: '',
        contractExpiryDate:
          'Tue Apr 07 2020 11:59:52 GMT+0400 (Gulf Standard Time)',
      };
      functions.onPageInit(props);
      expect(props.actions.isTawtheeqRequired.update).not.toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onNocFormChange', () => {
    it('should call onNocFormChange', async () => {
      functions.onNocFormChange({ target: { value: 'test' } }, props);
      expect(props.actions.nocForm.update).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validate', () => {
    it('should call validate', async () => {
      functions.validate(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onSubmit', () => {
    it('should properly call onSubmit', async () => {
      props = {
        ...props,
        isTawtheeqRequired: true,
      };
      const MockApi = jest.fn(() => {
        return Promise.resolve({});
      });
      mockFetch.mockImplementation(MockApi);
      functions.onSubmit(props);
      expect(MockApi).not.toHaveBeenCalled();
    });

    it('should properly call onSubmit without sufficient data', async () => {
      const newProps = {
        ...props,
        submitLicence: {
          data: {
            thawtheeq: undefined,
            noc: undefined,
          },
        },
      };
      const MockApi = jest.fn(() => {
        return Promise.resolve({});
      });
      mockFetch.mockImplementation(MockApi);
      functions.onSubmit(newProps);
      expect(MockApi).not.toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPrevious', () => {
    it('should call onPrevious', async () => {
      functions.onPrevious(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onNext', () => {
    it('should call onNext', async () => {
      functions.onNext(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onBack', () => {
    it('should call onBack', async () => {
      functions.onBack(props);
    });
  });
});

test('test', () => {
  expect(1).toBe(1);
});
