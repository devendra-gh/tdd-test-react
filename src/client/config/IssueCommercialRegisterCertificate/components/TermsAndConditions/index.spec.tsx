import React from 'react';
import { shallow } from 'enzyme';
import TermsAndConditions from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Select Licence template', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      handleClick: jest.fn(),
      checked: [true],
      showErrors: false,
      items: [
        {
          label: 'test label',
        },
      ],
    };
  });
  it('should successfully render', () => {
    const component = shallow(<TermsAndConditions {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should should show errors when term is not accepted and vaildation has run', () => {
    props.showErrors = true;
    props.checked = [false];
    const component = shallow(<TermsAndConditions {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call the handle click function on click', () => {
    const component = shallow(<TermsAndConditions {...props} />);
    component.props().onClick();
    expect(props.handleClick).toHaveBeenCalled();
  });
});
