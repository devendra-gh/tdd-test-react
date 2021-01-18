import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Modal from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/Field', () => {
  let props: any;

  beforeEach(() => {
    props = {
      visible: true,
      i18n: jest.fn(i => i),
      onCancel: jest.fn(),
      onOk: jest.fn(),
    };
  });

  afterEach(cleanup);

  test('renders component with visible', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Modal {...props} />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('questionnaire.summary.modal.body')).toBeInTheDocument();
    }, 500);
  });

  test('renders component without visible', () => {
    props.visible = false;
    const { getByText } = render(
      <MemoryRouter>
        <Modal {...props} />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('questionnaire.summary.modal.body')).toBeInTheDocument();
    }, 500);
  });
});
