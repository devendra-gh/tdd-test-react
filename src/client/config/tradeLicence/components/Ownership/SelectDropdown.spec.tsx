import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
        items: [],
      },
      // field: {
      //   label: 'label',
      //   items: [{ id: 'id', label: 'test-label' }],
      // },
      type: '',
      onChange: jest.fn(),
      value: '',
      help: '',
      validateStatus: false,
    };
  });
  afterEach(cleanup);

  it('should properly render SelectDropdown 1', async () => {
    render(<SelectDropdown {...props} />);
  });

  // it('should properly render SelectDropdown 2', async () => {
  //   props = {
  //     ...props,
  //     field: {
  //       label: 'test',
  //       required: true,
  //       name: 'nationality',
  //       items: [{ id: 'id', label: 'test-label' }],
  //       disabled: jest.fn(),
  //     },
  //   };

  //   render(<SelectDropdown {...props} />);
  // });
});
