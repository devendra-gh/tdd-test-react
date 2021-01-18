import { cleanup } from '@testing-library/react';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('../../utils/common');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusLanding/functions', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should call onClick', async () => {
    functions.onClick(props);
    expect(props.history.push).toHaveBeenCalled();
  });
});
