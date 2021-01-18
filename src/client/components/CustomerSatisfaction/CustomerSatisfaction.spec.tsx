import React from 'react';
import { shallow } from 'enzyme';
import CustomerSatisfactionComponent from '@tamm/ui-lib-v2-customer-satisfaction';
import fetch from 'client/services/fetch';
import { CustomerSatisfaction } from './CustomerSatisfaction';

jest.mock('client/services/fetch');

describe('CustomerSatisfaction', () => {
  it('should render component', () => {
    const component = shallow(
      <CustomerSatisfaction
        i18n={() => ({})}
        serviceId="123"
        productId="123"
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render success state', async () => {
    const component = shallow(
      <CustomerSatisfaction
        i18n={() => ({})}
        serviceId="123"
        productId="123"
      />,
    );
    (fetch as jest.Mock).mockResolvedValue({});
    const onSubmit =
      component.find(CustomerSatisfactionComponent).prop('onSubmit') ||
      (() => {});
    await onSubmit('test', {});
    expect(component).toMatchSnapshot();
  });

  it('should render error state', async () => {
    const component = shallow(
      <CustomerSatisfaction
        i18n={() => ({})}
        serviceId="123"
        productId="123"
      />,
    );
    (fetch as jest.Mock).mockRejectedValue({});
    const onSubmit =
      component.find(CustomerSatisfactionComponent).prop('onSubmit') ||
      (() => {});
    await onSubmit('test', {});
    expect(component).toMatchSnapshot();
  });
});
