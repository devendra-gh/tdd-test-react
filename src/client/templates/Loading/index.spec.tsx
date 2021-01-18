import React from 'react';
import { shallow } from 'enzyme';
import Loading from './index';

describe('client/templates/Sidebar', () => {
  it('should render the loading template', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
