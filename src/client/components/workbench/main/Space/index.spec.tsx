import React from 'react';
import { shallow } from 'enzyme';
import Space from './index';

describe('client/components/workbench/Space', () => {
  it('renders', () => {
    const wrapper = shallow(<Space marginTop="xl">Content</Space>);
    expect(wrapper.exists()).toBeTruthy();
  });
});
