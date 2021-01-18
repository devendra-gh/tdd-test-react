import functions from './functions';
import { PATH_SELECT_LICENCE } from '../../routes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page functions', () => {
  it('should redirect to start page on back button press', async () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    await functions.handleBackButton(props);
    expect(props.history.push).toHaveBeenCalledWith(PATH_SELECT_LICENCE);
  });
});
