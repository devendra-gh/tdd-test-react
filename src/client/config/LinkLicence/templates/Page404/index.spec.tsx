import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Page404 from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/Page404', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      label: 'home',
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should handle button onClick', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Page404 {...props} />
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByLabelText('button'));
    fireEvent.click(button);
  });
});
