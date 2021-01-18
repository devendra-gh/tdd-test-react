//   it('should properly call navigateToDashboard', async () => {
//     const props = {};
//     window.location.href = 'https://stage.tamm.abudhabi/';
//     functions.navigateToDashboard(props);
//   });
// });

import { cleanup } from '@testing-library/react';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Functions', () => {
  let props: IVariables;
  const { location } = window;

  beforeAll((): void => {
    delete window.location;
    // @ts-ignore
    window.location = {
      href: 'https://stage.tamm.abudhabi/',
      replace: jest.fn(),
    };
  });

  afterAll((): void => {
    window.location = location;
  });

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  it('should properly call navigateToDashboard', async () => {
    functions.navigateToDashboard(props);
  });

  it('should properly call navigateToDashboard fallback', async () => {
    window.location.href = 'https://www.tamm.abudhabi/';
    functions.navigateToDashboard(props);
  });
});
