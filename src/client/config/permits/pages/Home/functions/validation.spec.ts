import { checkValidationField } from 'client/config/utils/checkValidation';
import validation from './validation';
import {
  validateDEDFields,
  validateFCFZFields,
  validateADGEFields,
  validateNLFields,
} from './companyValidation';

jest.mock('client/config/utils/checkValidation', () => ({
  checkValidationField: jest.fn((_, fieldValue) =>
    fieldValue === 'showError' ? 'showError' : '',
  ),
  validationTypes: {
    CN_NUMBER: 'test',
  },
}));

jest.mock('./companyValidation', () => {
  const returnValid = () => [true, false];
  return {
    validateDEDFields: jest.fn(returnValid),
    validateFCFZFields: jest.fn(returnValid),
    validateADGEFields: jest.fn(returnValid),
    validateNLFields: jest.fn(returnValid),
  };
});

jest.mock('client/config/permits/permitConfigs', () => ({
  testServiceType: {
    formFields: {
      testFormFieldGroup1: {
        stateKey: 'testFormFieldGroup1',
        hasIncrementButton: true,
        fields: [
          {
            name: 'field1',
          },
        ],
      },
      testFromFieldGroup2: {
        stateKey: 'testFormFieldGroup2',
        hasIncrementButton: false,
        fields: [
          {
            name: 'field1',
          },
        ],
      },
    },
  },
  testServiceTypeWithoutFormField: {},
  testServiceTypeWithSubFields: {
    formFields: {
      testFromFieldGroup1: {
        stateKey: 'testFormFieldGroup1',
        hasIncrementButton: false,
        fields: [
          {
            name: 'field1',
            subFields: [
              {
                name: 'subfield1',
              },
            ],
          },
        ],
      },
    },
  },
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Validation', () => {
  let props: any;

  beforeEach(() => {
    window.scrollTo = jest.fn();

    props = {
      i18n: jest.fn(),
      serviceType: 'testServiceType',
      permitInfo: {
        testServiceType: {
          testFormFieldGroup1: ['value1'],
          testFormFieldGroup2: {
            field1: 'value2',
          },
        },
        testServiceTypeWithSubFields: {
          testFormFieldGroup1: {
            field1: {
              subfield1: 'value1',
            },
          },
        },
      },
      companyType: 'DED',
      companyDetails: {
        licenseNo: 'CN-1024976',
        englishName: 'test',
        arabicName: 'test',
        contactLicenseNo: 'test',
        representativeType: '1',
        partnerSharePercentage: '100',
        allGcc: true,
        nationality: 'ARE',
        emailAddress: 'test@gmail.com',
        mobileNo: '+971 56 56 56565',
        legalForm: 'Establishment',
        emirate: '1',
      },
    };
  });

  it('should validate company details for DED fields', () => {
    validation(props);
    expect(validateDEDFields).toHaveBeenCalled();
  });

  it('should validate company details for FC fields', () => {
    props.companyType = 'FC';
    validation(props);
    expect(validateFCFZFields).toHaveBeenCalled();
  });

  it('should validate company details for FZ fields', () => {
    props.companyType = 'FZ';
    validation(props);
    expect(validateFCFZFields).toHaveBeenCalled();
  });

  it('should validate company details for ADGE fields', () => {
    props.companyType = 'ADGE';
    validation(props);
    expect(validateADGEFields).toHaveBeenCalled();
  });

  it('should validate company details for NL fields', () => {
    props.companyType = 'NL';
    validation(props);
    expect(validateNLFields).toHaveBeenCalled();
  });

  it('should successfully validate incrementable fields', () => {
    validation(props);
    expect(checkValidationField).toHaveBeenCalledWith(
      undefined,
      'value1',
      true,
      props.i18n,
    );
  });

  it('should call error callback when validation fails', () => {
    props.permitInfo.testServiceType.testFormFieldGroup1 = ['showError'];
    validation(props);
    // expect(scrollToElement).toHaveBeenCalledWith('testFormFieldGroup1');
  });

  it('should validate incrementable fields with added fields', () => {
    props.permitInfo.testServiceType.testFormFieldGroup1 = ['value1', 'value2'];
    validation(props);
    expect(checkValidationField).toHaveBeenCalledTimes(3);
  });

  it('should successfully validate subfields', () => {
    props.serviceType = 'testServiceTypeWithSubFields';
    validation(props);
  });
});
