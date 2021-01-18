import functions from './functions';
import { PERMIT_FOOD_TRUCK } from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

jest.mock('client/services/bpm', () => ({
  message: jest
    .fn()
    .mockReturnValueOnce(
      Promise.resolve({
        success: true,
        data: {
          id: 1,
          businessKey: 'test key',
        },
      }),
    )
    .mockReturnValueOnce(
      Promise.resolve({
        success: false,
      }),
    ),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/PaymentFailed/functions', () => {
  let props: any;
  let bpmUrl: string;

  beforeEach(() => {
    bpmUrl = 'http://test-bpm-url';
    props = {
      serviceType: PERMIT_FOOD_TRUCK,
      permitInfo: {
        [PERMIT_FOOD_TRUCK]: { permitDetails: { permitType: 'test' } },
      },
      businessKey: 'test key',
      actions: {
        resetState: jest.fn(),
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should be instance of function', () =>
    expect(functions.onClick).toBeInstanceOf(Function));

  it('should redirect on success', async () => {
    await functions.onClick(bpmUrl)(props);
    expect(props.history.push).toHaveBeenCalled();
  });

  it('should not redirect on failure', async () => {
    await functions.onClick(bpmUrl)(props);
    expect(props.history.push).not.toHaveBeenCalled();
  });
  it('getStepStatus', async () => {
    props.steps = getSteps(props);
    expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
  });
});
