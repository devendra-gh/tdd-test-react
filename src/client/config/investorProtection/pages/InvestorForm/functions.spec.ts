import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('investor-protection/pages/investorForm/functions', () => {
  let props: any;
  const mockFetch: any = fetch;

  beforeEach(() => {
    props = {
      user: {},
      i18n: jest.fn(),
      documents: {},
      history: {
        push: jest.fn(),
      },
      actions: {
        documents: {
          reset: jest.fn(),
        },
        form: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        validation: {
          update: jest.fn(),
        },
        currentStep: {
          update: jest.fn(),
        },
        stepsStatus: {
          update: jest.fn(),
        },
        submitDate: {
          update: jest.fn(),
        },
        submitRef: {
          update: jest.fn(),
        },
      },
      form: {
        documents: {
          userIdentityDocument: [
            {
              id: 0,
              fieldName: 'userIdentityDocument',
              lastModifiedDate: '2019-12-12T10:23:07.441Z',
              name: 'test.pdf',
              documentName: 'test.pdf',
              type: 'application/pdf',
              lastModified: 1576146187441,
              size: 1540522,
              loading: true,
            },
          ],
          supportingDocuments: [
            {
              id: 0,
              fieldName: 'supportingDocuments',
              lastModifiedDate: '2019-12-12T10:23:07.441Z',
              name: 'test.pdf',
              documentName: 'test.pdf',
              type: 'application/pdf',
              lastModified: 1576146187441,
              size: 1540522,
              loading: true,
            },
          ],
        },
        name: 'testFirst testLast',
        email: 'test@gmail.com',
        mobilePhone: '+971 522222222',
        caseType: 1,
        phoneNumber: '+971 522222222',
        location: 'abuDhabi',
        'defendant.name': 'testFirst testLast',
        'defendant.location': 'abuDhabi',
        'defendant.phoneNumber': '+971 522222222',
        'defendant.caseDescription': 'This is a test case description',
        'establishment.name': 'testFirst testLast',
        'establishment.phoneNumber': '+971 522222222',
      },
      name: 'test',
      mobilePhone: '+971 521111111',
      location: 'test',
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init', () => {
    it('should be instance of function', () =>
      expect(functions.init).toBeInstanceOf(Function));

    it('should be callable', () => {
      props.locale = 'en';
      props.user = null;
      functions.init(props);
    });

    it('should be callable', () => {
      props.locale = 'en';
      props.user = {
        'First Name EN': 'test',
        'Last Name EN': 'test',
        'User Email': 'test',
        Mobile: 'test',
      };
      functions.init(props);
    });

    it('should be callable', () => {
      props.locale = 'ar';
      props.user = {
        'First Name AR': 'test',
        'Last Name AR': 'test',
        'User Email': 'test',
        Mobile: 'test',
      };
      functions.init(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    it('should be instance of function', () =>
      expect(functions.onPageInit).toBeInstanceOf(Function));

    it('should be callable', () => {
      functions.onPageInit(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onChange', () => {
    it('should be instance of function', () =>
      expect(functions.onChange).toBeInstanceOf(Function));

    it('should call form.update', () => {
      functions.onChange('', '', props);
      expect(props.actions.form.update).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onBack', () => {
    it('should be instance of function', () =>
      expect(functions.onBack).toBeInstanceOf(Function));

    it('should call form.update', () => {
      functions.onBack(props);
      expect(props.actions.form.update).toHaveBeenCalled();
      expect(props.history.push).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onSubmit', () => {
    it('should be instance of function', () =>
      expect(functions.onSubmit).toBeInstanceOf(Function));

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          code: '200',
          result: {},
        },
      });
    });

    it('should initialize init call', async () => {
      await functions.onSubmit(props, jest.fn());
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validateContactDetails', () => {
    it('should be instance of function', () =>
      expect(functions.validateContactDetails).toBeInstanceOf(Function));

    it('should return false with invalid props', () => {
      props = {
        documents: {},
        form: {
          phoneNumber: '+971 586222666',
        },
      };
      expect(functions.validateContactDetails(props.form)).toBe(false);
    });

    it('should return false with valid props', () => {
      const Newprops = {
        documents: {},
        form: {
          name: 'test user',
          mobilePhone: '+971 586222666',
          email: 'testuser@gmail.com',
          phoneNumber: 'test',
        },
      };
      expect(functions.validateContactDetails(Newprops.form)).toBe(false);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validateCaseDetails', () => {
    it('should be instance of function', () =>
      expect(functions.validateCaseDetails).toBeInstanceOf(Function));

    it('should return false with invalid props', () => {
      props = {
        documents: {},
        form: {
          caseType: 1,
        },
      };
      expect(functions.validateCaseDetails(props.form)).toBe(false);
    });

    it('should return false with valid props', () => {
      expect(functions.validateCaseDetails(props.form)).toBe(true);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validateDefendantDetails', () => {
    it('should be instance of function', () =>
      expect(functions.validateDefendantDetails).toBeInstanceOf(Function));

    it('should return false with invalid props', () => {
      props = {
        documents: {},
        form: {
          caseType: 1,
        },
      };
      expect(functions.validateDefendantDetails(props.form)).toBe(false);
    });

    it('should return false with valid props', () => {
      expect(functions.validateDefendantDetails(props.form)).toBe(true);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validate', () => {
    it('should be instance of function', () =>
      expect(functions.validate).toBeInstanceOf(Function));

    it('should return false with invalid props', () => {
      props = {
        documents: {},
        form: {
          caseType: 1,
        },
      };
      const result = functions.validate(props);
      expect(result).toBe(false);
    });

    it('should return false with valid props', () => {
      const Newprops = {
        documents: {
          supportingDocuments: [{}],
          userIdentityDocument: [{}],
        },
        form: {
          caseType: 1,
        },
      };
      const result = functions.validate(Newprops);
      expect(result).toBe(false);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('functions.getFormGroups', () => {
    beforeEach(() => {
      props = {
        ...props,
        onChange: jest.fn(),
        startShowingError: false,
        validation: {},
        i18n: jest.fn((key: string) => key),
      };
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getFileGroups', () => {
    it('instance check', () => {
      expect(functions.getFileGroups).toBeInstanceOf(Object);
    });

    it('Should return only supportingDocuments when caseType is not complaint', () => {
      props.form.caseType = 2;
      const result = functions.getFileGroups(props);
      expect(result[0].fields.length).toBe(3);
    });

    it('Should return only supportingDocuments when caseType is complaint', () => {
      const result = functions.getFileGroups(props);
      expect(result[0].fields.length).toBe(3);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getOthersFileGroups', () => {
    it('instance check', () => {
      expect(functions.getOthersFileGroups).toBeInstanceOf(Object);
    });

    it('Should return only supportingDocuments when caseType is not complaint', () => {
      props.form.caseType = 2;
      const result = functions.getOthersFileGroups(props);
      expect(result[0].fields.length).toBe(3);
    });

    it('Should return only supportingDocuments when caseType is complaint', () => {
      const result = functions.getOthersFileGroups(props);
      expect(result[0].fields.length).toBe(3);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validateEstablishmentDetails', () => {
    it('instance check', () => {
      expect(functions.validateEstablishmentDetails).toBeInstanceOf(Object);
    });

    it('Should return false', () => {
      const Newprops = {
        form: {
          userType: '2',
          'establishment.name': 'test user',
          'establishment.phoneNumber': '+971 5237868', // wrong format
        },
      };
      const result = functions.validateEstablishmentDetails(Newprops.form);
      expect(result).toBe(false);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validateFiles', () => {
    beforeEach(() => {
      props = {
        ...props,
        form: {
          caseType: 0,
        },
      };
    });

    it('should call validateFiles', () => {
      functions.validateFiles(props);
    });

    it('should call validateFiles 1', () => {
      const props2 = {
        ...props,
        form: {
          ...props.form,
          caseType: 1,
        },
        documents: '',
      };

      functions.validateFiles(props2);
    });

    it('should call validateFiles 1', () => {
      const props2 = {
        ...props,
        form: {
          ...props.form,
          caseType: 1,
        },
        documents: {
          userIdentityDocument: [],
          supportingDocuments: [],
        },
      };

      functions.validateFiles(props2);
    });
  });
});
