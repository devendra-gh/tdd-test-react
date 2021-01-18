import functions from './functions';
import {
  PERMIT_ADDITIONAL_SIGNBOARD,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';
import { STEP_3, STEP_4_1 } from '../../steps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/PaymentWaiting', () => {
  let props: any;
  beforeEach(() => {
    props = {
      businessKey: 'test key',
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      permitInfo: {
        [PERMIT_ADDITIONAL_SIGNBOARD]: {},
        [PERMIT_FOOD_TRUCK]: { permitDetails: { permitType: 'test' } },
      },
      steps: [],
      actions: {
        resetState: jest.fn(),
        stepsStatus: {
          update: jest.fn(),
        },
      },
      paymentLink: 'test',
    };
  });
  it('should be instance of function', () =>
    expect(functions.getCurrentStep).toBeInstanceOf(Function));
  it('should properly call getCurrentStep function', () => {
    props.steps = getSteps(props);
    expect(functions.getCurrentStep(props)).toBe(STEP_3);

    props.serviceType = PERMIT_FOOD_TRUCK;
    props.steps = getSteps(props);
    expect(functions.getCurrentStep(props)).toBe(STEP_4_1);
  });
  it('should be instance of function', () =>
    expect(functions.getStepStatus).toBeInstanceOf(Function));

  it('should properly call getCurrentStep function', () => {
    props.steps = getSteps(props);
    expect(functions.getStepStatus(props)).toBeInstanceOf(Object);

    props.serviceType = PERMIT_FOOD_TRUCK;
    expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
  });
});
