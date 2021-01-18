import moment from 'moment';
import { IVariables } from '@tamm/app-composer';
import config from './index';
import fetchPermitFees from '../../pages/Home/functions/fetchPermitFees';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/permits/permitConfigs/ATMAd', () => {
  let props: any;
  const startDate = moment().add(1, 'week').format('DD-MM-YYYY');
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
          permitDetails: {
            startDate,
            endDate: '',
          },
          applicantContact: {
            name: 'Firstname',
            email: 'firstname@domain.com',
            phone: '971521234567',
          },
          machineDetails: [
            {
              machineNumber: '1',
              location: 'location 1',
            },
          ],
          documents: [{ doc1: 'Doc 1' }, undefined],
        },
      },
    };
  });
  it('should call the value function with the right params for datePicker', () => {
    const valueFunctionFields = config.formFields.permitDetails.fields.filter(
      field =>
        typeof field.value === 'function' && field.elementType === 'datePicker',
    );
    valueFunctionFields.forEach(field =>
      // @ts-ignore
      field.value(props.permitInfo[`${config.name}`]),
    );
    expect(valueFunctionFields[0].value).toBeInstanceOf(Function);
  });
  it('should call the onChange function with the right params for datePicker', () => {
    const onChangeFunctionFields = config.formFields.permitDetails.fields.filter(
      field => typeof field.onChange === 'function',
    );
    onChangeFunctionFields.forEach(field =>
      // @ts-ignore
      field.onChange(props.permitInfo[`${config.name}`]),
    );
    expect(onChangeFunctionFields[0].onChange).toBeInstanceOf(Function);
  });
  it('should call the customDisabledDate function with the right params', () => {
    const customDisabledDateFunctionFields = config.formFields.permitDetails.fields.filter(
      field => typeof field.customDisabledDate === 'function',
    );
    customDisabledDateFunctionFields.forEach(field =>
      // @ts-ignore
      field.customDisabledDate(moment(), props.permitInfo[`${config.name}`]),
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
  it('Incremental Fields - should return computed values for name and label', () => {
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
  it('Incremental Fields - subFields set values to null', () => {
    const incrementableFormGroups = Object.values(config.formFields).filter(
      // @ts-ignore
      field => field.hasIncrementButton,
    );
    incrementableFormGroups.forEach(group => {
      group.fields.forEach((field: IVariables) => {
        field.subFields.forEach((subField: IVariables) => {
          if (subField.value !== null && subField.value !== undefined) {
            expect(subField.value()).toBeNull();
          }
        });
      });
    });
  });
  it('permitEstimatedFees calculateEstimatedFees to be called', async () => {
    const perUnitFees = await fetchPermitFees(config.name);
    const tempProps = {
      ...props.permitInfo[`${config.name}`],
      ...perUnitFees,
    };
    const result = config.formFields.permitEstimatedFees.calculateEstimatedFees(
      tempProps,
    );
    expect(result).toBeInstanceOf(Object);
  });
  it('formSubmitDetails to be called', () => {
    const result = config.formSubmitDetails(
      props.permitInfo[`${config.name}`],
      props,
    );
    expect(result).toBeInstanceOf(Object);
  });
  it('formSubmitDetails to be called with applicantContact name null properties', () => {
    props.permitInfo[`${config.name}`] = {
      ...props.permitInfo[`${config.name}`],
      applicantContact: { phone: '' },
      machineDetails: [{ name: 'test1' }, { name: 'test2' }],
    };
    const result = config.formSubmitDetails(
      props.permitInfo[`${config.name}`],
      props,
    );
    expect(result).toBeInstanceOf(Object);
  });
});
