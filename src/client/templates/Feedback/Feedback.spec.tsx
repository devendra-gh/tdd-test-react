import React from 'react';
import { shallow } from 'enzyme';
import GlobalCsatFeedback from '@tamm/ui-lib-v2-global-csat-feedback';
import fetch from 'client/services/fetch';
import { Feedback } from './Feedback';

jest.mock('client/services/fetch');

describe('Feedback', () => {
  it('should render component', () => {
    const component = shallow(<Feedback i18n={() => ({})} />);
    expect(component).toMatchSnapshot();
  });

  it('should render success state', async () => {
    const component = shallow(<Feedback i18n={() => ({})} />);
    (fetch as jest.Mock).mockResolvedValue({});
    const onSubmit =
      component.find(GlobalCsatFeedback).prop('onSubmit') || (() => {});
    await onSubmit('test', {});
    expect(component).toMatchSnapshot();
  });

  it('should render error state', async () => {
    const component = shallow(<Feedback i18n={() => ({})} />);
    (fetch as jest.Mock).mockRejectedValue({});
    const onSubmit =
      component.find(GlobalCsatFeedback).prop('onSubmit') || (() => {});
    await onSubmit('test', {});
    expect(component).toMatchSnapshot();
  });
});
