import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Component from './index';

jest.mock('client/services/fetch');

describe('client/components/workbench/FileUpload', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      multiple: true,
      onChange: jest.fn(),
      onRemove: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should render with all props', async () => {
    await act(async () => {
      const { getByText } = render(
        <MemoryRouter>
          <ViewportProvider>
            <Viewport sm md lg xl>
              <Component {...props} />
            </Viewport>
          </ViewportProvider>
        </MemoryRouter>,
      );

      getByText('Select file');
    });
  });

  // it('handle onRemove', async () => {
  //   await act(async () => {
  //     props.files = [
  //       {
  //         file: {
  //           name: 'exampleFile.png',
  //           size: 999999,
  //           lastModified: Date.now(),
  //         },
  //         name: 'exampleFile.png',
  //         status: 'success',
  //       },
  //     ];
  //
  //     render(
  //       <MemoryRouter>
  //         <ViewportProvider>
  //           <Viewport sm md lg xl>
  //             <Component {...props} />
  //           </Viewport>
  //         </ViewportProvider>
  //       </MemoryRouter>,
  //     );
  //
  //     userEvent.click(screen.getByText('trash-bin'));
  //
  //     expect(props.onRemove).toHaveBeenCalled();
  //   });
  // });
});
