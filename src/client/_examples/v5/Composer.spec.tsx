import React from 'react';
import { shallow } from 'enzyme';
import Composer from './Composer';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [],
        ar: [],
      },
    };
  }),
  getSmartpassData: jest.fn(),
  getMetaData: jest.fn(),
}));

describe('config/v5/Composer', () => {
  it('renders', () => {
    const wrapper = shallow(<Composer />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
