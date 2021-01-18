import React from 'react';
import { shallow } from 'enzyme';
import Loading from './index';

describe('client/components/Loading', () => {
  it('renders', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
