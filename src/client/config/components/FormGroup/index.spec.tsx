import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import useMedia from 'use-media';
import FormGroup from './index';

jest.mock('use-media');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Components/FormGroup', () => {
  let mediaMock: any;
  let props: any;

  beforeEach(() => {
    mediaMock = useMedia;

    props = {
      visible: false,
      name: 'test',
      children: '<div />',
      title: 'test',
    };
  });

  afterEach(cleanup);

  it('should properly render FormGroup visible is false', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should properly render FormGroup visible is true', () => {
    props.visible = true;
    mediaMock.mockReturnValue(true);

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should properly render FormGroup visible is true 2', () => {
    props.visible = true;
    mediaMock.mockReturnValue(false);

    const { container, getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
    fireEvent.click(getByText('test'));
  });
});
