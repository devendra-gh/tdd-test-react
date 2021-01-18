import moment from 'moment';
import {
  checkValidationField,
  validationTypes,
  validateStartDate,
  validateEndDate,
  validateSharePercentage,
} from './checkValidation';

const i18n = jest.fn();

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('checkValidationField', () => {
  it('Should be a function', () => {
    const validationState = false;
    const validationConfig = {};
    const values = '';
    checkValidationField(validationConfig, values, validationState, i18n);
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is REQUIRED string', () => {
    const validationState = true;
    const values = '';
    checkValidationField(
      {
        type: validationTypes.REQUIRED,
        label: 'Important field',
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is REQUIRED number', () => {
    const validationState = true;
    const values = 1;
    checkValidationField(
      {
        type: validationTypes.REQUIRED,
        label: 'Important field',
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is MIN_CHARACTERS with null', () => {
    const validationState = true;
    const values = null;
    checkValidationField(
      {
        type: validationTypes.MIN_CHARACTERS,
        value: 10,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is MIN_CHARACTERS', () => {
    const validationState = true;
    const values = 'test';
    checkValidationField(
      {
        type: validationTypes.MIN_CHARACTERS,
        value: 10,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);

    const SecondValues = true;
    checkValidationField(
      {
        type: validationTypes.MIN_CHARACTERS,
        value: 10,
      },
      SecondValues,
      validationState,
      i18n,
    );
  });

  it('Should call updateValidationState when validationTypes is CN_NUMBER with null', () => {
    const validationState = true;
    const values = null;
    checkValidationField(
      {
        type: validationTypes.CN_NUMBER,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is CN_NUMBER', () => {
    const validationState = true;
    const values = 'CN-123';
    checkValidationField(
      {
        type: validationTypes.CN_NUMBER,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });
  it('Should call updateValidationState when validationTypes is EMAIL with null', () => {
    const validationState = true;
    const values = null;
    checkValidationField(
      {
        type: validationTypes.EMAIL,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is EMAIL', () => {
    const validationState = true;
    const values = 'test@test.com';
    checkValidationField(
      {
        type: validationTypes.EMAIL,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is PHONE with null', () => {
    const validationState = true;
    const values = null;
    checkValidationField(
      {
        type: validationTypes.PHONE,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is PHONE', () => {
    const validationState = true;
    const values = '+971 1111111111';
    checkValidationField(
      {
        type: validationTypes.PHONE,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is REQUIRED_FILE with null', () => {
    const validationState = true;
    const values = false;
    checkValidationField(
      {
        type: validationTypes.REQUIRED_FILE,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is REQUIRED_FILE', () => {
    const validationState = true;
    const values = {
      documentPath: false,
    };
    checkValidationField(
      {
        type: validationTypes.REQUIRED_FILE,
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);

    const secondValues = {
      documentPath: true,
    };
    checkValidationField(
      {
        type: validationTypes.REQUIRED_FILE,
      },
      secondValues,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });

  it('Should call updateValidationState when validationTypes is default', () => {
    const validationState = true;
    const values = false;
    checkValidationField(
      {
        type: '',
      },
      values,
      validationState,
      i18n,
    );
    expect(checkValidationField).toBeInstanceOf(Function);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('validateStartDate', () => {
  it('validateStartDate should be a Function', () => {
    expect(validateStartDate).toBeInstanceOf(Function);
  });

  it('validateStartDate should return false when today is selected', () => {
    const result = validateStartDate(moment(new Date()));
    expect(result).toBe(false);
  });

  it('validateStartDate should return false when start-today and end-tomorrow', () => {
    const result = validateStartDate(
      moment(),
      moment(new Date()).add(1, 'days'),
    );
    expect(result).toBe(false);
  });

  it('validateStartDate should return false when start-today and end-tomorrow', () => {
    const result = validateStartDate(
      moment(),
      moment(new Date()).add(-1, 'days'),
    );
    expect(result).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('validateEndDate', () => {
  it('validateEndDate should be a Function', () => {
    expect(validateEndDate).toBeInstanceOf(Function);
  });

  it('validateEndDate should return true when start-today, end-today', () => {
    const result = validateEndDate(moment(), moment(), 30);
    expect(result).toBe(true);
  });

  it('validateEndDate should return true when start-today null', () => {
    const result = validateEndDate(moment(), null, 30);
    expect(result).toBe(true);
  });

  it('validateEndDate should return true when start-today null', () => {
    const result = validateEndDate(moment(), moment(), 0);
    expect(result).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('validateSharePercentage', () => {
  it('validateSharePercentage should be a Function', () => {
    expect(validateSharePercentage).toBeInstanceOf(Function);
  });

  it('validateSharePercentage should return message when sharePercentage empty', () => {
    const values = {
      representativeType: '1',
      partnerSharePercentage: '',
    };
    validateSharePercentage(values, i18n);
    expect(i18n).toHaveBeenCalled();
  });

  it('validateSharePercentage should return message when sharePercentage empty', () => {
    const values = {
      representativeType: '2',
      partnerSharePercentage: '0',
    };
    validateSharePercentage(values, i18n);
    expect(i18n).toHaveBeenCalled();
  });

  it('validateSharePercentage should return message when sharePercentage empty', () => {
    const values = {
      representativeType: '2',
      partnerSharePercentage: '100',
    };
    expect(validateSharePercentage(values, i18n)).toBeFalsy();
  });
});
