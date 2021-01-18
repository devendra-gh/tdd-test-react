import React from 'react';
import { shallow } from 'enzyme';
import { PERMIT_VARIOUS_MACHINES_AD } from 'client/config/permits/utils/constants/permits';
import Requirements from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Requirements', () => {
  let props: any;

  beforeEach(() => {
    props = {
      serviceType: PERMIT_VARIOUS_MACHINES_AD,
      i18n: jest.fn(),
    };
  });

  it('should successfully render the requirements', () => {
    const component = shallow(<Requirements {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render without service type', () => {
    props.serviceType = '';
    const component = shallow(<Requirements {...props} />);
    expect(component.type()).toEqual(null);
  });
});
