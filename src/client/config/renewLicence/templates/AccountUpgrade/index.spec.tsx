import React from 'react';
import { render, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renew-licence/templates/AccountUpgrade', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: (key: string) => key,
      location: {},
      match: {},
      user: {
        Type: 'SOP3',
      },
    };
  });

  // afterEach(cleanup);

  it('should render if loaddedIn is false', () => {
    props.loggedIn = true;
    props.user.Type = 'SOP1';
    const { container } = render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
    );
    expect(
      getByText(container, 'button.upgradeYourAccount'),
    ).toBeInTheDocument();
  });
});
