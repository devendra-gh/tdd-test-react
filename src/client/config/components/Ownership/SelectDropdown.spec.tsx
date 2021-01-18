import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import SelectDropdown from './SelectDropdown';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('components/Ownership/SelectDropdown', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      field: {
        label: 'label',
        required: true,
        items: () => {
          return [{ id: 'id', label: 'test-label' }];
        },
      },
      type: '',
      onChange: jest.fn(),
      value: '',
      help: '',
      validateStatus: '',
    };
  });
  afterEach(cleanup);

  // it('should properly render SelectDropdown ', async () => {
  //   const { getByText } = render(<SelectDropdown {...props} />);
  //   const element = await waitForElement(() => getByText('Search'));
  //   expect(element).toBeInstanceOf(HTMLDivElement);
  // });

  it('should properly render SelectDropdown ', async () => {
    props.field = {
      name: 'nationality',
      items: [{ id: 'id', label: 'test-label' }],
      disabled: jest.fn(),
      label: 'label',
    };
    const { getByText } = render(<SelectDropdown {...props} />);
    const element = await waitForElement(() => getByText('undefined'));
    expect(element).toBeInstanceOf(HTMLLabelElement);
  });
});
