import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home/functions', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
  };

  it('should properly call history.push', async () => {
    functions.onStart(props);
    expect(props.history.push).toBeCalledWith('/consumer-good-prices/search');
  });
});
