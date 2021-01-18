import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IVariables } from '@tamm/app-composer';
import ConfirmationPopup from './ConfirmationPopup';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Submit', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      i18n: (key: string) => key,
      showPopUp: true,
      onCancelModal: jest.fn(),
      onConfirmModal: jest.fn(),
      title: 'partner',
    };
  });

  it('should successfully render popup click Yes', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ConfirmationPopup {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Yes'));
    expect(getByText('Yes')).toBeInTheDocument();
  });

  it('should successfully render popup click No', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ConfirmationPopup {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByText('No'));
    expect(getByText('No')).toBeInTheDocument();
  });
});
