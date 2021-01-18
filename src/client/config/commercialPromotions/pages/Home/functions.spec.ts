import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('TradeNameService', () => {
  let props: any;

  beforeEach(() => {
    props = {
      businessKey: 'test key',
      actions: {
        resetState: jest.fn(),
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should redirect on success', async () => {
    await functions.onSubmit(props);
    expect(props.history.push).toHaveBeenCalled();
  });
});
