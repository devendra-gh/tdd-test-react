import moment, { Moment } from 'moment';
import { IVariables } from '@tamm/app-composer';
import { validateStartDate } from 'client/config/utils/checkValidation';
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
  validateEndDate: jest.fn(),
  validateShowDate: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Date format', () => {
  it('should call the value function with the right params for datePicker', () => {
    const valueFunctionFields = config.formFields.permitDetails.fields.filter(
      field =>
        typeof field.value === 'function' && field.elementType === 'datePicker',
    );
    valueFunctionFields.forEach(field => {
      // @ts-ignore
      const data = field.value({
        permitDetails: {
          startDate: '2013-12-1',
          endDate: '2013-12-3',
        },
      });
      let mockDate = new Date('2013-12-1');
      if (field.name === 'startDate') {
        expect(data).toEqual(mockDate);
      } else {
        mockDate = new Date('2013-12-3');
        expect(data).toEqual(mockDate);
      }
    });
  });
  it('should call the value function with the undefined params for datePicker', () => {
    const valueFunctionFields = config.formFields.permitDetails.fields.filter(
      field =>
        typeof field.value === 'function' && field.elementType === 'datePicker',
    );
    valueFunctionFields.forEach(field => {
      // @ts-ignore
      const data = field.value({
        permitDetails: {},
      });
      expect(data).toBeNull();
    });
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Form Submit Details', () => {
  it('should return form submit details', () => {
    const dummyProps = {
      companyDetails: {},
    };
    const dummyServiceDetails = {
      permitDetails: {},
      applicantContact: {
        name: 'test',
        phone: '987654',
      },
      documents: {
        dummyFile: {},
        undefined,
      },
      balloons: [{}],
    };

    const submitDetails = config.formSubmitDetails(
      dummyServiceDetails,
      dummyProps,
    );

    expect(submitDetails).toBeInstanceOf(Object);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Form Submit Details with empty applicantContact name', () => {
  it('should return form submit details', () => {
    const dummyProps = {
      companyDetails: {},
    };
    const dummyServiceDetails = {
      permitDetails: {},
      applicantContact: {
        name: '',
        phone: '987654',
      },
      documents: {
        dummyFile: {},
      },
      balloons: [{}],
    };

    const submitDetails = config.formSubmitDetails(
      dummyServiceDetails,
      dummyProps,
    );

    expect(submitDetails).toBeInstanceOf(Object);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Custom Disable date', () => {
  it('should validate start date', () => {
    const dummyDate: Moment = moment('13-12-1993');
    const customDisableDateFields = config.formFields.permitDetails.fields.filter(
      field => !!field.customDisabledDate,
    );
    customDisableDateFields.forEach(field => {
      // @ts-ignore
      field.customDisabledDate(dummyDate, {
        permitDetails: { endDate: '13-3-1998' },
      });
    });
    expect(validateStartDate).toHaveBeenCalled();
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('On Change handlers', () => {
  it('should call the on change function with the right params', () => {
    const onChangeFunctionFields = config.formFields.permitDetails.fields.filter(
      field => typeof field.onChange === 'function',
    );
    onChangeFunctionFields.forEach(field =>
      // @ts-ignore
      field.onChange({ value: { target: { value: 'dummy value' } } }),
    );
    expect(onChangeFunctionFields[0].onChange).toBeInstanceOf(Function);

    const dummyDate: Moment = moment('13-12-1993');
    const balloonsonChangeFunctionFields = config.formFields.balloons.fields.filter(
      field => typeof field.onChange === 'function',
    );
    balloonsonChangeFunctionFields.forEach(field =>
      // @ts-ignore
      field.onChange({ value: { ShowDates: { value: dummyDate } } }),
    );
    expect(balloonsonChangeFunctionFields[0].onChange).toBeInstanceOf(Function);

    balloonsonChangeFunctionFields.forEach(field =>
      // @ts-ignore
      field.onChange({ value: {} }),
    );
    expect(balloonsonChangeFunctionFields[0].onChange).toBeInstanceOf(Function);

    const subFieldsWithFunctionValues = config.formFields.balloons.fields.reduce(
      (acc, field: any) => {
        const subFieldsWithFunctionValue = field.subFields.filter(
          (subfield: any) => typeof subfield.value === 'function',
        );
        return acc.concat(subFieldsWithFunctionValue);
      },
      [],
    );

    subFieldsWithFunctionValues.forEach((fieldWithFunctionValue: any) => {
      // @ts-ignore
      fieldWithFunctionValue.value();
      expect(fieldWithFunctionValue.value).toBeInstanceOf(Function);
    });

    subFieldsWithFunctionValues.forEach((fieldWithFunctionValue: any) => {
      // @ts-ignore
      fieldWithFunctionValue.value({ value: { target: { value: dummyDate } } });
      expect(fieldWithFunctionValue.value).toBeInstanceOf(Function);
    });

    const validateShowDate = config.formFields.balloons.fields.reduce(
      (acc, field: any) => {
        const subFieldsWithFunctionValue = field.subFields.filter(
          (subfield: any) => typeof subfield.customDisabledDate === 'function',
        );
        return acc.concat(subFieldsWithFunctionValue);
      },
      [],
    );

    validateShowDate.forEach((fieldWithFunctionValue: any) => {
      // @ts-ignore
      fieldWithFunctionValue.customDisabledDate(dummyDate, {
        permitDetails: { endDate: '13-3-1998' },
      });
      expect(fieldWithFunctionValue).toBeInstanceOf(Object);
    });
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('incremental fields', () => {
  it('should return computed values for name and label on incremental fields', () => {
    const incrementableFormGroups = Object.values(config.formFields).filter(
      // @ts-ignore
      field => field.hasIncrementButton,
    );

    incrementableFormGroups.forEach(group => {
      group.fields.forEach((field: IVariables) => {
        field.name(1);
        field.label(1);
        expect(field.name).toBeInstanceOf(Function);
        expect(field.label).toBeInstanceOf(Function);
      });
    });
  });
});
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permitEstimatedFees', () => {
  let props: any;
  beforeEach(() => {
    props = {
      permitType: 'test1',
      serviceType: 'test2',
      companyType: '',
      pageTitle: '',
      companyDetails: {
        licenseNo: 'CN-1234567',
      },
      permitInfo: {
        [`${config.name}`]: {
          permitDetails: {},
          balloons: ['balloon1', 'ballono2'],
          perUnitFees: 2,
        },
      },
    };
  });
  it('calculateEstimatedFees to be called without start and end date', async () => {
    const perUnitFees = await fetchPermitFees(config.name);
    const tempProps = {
      ...props.permitInfo[`${config.name}`],
      ...perUnitFees,
    };
    const result = config.formFields.permitEstimatedFees.calculateEstimatedFees(
      tempProps,
    );
    expect(result).toBeInstanceOf(Array);
  });
});
