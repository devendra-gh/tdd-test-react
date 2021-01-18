import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import PermitTypeForm from './index';

jest.mock('client/config/utils/checkValidation', () => ({
  checkValidationField: jest.fn(),
}));
jest.mock('client/utils/baseUrl', jest.fn());

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Permit Type form', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: (value: string) => value,
      serviceType: null,
      onSubmit: jest.fn(),
      values: {
        testStateKey: {},
      },
      validation: {},
      actions: {
        validation: {
          update: jest.fn(),
        },
      },
      getFormFields: () => ({
        testField: {
          name: 'test field',
          stateKey: 'testStateKey',
          fields: [
            {
              validationConfig: {},
              elementType: 'input',
              onChange: () => jest.fn(),
            },
          ],
        },
      }),
    };
  });

  it('should successfully render when serviceType is provided', () => {
    props.serviceType = 'testServiceType';
    const component = shallow(<PermitTypeForm {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render when serviceType is falsy', () => {
    const component = shallow(<PermitTypeForm {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('getFormFields is null', () => {
    props.serviceType = 'testServiceType';
    props.getFormFields = () => null;
    const component = mount(
      <Router>
        <PermitTypeForm {...props} />
      </Router>,
    );
    const submitButton = component.find('Button');
    submitButton.simulate('click');
    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should submit form when validation passes', () => {
    props.serviceType = 'testServiceType';
    const component = mount(
      <Router>
        <PermitTypeForm {...props} />
      </Router>,
    );
    const submitButton = component.find('Button');
    submitButton.simulate('click');
    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should run date validation for date fields', () => {
    props.serviceType = 'testServiceType';
    const component = shallow(<PermitTypeForm {...props} />);
    const CustomFormGroup = component.find('CustomFormGroup');
    const fieldDate = {
      customDisabledDate: jest.fn(),
    };
    const formGroupProps: any = CustomFormGroup.props();
    const { customDisabledDate } = formGroupProps;
    customDisabledDate(new Date(), fieldDate);
    expect(fieldDate.customDisabledDate).toHaveBeenCalled();
  });
});
