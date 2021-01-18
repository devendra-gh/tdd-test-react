import React from 'react';
import { shallow } from 'enzyme';
import AppComposerBusinessDirectory from './appComposer';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
  LOCALE: { EN: 'EN' },
}));

jest.mock('client/templates/Header', () => () => '');
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

describe('<AppComposerBusinessDirectory />', () => {
  it('renders', () => {
    const wrapper = shallow(<AppComposerBusinessDirectory />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
