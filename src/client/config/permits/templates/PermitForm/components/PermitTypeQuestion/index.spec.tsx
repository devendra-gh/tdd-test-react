import React from 'react';
import { shallow } from 'enzyme';
import { PERMIT_CATEGORY_ADDITIONAL_AD } from 'client/config/permits/utils/constants/permitCategories';
import PermitTypeQuestion from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('PermitType Question', () => {
  let props: any;

  beforeEach(() => {
    props = {
      permitType: PERMIT_CATEGORY_ADDITIONAL_AD,
      handleChange: jest.fn(),
      selectedServiceType: 'air',
      i18n: jest.fn(),
    };
  });

  it('should successfully render the permit type question form', () => {
    const component = shallow(<PermitTypeQuestion {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should successfully render the permit type question form without permitType', () => {
    props.permitType = '';
    const component = shallow(<PermitTypeQuestion {...props} />);
    expect(component).toMatchSnapshot();
  });
});
