import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IVariables } from '@tamm/app-composer';
import ActionLink from './ActionLink';

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
      toggleModal: jest.fn(),
      getActionType: jest.fn(),
      deleteAmendment: '',
      amendmentItems: 'partner',
      index: 0,
      userAction: {
        edit: 1,
      },
    };
  });

  it('should successfully render Edit', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ActionLink {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('button.edit'));
    expect(getByText('button.edit')).toBeInTheDocument();
  });

  it('should successfully render delete', () => {
    props = {
      ...props,
      userAction: {
        delete: 1,
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ActionLink {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('button.delete'));
    expect(getByText('button.delete')).toBeInTheDocument();
  });

  it('should successfully render else', () => {
    props = {
      ...props,
      userAction: {
        edit: '',
        delete: '',
      },
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ActionLink {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
