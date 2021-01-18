import moment from 'moment';
import { IVariables } from '@tamm/app-composer';
import config from './index';
import fetchPermitFees from '../../pages/Home/functions/fetchPermitFees';

jest.mock('moment', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    format: jest.fn(),
    add: jest.fn().mockReturnValue({
      format: jest.fn(),
    }),
  }),
}));

jest.mock('client/config/utils/checkValidation', () => ({
  validationTypes: {},
  validateStartDate: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/permits/permitConfigs/bannerAd/index.ts', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      permitType: 'test1',
      serviceType: config.name,
      companyDetails: {
        licenseNo: 'CN-1234567',
      },
      permitInfo: {
        [`${config.name}`]: {
          permitDetails: {
            startDate: '2013-12-1',
            endDate: '2013-12-3',
            numberOfQuantity: 10,
            note: 'test ',
          },
          applicantContact: {
            name: 'test',
            phone: '987654',
            email: 'test@test.com',
          },
          documents: { testDoc: { name: 'dummy.pdf' }, undefined },
        },
      },
    };
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Date Picker', () => {
    it('should call the value function with the right params for datePicker', () => {
      const valueFunctionFields = config.formFields.permitDetails.fields.filter(
        field =>
          typeof field.value === 'function' &&
          field.elementType === 'datePicker',
      );
      valueFunctionFields.forEach(field => {
        // @ts-ignore
        const data = field.value(props.permitInfo[props.serviceType]);
        let mockDate = new Date('2013-12-1');
        if (field.name === 'startDate') {
          expect(data).toEqual(mockDate);
        } else {
          mockDate = new Date(mockDate.getTime() + 365 * 86400000);
          expect(data).toEqual(mockDate);
        }
      });
    });
    it('should call the value function with the right params for datePicker', () => {
      const valueFunctionFields = config.formFields.permitDetails.fields.filter(
        field =>
          typeof field.value === 'function' &&
          field.elementType === 'datePicker',
      );
      props = {
        ...props,
        permitInfo: {
          [props.serviceType]: {
            permitDetails: {},
          },
        },
      };
      valueFunctionFields.forEach(field => {
        // @ts-ignore
        const data = field.value(props.permitInfo[props.serviceType]);
        expect(data).toBeFalsy();
      });
    });
    it('should call the onChange function with the right params for datePicker', () => {
      const onChnageFunctionFields = config.formFields.permitDetails.fields.filter(
        field => typeof field.onChange === 'function',
      );
      onChnageFunctionFields.forEach(field =>
        // @ts-ignore
        field.onChange({ value: { target: { value: 'dummy value' } } }),
      );
      expect(onChnageFunctionFields[0].onChange).toBeInstanceOf(Function);
    });
    it('should call the customDisabledDate function with the right params', () => {
      const { permitInfo, serviceType } = props;
      const customDisabledDateFunctionFields = config.formFields.permitDetails.fields.filter(
        field => typeof field.customDisabledDate === 'function',
      );
      customDisabledDateFunctionFields.forEach(field =>
        // @ts-ignore
        field.customDisabledDate(moment(), permitInfo[serviceType]),
      );
      expect(
        customDisabledDateFunctionFields[0].customDisabledDate,
      ).toBeInstanceOf(Function);
    });
    it('should call the disabled function', () => {
      const disabledFunctionFields = config.formFields.permitDetails.fields.filter(
        field => typeof field.disabled === 'function',
      );
      disabledFunctionFields.forEach(field =>
        // @ts-ignore
        field.disabled(),
      );
      expect(disabledFunctionFields[0].disabled).toBeTruthy();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('numberOfQuantity', () => {
    it('should call value function', () => {
      const quantityField = config.formFields.permitDetails.fields.find(
        field => field.name === 'numberOfQuantity',
      );
      // @ts-ignore
      expect(quantityField.value()).toBeFalsy();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('formSubmitted', () => {
    it('should call formSubmitted function', () => {
      const { permitInfo, serviceType } = props;
      const submitDetails = config.formSubmitDetails(
        permitInfo[serviceType],
        props,
      );
      expect(submitDetails).toBeInstanceOf(Object);
    });
    it('should call formSubmitted function without documents', () => {
      const { serviceType } = props;
      props = {
        ...props,
        permitInfo: {
          [serviceType]: {
            ...props.permitInfo[serviceType],
            applicantContact: {
              name: null,
              phone: '978',
              email: 'test@test.com',
            },
          },
        },
      };
      const { permitInfo } = props;
      const submitDetails = config.formSubmitDetails(
        permitInfo[serviceType],
        props,
      );
      expect(submitDetails).toBeInstanceOf(Object);
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('permitEstimatedFees', () => {
    it('calculateEstimatedFees to be called without start and end date', async () => {
      const { permitInfo, serviceType } = props;
      const perUnitFees = await fetchPermitFees(config.name);
      props = {
        ...props,
        ...perUnitFees,
      };
      const result = config.formFields.permitEstimatedFees.calculateEstimatedFees(
        permitInfo[serviceType],
      );
      expect(result).toBeInstanceOf(Array);
    });
  });
});
