import React from 'react';
import { shallow } from 'enzyme';
import GridComponent from './index';

jest.mock('client/components/workbench/v5/CustomComponent', () => ({
  __esModule: true,
  A: true,
  default: () => {
    return <div />;
  },
}));

describe('client/components/workbench/v5/GridComponent', () => {
  const props = {
    definition: { props: {} },
  };
  it('should render', () => {
    const wrapper = shallow(<GridComponent {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 2', () => {
    const wrapper = shallow(<GridComponent {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
