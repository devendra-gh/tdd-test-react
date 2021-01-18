import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('client/components/workbench/Process', () => {
  it('renders', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
