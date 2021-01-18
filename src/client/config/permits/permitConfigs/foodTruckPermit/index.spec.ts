import moment from 'moment';
import config from './index';
import fetchPermitFees from '../../pages/Home/functions/fetchPermitFees';
import { PERMIT_TYPE_EVENT } from '../../utils/getPermitTypes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/permits/permitConfigs/foodTRuckPermit', () => {
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
            permitType: 'test',
            startDate,
            endDate: moment(startDate).add(1, 'week').format('DD-MM-YYYY'),
          },
          applicantContact: {
            name: 'Firstname',
            email: 'firstname@domain.com',
            phone: '971521234567',
          },
          vehicleDetails: [
            {
              vehicleType: 'Heavy',
              chassisNumber: '1234',
            },
            {
              vehicleType: 'Medium',
              chassisNumber: '1234',
            },
          ],
          documents: [{ doc1: 'Doc 1' }, undefined],
        },
      },
    };
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('should call value function', () => {
    it('with the right params for datePicker', () => {
      const valueFunctionFields = config.formFields.permitDetails1.fields.filter(
        field =>
          typeof field.value === 'function' &&
          field.elementType === 'datePicker',
      );
      valueFunctionFields.forEach(field =>
        // @ts-ignore
        field.value(props.permitInfo[`${config.name}`]),
      );
      expect(valueFunctionFields[0].value).toBeInstanceOf(Function);
    });
    it('with the right params for datePicker If Condition', () => {
      props.permitInfo[`${config.name}`].permitDetails = {
        ...props.permitInfo[`${config.name}`].permitDetails,
        permitType: PERMIT_TYPE_EVENT,
      };
      const valueFunctionFields = config.formFields.permitDetails1.fields.filter(
        field =>
          typeof field.value === 'function' &&
          field.elementType === 'datePicker',
      );
      valueFunctionFields.forEach(field =>
        // @ts-ignore
        field.value(props.permitInfo[`${config.name}`]),
      );
      expect(valueFunctionFields[0].value).toBeInstanceOf(Function);
    });
    it('with the right params for permit type', () => {
      const valueFunctionFields = config.formFields.permitDetails.fields.filter(
        field => typeof field.value === 'function',
      );
      valueFunctionFields.forEach(field =>
        // @ts-ignore
        field.value(props.permitInfo[`${config.name}`]),
      );
      expect(valueFunctionFields[0].value).toBeInstanceOf(Function);
    });
    it('should call the value function with undefined startDate datePicker', () => {
      const valueFunctionFields = config.formFields.permitDetails1.fields.filter(
        field =>
          typeof field.value === 'function' &&
          field.elementType === 'datePicker',
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

  describe('Custom DatePicker Cases', () => {
    it('datePicker OnChange', () => {
      const onChangeFunctionFields = config.formFields.permitDetails1.fields.filter(
        field =>
          typeof field.onChange === 'function' &&
          field.elementType === 'datePicker',
      );
      onChangeFunctionFields.forEach(field =>
        // @ts-ignore
        field.onChange(props.permitInfo[`${config.name}`]),
      );
      expect(onChangeFunctionFields[0].onChange).toBeInstanceOf(Function);
    });

    it('customDisabledDate function with the right params', () => {
      const customDisabledDateFunctionFields = config.formFields.permitDetails1.fields.filter(
        field => typeof field.customDisabledDate === 'function',
      );
      customDisabledDateFunctionFields.forEach(field =>
        // @ts-ignore
        field.customDisabledDate(moment(), props),
      );
      expect(
        customDisabledDateFunctionFields[0].customDisabledDate,
      ).toBeInstanceOf(Function);
    });
    it('should call the disabled function', () => {
      const disabledFunctionFields = config.formFields.permitDetails1.fields.filter(
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

  describe('Form Submitted', () => {
    it('formSubmitDetails to be called', () => {
      const result = config.formSubmitDetails(
        props.permitInfo[`${config.name}`],
        props,
      );
      expect(result).toBeInstanceOf(Object);
    });
    it('formSubmitDetails to be called with null applicantContact', () => {
      props.permitInfo[`${config.name}`] = {
        ...props.permitInfo[`${config.name}`],
        applicantContact: { phone: '' },
      };
      const result = config.formSubmitDetails(
        props.permitInfo[`${config.name}`],
        props,
      );
      expect(result).toBeInstanceOf(Object);
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('conditionalBehaviour', () => {
    it('should call the conditionalBehaviour function', () => {
      const conditionalBehaviourFields = config.formFields.permitDetails2.fields.filter(
        field => typeof field.conditionalBehaviour === 'function',
      );
      conditionalBehaviourFields.forEach(field =>
        // @ts-ignore
        field.conditionalBehaviour(props.permitInfo[`${config.name}`]),
      );
      expect(conditionalBehaviourFields[0].conditionalBehaviour).toBeTruthy();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('permitEstimatedFees', () => {
    it('calculateEstimatedFees to be called', async () => {
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
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onChange Functions', () => {
    it('permitDetails', () => {
      const onChangeFields = config.formFields.permitDetails.fields.filter(
        field => typeof field.onChange === 'function',
      );
      onChangeFields.forEach(field =>
        // @ts-ignore
        field.onChange({ value: { target: { value: 'test' } } }),
      );
      expect(onChangeFields[0].onChange).toBeInstanceOf(Function);
    });
    it('permitDetails1', () => {
      const onChangeFields = config.formFields.permitDetails1.fields.filter(
        field => typeof field.onChange === 'function',
      );
      onChangeFields.forEach(field =>
        // @ts-ignore
        field.onChange({ value: { target: { value: 'test' } } }),
      );
      expect(onChangeFields[0].onChange).toBeInstanceOf(Function);
    });
    it('permitDetails2', () => {
      const onChangeFields = config.formFields.permitDetails2.fields.filter(
        field => typeof field.onChange === 'function',
      );
      onChangeFields.forEach(field =>
        // @ts-ignore
        field.onChange({ value: { target: { value: 'test' } } }),
      );
      expect(onChangeFields[0].onChange).toBeInstanceOf(Function);
    });
  });
});
