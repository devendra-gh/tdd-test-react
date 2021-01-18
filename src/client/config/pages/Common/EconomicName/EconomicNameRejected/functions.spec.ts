import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNameReturned', () => {
  it('should properly call getCapId', () => {
    const state = {
      economicNameCapId: 'economicNameCapId',
    };
    const data = functions.getCapId(state);
    expect(data).toBe('economicNameCapId');
  });

  it('should properly call redirect', async () => {
    const props = {
      businessKey: 'key',
      history: { push: jest.fn() },
    };
    await functions.redirect(props);
    expect(props.history.push).toHaveBeenLastCalledWith('/');
  });
});
