import functions from './functions';

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
    await functions.onStart(props);
    expect(props.history.push).toBeCalledWith(
      '/business-licence-procedure/select-transaction-type',
    );
  });
});
