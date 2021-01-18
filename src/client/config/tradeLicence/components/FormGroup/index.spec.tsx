import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
  beforeEach(() => {
    mediaMock = useMedia;
  });

  afterEach(cleanup);

  it('should properly render FormGroup when not visible', () => {
    const props = {
      visible: false,
    };

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

  it('should properly render FormGroup with wide', () => {
    const props = {
      visible: true,
    };
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

  it('should properly render FormGroup without wide', () => {
    const props = {
      visible: true,
    };
    mediaMock.mockReturnValue(false);

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
    // fireEvent.click(getByText('Add Outlined Icon'));
  });
});
