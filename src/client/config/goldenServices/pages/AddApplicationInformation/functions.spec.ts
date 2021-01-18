import fetch from 'client/services/fetch';
import moment from 'moment';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('AddApplicationInformation/functions', () => {
  let props: IVariables;
  let mockFetch: any;

  beforeEach(() => {
    mockFetch = fetch;
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    props = {
      i18n: (key: string) => key,
      businessKey: '3496873469',
      instanceId: '3496873469',
      goldenService: {
        isLoading: false,
        paymentInProgress: false,
        form: {
          time: (moment('08:31', 'HH:mm') as unknown) as string,
          telephone: '971569551111',
          transactionType: '1',
          city: '2',
          name: 'Ahmad Warrad',
          email: 'awarrad@accela.com',
          licenceNo: 'CN-2683983',
          date: '2020-04-08T07:47:14.836Z',
          address: 'Address Test',
          termAndCondition: true,
        },
      },
      history: {
        push: jest.fn(),
      },
      actions: {
        goldenService: {
          update: jest.fn(),
        },
        stepsStatus: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init', () => {
    it('should update initialize goldenService after init call', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {},
        });
      });
      await functions.init(props);
      expect(props.actions.goldenService.update).nthCalledWith(1, {
        isLoading: false,
        paymentInProgress: false,
        form: {
          time: '',
          telephone: '',
          transactionType: '',
          city: '',
          name: '',
          email: '',
          licenceNo: '',
          date: '',
          address: '',
          termAndCondition: false,
        },
      });
    });

    it('should update initialize goldenService after init call en', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {},
        });
      });
      const props2 = {
        ...props,
        locale: 'en',
        loggedIn: true,
        user: {
          Mobile: '971521111111',
          'User Email': 'test',
          'First Name EN': 'test',
          'First Name AR': 'test',
          'Last Name EN': 'test',
          'Last Name AR': 'test',
        },
      };
      await functions.init(props2);
    });

    it('should update initialize goldenService after init call ar', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {},
        });
      });
      const props2 = {
        ...props,
        locale: 'ar',
        loggedIn: true,
        user: {
          Mobile: '971521111111',
          'User Email': 'test',
          'First Name EN': 'test',
          'First Name AR': 'test',
          'Last Name EN': 'test',
          'Last Name AR': 'test',
        },
      };
      await functions.init(props2);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onSubmit', () => {
    it('should properly call onSubmit with success response 1', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {},
        });
      });
      // with businessKey
      await functions.onSubmit(props, {}, () => {});
      // without businessKey
      await functions.onSubmit(props, {}, () => {});
    });

    it('should properly call onSubmit with success response 2', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {},
        });
      });
      // with businessKey
      await functions.onSubmit({ ...props, businessKey: '' }, {}, () => {});
      // without businessKey
      await functions.onSubmit(props, {}, () => {});
    });

    it('should properly call onSubmit with success response 11', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: '3496873469',
            id: '3496873469',
          },
        });
      });
      // with businessKey
      await functions.onSubmit(
        { ...props, businessKey: '', instanceId: '' },
        {},
        () => {},
      );
      // without businessKey
      await functions.onSubmit(props, {}, () => {});
    });

    it('should properly call onSubmit with success response is false', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          data: {},
        });
      });
      // with businessKey
      await functions.onSubmit(
        { ...props, businessKey: '3496873469' },
        {},
        () => {},
      );
      // without businessKey
      await functions.onSubmit(props, {}, () => {});
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onChange', () => {
    it('should properly call onChange', async () => {
      functions.onChange(props, 'CN-1234567', 'licenceNo');
      expect(props.actions.goldenService.update).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validateField', () => {
    it('should properly call validateField', async () => {
      expect(functions.validateField(props, 'name', '')).toBe(
        'goldenServices.validate.required',
      );
      expect(functions.validateField(props, 'name', 'John Doe')).toBe('');
      expect(functions.validateField(props, 'name', 'Jo')).toBe(
        'goldenServices.validate.name.short',
      );

      expect(functions.validateField(props, 'email', 'John@gmail.com')).toBe(
        '',
      );
      expect(functions.validateField(props, 'email', 'Johngmail.com')).toBe(
        'goldenServices.validate.email.invalid',
      );

      expect(functions.validateField(props, 'telephone', '971599999999')).toBe(
        '',
      );
      expect(functions.validateField(props, 'telephone', '888')).toBe(
        'goldenServices.validate.telephone.invalid',
      );

      expect(functions.validateField(props, 'licenceNo', 'CN-9999999')).toBe(
        '',
      );
      expect(functions.validateField(props, 'licenceNo', '9999')).toBe(
        'goldenServices.validate.licenceNo.invalid',
      );

      expect(functions.validateField(props, 'address', 'Address Test')).toBe(
        '',
      );
      expect(functions.validateField(props, 'address', 'Ad')).toBe(
        'goldenServices.validate.address.short',
      );

      expect(functions.validateField(props, 'transactionType', '1')).toBe('');
      expect(
        functions.validateField(
          props,
          'time',
          (moment('08:31', 'HH:mm') as unknown) as string,
        ),
      ).toBe('');
      expect(
        functions.validateField(
          props,
          'time',
          (moment('08:00', 'HH:mm') as unknown) as string,
        ),
      ).toBe('goldenServices.validate.time.invalid');
      expect(functions.validateField(props, 'date', '1')).toBe('');
      expect(functions.validateField(props, 'city', '1')).toBe('');
      expect(functions.validateField(props, 'No input', '1')).toBe(
        'goldenServices.validate.other.invalid',
      );
      expect(functions.validateField(props, 'termAndCondition', 'true')).toBe(
        'goldenServices.validate.termAndCondition.unchecked',
      );
      expect(functions.validateField(props, 'licenceNo', '')).toBe('');
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getFields', () => {
    it('should properly call getFields', async () => {
      const a = {
        i18n: jest.fn(),
        onChange: jest.fn(),
        form: [
          {
            name: 'Add contact details',
            fields: [
              {
                ariaLabel: 'input name',
                elementType: 'input',
                key: 'name',
                label: 'goldenServices.label.form.name',
                name: 'input',
                placeholder: 'goldenServices.placeholder.form.write',
                validate: jest.fn(),
              },
              {
                ariaLabel: 'input telephone',
                code: 971,
                countries: [
                  {
                    code: 971,
                    name: 'UAE',
                  },
                ],
                key: 'telephone',
                elementType: 'inputTelephone',
                label: 'Mobile Number*',
                name: 'inputTelephone',
                validate: jest.fn(),
              },
              {
                ariaLabel: 'select transaction type',
                elementType: 'select',
                items: [
                  {
                    id: 'value',
                    label: 'value',
                  },
                ],
                key: 'transactionType',
                label: 'Transaction Type',
                name: 'select',
                value: 'value',
                validate: jest.fn(),
              },
              {
                ariaLabel: 'date picker',
                elementType: 'datePicker',
                key: 'date',
                label: 'Date Preference*',
                name: 'datePicker',
                value: null,
                help: 'Only during working days',
                validate: jest.fn(),
              },
            ],
          },
        ],
      };
      const result = functions.getFields({ ...props, ...a }, {}, () => {});
      result.forEach((group: any) => {
        group.fields.forEach((field: any) => {
          if (field.onChange) field.onChange('');
          else if (field.onSelect) field.onSelect('');
          field.validate();
          if (field.onBlur) field.onBlur({ currentTarget: { value: '' } });
          expect(typeof field.validate).toBe(typeof (() => ''));
        });
      });
    });
  });
});
