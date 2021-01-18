import React from 'react';
import { shallow } from 'enzyme';
import PreviewMap from './index';

describe('client/components/workbench/PreviewMap', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      config: {},
    };
  });

  it('renders', () => {
    const wrapper = shallow(<PreviewMap {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
