import React from 'react';
import { shallow } from 'enzyme';
import Iterator from './index';

jest.mock('client/components/workbench/v5/CustomComponent', () => ({
  __esModule: true,
  A: true,
  default: () => {
    return <div />;
  },
}));

describe('Iterator', () => {
  const props = {
    definition: { props: { items: [{}], wrapInGrid: false } },
  };
  it('should render', () => {
    const wrapper = shallow(<Iterator {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 2', () => {
    props.definition.props.wrapInGrid = true;
    const wrapper = shallow(<Iterator {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
