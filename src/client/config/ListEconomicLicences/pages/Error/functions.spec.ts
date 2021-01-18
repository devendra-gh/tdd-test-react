import functions from './functions';
// import { PATH_SELECT_LICENCE } from '../../routes';

jest.mock('client/services/bpm', () => ({
  message: jest.fn().mockResolvedValue({}),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page functions', () => {
  it('should redirect to start page on back button press', async () => {
    const props = {
      actions: {
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
    await functions.handleBackButton(props);
    expect(props.history.push).toHaveBeenCalledWith(
      '/list-economic-licences-certificate',
    );
  });
});
