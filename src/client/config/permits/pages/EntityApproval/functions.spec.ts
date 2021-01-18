import { IVariables } from '@tamm/app-composer';
import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EntityApproval/functions', () => {
  it('onNextClick should be a function', () => {
    expect(functions.onNextClick).toBeInstanceOf(Function);
  });
  it('should call onNextClick', () => {
    const props: IVariables = {
      serviceType: 'test',
      history: {
        push: jest.fn(),
      },
    };
    functions.onNextClick(props);
    expect(props.history.push).toBeCalled();
  });
});
