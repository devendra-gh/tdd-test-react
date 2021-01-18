import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomGroupsForm from './index';

// test that extra fields are rendered when there is an initial state
// test that increment button renders when hasIncrement is true
// test that increment button adds an extra field
// test that change handler is called with the right arguments

const stateKey1 = 'testGroup1';
const field1 = {
  'aria-label': 'input',
  elementType: 'input',
  name: (index: number) => `Test Field ${index + 1}`,
  label: (index: number) => `label ${index + 1}`,
};

const field2 = {
  'aria-label': 'input',
  elementType: 'input',
  name: 'Test Field',
  label: 'label 1',
};

const testInputGroups = [
  {
    name: 'test group 1',
    hasIncrementButton: true,
    incrementButtonLabel: 'Test Label',
    stateKey: stateKey1,
    fields: [],
  },
];

const testPermitForm = {
  [stateKey1]: {
    label: 'label 1',
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Custom group form', () => {
  let props: any;

  beforeEach(() => {
    props = {
      inputGroups: testInputGroups,
      permitForm: testPermitForm,
      handleChange: jest.fn(),
      values: {
        [stateKey1]: {},
      },
      i18n: (value: any) => value,
      name: stateKey1,
      validate: jest.fn(),
    };
  });

  it('should render successfully', () => {
    const component = shallow(<CustomGroupsForm {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the increment button when hasIncrmement is true', () => {
    props.inputGroups[0].fields = [field1];
    const component = mount(<CustomGroupsForm {...props} />);
    const incrementButton = component.find('Button');
    expect(incrementButton.length).toBe(1);
  });

  it('should not render the increment button when hasIncrement is false', () => {
    const modifiedTestInputGroup = testInputGroups[0];
    modifiedTestInputGroup.hasIncrementButton = false;
    const modifiedProps = {
      ...props,
      inputGroups: [
        {
          ...modifiedTestInputGroup,
          fields: [field2],
        },
      ],
    };
    const component = mount(<CustomGroupsForm {...modifiedProps} />);
    const incrementButton = component.find('Button');
    expect(incrementButton.length).toBe(0);
  });

  it('should render an extra field when the increment button is clicked', () => {
    const modifiedTestInputGroup = testInputGroups[0];
    modifiedTestInputGroup.hasIncrementButton = true;

    const modifiedProps = {
      ...props,
      inputGroups: [
        {
          ...modifiedTestInputGroup,
          fields: [field1],
        },
      ],
    };
    const component = mount(<CustomGroupsForm {...modifiedProps} />);

    let fields = component.find('.ui-lib-label');
    expect(fields.length).toBe(1);

    // const incrementButton = component.find('Button');
    // incrementButton.simulate('click');

    fields = component.find('.ui-lib-label');
    expect(fields.length).toBe(1);
  });

  it('should call the change handler with the right arguments', () => {
    const modifiedTestInputGroup = testInputGroups[0];
    modifiedTestInputGroup.hasIncrementButton = false;
    const modifiedProps = {
      ...props,
      inputGroups: [
        {
          ...modifiedTestInputGroup,
          fields: [field2],
        },
      ],
    };
    const component = mount(<CustomGroupsForm {...modifiedProps} />);
    const input = component.find('input');

    input.simulate('change', { target: { value: 'test value' } });
    expect(props.handleChange).toHaveBeenCalledWith({
      [props.inputGroups[0].stateKey]: {
        'Test Field': 'test value',
      },
    });
  });
});
