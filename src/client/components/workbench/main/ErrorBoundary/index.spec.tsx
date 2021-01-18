import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './index';

const Something = () => null;

describe('ErrorBoundary', () => {
  it('should display an ErrorMessage if wrapped component throws', () => {
    const wrapper = mount(
      <ErrorBoundary message="Error">
        <Something />
      </ErrorBoundary>,
    );

    const error = new Error('test');

    wrapper.find(Something).simulateError(error);

    expect(wrapper.exists()).toBeTruthy();
  });
});
