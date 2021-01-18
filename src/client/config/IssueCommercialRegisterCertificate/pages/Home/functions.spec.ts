import functions from './functions';
import { PATH_SELECT_LICENCE } from '../../routes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home page functions', () => {
  it('should redirect to select licence page on start', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    functions.onStart(props);
    expect(props.history.push).toHaveBeenCalledWith(PATH_SELECT_LICENCE);
  });
});
