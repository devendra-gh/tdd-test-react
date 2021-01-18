import React from 'react';
import { shallow } from 'enzyme';
import Symbol from './index';

jest.mock('client/components/workbench/v5/CustomComponent', () => ({
  __esModule: true,
  A: true,
  default: () => {
    return <div />;
  },
}));

describe('Symbol', () => {
  const props = {
    definition: {
      props: {
        symbol: { definitions: [{}] },
      },
    },
  };
  it('should render', () => {
    const wrapper = shallow(<Symbol {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 2', () => {
    const wrapper = shallow(<Symbol {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
