import React from 'react';
import { shallow } from 'enzyme';
import Typography from './index';

describe('client/components/workbench/Typography', () => {
  let props: any;

  beforeEach(() => {
    props = {
      content: 'Sample text',
    };
  });

  it('renders', () => {
    const wrapper = shallow(<Typography {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders as html', () => {
    props.displayAsHtml = true;

    const wrapper = shallow(<Typography {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
