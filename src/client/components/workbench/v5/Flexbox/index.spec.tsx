import React from 'react';
import { shallow } from 'enzyme';
import Flexbox from './index';

jest.mock('client/components/workbench/v5/CustomComponent', () => ({
  __esModule: true,
  A: true,
  default: () => {
    return <div />;
  },
}));

describe('client/components/workbench/v5/Flexbox', () => {
  const props = {
    definition: { props: {} },
  };
  it('should render', () => {
    const wrapper = shallow(<Flexbox {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 2', () => {
    const wrapper = shallow(<Flexbox {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
